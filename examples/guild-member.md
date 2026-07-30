# 成员事件

## 文件

`examples/demo_guild_member_event.py`

## 说明

监听频道成员的加入、更新和退出事件，并在成员加入时发送欢迎私信。

## 代码

```python
import os

import botpy
from botpy import logging

from botpy.user import Member
from botpy.ext.cog_yaml import read

test_config = read(os.path.join(os.path.dirname(__file__), "config.yaml"))

_log = logging.get_logger()


class MyClient(botpy.Client):
    async def on_ready(self):
        _log.info(f"robot 「{self.robot.name}」 on_ready!")

    async def on_guild_member_add(self, member: Member):
        _log.info("%s 加入频道" % member.nick)
        dms_payload = await self.api.create_dms(member.guild_id, member.user.id)
        _log.info("发送私信")
        await self.api.post_dms(dms_payload["guild_id"], content="welcome join guild", msg_id=member.event_id)

    async def on_guild_member_update(self, member: Member):
        _log.info("%s 更新了资料" % member.nick)

    async def on_guild_member_remove(self, member: Member):
        _log.info("%s 退出了频道" % member.nick)


if __name__ == "__main__":
    intents = botpy.Intents(guild_members=True)
    client = MyClient(intents=intents)
    client.run(appid=test_config["appid"], secret=test_config["secret"])
```
