# 子频道 API

## get_channel

获取子频道信息。

```python
async def get_channel(channel_id: str) -> ChannelPayload
```

## get_channels

获取频道下的子频道列表。

```python
async def get_channels(guild_id: str) -> List[ChannelPayload]
```

## create_channel

创建子频道。

```python
async def create_channel(
    guild_id: str,
    name: str,
    type: ChannelType,        # 子频道类型
    sub_type: ChannelSubType, # 子频道子类型
    **fields                  # 可选参数
) -> ChannelPayload
```

**type 参数** (ChannelType):
| 值 | 枚举 | 说明 |
|----|------|------|
| 0 | TEXT_CHANNEL | 文字子频道 |
| 2 | VOICE_CHANNEL | 语音子频道 |
| 4 | GROUP_CHANNEL | 子频道分组 |
| 10005 | LIVE_CHANNEL | 直播子频道 |
| 10006 | APP_CHANNEL | 应用子频道 |
| 10007 | DISCUSSION_CHANNEL | 论坛子频道 |

**sub_type 参数** (ChannelSubType):
| 值 | 枚举 | 说明 |
|----|------|------|
| 0 | TALK | 闲聊 |
| 1 | POST | 公告 |
| 2 | CHEAT | 攻略 |
| 3 | BLACK | 开黑 |

**可选 fields**:
| 字段 | 类型 | 说明 |
|------|------|------|
| position | int | 排序位置 |
| parent_id | str | 分组 ID |
| private_type | int | 私密类型 |
| private_user_ids | List[str] | 私密成员 ID |
| speak_permission | int | 发言权限 |
| application_id | str | 应用子频道 AppID |

## update_channel

修改子频道。

```python
async def update_channel(channel_id: str, **fields) -> ChannelPayload
```

| 字段 | 类型 | 说明 |
|------|------|------|
| name | str | 子频道名 |
| position | int | 排序位置 |
| parent_id | str | 分组 ID |
| private_type | int | 私密类型 |
| speak_permission | int | 发言权限 |

## delete_channel

删除子频道。

```python
async def delete_channel(channel_id: str) -> ChannelPayload
```

## 子频道权限

### get_channel_user_permissions

获取指定子频道用户的权限。

```python
async def get_channel_user_permissions(channel_id: str, user_id: str) -> ChannelPermissions
```

### update_channel_user_permissions

修改指定子频道用户的权限。

```python
async def update_channel_user_permissions(
    channel_id: str,
    user_id: str,
    add: Permission = None,
    remove: Permission = None,
) -> str
```

### get_channel_role_permissions

获取指定子频道身份组的权限。

```python
async def get_channel_role_permissions(channel_id: str, role_id: str) -> ChannelPermissions
```

### update_channel_role_permissions

修改指定子频道身份组的权限。

```python
async def update_channel_role_permissions(
    channel_id: str,
    role_id: str,
    add: Permission = None,
    remove: Permission = None,
) -> str
```

**Permission 使用示例**:
```python
from botpy import Permission

# 添加可读权限
add = Permission(view_permission=True)

# 删除可读和发言权限
remove = Permission(view_permission=True, speak_permission=True)

# 可管理的权限类型
# - view_permission:   可查看子频道 (1 << 0)
# - manager_permission: 可管理子频道 (1 << 1)
# - speak_permission:   可发言子频道 (1 << 2)
# - live_permission:    可直播子频道 (1 << 3)
```
