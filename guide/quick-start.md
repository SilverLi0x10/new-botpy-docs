# 快速开始

本文将带你构建一个最简单的 QQ 频道机器人，当用户 @机器人 时自动回复。

## 第一步：创建机器人应用

前往 [QQ 开放平台](https://q.qq.com/) 创建机器人应用，获取以下信息：

- **AppID** — 机器人的应用 ID
- **AppSecret** — 机器人的密钥（用于获取 access_token）

::: tip 关于鉴权
新版本 SDK 使用 AppID + AppSecret 进行鉴权，取代了旧的 token 方式。
AppSecret 可在[机器人开发设置页](https://q.qq.com/qqbot/#/developer/developer-setting)中查看。
:::

## 第二步：创建配置文件

创建 `config.yaml` 文件：

```yaml
appid: "你的AppID"
secret: "你的AppSecret"
```

## 第三步：编写机器人代码

创建一个 Python 文件 `bot.py`：

```python
import botpy
from botpy import logging
from botpy.message import Message
from botpy.ext.cog_yaml import read

# 读取配置
test_config = read("config.yaml")

_log = logging.get_logger()

class MyClient(botpy.Client):
    async def on_ready(self):
        _log.info(f"机器人 「{self.robot.name}」 启动成功！")

    async def on_at_message_create(self, message: Message):
        _log.info(f"收到消息: {message.content}")
        await message.reply(content=f"机器人 {self.robot.name} 收到你的@消息了: {message.content}")

if __name__ == "__main__":
    # 设置需要监听的事件
    intents = botpy.Intents(public_guild_messages=True)
    client = MyClient(intents=intents)
    client.run(appid=test_config["appid"], secret=test_config["secret"])
```

## 第四步：运行机器人

```bash
python bot.py
```

看到 `机器人「xxx」启动成功！` 的日志输出，表示机器人已成功上线。

现在去频道中 @机器人 发送消息，就会收到自动回复了！

## 完整示例参考

更多使用场景（如 ARK 消息、Embed 消息、Markdown、键盘按钮等），请参考 [示例](/examples/) 章节。
