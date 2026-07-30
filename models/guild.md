# 频道类型

## GuildPayload

```python
class GuildPayload(TypedDict):
    id: str                # 频道 ID
    name: str              # 频道名称
    icon: str              # 频道图标
    owner_id: str          # 频道主 ID
    owner: bool            # 是否频道主
    member_count: int      # 成员数
    max_members: int       # 最大成员数
    description: str       # 频道描述
    joined_at: str         # 加入时间
```

## Role (身份组)

```python
class Role(TypedDict):
    id: str
    name: str
    color: int
    hoist: int
    number: int
    number_limit: int

class GuildRole(TypedDict):
    guild_id: str
    role_id: str
    role: Role

class GuildRoles(TypedDict):
    guild_id: str
    roles: List[Role]
    role_num_limit: str
```
