# 成员 API

## get_guild_member

获取频道指定成员信息。

**源码位置**: [`botpy/api.py` 第 178 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L178)

**API 路由**: `GET /guilds/{guild_id}/members/{user_id}`

```python
async def get_guild_member(guild_id: str, user_id: str) -> Member
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| guild_id | str | 必填 | 频道 ID |
| user_id | str | 必填 | 用户 ID（一般从事件消息中获取） |

**返回**: [`Member`](../models/user.md#member)

**Member 字段**:
| 字段 | 类型 | 说明 |
|------|------|------|
| user | [`User`](../models/user.md#user) | 用户信息（包含 `id`, `username`, `avatar`, `bot`, `union_openid`, `union_user_account`） |
| nick | str | 用户在频道中的昵称 |
| roles | List[str] | 用户拥有的身份组 ID 列表 |
| joined_at | str | 加入频道的时间 |

## get_guild_members

获取频道成员列表。

**源码位置**: [`botpy/api.py` 第 228 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L228)

**API 路由**: `GET /guilds/{guild_id}/members`

```python
async def get_guild_members(
    guild_id: str,
    after: str = "0",
    limit: int = 1,
) -> List[Member]
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| guild_id | str | 必填 | 频道 ID |
| after | str | `"0"` | 上一页最后一个用户的 ID，用于分页。第一次请求请使用 `"0"` |
| limit | int | `1` | 分页大小，范围 1-400。成员较多的频道尽量使用较大的 limit 值以减少请求数 |

**返回**: List[[`Member`](../models/user.md#member)]

::: warning 注意
该接口为私域机器人权限，需要在管理端申请权限。
:::

## get_guild_role_members

获取频道身份组成员列表。

**源码位置**: [`botpy/api.py` 第 251 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L251)

**API 路由**: `GET /guilds/{guild_id}/roles/{role_id}/members`

```python
async def get_guild_role_members(
    guild_id: str,
    role_id: str,
    start_index: str = "0",
    limit: int = 1,
) -> Dict[str, Union[List[Member], str]]
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| guild_id | str | 必填 | 频道 ID |
| role_id | str | 必填 | 身份组 ID |
| start_index | str | `"0"` | 分页起始索引，将上一次返回包中的 `next` 值填入。第一次请求请填 `"0"` |
| limit | int | `1` | 分页大小，范围 1-400。成员较多的频道尽量使用较大的 limit 值以减少请求数 |

**返回**: `Dict[str, Union[List[Member], str]]` — 包含 `members` 和 `next` 分页键的字典

::: warning 注意
该接口为私域机器人权限，需要在管理端申请权限。
:::

## get_delete_member

删除频道成员（踢出）。

**源码位置**: [`botpy/api.py` 第 197 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L197)

**API 路由**: `DELETE /guilds/{guild_id}/members/{user_id}`

```python
async def get_delete_member(
    guild_id: str,
    user_id: str,
    add_blacklist: bool = False,
    delete_history_msg_days: int = 0,
) -> str
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| guild_id | str | 必填 | 频道 ID |
| user_id | str | 必填 | 要删除的成员的用户 ID |
| add_blacklist | bool | `False` | 是否同时加入黑名单 |
| delete_history_msg_days | int | `0` | 撤回消息的时间范围，仅支持固定值 |

**delete_history_msg_days 可取值**:
| 值 | 说明 |
|----|------|
| 0 | 不撤回任何消息（默认） |
| 3 | 撤回 3 天内消息 |
| 7 | 撤回 7 天内消息 |
| 15 | 撤回 15 天内消息 |
| 30 | 撤回 30 天内消息 |
| -1 | 撤回全部消息 |

**返回**: 成功执行返回 `None`。

## get_voice_members

获取语音频道中的成员列表。

**源码位置**: [`botpy/api.py` 第 278 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L278)

**API 路由**: `GET /channels/{channel_id}/voice/members`

```python
async def get_voice_members(channel_id: str) -> List[Member]
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| channel_id | str | 必填 | 语音子频道 ID |

**返回**: List[[`Member`](../models/user.md#member)]

::: warning 注意
- 该接口仅私域机器人可用，且子频道必须是语音子频道
- 查询的子频道不是语音子频道时，返回的 status code 为 400
- 公域机器人暂不支持申请，选择私域机器人后默认开通
- 开通后需要先将机器人从频道移除，然后重新添加，方可生效
:::
