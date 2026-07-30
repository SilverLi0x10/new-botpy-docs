# 身份组 API

身份组（Role）是频道中的权限角色，用于对成员进行分组管理。

## get_guild_roles

获取频道身份组列表。

**源码位置**: [`botpy/api.py` 第 58 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L58)

**API 路由**: `GET /guilds/{guild_id}/roles`

```python
async def get_guild_roles(guild_id: str) -> GuildRoles
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| guild_id | str | 必填 | 频道 ID |

**返回**: [`GuildRoles`](../models/guild.md#role-身份组)

**GuildRoles 字段**:
| 字段 | 类型 | 说明 |
|------|------|------|
| guild_id | str | 频道 ID |
| roles | List[[`Role`](../models/guild.md#role-身份组)] | 身份组列表 |
| role_num_limit | str | 身份组数量限制 |

## create_guild_role

创建频道身份组。

**源码位置**: [`botpy/api.py` 第 71 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L71)

**API 路由**: `POST /guilds/{guild_id}/roles`

```python
async def create_guild_role(
    guild_id: str,
    **fields
) -> GuildRole
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| guild_id | str | 必填 | 频道 ID |

**可选 fields**:
| 字段 | 类型 | 说明 |
|------|------|------|
| name | str | 身份组名称 |
| color | int | ARGB 十六进制颜色值转换后的十进制数值 |
| hoist | int | 在成员列表中单独展示：`0` 否，`1` 是 |

**返回**: [`GuildRole`](../models/guild.md#role-身份组)

**颜色转换**:
```python
from botpy.ext.convert_color import start

# RGB tuple → int
color = start((255, 200, 100))

# HEX string → int
color = start("#FFC864")
```

## update_guild_role

修改频道身份组。

**源码位置**: [`botpy/api.py` 第 89 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L89)

**API 路由**: `PATCH /guilds/{guild_id}/roles/{role_id}`

```python
async def update_guild_role(guild_id: str, role_id: str, **fields) -> GuildRole
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| guild_id | str | 必填 | 频道 ID |
| role_id | str | 必填 | 要修改的身份组 ID |

**可选 fields**:
| 字段 | 类型 | 说明 |
|------|------|------|
| name | str | 身份组名称 |
| color | int | ARGB 颜色（十进制） |
| hoist | int | 是否在成员列表单独展示（0/1） |

**返回**: [`GuildRole`](../models/guild.md#role-身份组)

## delete_guild_role

删除频道身份组。

**源码位置**: [`botpy/api.py` 第 108 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L108)

**API 路由**: `DELETE /guilds/{guild_id}/roles/{role_id}`

```python
async def delete_guild_role(guild_id: str, role_id: str) -> str
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| guild_id | str | 必填 | 频道 ID |
| role_id | str | 必填 | 要删除的身份组 ID |

**返回**: 成功执行返回 `None`。

## create_guild_role_member

增加频道身份组成员。

**源码位置**: [`botpy/api.py` 第 122 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L122)

**API 路由**: `PUT /guilds/{guild_id}/members/{user_id}/roles/{role_id}`

```python
async def create_guild_role_member(
    guild_id: str,
    role_id: str,
    user_id: str,
    channel_id: str = None,
) -> str
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| guild_id | str | 必填 | 频道 ID |
| role_id | str | 必填 | 身份组 ID |
| user_id | str | 必填 | 要添加到身份组的用户 ID |
| channel_id | str | `None` | 当身份组 ID 为 `5`（子频道管理员）时，需指定具体的子频道 ID |

**返回**: 成功执行返回 `None`。

## delete_guild_role_member

删除频道身份组成员。

**源码位置**: [`botpy/api.py` 第 152 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L152)

**API 路由**: `DELETE /guilds/{guild_id}/members/{user_id}/roles/{role_id}`

```python
async def delete_guild_role_member(
    guild_id: str,
    role_id: str,
    user_id: str,
    channel_id: str = None,
) -> str
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| guild_id | str | 必填 | 频道 ID |
| role_id | str | 必填 | 身份组 ID |
| user_id | str | 必填 | 要移除的用户 ID |
| channel_id | str | `None` | 当身份组 ID 为 `5`（子频道管理员）时，需指定具体的子频道 ID |

**返回**: 成功执行返回 `None`。
