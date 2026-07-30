# Embed 消息

## 文件

`examples/demo_at_reply_embed.py`

## 说明

发送包含标题和字段的富文本 Embed 消息。

## 代码

```python
import os

import botpy
from botpy import logging

from botpy.message import Message
from botpy.types.message import Embed, EmbedField
from botpy.ext.cog_yaml import read

test_config = read(os.path.join(os.path.dirname(__file__), "config.yaml"))

_log = logging.get_logger()


class MyClient(botpy.Client):
    async def on_ready(self):
        _log.info(f"robot 「{self.robot.name}」 on_ready!")

    async def on_at_message_create(self, message: Message):
        # 构造消息发送请求数据对象
        embed = Embed(
            title="embed消息",
            prompt="消息透传显示",
            fields=[
                EmbedField(name="<@!1234>hello world"),
                EmbedField(name="<@!1234>hello world"),
            ],
        )

        await self.api.post_message(channel_id=message.channel_id, embed=embed)
        # await message.reply(embed=embed) # 这样也可以


if __name__ == "__main__":
    intents = botpy.Intents(public_guild_messages=True)
    client = MyClient(intents=intents)
    client.run(appid=test_config["appid"], secret=test_config["secret"])
```
