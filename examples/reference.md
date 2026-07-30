# 消息引用

## 文件

`examples/demo_at_reply_reference.py`

## 说明

回复消息时引用原消息。

## 代码

```python
import os

import botpy
from botpy import logging

from botpy.types.message import Reference
from botpy.message import Message
from botpy.ext.cog_yaml import read

test_config = read(os.path.join(os.path.dirname(__file__), "config.yaml"))

_log = logging.get_logger()


class MyClient(botpy.Client):
    async def on_ready(self):
        _log.info(f"robot 「{self.robot.name}」 on_ready!")

    async def on_at_message_create(self, message: Message):
        # 构造消息发送请求数据对象
        message_reference = Reference(message_id=message.id)
        # 通过api发送回复消息
        await self.api.post_message(
            channel_id=message.channel_id,
            content="<emoji:4>这是一条引用消息",
            msg_id=message.id,
            message_reference=message_reference,
        )


if __name__ == "__main__":
    intents = botpy.Intents(public_guild_messages=True)
    client = MyClient(intents=intents)
    client.run(appid=test_config["appid"], secret=test_config["secret"])
```
