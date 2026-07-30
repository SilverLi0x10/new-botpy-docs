# C2C 消息 API

适用于好友/用户间 C2C（Customer-to-Customer）消息场景。

## post_c2c_message

发送 C2C 消息。

```python
async def post_c2c_message(
    openid: str,
    msg_type: int = 0,           # 0=文本, 1=图文混排, 2=markdown, 3=ark, 4=embed, 7=media
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

## post_c2c_file

上传/发送 C2C 富媒体文件。

```python
async def post_c2c_file(
    openid: str,
    file_type: int,       # 1=图片, 2=视频, 3=语音, 4=文件
    url: str,             # 媒体资源 URL
    srv_send_msg: bool = False,
) -> Media
```

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
