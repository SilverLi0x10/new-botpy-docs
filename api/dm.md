# 私信 API

## create_dms

创建私信会话。

```python
async def create_dms(guild_id: str, user_id: str) -> DmsPayload
```

| 参数 | 类型 | 说明 |
|------|------|------|
| guild_id | str | 消息来源频道 ID |
| user_id | str | 要发送私信的用户 ID |

**返回**: `DmsPayload` — 包含 `guild_id`（私信会话 ID）、`channel_id`、`create_time`

::: tip 注意
私信会话也是一个独立的"频道"，返回的 `guild_id` 是私信会话的 ID，不是原频道 ID。
:::

## post_dms

发送私信。

```python
async def post_dms(
    guild_id: str,
    content: str = None,
    embed: Embed = None,
    ark: Ark = None,
    message_reference: Reference = None,
    image: str = None,
    file_image: bytes | BinaryIO | str = None,
    msg_id: str = None,
    event_id: str = None,
    markdown: MarkdownPayload = None,
    keyboard: Keyboard = None,
) -> Message
```

参数与 `post_message` 相同，详见[消息 API](message.md)。

**示例**:
```python
# 收到"私信"指令后发送私信
async def on_at_message_create(self, message: Message):
    if "/私信" in message.content:
        dms = await self.api.create_dms(message.guild_id, message.author.id)
        await self.api.post_dms(dms["guild_id"], content="这是私信内容", msg_id=message.id)

# 收到私信时自动回复
async def on_direct_message_create(self, message: DirectMessage):
    await self.api.post_dms(
        guild_id=message.guild_id,
        content=f"收到你的私信: {message.content}",
        msg_id=message.id,
    )
```
