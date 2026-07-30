# 公告 API

## create_announce

创建消息类型的频道公告。

```python
async def create_announce(
    guild_id: str,
    channel_id: str,
    message_id: str,
) -> Announce
```

## create_recommend_announce

创建推荐子频道类型的频道公告。

```python
async def create_recommend_announce(
    guild_id: str,
    announces_type: AnnouncesType,      # 公告类型
    recommend_channels: List[RecommendChannel],  # 推荐子频道列表
) -> Announce
```

**AnnouncesType**:
| 值 | 枚举 | 说明 |
|----|------|------|
| 0 | MEMBER | 成员公告 |
| 1 | WELCOME | 欢迎公告 |

**RecommendChannel**:
```python
{"channel_id": "子频道ID", "introduce": "频道简介"}
```

## delete_announce

删除频道公告。

```python
async def delete_announce(guild_id: str, message_id: str = "all") -> str
```

::: tip
`message_id` 为 `"all"` 时删除所有公告。
:::

## 使用示例

```python
async def on_at_message_create(self, message: Message):
    # 创建公告（使用引用消息）
    if "/建公告" in message.content:
        msg_id = message.message_reference.message_id
        await self.api.create_announce(message.guild_id, message.channel_id, msg_id)

    # 设置推荐子频道
    elif "/设置推荐子频道" in message.content:
        channels = [{"channel_id": message.channel_id, "introduce": "欢迎来到频道"}]
        await self.api.create_recommend_announce(
            message.guild_id, AnnouncesType.MEMBER, channels
        )

    # 删除公告
    elif "/删公告" in message.content:
        await self.api.delete_announce(message.guild_id, "all")
```
