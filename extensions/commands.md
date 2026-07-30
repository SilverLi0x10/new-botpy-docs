# 指令系统

`Commands` 装饰器用于通过消息内容匹配指令关键字，自动提取指令参数。

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

## 返回约定

- 返回 `True` 表示指令匹配成功，后续处理器不再执行
- 返回 `False` 或 `None` 表示未匹配，继续尝试后续处理器
