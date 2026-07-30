# 本地图片消息

## 文件

`examples/demo_at_reply_file_data.py`

## 说明

展示三种发送本地图片的方式：bytes 数据、BinaryIO 对象、文件路径。

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
        # 方法1（阅读档案后传入bytes类型图片数据）：
        with open("resource/test.png", "rb") as img:
            img_bytes = img.read()
        await message.reply(content=f"机器人{self.robot.name}收到你的@消息了: {message.content}", file_image=img_bytes)
        # 方法2（打开档案后直接传入档案）：
        with open("resource/test.png", "rb") as img:
            await message.reply(content=f"机器人{self.robot.name}收到你的@消息了: {message.content}", file_image=img)
        # 方法3（直接传入图片路径）：
        await message.reply(content=f"机器人{self.robot.name}收到你的@消息了: {message.content}", file_image="resource/test.png")


if __name__ == "__main__":
    intents = botpy.Intents(public_guild_messages=True)
    client = MyClient(intents=intents)
    client.run(appid=test_config["appid"], secret=test_config["secret"])
```
