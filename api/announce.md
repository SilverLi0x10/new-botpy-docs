# 公告 API

## create_announce

创建消息类型的频道公告。

**源码位置**: [`botpy/api.py` 第 919 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L919)

**API 路由**: `POST /guilds/{guild_id}/announces`

```python
async def create_announce(
    guild_id: str,
    channel_id: str,
    message_id: str,
) -> Announce
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| guild_id | str | 必填 | 公告所属频道的 ID |
| channel_id | str | 必填 | 公告消息所在的子频道 ID |
| message_id | str | 必填 | 公告消息的 ID |

**返回**: [`Announce`](../models/other.md#announce-公告)

**注意**:
- 推荐子频道和消息类型全局公告不能同时存在，会互相顶替设置
- 同频道内推荐子频道最多只能创建 3 条
- 只有子频道权限为全体成员可见才可设置为推荐子频道

## create_recommend_announce

创建推荐子频道类型的频道公告。

**源码位置**: [`botpy/api.py` 第 940 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L940)

**API 路由**: `POST /guilds/{guild_id}/announces`

```python
async def create_recommend_announce(
    guild_id: str,
    announces_type: AnnouncesType,
    recommend_channels: List[RecommendChannel],
) -> Announce
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| guild_id | str | 必填 | 发公告的频道 ID |
| announces_type | [`AnnouncesType`](../models/other.md#announce-公告) | 必填 | 公告类型枚举 |
| recommend_channels | List[[`RecommendChannel`](../models/other.md#announce-公告)] | 必填 | 推荐子频道列表 |

**AnnouncesType**:
| 值 | 枚举 | 说明 |
|----|------|------|
| 0 | MEMBER | 成员公告 |
| 1 | WELCOME | 欢迎公告 |

**RecommendChannel**:
```python
{"channel_id": "子频道ID", "introduce": "频道简介"}
```

**返回**: [`Announce`](../models/other.md#announce-公告)

**注意**:
- 推荐子频道和消息类型全局公告不能同时存在，会互相顶替设置
- 同频道内推荐子频道最多只能创建 3 条
- 只有子频道权限为全体成员可见才可设置为推荐子频道

## delete_announce

删除频道公告。

**源码位置**: [`botpy/api.py` 第 963 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L963)

**API 路由**: `DELETE /guilds/{guild_id}/announces/{message_id}`

```python
async def delete_announce(guild_id: str, message_id: str = "all") -> str
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| guild_id | str | 必填 | 公告所属频道的 ID |
| message_id | str | `"all"` | 要删除的公告消息 ID，设为 `"all"` 时删除所有公告 |

::: tip
`message_id` 有值时，会校验 `message_id` 合法性；若不校验，请将 `message_id` 设置为 `"all"`。
:::

**返回**: 成功执行返回 `None`。

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
