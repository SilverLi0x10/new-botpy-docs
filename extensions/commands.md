# 指令系统

`Commands` 装饰器用于通过消息内容匹配指令关键字，自动提取指令参数。

**源码文件**: [`botpy/ext/command_util.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/ext/command_util.py)

## Commands 类

### 类签名

```python
class Commands:
    def __init__(self, *args):  ...
    async def __call__(self, func):  ...
```

### 参数

| 参数 | 类型 | 说明 |
|------|------|------|
| `*args` | `tuple[str, ...]` | 要匹配的指令字符串元组，如 `"你好"`、`"hello"` |

### 返回

| 场景 | 返回值 |
|------|--------|
| 匹配到任意指令字符串 | `await func(*args, **kwargs)` 的返回结果 |
| 未匹配到任何指令 | `False` |

### 工作原理

1. 构造时接收一个或多个指令字符串并存储为 `self.commands` 元组
2. 被装饰的异步函数会先检查 `message.content` 中是否包含任一指令字符串（直接使用 Python `in` 运算符进行子串匹配）
3. 若匹配成功，将指令字符串后面的内容提取为 `params`（从 `message.content.split(command)[1].strip()` 获取），通过 `kwargs["params"]` 传递给被装饰函数，并执行该函数
4. 若未匹配，返回 `False`

## 基本用法

```python
from botpy.ext.command_util import Commands

@Commands("你好", "hello")
async def hello(api: BotAPI, message: Message, params=None):
    await message.reply(content=params)
    return True

@Commands("晚安")
async def good_night(api: BotAPI, message: Message, params=None):
    await message.reply(content=params)
    return True
```

## 注册处理器

```python
class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        handlers = [hello, good_night]
        for handler in handlers:
            if await handler(api=self.api, message=message):
                return  # 匹配到指令后停止
```

## 参数提取

`@Commands("搜索")` 匹配消息内容中以"搜索"开头的指令，并提取后面的参数：

- 用户发送：`搜索 Python教程`
- `params` 为：` Python教程`
- 可以通过 `params.strip()` 去除首尾空格

> **注意**: 匹配使用的是 Python 的 `in` 运算符，只要指令字符串出现在消息内容中即算匹配，不限于消息开头。

## 返回约定

- 返回 `True` 表示指令匹配成功，后续处理器不再执行
- 返回 `False` 或 `None` 表示未匹配，继续尝试后续处理器
