# 身份组 API

## get_guild_roles

获取频道身份组列表。

```python
async def get_guild_roles(guild_id: str) -> GuildRoles
```

## create_guild_role

创建频道身份组。

```python
async def create_guild_role(
    guild_id: str,
    **fields
) -> GuildRole
```

**可选 fields**:
| 字段 | 类型 | 说明 |
|------|------|------|
| name | str | 身份组名称 |
| color | int | ARGB 颜色（十进制） |
| hoist | int | 是否在成员列表单独展示（0/1） |

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

```python
async def update_guild_role(guild_id: str, role_id: str, **fields) -> GuildRole
```

## delete_guild_role

删除频道身份组。

```python
async def delete_guild_role(guild_id: str, role_id: str) -> str
```

## create_guild_role_member

增加频道身份组成员。

```python
async def create_guild_role_member(
    guild_id: str,
    role_id: str,
    user_id: str,
    channel_id: str = None,  # 当身份组ID是5-子频道管理员时需要
) -> str
```

## delete_guild_role_member

删除频道身份组成员。

```python
async def delete_guild_role_member(
    guild_id: str,
    role_id: str,
    user_id: str,
    channel_id: str = None,
) -> str
```
