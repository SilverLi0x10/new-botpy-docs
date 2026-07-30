# 私信消息

## 文件

`examples/demo_dms_reply.py`

## 说明

展示私信收发：收到私信时自动回复，以及在频道中通过指令触发私信发送。

## 代码

```python
import os

import botpy
from botpy import logging

from botpy.message import DirectMessage, Message
from botpy.ext.cog_yaml import read

test_config = read(os.path.join(os.path.dirname(__file__), "config.yaml"))

_log = logging.get_logger()


class MyClient(botpy.Client):
    async def on_ready(self):
        _log.info(f"robot 「{self.robot.name}」 on_ready!")

    async def on_direct_message_create(self, message: DirectMessage):
        await self.api.post_dms(
            guild_id=message.guild_id,
            content=f"机器人{self.robot.name}收到你的私信了: {message.content}",
            msg_id=message.id,
        )

    async def on_at_message_create(self, message: Message):
        if "/私信" in message.content:
            dms_payload = await self.api.create_dms(message.guild_id, message.author.id)
            _log.info("发送私信")
            await self.api.post_dms(dms_payload["guild_id"], content="hello", msg_id=message.id)


if __name__ == "__main__":
    intents = botpy.Intents(direct_message=True, public_guild_messages=True)
    client = MyClient(intents=intents)
    client.run(appid=test_config["appid"], secret=test_config["secret"])
```
