---
home: true
heroImage: https://github.com/tencent-connect/bot-docs/raw/main/docs/.vuepress/public/favicon-64px.png
heroText: QQ Bot Python SDK
tagline: 基于机器人开放平台API实现的QQ机器人框架
actions:
  - text: 快速开始
    link: /guide/
    type: primary
  - text: API 参考
    link: /api/
    type: secondary
features:
  - title: 简单易用
    details: 简洁的 API 设计，只需继承 Client 类并实现事件处理方法即可快速构建机器人。
  - title: 异步驱动
    details: 基于 asyncio 和 aiohttp 实现，支持高性能的异步事件处理和并发连接。
  - title: 功能全面
    details: 覆盖频道、私信、群聊、C2C、音频、论坛、日程等所有QQ机器人API。
  - title: 事件驱动
    details: WebSocket 实时事件推送，支持频道消息、成员变动、互动回调等多种事件。
  - title: 扩展丰富
    details: 内置指令系统、定时任务、YAML配置、颜色转换等实用扩展模块。
  - title: 示例完善
    details: 20+ 完整示例代码，覆盖各种消息类型和业务场景。
footer: MIT Licensed | Copyright © 2022 Tencent
---

## 快速上手

```python
import botpy
from botpy.message import Message

class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        await message.reply(content=f"收到你的@消息了: {message.content}")

intents = botpy.Intents(public_guild_messages=True)
client = MyClient(intents=intents)
client.run(appid="你的appid", secret="你的secret")
```

### 安装

```bash
pip install qq-botpy
```
