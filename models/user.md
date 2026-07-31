# 用户与成员模型

**来源文件：**
- TypedDict 定义：[`botpy/types/user.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/user.py)
- 领域模型：[`botpy/user.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/user.py)

**相关类型：** [Guild 模型](guild.md)、[Channel 模型](channel.md)、[Message 模型](message.md)

---

## User

用户数据结构，描述用户基础信息。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| id | str | 用户 ID |
| username | str | 用户名 |
| avatar | str | 头像 URL |
| bot | bool | 是否为机器人 |
| union_openid | str | 用户聚合 openid |
| union_user_account | str | 用户聚合账号 |

---

## Member

成员数据结构，继承自 `User` 之外的频道成员信息。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| user | [User](#user) | 用户信息 |
| nick | str | 频道昵称 |
| roles | List[str] | 身份组 ID 列表 |
| joined_at | str | 加入时间 |

---

## GuildMemberPayload

频道成员数据结构，继承自 [Member](#member)，并附加频道 ID。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| user | [User](#user) | 用户信息（继承自 Member） |
| nick | str | 频道昵称（继承自 Member） |
| roles | List[str] | 身份组 ID 列表（继承自 Member） |
| joined_at | str | 加入时间（继承自 Member） |
| guild_id | str | 频道 ID |

---

## Member (领域模型)

成员领域模型，通过 `on_guild_member_add` / `on_guild_member_update` / `on_guild_member_remove` 事件回调接收，是对 `GuildMemberPayload` 的封装。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| _api | [BotAPI](../api/) | BotAPI 实例，用于调用 API 方法 |
| _ctx | 待确认 | 上下文对象，已在 `__slots__` 中声明但当前实现未初始化 |
| user | Member._User | 用户信息（嵌套对象） |
| nick | str | 频道昵称 |
| roles | List[str] | 身份组 ID 列表 |
| joined_at | str | 加入时间 |
| event_id | str | 事件 ID |
| guild_id | str | 频道 ID |

### Member._User

成员模型内嵌的用户信息对象，由 `__init__` 中的赋值逻辑推断得出。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| id | str | 用户 ID |
| username | str | 用户名 |
| avatar | str | 头像 URL |
| bot | bool | 是否为机器人 |
| union_openid | str | 用户聚合 openid |
| union_user_account | str | 用户聚合账号 |
