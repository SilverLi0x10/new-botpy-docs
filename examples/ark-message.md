# ARK 模板消息

## 文件

`examples/demo_at_reply_ark.py`

## 说明

使用 ARK 模板 ID 发送结构化模板消息。

## 代码

```python
import os

import botpy
from botpy import logging

from botpy.message import Message
from botpy.types.message import Ark, ArkKv
from botpy.ext.cog_yaml import read

test_config = read(os.path.join(os.path.dirname(__file__), "config.yaml"))

_log = logging.get_logger()


class MyClient(botpy.Client):
    async def on_ready(self):
        _log.info(f"robot 「{self.robot.name}」 on_ready!")

    async def on_at_message_create(self, message: Message):
        # 两种方式构造消息发送请求数据对象
        payload: Ark = Ark(
            template_id=37,
            kv=[
                ArkKv(key="#METATITLE#", value="通知提醒"),
                ArkKv(key="#PROMPT#", value="标题"),
                ArkKv(key="#TITLE#", value="标题"),
                ArkKv(key="#METACOVER#", value="https://vfiles.gtimg.cn/vupload/20211029/bf0ed01635493790634.jpg"),
            ],
        )

        await self.api.post_message(channel_id=message.channel_id, ark=payload)
        # await message.reply(ark=payload) # 这样也可以


if __name__ == "__main__":
    intents = botpy.Intents(public_guild_messages=True)
    client = MyClient(intents=intents)
    client.run(appid=test_config["appid"], secret=test_config["secret"])
```
