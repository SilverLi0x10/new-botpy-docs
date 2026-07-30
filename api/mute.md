# 禁言 API

禁言接口用于对频道全体成员或指定成员进行禁言操作。
需要使用的 token 对应的用户具备管理员权限。如果是机器人，要求被添加为管理员。

## mute_all

使频道中所有成员（非管理员）禁言。

**源码位置**: [`botpy/api.py` 第 816 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L816)

**API 路由**: `PATCH /guilds/{guild_id}/mute`

```python
async def mute_all(
    guild_id: str,
    mute_end_timestamp: str = None,
    mute_seconds: str = None,
) -> str
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| guild_id | str | 必填 | 要禁言的频道 ID |
| mute_end_timestamp | str | `None` | 禁言结束时间戳（毫秒），自 1970-01-01 00:00:00 UTC 以来的毫秒数 |
| mute_seconds | str | `None` | 禁言秒数 |

::: tip
`mute_end_timestamp` 和 `mute_seconds` 二选一，默认以 `mute_end_timestamp` 为准。
:::

**返回**: 成功执行返回 `None`。

## cancel_mute_all

取消频道中所有成员的禁言。

**源码位置**: [`botpy/api.py` 第 838 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L838)

**API 路由**: `PATCH /guilds/{guild_id}/mute`

```python
async def cancel_mute_all(guild_id: str) -> str
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| guild_id | str | 必填 | 要取消禁言的频道 ID |

**返回**: 成功执行返回 `None`。

## mute_member

禁言指定成员。

**源码位置**: [`botpy/api.py` 第 855 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L855)

**API 路由**: `PATCH /guilds/{guild_id}/members/{user_id}/mute`

```python
async def mute_member(
    guild_id: str,
    user_id: str,
    mute_end_timestamp: str = None,
    mute_seconds: str = None,
) -> str
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| guild_id | str | 必填 | 要禁言的频道 ID |
| user_id | str | 必填 | 要禁言的成员 ID |
| mute_end_timestamp | str | `None` | 禁言结束时间戳（毫秒） |
| mute_seconds | str | `None` | 禁言秒数 |

**返回**: 成功执行返回 `None`。

## mute_multi_member

禁言多个成员。

**源码位置**: [`botpy/api.py` 第 880 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L880)

**API 路由**: `PATCH /guilds/{guild_id}/mute`

```python
async def mute_multi_member(
    guild_id: str,
    user_ids: List[str],
    mute_end_timestamp: str = None,
    mute_seconds: str = None,
) -> str
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| guild_id | str | 必填 | 要禁言的频道 ID |
| user_ids | List[str] | 必填 | 要禁言的用户 ID 列表 |
| mute_end_timestamp | str | `None` | 禁言结束时间戳（毫秒） |
| mute_seconds | str | `None` | 禁言秒数 |

**返回**: 成功执行返回 `None`。

## cancel_mute_multi_member

取消多个成员的禁言。

**源码位置**: [`botpy/api.py` 第 903 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L903)

**API 路由**: `PATCH /guilds/{guild_id}/mute`

```python
async def cancel_mute_multi_member(guild_id: str, user_ids: List[str]) -> str
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| guild_id | str | 必填 | 要取消禁言的频道 ID |
| user_ids | List[str] | 必填 | 要取消禁言的用户 ID 列表 |

**返回**: 成功执行返回 `None`。

**使用示例**:

```python
# 全体禁言 20 秒
await self.api.mute_all(message.guild_id, mute_seconds="20")

# 禁言指定成员
await self.api.mute_member(message.guild_id, user_id, mute_seconds="3600")

# 取消禁言
await self.api.cancel_mute_all(message.guild_id)
```
