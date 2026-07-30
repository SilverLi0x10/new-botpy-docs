# 精华消息 API

## put_pin

添加精华消息。

```python
async def put_pin(channel_id: str, message_id: str) -> PinsMessage
```

::: tip
每个子频道最多 20 条精华消息，只有可见的消息才能被设置为精华消息。
:::

## delete_pin

删除精华消息。

```python
async def delete_pin(channel_id: str, message_id: str) -> str
```

::: tip
`message_id` 设为 `"all"` 可删除子频道内全部精华消息。
:::

## get_pins

获取子频道内的所有精华消息。

```python
async def get_pins(channel_id: str) -> PinsMessage
```

**PinsMessage**:
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
