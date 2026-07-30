# 接口权限 API

## get_permissions

获取机器人在频道中可使用的权限列表。

**源码位置**: [`botpy/api.py` 第 981 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L981)

**API 路由**: `GET /guilds/{guild_id}/api_permission`

```python
async def get_permissions(guild_id: str) -> List[APIPermission]
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| guild_id | str | 必填 | 要获取权限列表的频道 ID |

**返回**: List[[`APIPermission`](../models/other.md#apipermission)]

**返回字段**:
| 字段 | 类型 | 说明 |
|------|------|------|
| path | str | API 路径 |
| method | str | 请求方法 |
| desc | str | 权限描述 |
| auth_status | int | 授权状态 |

## post_permission_demand

创建 API 接口权限授权链接，该链接指向 `guild_id` 对应的频道。

**源码位置**: [`botpy/api.py` 第 996 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L996)

**API 路由**: `POST /guilds/{guild_id}/api_permission/demand`

```python
async def post_permission_demand(
    guild_id: str,
    channel_id: str,
    api_identify: APIPermissionDemandIdentify,
    desc: str,
) -> APIPermissionDemand
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| guild_id | str | 必填 | 创建权限请求的频道 ID |
| channel_id | str | 必填 | 需要发送权限请求的子频道 ID |
| api_identify | [`APIPermissionDemandIdentify`](../models/other.md#apipermission) | 必填 | API 权限需求标识 |
| desc | str | 必填 | 权限请求的描述 |

**APIPermissionDemandIdentify**:
```python
{"path": "/guilds/{guild_id}/members/{user_id}", "method": "GET"}
```

**返回**: [`APIPermissionDemand`](../models/other.md#apipermission)

**使用示例**:
```python
from botpy.types.permission import APIPermissionDemandIdentify

async def on_at_message_create(self, message: Message):
    if "/权限列表" in message.content:
        apis = await self.api.get_permissions(message.guild_id)
        for api in apis:
            _log.info(f"API: {api['desc']}, 状态: {api['auth_status']}")

    if "/请求权限" in message.content:
        demand = APIPermissionDemandIdentify(
            path="/guilds/{guild_id}/members/{user_id}",
            method="GET",
        )
        result = await self.api.post_permission_demand(
            message.guild_id, message.channel_id, demand, "获取频道成员信息"
        )
        _log.info(f"授权标题: {result['title']}")
```
