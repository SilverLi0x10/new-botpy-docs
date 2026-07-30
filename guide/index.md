# 指南

欢迎使用 QQ Bot Python SDK（`qq-botpy`）！本节将帮助你快速上手，了解如何配置和使用本框架构建 QQ 机器人。

## 目录

- [安装](installation.md) — 环境要求、pip/源码安装、依赖说明
- [配置说明](configuration.md) — `Client` 构造参数、鉴权、沙箱、超时、异步启动
- [Intents 事件订阅](intents.md) — `Intents` 类用法、预设模式、事件/Flag 完整列表、`Permission` 权限类
- [日志系统](logging.md) — 日志器获取、配置、文件日志、颜色输出

## 快速开始

### 1. 安装 SDK

```bash
pip install qq-botpy
```

### 2. 创建机器人实例

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

### 3. 运行

将上述代码保存为 `bot.py`，在命令行执行：

```bash
python bot.py
```

## 核心概念

| 概念 | 说明 | 参考 |
|------|------|------|
| **Client** | SDK 主入口类，管理 WebSocket 连接和事件分发 | `botpy/client.py` |
| **BotAPI** | REST API 封装，通过 `self.api` 调用 | [API 参考](../api/index.md) |
| **Intents** | 事件订阅位掩码，控制监听哪些事件 | [Intents 说明](intents.md) |
| **Token** | 鉴权令牌管理，自动刷新 access_token | [配置说明](configuration.md#token-类) |
| **事件处理** | 继承 Client 实现 `on_*` 方法处理事件 | [事件列表](../events/index.md) |
| **数据模型** | TypedDict + 领域模型两种数据表示 | [数据模型](../models/index.md) |
| **扩展模块** | 指令系统、定时任务等实用工具 | [扩展功能](../extensions/index.md) |

## 完整示例

```python
import botpy
from botpy.message import Message

class MyClient(botpy.Client):
    async def on_ready(self):
        print(f"机器人 {self.robot.name} 已就绪!")

    async def on_at_message_create(self, message: Message):
        # 自动回复
        await message.reply(content=f"你说: {message.content}")

        # 也可以使用 self.api 调用更多 API
        guild = await self.api.get_guild(message.guild_id)
        print(f"当前频道: {guild['name']}")

intents = botpy.Intents(public_guild_messages=True, guilds=True)
client = MyClient(intents=intents, is_sandbox=False)
client.run(appid="你的appid", secret="你的secret")
```

## 更多资源

- [API 参考](../api/index.md) — 所有 REST API 详细说明
- [事件列表](../events/index.md) — 所有 WebSocket 事件说明
- [数据模型](../models/index.md) — 类型定义和领域模型
- [扩展功能](../extensions/index.md) — 实用工具模块
- [示例代码](../examples/index.md) — 20+ 完整示例
