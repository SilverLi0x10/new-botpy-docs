# 精华消息 API

## put_pin

在子频道内添加精华消息。

**源码位置**: [`botpy/api.py` 第 1241 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L1241)

**API 路由**: `PUT /channels/{channel_id}/pins/{message_id}`

```python
async def put_pin(channel_id: str, message_id: str) -> PinsMessage
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| channel_id | str | 必填 | 子频道 ID |
| message_id | str | 必填 | 要设为精华的消息 ID |

**返回**: [`PinsMessage`](../models/other.md#pinsmessage-精华消息) — 返回对象中 `message_ids` 为当前请求后子频道内所有精华消息数组

::: tip
- 每个子频道最多 20 条精华消息
- 只有可见的消息才能被设置为精华消息
:::

## delete_pin

删除精华消息。

**源码位置**: [`botpy/api.py` 第 1265 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L1265)

**API 路由**: `DELETE /channels/{channel_id}/pins/{message_id}`

```python
async def delete_pin(channel_id: str, message_id: str)
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| channel_id | str | 必填 | 子频道 ID |
| message_id | str | 必填 | 要删除的精华消息 ID |

::: tip
`message_id` 设为 `"all"` 可删除子频道内全部精华消息。
:::

**返回**: 成功返回空字符串。

## get_pins

获取子频道内的所有精华消息。

**源码位置**: [`botpy/api.py` 第 1288 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L1288)

**API 路由**: `GET /channels/{channel_id}/pins`

```python
async def get_pins(channel_id: str) -> PinsMessage
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| channel_id | str | 必填 | 需要获取精华消息的子频道 ID |

**返回**: [`PinsMessage`](../models/other.md#pinsmessage-精华消息)

**PinsMessage 字段**:
```python
{"guild_id": "频道ID", "channel_id": "子频道ID", "message_ids": ["消息ID1", "消息ID2"]}
```

**使用示例**:
```python
async def on_at_message_create(self, message: Message):
    if "/创建精华消息" in message.content:
        result = await self.api.put_pin(message.channel_id, message.id)
    elif "/获取精华列表" in message.content:
        pins = await self.api.get_pins(message.channel_id)
        print(pins)
    elif "/删除精华消息" in message.content:
        await self.api.delete_pin(message.channel_id, message.id)
```
