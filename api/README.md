# API 参考

`BotAPI` 类封装了所有 QQ 机器人 REST API 接口，通过 `client.api` 访问。

## 访问 API

```python
class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        # 通过 client.api 调用
        await self.api.post_message(
            channel_id=message.channel_id,
            content="Hello!"
        )
```

## API 分类

| 分类 | 说明 |
|------|------|
| [频道](guild.md) | 获取/修改频道信息、频道列表 |
| [子频道](channel.md) | 子频道的增删改查 |
| [身份组](role.md) | 身份组 CRUD、身份组成员管理 |
| [成员](member.md) | 成员信息查询、成员列表 |
| [消息](message.md) | 发送/撤回消息（文本、Embed、ARK、Markdown、键盘等） |
| [私信](dm.md) | 创建私信会话、发送私信 |
| [禁言](mute.md) | 全体/指定成员禁言 |
| [公告](announce.md) | 创建/删除公告、推荐子频道 |
| [接口权限](permission.md) | 权限列表查询、权限申请 |
| [日程](schedule.md) | 日程的增删改查 |
| [表情表态](reaction.md) | 添加/删除表情表态、获取表态用户 |
| [精华消息](pin.md) | 精华消息的添加/删除/查询 |
| [音频](audio.md) | 音频控制、上/下麦 |
| [论坛](forum.md) | 帖子列表、详情、发表/删除 |
| [群消息](group.md) | 群消息发送、群文件上传 |
| [C2C 消息](c2c.md) | C2C 消息发送、C2C 文件上传 |

## 超时设置

```python
client = MyClient(intents=intents, timeout=10)
```

## 返回类型

API 方法返回 TypedDict 字典数据，通过 `botpy.types` 下的类型定义提供类型提示。
