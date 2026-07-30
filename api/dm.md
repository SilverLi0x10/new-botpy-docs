# 私信 API

## create_dms

创建私信会话。

**源码位置**: [`botpy/api.py` 第 652 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L652)

**API 路由**: `POST /users/@me/dms`

```python
async def create_dms(guild_id: str, user_id: str) -> DmsPayload
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| guild_id | str | 必填 | 消息来源频道 ID（私信会话的来源频道） |
| user_id | str | 必填 | 要发送私信的用户 ID |

**返回**: [`DmsPayload`](../models/message.md#dmspayload) — 包含 `guild_id`（私信会话 ID）、`channel_id`、`create_time`

::: tip 注意
私信会话也是一个独立的"频道"，返回的 `guild_id` 是私信会话的 ID，不是原频道 ID。
:::

## post_dms

发送私信。

**源码位置**: [`botpy/api.py` 第 669 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L669)

**API 路由**: `POST /dms/{guild_id}/messages`

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

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| guild_id | str | 必填 | 私信会话 ID，从 `create_dms` 的返回值获取 |
| content | str | `None` | 消息的文本内容 |
| embed | [`Embed`](../models/message.md#embed) | `None` | embed 消息，一种特殊的 ark |
| ark | [`Ark`](../models/message.md#ark-模板消息) | `None` | ark 模板消息 |
| message_reference | [`Reference`](../models/message.md#reference-消息引用) | `None` | 消息引用配置 |
| image | str | `None` | 要发送的图片的 URL |
| file_image | bytes \| BinaryIO \| str | `None` | 要发送的本地图片的路径、字节数据或二进制流 |
| msg_id | str | `None` | 被回复消息的 ID，可从事件中获取 |
| event_id | str | `None` | 被回复消息的事件 ID |
| markdown | [`MarkdownPayload`](../models/message.md#markdownpayload) | `None` | markdown 消息内容 |
| keyboard | [`Keyboard`](../models/message.md#keyboardpayload) | `None` | keyboard 消息按钮 |

**返回**: [`Message`](../models/message.md#message-类型)

**注意**:
- 被动回复消息有效期为 5 分钟
- 主动推送消息每日每个子频道限 2 条
- 发送消息接口要求机器人需要连接到 WebSocket gateway 保持在线状态

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
