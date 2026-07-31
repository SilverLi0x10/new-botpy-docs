# 频道模型

**来源文件：**
- TypedDict 定义：[`botpy/types/guild.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/guild.py)
- 领域模型：[`botpy/guild.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/guild.py)

**相关类型：** [User & Member 模型](user.md)、[Channel 模型](channel.md)

---

## GuildPayload

频道数据结构，API 返回的原始数据。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| id | str | 频道 ID |
| name | str | 频道名称 |
| icon | str | 频道图标 |
| owner_id | str | 频道主 ID |
| owner | bool | 是否频道主 |
| member_count | int | 成员数量 |
| max_members | int | 最大成员数 |
| description | str | 频道描述 |
| joined_at | str | 加入时间 |

---

## Role (身份组)

身份组数据结构。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| id | str | 身份组 ID |
| name | str | 身份组名称 |
| color | int | ARGB 颜色值（十进制） |
| hoist | int | 是否在成员列表中单独展示（0=否，1=是） |
| number | int | 身份组人数 |
| number_limit | int | 身份组人数上限 |

---

## GuildRole

单个身份组的详情结构。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| guild_id | str | 频道 ID |
| role_id | str | 身份组 ID |
| role | [Role](#role-身份组) | 身份组详细信息 |

---

## GuildRoles

频道的身份组列表结构。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| guild_id | str | 频道 ID |
| roles | List[[Role](#role-身份组)] | 身份组列表 |
| role_num_limit | str | 身份组数量上限 |

---

## GuildMembers

频道成员列表结构。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| user | List[[User](user.md#user)] | 用户列表 |
| nick | str | 昵称 |
| roles | List[[Role](#role-身份组)] | 身份组列表 |
| joined_at | str | 加入时间 |

---

## Guild (领域模型)

频道领域模型，通过 `on_guild_create` / `on_guild_update` / `on_guild_delete` 事件回调接收，是对 `GuildPayload` 的封装。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| _api | [BotAPI](../api/) | BotAPI 实例，用于调用 API 方法 |
| _ctx | 待确认 | 上下文对象，已在 `__slots__` 中声明但当前实现未初始化 |
| id | str | 频道 ID |
| name | str | 频道名称 |
| icon | str | 频道图标 |
| owner_id | str | 频道主 ID |
| is_owner | bool | 是否频道主（源自 `GuildPayload.owner`） |
| member_count | int | 成员数量 |
| max_members | int | 最大成员数 |
| description | str | 频道描述 |
| joined_at | str | 加入时间 |
| event_id | str | 事件 ID |
