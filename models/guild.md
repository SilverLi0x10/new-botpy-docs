# 频道类型

**Source file:** [`botpy/types/guild.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/guild.py)

**Related types:** [User & Member](user.md), [Channel](channel.md)

---

## GuildPayload

频道信息（[`types/guild.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/guild.py#L7-L16)）。

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

---

## Role (身份组)

```python
class Role(TypedDict):
    id: str                # 身份组 ID
    name: str              # 身份组名称
    color: int             # 颜色
    hoist: int             # 是否在成员列表中单独展示
    number: int            # 人数
    number_limit: int      # 人数上限

class GuildRole(TypedDict):
    guild_id: str
    role_id: str
    role: Role

class GuildRoles(TypedDict):
    guild_id: str
    roles: List[Role]
    role_num_limit: str
```

---

## GuildMembers

频道成员列表（[`types/guild.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/guild.py#L40-L44)）。

```python
class GuildMembers(TypedDict):
    user: List[User]       # 用户列表（参见 [User](user.md)）
    nick: str              # 昵称
    roles: List[Role]      # 身份组列表
    joined_at: str         # 加入时间
```

---

## 领域模型类

### Guild ([`botpy/guild.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/guild.py#L5-L36))

通过 `on_guild_create` / `on_guild_update` / `on_guild_delete` 事件回调接收。

```python
class Guild:
    __slots__ = (
        "_api",           # BotAPI 实例
        "_ctx",           # 上下文
        "id",             # 频道 ID
        "name",           # 频道名称
        "icon",           # 频道图标
        "owner_id",       # 频道主 ID
        "is_owner",       # 是否频道主 (来自 GuildPayload.owner)
        "member_count",   # 成员数
        "max_members",    # 最大成员数
        "description",    # 频道描述
        "joined_at",      # 加入时间
        "event_id",       # 事件 ID
    )
```
