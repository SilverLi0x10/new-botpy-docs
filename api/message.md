# 消息 API

## get_message

获取指定消息。

```python
async def get_message(channel_id: str, message_id: str) -> MessagePayload
```

## post_message

发送消息到子频道。

```python
async def post_message(
    channel_id: str,
    content: str = None,                    # 文本内容
    embed: Embed = None,                    # Embed 消息
    ark: Ark = None,                        # ARK 模板消息
    message_reference: Reference = None,    # 引用消息
    image: str = None,                      # 图片 URL
    file_image: bytes | BinaryIO | str = None,  # 本地图片
    msg_id: str = None,                     # 回复消息 ID
    event_id: str = None,                   # 事件 ID
    markdown: MarkdownPayload = None,       # Markdown 消息
    keyboard: Keyboard = None,              # 内联键盘
) -> Message
```

::: warning 注意
- 被动回复消息有效期为 5 分钟
- 主动推送消息每日每个子频道限 2 条
- 发送消息接口要求机器人需要连接到 WebSocket gateway 保持在线状态
:::

**消息类型组合**:

| 类型 | 参数 | 说明 |
|------|------|------|
| 纯文本 | content | 普通文字消息 |
| Embed | embed | 富文本 embed 消息 |
| ARK | ark | 模板消息 |
| Markdown | markdown | Markdown 格式消息 |
| 引用 | message_reference | 引用回复消息 |
| 图片URL | image | 传入网络图片地址 |
| 本地图片 | file_image | 传入 bytes/BinaryIO/路径 |
| 内联键盘 | keyboard | 按钮交互消息 |

**file_image 三种传参方式**:

```python
# 1. bytes 类型
with open("image.png", "rb") as img:
    await message.reply(file_image=img.read())

# 2. BinaryIO 对象
with open("image.png", "rb") as img:
    await message.reply(file_image=img)

# 3. 文件路径
await message.reply(file_image="image.png")
```

## recall_message

撤回消息。

```python
async def recall_message(
    channel_id: str,
    message_id: str,
    hidetip: bool = False,  # 是否隐藏撤回提示
) -> str
```

## post_keyboard_message

发送内联键盘消息。

```python
async def post_keyboard_message(
    channel_id: str,
    keyboard: KeyboardPayload = None,
    markdown: MarkdownPayload = None,
) -> Message
```

## patch_guild_message

修改频道 Markdown 消息（需要先申请权限）。

```python
async def patch_guild_message(
    channel_id: str,
    patch_msg_id: str,                  # 需要修改的消息 ID
    msg_id: str = None,
    event_id: str = None,
    markdown: MarkdownPayload = None,
    keyboard: KeyboardPayload = KeyboardPayload(content={}),
) -> Message
```

## on_interaction_result

消息按钮回调结果。

```python
async def on_interaction_result(interaction_id: str, code: int) -> None
```

**code 参数**:
| 值 | 说明 |
|----|------|
| 0 | 成功 |
| 1 | 操作失败 |
| 2 | 操作频繁 |
| 3 | 重复操作 |
| 4 | 没有权限 |
| 5 | 仅管理员操作 |
