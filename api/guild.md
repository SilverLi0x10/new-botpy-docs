# 频道 API

所有 API 方法通过 `self.api` 调用。[**源码位置**](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py)。

## `get_guild`

获取频道信息。API 路径：`GET /guilds/{guild_id}`

```python
async def get_guild(guild_id: str) -> guild.GuildPayload
```

| 参数 | 类型 | 说明 |
|------|------|------|
| `guild_id` | `str` | 频道 ID（从事件中获取） |

**返回**: [`GuildPayload`](../models/guild.md) — 包含 id、name、icon、owner_id、member_count 等字段

源码位置：[`botpy/api.py` 第 44-56 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L44-L56)。

## `me`

获取当前机器人信息。API 路径：`GET /users/@me`

```python
async def me() -> user.User
```

**返回**: [`User`](../models/user.md) — 包含 id、username、avatar、bot 等字段

源码位置：[`botpy/api.py` 第 773-781 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L773-L781)。

## `me_guilds`

获取机器人加入的频道列表。API 路径：`GET /users/@me/guilds`

```python
async def me_guilds(
    guild_id: str = None,
    limit: int = 100,
    desc: bool = False,
) -> List[guild.GuildPayload]
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `guild_id` | `Optional[str]` | `None` | 起始频道 ID，用于分页 |
| `limit` | `int` | `100` | 返回数量（1-100） |
| `desc` | `bool` | `False` | `True` 时按频道 ID 往前反序返回 |

**分页说明**:
- `desc=False` 时，`guild_id` 表示 `after` 参数（获取该 ID 之后的数据）
- `desc=True` 时，`guild_id` 表示 `before` 参数（获取该 ID 之前的数据）

**返回**: `List[GuildPayload]` — 频道列表

源码位置：[`botpy/api.py` 第 783-802 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L783-L802)。

**示例**:
```python
guild = await self.api.get_guild(message.guild_id)
print(guild["name"])

# 获取自己信息
user = await self.api.me()
print(user["username"])

# 获取已加入的频道列表
guilds = await self.api.me_guilds()
for g in guilds:
    print(g["name"])
```
