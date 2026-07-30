# 消息类型

## MessagePayload

基础消息数据结构（`types/gateway.py`）。

```python
class MessagePayload(TypedDict):
    author: UserPayload      # 作者
    channel_id: str          # 子频道 ID
    content: str             # 消息内容
    guild_id: str            # 频道 ID
    id: str                  # 消息 ID
    member: Member           # 成员信息
    message_reference: MessageRefPayload  # 引用消息
    mentions: List[UserPayload]           # @的用户列表
    attachments: List[MessageAttachPayload]  # 附件
    timestamp: str           # 时间戳
```

## Message 类型

```python
class Message(TypedDict, MessagePayload):
    edited_timestamp: str
    mention_everyone: str
    attachments: List[Attachment]
    embeds: List[Embed]
    ark: Ark
    message_reference: Reference
    markdown: MarkdownPayload
    keyboard: KeyboardPayload
```

## Embed

```python
class Embed(TypedDict, total=False):
    title: str          # 标题
    prompt: str         # 消息弹窗内容
    thumbnail: Thumbnail  # 缩略图
    fields: List[EmbedField]  # 字段列表

class EmbedField(TypedDict):
    name: str
```

## Ark (模板消息)

```python
class Ark(TypedDict):
    template_id: int         # 模板 ID（需要申请）
    kv: List[ArkKv]          # 模板 KV 参数

class ArkKv(TypedDict, total=False):
    key: str
    value: str
    obj: List[ArkObj]

class ArkObj(TypedDict):
    obj_kv: List[ArkObjKv]

class ArkObjKv(TypedDict):
    key: str
    value: str
```

## MarkdownPayload

```python
class MarkdownPayload(TypedDict, total=False):
    custom_template_id: str               # 自定义模板 ID
    params: List[MessageMarkdownParams]   # 模板参数
    content: str                          # Markdown 原始内容

class MessageMarkdownParams(TypedDict):
    key: str
    values: List[str]
```

## KeyboardPayload

```python
class KeyboardPayload(TypedDict, total=False):
    id: str               # 预设键盘 ID
    content: Keyboard     # 自定义键盘
```

## Reference (消息引用)

```python
class Reference(TypedDict):
    message_id: str
    ignore_get_message_error: bool
```

## Media (富媒体)

```python
class Media(TypedDict):
    file_uuid: str    # 文件 ID
    file_info: str    # 文件信息（用于发消息接口的 media 字段）
    ttl: int          # 有效期（秒），0 表示长期有效
```

## DmsPayload

```python
class DmsPayload(TypedDict):
    guild_id: str     # 私信会话的 guild_id
    channel_id: str
    creat_time: str
```

## 其他消息相关类型

```python
class DeletedMessage(TypedDict):
    guild_id: str
    channel_id: str
    id: str
    author: DMOriginalAuthor

class DeletedMessageInfo(TypedDict):
    message: DeletedMessage
    op_user: DeletionOperator
```
