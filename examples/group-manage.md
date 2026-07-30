# 群管理事件

## 文件

`examples/demo_group_manage_event.py`

## 说明

监听群管理事件：机器人被添加/移除群聊、群聊开关机器人主动消息。

## 代码

```python
import os

import botpy
from botpy import logging
from botpy.ext.cog_yaml import read
from botpy.manage import GroupManageEvent

test_config = read(os.path.join(os.path.dirname(__file__), "config.yaml"))

_log = logging.get_logger()


class MyClient(botpy.Client):
    async def on_group_add_robot(self, event: GroupManageEvent):
        _log.info("机器人被添加到群聊：" + str(event))
        await self.api.post_group_message(
            group_openid=event.group_openid,
            msg_type=0,
            event_id=event.event_id,
            content="hello",
        )

    async def on_group_del_robot(self, event: GroupManageEvent):
        _log.info("机器人被移除群聊：" + str(event))

    async def on_group_msg_reject(self, event: GroupManageEvent):
        _log.info("群聊关闭机器人主动消息：" + str(event))

    async def on_group_msg_receive(self, event: GroupManageEvent):
        _log.info("群聊打开机器人主动消息：" + str(event))


if __name__ == "__main__":
    intents = botpy.Intents(public_messages=True)
    client = MyClient(intents=intents)
    client.run(appid=test_config["appid"], secret=test_config["secret"])
```
