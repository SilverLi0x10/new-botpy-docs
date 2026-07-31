# 消息 API

所有 API 方法通过 `self.api` 调用。[**源码位置**](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py)。

## `get_message`

获取指定消息。API 路径：`GET /channels/{channel_id}/messages/{message_id}`

```python
async def get_message(
    channel_id: str,
    message_id: str,
) -> message.MessagePayload
```

| 参数 | 类型 | 说明 |
|------|------|------|
| `channel_id` | `str` | 消息所在子频道 ID |
| `message_id` | `str` | 消息 ID |

**返回**: [`MessagePayload`](../models/message.md#messagepayload) — 消息字典对象

源码位置：[`botpy/api.py` 第 481-495 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L481-L495)。

## `post_message`

发送消息到子频道。API 路径：`POST /channels/{channel_id}/messages`

```python
async def post_message(
    channel_id: str,
    content: str = None,
    embed: message.Embed = None,
    ark: message.Ark = None,
    message_reference: message.Reference = None,
    image: str = None,
    file_image: Union[bytes, BinaryIO, str] = None,
    msg_id: str = None,
    event_id: str = None,
    markdown: message.MarkdownPayload = None,
    keyboard: message.KeyboardPayload = None,
) -> message.Message
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `channel_id` | `str` | **必填** | 目标子频道 ID |
| `content` | `Optional[str]` | `None` | 文本消息内容 |
| `embed` | [`Optional[Embed]`](../models/message.md#embed) | `None` | Embed 富文本消息 |
| `ark` | [`Optional[Ark]`](../models/message.md#ark-模板消息) | `None` | ARK 模板消息 |
| `message_reference` | [`Optional[Reference]`](../models/message.md#reference-消息引用) | `None` | 引用消息 |
| `image` | `Optional[str]` | `None` | 图片 URL |
| `file_image` | `Union[bytes, BinaryIO, str, None]` | `None` | 本地图片（bytes/文件对象/路径） |
| `msg_id` | `Optional[str]` | `None` | 回复消息 ID（被动回复使用） |
| `event_id` | `Optional[str]` | `None` | 事件 ID |
| `markdown` | [`Optional[MarkdownPayload]`](../models/message.md#markdownpayload) | `None` | Markdown 消息 |
| `keyboard` | [`Optional[KeyboardPayload]`](../models/message.md#keyboardpayload) | `None` | 内联键盘 |

**返回**: [`Message`](../models/message.md#message-类型) — 消息字典对象

::: warning 注意
- 被动回复消息有效期为 5 分钟
- 主动推送消息每日每个子频道限 2 条
- 发送消息接口要求机器人需要连接到 WebSocket gateway 保持在线状态
- 当传入 `file_image` 时，`message_reference` 不能同时传入
:::

**file_image 三种传参方式**:

```python
# 1. bytes 类型
with open("image.png", "rb") as img:
    await self.api.post_message(channel_id, file_image=img.read())

# 2. BinaryIO 对象
with open("image.png", "rb") as img:
    await self.api.post_message(channel_id, file_image=img)

# 3. 文件路径（自动读取）
await self.api.post_message(channel_id, file_image="image.png")
```

**消息类型组合**:

| 类型 | 参数 | 说明 |
|------|------|------|
| 纯文本 | `content` | 普通文字消息 |
| Embed | `embed` | 富文本 embed 消息 |
| ARK | `ark` | 模板消息 |
| Markdown | `markdown` | Markdown 格式消息 |
| 引用 | `message_reference` | 引用回复消息 |
| 图片URL | `image` | 传入网络图片地址 |
| 本地图片 | `file_image` | 传入 bytes/BinaryIO/路径 |
| 内联键盘 | `keyboard` | 按钮交互消息 |

源码位置：[`botpy/api.py` 第 497-546 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L497-L546)。

## `recall_message`

撤回消息。API 路径：`DELETE /channels/{channel_id}/messages/{message_id}`

```python
async def recall_message(
    channel_id: str,
    message_id: str,
    hidetip: bool = False,
) -> str
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `channel_id` | `str` | **必填** | 消息所在子频道 ID |
| `message_id` | `str` | **必填** | 要撤回的消息 ID |
| `hidetip` | `bool` | `False` | 是否隐藏撤回提示小灰条 |

**返回**: 成功返回空字符串

::: tip
管理员可以撤回普通成员的消息；频道主可以撤回所有人的消息。
:::

源码位置：[`botpy/api.py` 第 548-572 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L548-L572)。

## `post_keyboard_message`

发送内联键盘消息。API 路径：`POST /channels/{channel_id}/messages`

```python
async def post_keyboard_message(
    channel_id: str,
    keyboard: message.KeyboardPayload = None,
    markdown: message.MarkdownPayload = None,
) -> message.Message
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `channel_id` | `str` | **必填** | 目标子频道 ID |
| `keyboard` | [`Optional[KeyboardPayload]`](../models/message.md#keyboardpayload) | `None` | 键盘配置 |
| `markdown` | [`Optional[MarkdownPayload]`](../models/message.md#markdownpayload) | `None` | Markdown 消息内容 |

**返回**: [`Message`](../models/message.md#message-类型)

源码位置：[`botpy/api.py` 第 574-597 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L574-L597)。

## `patch_guild_message`

修改频道 Markdown 消息（需要先申请权限）。API 路径：`PATCH /channels/{channel_id}/messages/{patch_msg_id}`

```python
async def patch_guild_message(
    channel_id: str,
    patch_msg_id: str,
    msg_id: str = None,
    event_id: str = None,
    markdown: message.MarkdownPayload = None,
    keyboard: message.KeyboardPayload = message.KeyboardPayload(content={}),
) -> message.Message
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `channel_id` | `str` | **必填** | 消息所在子频道 ID |
| `patch_msg_id` | `str` | **必填** | 需要修改的消息 ID |
| `msg_id` | `Optional[str]` | `None` | 回复消息 ID |
| `event_id` | `Optional[str]` | `None` | 事件 ID |
| `markdown` | [`Optional[MarkdownPayload]`](../models/message.md#markdownpayload) | `None` | 新 Markdown 内容 |
| `keyboard` | [`KeyboardPayload`](../models/message.md#keyboardpayload) | `{}` | 新键盘配置 |

**返回**: [`Message`](../models/message.md#message-类型)

源码位置：[`botpy/api.py` 第 618-649 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L618-L649)。

## `on_interaction_result`

消息按钮回调结果。API 路径：`PUT /interactions/{id}`

```python
async def on_interaction_result(
    interaction_id: str,
    code: int,
) -> None
```

| 参数 | 类型 | 说明 |
|------|------|------|
| `interaction_id` | `str` | 消息按钮回调事件的 ID |
| `code` | `int` | 回调结果码 |

**code 参数**:

| 值 | 说明 |
|----|------|
| `0` | 成功 |
| `1` | 操作失败 |
| `2` | 操作频繁 |
| `3` | 重复操作 |
| `4` | 没有权限 |
| `5` | 仅管理员操作 |

源码位置：[`botpy/api.py` 第 599-616 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L599-L616)。
