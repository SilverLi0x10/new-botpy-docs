# 子频道 API

所有 API 方法通过 `self.api` 调用。[**源码位置**](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py)。

## 枚举类型

来自 [`botpy/types/channel.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/channel.py)，详见[子频道类型模型](../models/channel.md)。

### `ChannelType` 枚举

文字子频道、语音子频道、子频道分组等类型的枚举。

### `ChannelSubType` 枚举

闲聊、公告、攻略、开黑等子类型的枚举。

### `PrivateType` 枚举

公开频道、管理员可见、指定成员可见等私密类型的枚举。

### `SpeakPermission` 枚举

发言权限的枚举。

## `get_channel`

获取子频道信息。API 路径：`GET /channels/{channel_id}`

```python
async def get_channel(channel_id: str) -> channel.ChannelPayload
```

| 参数 | 类型 | 说明 |
|------|------|------|
| `channel_id` | `str` | 子频道 ID |

**返回**: [`ChannelPayload`](../models/channel.md) — 子频道信息字典

源码位置：[`botpy/api.py` 第 296-311 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L296-L311)。

## `get_channels`

获取频道下的子频道列表。API 路径：`GET /guilds/{guild_id}/channels`

```python
async def get_channels(guild_id: str) -> List[channel.ChannelPayload]
```

| 参数 | 类型 | 说明 |
|------|------|------|
| `guild_id` | `str` | 频道 ID |

**返回**: `List[ChannelPayload]` — 子频道列表

源码位置：[`botpy/api.py` 第 313-328 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L313-L328)。

## `create_channel`

创建子频道。API 路径：`POST /guilds/{guild_id}/channels`

```python
async def create_channel(
    guild_id: str,
    name: str,
    type: channel.ChannelType,
    sub_type: channel.ChannelSubType,
    **fields
) -> channel.ChannelPayload
```

| 参数 | 类型 | 说明 |
|------|------|------|
| `guild_id` | `str` | 频道 ID |
| `name` | `str` | 子频道名称 |
| `type` | [`ChannelType`](../models/channel.md#channeltype-枚举) | 子频道类型枚举 |
| `sub_type` | [`ChannelSubType`](../models/channel.md#channelsubtype-枚举) | 子频道子类型枚举 |

**可选 fields**:

| 字段 | 类型 | 说明 |
|------|------|------|
| `position` | `int` | 排序位置 |
| `parent_id` | `str` | 分组 ID |
| `private_type` | [`PrivateType`](../models/channel.md#privatetype-枚举) | 私密类型 |
| `private_user_ids` | `List[str]` | 私密成员 ID 列表 |
| `speak_permission` | [`SpeakPermission`](../models/channel.md#speakpermission-枚举) | 发言权限 |
| `application_id` | `str` | 应用子频道 AppID（仅应用子频道需要） |

**返回**: [`ChannelPayload`](../models/channel.md)

源码位置：[`botpy/api.py` 第 330-368 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L330-L368)。

## `update_channel`

修改子频道。API 路径：`PATCH /channels/{channel_id}`

```python
async def update_channel(channel_id: str, **fields) -> channel.ChannelPayload
```

| 参数 | 类型 | 说明 |
|------|------|------|
| `channel_id` | `str` | 要修改的子频道 ID |

**可选 fields**:

| 字段 | 类型 | 说明 |
|------|------|------|
| `name` | `str` | 子频道名 |
| `position` | `int` | 排序位置 |
| `parent_id` | `str` | 分组 ID |
| `private_type` | [`PrivateType`](../models/channel.md#privatetype-枚举) | 私密类型 |
| `speak_permission` | [`SpeakPermission`](../models/channel.md#speakpermission-枚举) | 发言权限 |

**返回**: [`ChannelPayload`](../models/channel.md)

源码位置：[`botpy/api.py` 第 370-388 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L370-L388)。

## `delete_channel`

删除子频道。API 路径：`DELETE /channels/{channel_id}`

```python
async def delete_channel(channel_id: str) -> channel.ChannelPayload
```

| 参数 | 类型 | 说明 |
|------|------|------|
| `channel_id` | `str` | 要删除的子频道 ID |

**返回**: `ChannelPayload` — 删除后的子频道信息

源码位置：[`botpy/api.py` 第 390-401 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L390-L401)。

## 子频道权限

### `get_channel_user_permissions`

获取指定子频道用户的权限。API 路径：`GET /channels/{channel_id}/members/{user_id}/permissions`

```python
async def get_channel_user_permissions(
    channel_id: str,
    user_id: str,
) -> channel.ChannelPermissions
```

**返回**: [`ChannelPermissions`](../models/channel.md#channelpermissions)

源码位置：[`botpy/api.py` 第 404-418 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L404-L418)。

### `update_channel_user_permissions`

修改指定子频道用户的权限。API 路径：`PUT /channels/{channel_id}/members/{user_id}/permissions`

```python
async def update_channel_user_permissions(
    channel_id: str,
    user_id: str,
    add: Permission = None,
    remove: Permission = None,
) -> str
```

| 参数 | 类型 | 说明 |
|------|------|------|
| `add` | [`Permission`](../guide/intents.md#permission-类) | 要添加的权限 |
| `remove` | [`Permission`](../guide/intents.md#permission-类) | 要移除的权限 |

**返回**: 成功返回空字符串

源码位置：[`botpy/api.py` 第 420-440 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L420-L440)。

### `get_channel_role_permissions`

获取指定子频道身份组的权限。API 路径：`GET /channels/{channel_id}/roles/{role_id}/permissions`

```python
async def get_channel_role_permissions(
    channel_id: str,
    role_id: str,
) -> channel.ChannelPermissions
```

**返回**: [`ChannelPermissions`](../models/channel.md#channelpermissions)

源码位置：[`botpy/api.py` 第 442-456 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L442-L456)。

### `update_channel_role_permissions`

修改指定子频道身份组的权限。API 路径：`PUT /channels/{channel_id}/roles/{role_id}/permissions`

```python
async def update_channel_role_permissions(
    channel_id: str,
    role_id: str,
    add: Permission = None,
    remove: Permission = None,
) -> str
```

**返回**: 成功返回空字符串

源码位置：[`botpy/api.py` 第 458-478 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L458-L478)。

**权限使用示例**:
```python
from botpy import Permission

# 添加可读权限
add = Permission(view_permission=True)

# 删除可读和发言权限
remove = Permission(view_permission=True, speak_permission=True)

# 可管理的权限类型
# - view_permission:    可查看子频道 (1 << 0)
# - manager_permission: 可管理子频道 (1 << 1)
# - speak_permission:   可发言子频道 (1 << 2)
# - live_permission:    可直播子频道 (1 << 3)
```
