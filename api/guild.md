# 频道 API

## get_guild

获取频道信息。

```python
async def get_guild(guild_id: str) -> GuildPayload
```

| 参数 | 类型 | 说明 |
|------|------|------|
| guild_id | str | 频道 ID（从事件中获取） |

**返回**: [GuildPayload](../models/guild.md) — 包含 id、name、icon、owner_id、member_count 等字段

**示例**:
```python
guild = await self.api.get_guild(message.guild_id)
print(guild["name"])
```

## me

获取当前机器人信息。

```python
async def me() -> User
```

**返回**: [User](../models/user.md) — 包含 id、username、avatar、bot 等字段

## me_guilds

获取机器人加入的频道列表。

```python
async def me_guilds(
    guild_id: str = None,  # 起始频道 ID（分页用）
    limit: int = 100,      # 返回数量（1-100）
    desc: bool = False     # 是否倒序
) -> List[GuildPayload]
```

**示例**:
```python
guilds = await self.api.me_guilds()
for g in guilds:
    print(g["name"])
```
