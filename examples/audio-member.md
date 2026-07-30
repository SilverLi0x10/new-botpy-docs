# 音视频/直播成员事件

## 文件

`examples/demo_audio_or_live_channel_member.py`

## 说明

监听用户进入/退出音视频子频道和直播子频道的事件。

## 代码

```python
import botpy

import os
from botpy import logging
from botpy.audio import PublicAudio
from botpy.ext.cog_yaml import read

_log = logging.get_logger()

test_config = read(os.path.join(os.path.dirname(__file__), "config.yaml"))

class MyClient(botpy.Client):
    async def on_ready(self):
        _log.info(f"robot 「{self.robot.name}」 on_ready!")

    async def on_audio_or_live_channel_member_enter(self, Public_Audio: PublicAudio):
        if Public_Audio.channel_type == 2:
            _log.info("%s 加入了音视频子频道" % Public_Audio.user_id)
        elif Public_Audio.channel_type == 5:
            _log.info("%s 加入了直播子频道" % Public_Audio.user_id)

    async def on_audio_or_live_channel_member_exit(self, Public_Audio: PublicAudio):
        if Public_Audio.channel_type == 2:
            _log.info("%s 退出了音视频子频道" % Public_Audio.user_id)
        elif Public_Audio.channel_type == 5:
            _log.info("%s 退出了直播子频道" % Public_Audio.user_id)


if __name__ == "__main__":
    intents = botpy.Intents(audio_or_live_channel_member=True)
    client = MyClient(intents=intents)
    client.run(appid=test_config["appid"], secret=test_config["secret"])
```
