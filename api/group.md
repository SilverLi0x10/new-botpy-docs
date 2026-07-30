# 群消息 API

适用于群聊场景的 API（需要 `public_messages=True` 的 Intent）。

## post_group_message

发送群消息。

```python
async def post_group_message(
    group_openid: str,
    msg_type: int = 0,           # 0=文本, 1=图文混排, 2=markdown, 3=ark, 4=embed, 7=media
    content: str = None,
    embed: Embed = None,
    ark: Ark = None,
    message_reference: Reference = None,
    media: Media = None,         # 富媒体消息（需先上传文件）
    msg_id: str = None,
    msg_seq: int = 1,            # 消息序号，相同 msg_id+msg_seq 重复发送会失败
    event_id: str = None,
    markdown: MarkdownPayload = None,
    keyboard: KeyboardPayload = None,
) -> Message
```

## post_group_file

上传/发送群聊富媒体文件。

```python
async def post_group_file(
    group_openid: str,
    file_type: int,       # 1=图片, 2=视频, 3=语音, 4=文件
    url: str,             # 媒体资源 URL
    srv_send_msg: bool = False,  # 是否直接发送到目标端
) -> Media
```

**file_type 说明**:
| 值 | 类型 |
|----|------|
| 1 | 图片（png/jpg） |
| 2 | 视频（mp4） |
| 3 | 语音（silk） |
| 4 | 文件（暂不开放） |

**使用示例**:
```python
# 发送文本
await message._api.post_group_message(
    group_openid=message.group_openid,
    msg_type=0,
    msg_id=message.id,
    content=f"收到了消息：{message.content}",
)

# 发送富媒体（先上传文件）
uploadMedia = await message._api.post_group_file(
    group_openid=message.group_openid,
    file_type=1,
    url="https://example.com/image.png",
)

await message._api.post_group_message(
    group_openid=message.group_openid,
    msg_type=7,
    msg_id=message.id,
    media=uploadMedia,
)
```
