# 用户和成员类型

**Source files:**
- TypedDict definitions: [`botpy/types/user.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/user.py)
- Domain models: [`botpy/user.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/user.py)

**Related types:** [Guild](guild.md), [Channel](channel.md), [Message](message.md)

---

## User

用户信息（[`types/user.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/user.py#L5-L11)）。

```python
class User(TypedDict):
    id: str                  # 用户 ID
    username: str            # 用户名
    avatar: str              # 头像 URL
    bot: bool                # 是否为机器人
    union_openid: str        # 用户聚合 openid
    union_user_account: str  # 用户聚合账号
```

---

## Member

成员信息（[`types/user.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/user.py#L14-L18)）。

```python
class Member(TypedDict):
    user: User               # 用户信息
    nick: str                # 频道昵称
    roles: List[str]         # 身份组 ID 列表
    joined_at: str           # 加入时间
```

---

## GuildMemberPayload

频道成员（[`types/user.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/user.py#L21-L22)），继承自 `Member`。

```python
class GuildMemberPayload(Member):
    guild_id: str            # 频道 ID
```

---

## 领域模型类

### Member ([`botpy/user.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/user.py#L5-L31))

通过 `on_guild_member_add` / `on_guild_member_update` / `on_guild_member_remove` 事件回调接收。

```python
class Member:
    __slots__ = (
        "_api",           # BotAPI 实例
        "_ctx",           # 上下文
        "user",           # 嵌套 _User 对象
        "nick",           # 频道昵称
        "roles",          # 身份组 ID 列表
        "joined_at",      # 加入时间
        "event_id",       # 事件 ID
        "guild_id",       # 频道 ID
    )
```

**内部嵌套类 `_User`** — 用户信息（[`botpy/user.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/user.py#L21-L28)）：

| 属性 | 类型 | 说明 |
|------|------|------|
| `id` | `str` | 用户 ID |
| `username` | `str` | 用户名 |
| `avatar` | `str` | 头像 URL |
| `bot` | `bool` | 是否为机器人 |
| `union_openid` | `str` | 用户聚合 openid |
| `union_user_account` | `str` | 用户聚合账号 |
