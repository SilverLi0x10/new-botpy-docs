# 撤回消息

## 文件

`examples/demo_recall.py`

## 说明

发送消息后立即撤回，并隐藏撤回提示。

## 代码

```python
import os

import botpy
from botpy import logging

from botpy.message import Message
from botpy.ext.cog_yaml import read

test_config = read(os.path.join(os.path.dirname(__file__), "config.yaml"))

_log = logging.get_logger()


class MyClient(botpy.Client):
    async def on_ready(self):
        _log.info(f"robot 「{self.robot.name}」 on_ready!")

    async def on_at_message_create(self, message: Message):
        _message = await message.reply(content=f"机器人{self.robot.name}收到你的@消息了: {message.content}")
        await self.api.recall_message(message.channel_id, _message.get("id"), hidetip=True)


if __name__ == "__main__":
    intents = botpy.Intents(public_guild_messages=True)
    client = MyClient(intents=intents)
    client.run(appid=test_config["appid"], secret=test_config["secret"])
```
