# 群文件消息

## 文件

`examples/demo_group_reply_file.py`

## 说明

在群聊中上传富媒体文件（图片、视频、语音）并发送。

## 代码

```python
import asyncio
import os

import botpy
from botpy import logging
from botpy.ext.cog_yaml import read
from botpy.message import GroupMessage, Message

test_config = read(os.path.join(os.path.dirname(__file__), "config.yaml"))

_log = logging.get_logger()


class MyClient(botpy.Client):
    async def on_ready(self):
        _log.info(f"robot 「{self.robot.name}」 on_ready!")

    async def on_group_at_message_create(self, message: GroupMessage):
        file_url = ""  # 这里需要填写上传的资源Url
        uploadMedia = await message._api.post_group_file(
            group_openid=message.group_openid, 
            file_type=1, # 文件类型要对应上，具体支持的类型见方法说明
            url=file_url # 文件Url
        )

        # 资源上传后，会得到Media，用于发送消息
        await message._api.post_group_message(
            group_openid=message.group_openid,
            msg_type=7,  # 7表示富媒体类型
            msg_id=message.id, 
            media=uploadMedia
        )

if __name__ == "__main__":
    intents = botpy.Intents(public_messages=True)
    client = MyClient(intents=intents)
    client.run(appid=test_config["appid"], secret=test_config["secret"])
```
