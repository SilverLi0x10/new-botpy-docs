# C2C 消息 API

适用于好友/用户间 C2C（Customer-to-Customer）消息场景。

## post_c2c_message

发送 C2C 消息。

**源码位置**: [`botpy/api.py` 第 1426 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L1426)

**API 路由**: `POST /v2/users/{openid}/messages`

```python
async def post_c2c_message(
    openid: str,
    msg_type: int = 0,
    content: str = None,
    embed: Embed = None,
    ark: Ark = None,
    message_reference: Reference = None,
    media: Media = None,
    msg_id: str = None,
    msg_seq: int = 1,
    event_id: str = None,
    markdown: MarkdownPayload = None,
    keyboard: KeyboardPayload = None,
) -> Message
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| openid | str | 必填 | 目标用户的 openid |
| msg_type | int | `0` | 消息类型：`0` 文本，`1` 图文混排，`2` markdown，`3` ark，`4` embed，`7` media 富媒体 |
| content | str | `None` | 消息的文本内容 |
| embed | [`Embed`](../models/message.md#embed) | `None` | embed 消息，一种特殊的 ark |
| ark | [`Ark`](../models/message.md#ark-模板消息) | `None` | ark 模板消息 |
| message_reference | [`Reference`](../models/message.md#reference-消息引用) | `None` | 消息引用配置 |
| media | [`Media`](../models/message.md#media-富媒体) | `None` | 富媒体消息（需先通过 `post_c2c_file` 上传文件） |
| msg_id | str | `None` | 被回复消息的 ID，可从事件中获取 |
| msg_seq | int | `1` | 回复消息的序号，与 `msg_id` 联合使用。相同的 `msg_id` + `msg_seq` 重复发送会失败 |
| event_id | str | `None` | 被回复消息的事件 ID |
| markdown | [`MarkdownPayload`](../models/message.md#markdownpayload) | `None` | markdown 消息内容 |
| keyboard | [`KeyboardPayload`](../models/message.md#keyboardpayload) | `None` | keyboard 消息按钮 |

**返回**: [`Message`](../models/message.md#message-类型)

**注意**:
- 发送成功之后，会触发一个创建消息的事件
- 被动回复消息有效期为 5 分钟
- 发送消息接口要求机器人需要连接到 WebSocket gateway 保持在线状态

## post_c2c_file

上传/发送 C2C 富媒体文件。

**源码位置**: [`botpy/api.py` 第 1493 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L1493)

**API 路由**: `POST /v2/users/{openid}/files`

```python
async def post_c2c_file(
    openid: str,
    file_type: int,
    url: str,
    srv_send_msg: bool = False,
) -> Media
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| openid | str | 必填 | 目标用户的 openid |
| file_type | int | 必填 | 媒体类型（见下方说明） |
| url | str | 必填 | 媒体资源的 URL |
| srv_send_msg | bool | `False` | 设为 `True` 时直接发送消息到目标端，会占用主动消息频次 |

**file_type 说明**:
| 值 | 类型 | 说明 |
|----|------|------|
| 1 | 图片 | png/jpg |
| 2 | 视频 | mp4 |
| 3 | 语音 | silk |
| 4 | 文件 | 暂不开放 |

**返回**: [`Media`](../models/message.md#media-富媒体)

**Media 字段**:
| 字段 | 类型 | 说明 |
|------|------|------|
| file_uuid | str | 文件 ID |
| file_info | str | 文件信息，用于 `post_c2c_message` 的 `media` 字段 |
| ttl | int | 有效期（秒），到期后 `file_info` 失效，等于 `0` 时可长期使用 |

**使用示例**:
```python
# 发送文本回复
await message._api.post_c2c_message(
    openid=message.author.user_openid,
    msg_type=0,
    msg_id=message.id,
    content=f"我收到了你的消息：{message.content}",
)

# 发送富媒体
uploadMedia = await message._api.post_c2c_file(
    openid=message.author.user_openid,
    file_type=1,
    url="https://example.com/image.png",
)
await message._api.post_c2c_message(
    openid=message.author.user_openid,
    msg_type=7,
    msg_id=message.id,
    media=uploadMedia,
)
```
