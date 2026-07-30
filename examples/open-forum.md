# 开放论坛事件

## 文件

`examples/demo_open_forum_event.py`

## 说明

监听开放论坛中主题和帖子的创建、更新、删除事件。

## 代码

```python
import botpy
from botpy import logging
from botpy.forum import OpenThread

_log = logging.get_logger()


class MyClient(botpy.Client):
    async def on_ready(self):
        _log.info(f"robot 「{self.robot.name}」 on_ready!")

    async def on_open_forum_thread_create(self, open_forum_thread: OpenThread):
        _log.info("%s 创建了主题" % open_forum_thread.author_id)

    async def on_open_forum_thread_update(self, open_forum_thread: OpenThread):
        _log.info("%s 更新了主题" % open_forum_thread.author_id)

    async def on_open_forum_thread_delete(self, open_forum_thread: OpenThread):
        _log.info("%s 删除了主题" % open_forum_thread.author_id)

    async def on_open_forum_post_create(self, open_forum_thread: OpenThread):
        _log.info("%s 创建了帖子" % open_forum_thread.author_id)

    async def on_open_forum_post_delete(self, open_forum_thread: OpenThread):
        _log.info("%s 删除了帖子" % open_forum_thread.author_id)

    async def on_open_forum_reply_create(self, open_forum_thread: OpenThread):
        _log.info("%s 发表了评论" % open_forum_thread.author_id)

    async def on_open_forum_reply_delete(self, open_forum_thread: OpenThread):
        _log.info("%s 删除了评论" % open_forum_thread.author_id)


if __name__ == "__main__":
    intents = botpy.Intents(open_forum_event=True)
    client = MyClient(intents=intents)
    client.run(appid="appid", secret="secret")
```
