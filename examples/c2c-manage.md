# C2C 管理事件

## 文件

`examples/demo_c2c_manage_event.py`

## 说明

监听 C2C 用户管理事件：用户添加/删除机器人、用户开关机器人主动消息。

## 代码

```python
import os

import botpy
from botpy import logging
from botpy.ext.cog_yaml import read
from botpy.manage import C2CManageEvent

test_config = read(os.path.join(os.path.dirname(__file__), "config.yaml"))

_log = logging.get_logger()


class MyClient(botpy.Client):
    async def on_friend_add(self, event: C2CManageEvent):
        _log.info("用户添加机器人：" + str(event))
        await self.api.post_c2c_message(
            openid=event.openid,
            msg_type=0,
            event_id=event.event_id,
            content="hello",
        )

    async def on_friend_del(self, event: C2CManageEvent):
        _log.info("用户删除机器人：" + str(event))

    async def on_c2c_msg_reject(self, event: C2CManageEvent):
        _log.info("用户关闭机器人主动消息：" + str(event))

    async def on_c2c_msg_receive(self, event: C2CManageEvent):
        _log.info("用户打开机器人主动消息：" + str(event))


if __name__ == "__main__":
    intents = botpy.Intents(public_messages=True)
    client = MyClient(intents=intents)
    client.run(appid=test_config["appid"], secret=test_config["secret"])
```
