# 接口权限 API

## get_permissions

获取机器人在频道中可使用的权限列表。

```python
async def get_permissions(guild_id: str) -> List[APIPermission]
```

**返回字段**:
| 字段 | 类型 | 说明 |
|------|------|------|
| path | str | API 路径 |
| method | str | 请求方法 |
| desc | str | 权限描述 |
| auth_status | int | 授权状态 |

## post_permission_demand

创建 API 接口权限授权链接。

```python
async def post_permission_demand(
    guild_id: str,
    channel_id: str,
    api_identify: APIPermissionDemandIdentify,  # API 权限标识
    desc: str,                                    # 权限请求描述
) -> APIPermissionDemand
```

**APIPermissionDemandIdentify**:
```python
{"path": "/guilds/{guild_id}/members/{user_id}", "method": "GET"}
```

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
