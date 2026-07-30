# 禁言 API

## mute_all

使频道中所有成员（非管理员）禁言。

```python
async def mute_all(
    guild_id: str,
    mute_end_timestamp: str = None,  # 禁言结束时间戳（毫秒）
    mute_seconds: str = None,        # 禁言秒数
) -> str
```

::: tip
`mute_end_timestamp` 和 `mute_seconds` 二选一，默认以 `mute_end_timestamp` 为准。
:::

## cancel_mute_all

取消频道中所有成员的禁言。

```python
async def cancel_mute_all(guild_id: str) -> str
```

## mute_member

禁言指定成员。

```python
async def mute_member(
    guild_id: str,
    user_id: str,
    mute_end_timestamp: str = None,
    mute_seconds: str = None,
) -> str
```

## mute_multi_member

禁言多个成员。

```python
async def mute_multi_member(
    guild_id: str,
    user_ids: List[str],
    mute_end_timestamp: str = None,
    mute_seconds: str = None,
) -> str
```

## cancel_mute_multi_member

取消多个成员的禁言。

```python
async def cancel_mute_multi_member(guild_id: str, user_ids: List[str]) -> str
```

**使用示例**:
```python
# 全体禁言 20 秒
await self.api.mute_all(message.guild_id, mute_seconds="20")

# 禁言指定成员
await self.api.mute_member(message.guild_id, user_id, mute_seconds="3600")

# 取消禁言
await self.api.cancel_mute_all(message.guild_id)
```
