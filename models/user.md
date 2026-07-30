# 用户和成员类型

## User

```python
class User(TypedDict):
    id: str                  # 用户 ID
    username: str            # 用户名
    avatar: str              # 头像 URL
    bot: bool                # 是否为机器人
    union_openid: str        # 用户聚合 openid
    union_user_account: str  # 用户聚合账号
```

## Member

```python
class Member(TypedDict):
    user: User               # 用户信息
    nick: str                # 频道昵称
    roles: List[str]         # 身份组 ID 列表
    joined_at: str           # 加入时间
```

## GuildMemberPayload

```python
class GuildMemberPayload(Member):
    guild_id: str            # 频道 ID
```
