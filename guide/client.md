# Client 客户端

`Client` 是整个 SDK 的核心类，负责机器人的生命周期管理、WebSocket 连接、事件分发等。

## 初始化

```python
class botpy.Client(
    intents: Intents,           # 需要监听的事件通道
    timeout: int = 5,           # HTTP 请求超时时间
    is_sandbox: bool = False,   # 是否使用沙箱环境
    log_config: str | dict = None,    # 日志配置（文件路径或字典）
    log_format: str = None,     # 控制台日志格式
    log_level: int = None,      # 控制台日志级别
    bot_log: bool = True,       # 是否启用机器人日志
    ext_handlers: dict | list | bool = True  # 额外的日志处理器
)
```

## 核心方法

### `run(appid, secret, ret_coro=False)`

启动机器人服务，阻塞式运行。必须作为最后一个调用的函数。

| 参数 | 类型 | 说明 |
|------|------|------|
| appid | str | 机器人 AppID |
| secret | str | 机器人 AppSecret |
| ret_coro | bool | 是否返回协程对象自行调控 |

```python
client = MyClient(intents=intents)
client.run(appid="12345", secret="xxxx")
```

### `start(appid, secret, ret_coro=False)`

异步启动机器人，需要在异步上下文中使用。

```python
async with MyClient(intents=intents) as client:
    await client.start(appid="123", secret="xxx")
```

### `close()`

关闭客户端相关连接。

## 属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `api` | BotAPI | 机器人 API 接口，用于调用 REST API |
| `robot` | Robot | 当前机器人信息（名称、ID、头像） |
| `intents` | int | 当前的事件订阅掩码 |
| `http` | BotHttp | HTTP 客户端实例 |

## 事件处理方法

通过继承 Client 并重写以下方法来实现事件响应：

```python
class MyClient(botpy.Client):
    async def on_ready(self):
        """当机器人准备就绪时调用"""
        pass

    async def on_error(self, event_method, *args, **kwargs):
        """当事件处理方法抛出异常时调用"""
        pass

    # ... 其他 on_* 方法
```

所有事件处理方法的完整列表请参考[事件列表](/events/)章节。

## 消息回复

在事件处理方法中，可通过以下两种方式发送消息：

### 方式一：使用 Message.reply()

```python
async def on_at_message_create(self, message: Message):
    await message.reply(content="回复内容")
```

### 方式二：使用 self.api

```python
async def on_at_message_create(self, message: Message):
    await self.api.post_message(
        channel_id=message.channel_id,
        content="回复内容",
        msg_id=message.id,
    )
```
