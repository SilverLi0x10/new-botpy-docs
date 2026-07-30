# 扩展功能

SDK 在 `botpy.ext` 下提供了一系列实用扩展模块，方便开发者快速集成常见功能。

**源码位置**: [`botpy/ext/`](https://github.com/tencent-connect/botpy/tree/master/botpy/ext/)

## 扩展列表

| 扩展 | 说明 |
|------|------|
| [指令系统](commands.md) | `@Commands` 装饰器，通过消息内容匹配指令 |
| [定时任务](apscheduler.md) | 基于 APScheduler 的异步定时任务 |
| [YAML 配置](yaml.md) | 读取 YAML 配置文件 |
| [频道跳转](channel-jump.md) | 识别和转义子频道跳转链接 |
| [颜色转换](color.md) | RGB/HEX 颜色值转整数 |

## 使用方法

```python
from botpy.ext.cog_yaml import read                     # YAML 配置
from botpy.ext.command_util import Commands              # 指令装饰器
from botpy.ext.convert_color import start                # 颜色转换
from botpy.ext.channel_jump import get_channel_jump      # 频道跳转（粗略）
from botpy.ext.channel_jump import get_channel_jump_strict  # 频道跳转（精确）
from botpy.ext.channel_jump import escape_channel_jump   # 频道跳转转义
from botpy.ext.cog_apscheduler import scheduler          # 定时任务调度器
```

## 结合 Client 使用的示例

```python
import botpy
from botpy.ext.command_util import Commands
from botpy.ext.cog_yaml import read

class MyClient(botpy.Client):
    @Commands("/hello", "/hi")
    async def on_at_message_create(self, message: Message, params: str = None):
        if params:
            await message.reply(content=f"你好, {params}!")
        return True

config = read("config.yaml")
intents = botpy.Intents(public_guild_messages=True)
client = MyClient(intents=intents)
client.run(appid=config["appid"], secret=config["secret"])
```
