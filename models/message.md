# 消息类型

**Source files:**
- TypedDict definitions: [`botpy/types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py), [`botpy/types/gateway.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/gateway.py)
- Domain models: [`botpy/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/message.py)

**Related types:**
- [User & Member](user.md) — `UserPayload`, `Member`
- [Inline Keyboard](inline.md) — `Keyboard`
- [Guild](guild.md) — `GuildPayload`
- [Other types](other.md) — `WsContext`, `Audio`, `Reaction`, `Interaction`

---

## MessagePayload

基础消息数据结构（[`types/gateway.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/gateway.py#L43-L55)）。

```python
class MessagePayload(TypedDict):
    author: UserPayload                      # 作者
    channel_id: str                          # 子频道 ID
    content: str                             # 消息内容
    guild_id: str                            # 频道 ID
    id: str                                  # 消息 ID
    member: Member                           # 成员信息
    message_reference: MessageRefPayload     # 引用消息
    mentions: List[UserPayload]              # @的用户列表
    attachments: List[MessageAttachPayload]  # 附件
    seq: int                                 # 全局消息序号，用于消息排序
    seq_in_channel: str                      # 子频道消息序号
    timestamp: str                           # 时间戳
```

---

## Message 类型

完整的消息类型（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py#L74-L82)），继承自 `MessagePayload`。

```python
class Message(MessagePayload):
    edited_timestamp: str          # 编辑时间戳
    mention_everyone: str          # 是否@全体成员
    attachments: List[Attachment]   # 附件列表
    embeds: List[Embed]            # Embed 消息列表
    ark: Ark                       # ARK 模板消息
    message_reference: Reference   # 消息引用
    markdown: MarkdownPayload      # Markdown 消息
    keyboard: KeyboardPayload      # 内联键盘
```

---

## Gateway 基础类型

### UserPayload

用户基础信息（[`types/gateway.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/gateway.py#L10-L16)）。

```python
class UserPayload(TypedDict):
    id: str            # 用户 ID
    username: str      # 用户名
    bot: bool          # 是否为机器人
    status: int        # 状态
    avatar: str        # 头像 URL
```

### MessageRefPayload

消息引用（[`types/gateway.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/gateway.py#L18-L20)）。

```python
class MessageRefPayload(TypedDict):
    message_id: str    # 被引用消息的 ID
```

### MessageAttachPayload

消息附件（[`types/gateway.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/gateway.py#L22-L29)）。

```python
class MessageAttachPayload(TypedDict):
    content_type: str    # 内容类型（如 image/png）
    filename: str        # 文件名
    height: int          # 高度（图片）
    width: int           # 宽度（图片）
    id: str              # 附件 ID
    size: int            # 文件大小
    url: str             # 附件 URL
```

---

## Attachment

附件的 TypedDict（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py#L9-L10)）。

```python
class Attachment(TypedDict):
    url: str             # 附件 URL
```

---

## Thumbnail

缩略图（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py#L13-L14)）。

```python
class Thumbnail(TypedDict):
    url: str             # 图片地址
```

---

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

---

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

---

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

---

## KeyboardPayload

```python
class KeyboardPayload(TypedDict, total=False):
    id: str               # 预设键盘 ID
    content: Keyboard     # 自定义键盘（参见 [Inline](inline.md)）
```

---

## Reference (消息引用)

```python
class Reference(TypedDict):
    message_id: str
    ignore_get_message_error: bool
```

---

## Media (富媒体)

```python
class Media(TypedDict):
    file_uuid: str    # 文件 ID
    file_info: str    # 文件信息（用于发消息接口的 media 字段）
    ttl: int          # 有效期（秒），0 表示长期有效
```

---

## DirectMessagePayload

私信消息数据结构（[`types/gateway.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/gateway.py#L58-L71)）。

```python
class DirectMessagePayload(TypedDict):
    author: UserPayload                      # 作者
    channel_id: str                          # 子频道 ID
    content: str                             # 消息内容
    direct_message: bool                     # 是否为私信消息
    guild_id: str                            # 频道 ID（私信会话 guild_id）
    id: str                                  # 消息 ID
    member: Member                           # 成员信息
    message_reference: MessageRefPayload     # 引用消息
    attachments: List[MessageAttachPayload]  # 附件
    seq: int                                 # 全局消息序号
    seq_in_channel: str                      # 子频道消息序号
    src_guild_id: str                        # 来源频道 ID
    timestamp: str                           # 时间戳
```

---

## MessageAuditPayload

消息审核事件载荷（[`types/gateway.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/gateway.py#L74-L81)）。

```python
class MessageAuditPayload(TypedDict):
    audit_id: str          # 审核 ID
    message_id: str        # 消息 ID
    guild_id: str          # 频道 ID
    channel_id: str        # 子频道 ID
    audit_time: str        # 审核时间
    create_time: str       # 创建时间
    seq_in_channel: str    # 子频道消息序号
```

---

## DmsPayload

创建私信会话的响应（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py#L98-L101)）。

```python
class DmsPayload(TypedDict):
    guild_id: str     # 私信会话的 guild_id（注意：每个私信会话是一个独立的 guild）
    channel_id: str   # 私信会话的子频道 ID
    creat_time: str   # 创建时间
```

---

## TypesEnum (消息分页方向)

消息分页方向枚举（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py#L85-L89)）。

```python
class TypesEnum(Enum):
    around = "around"   # 取 ID 前后
    before = "before"   # 取 ID 之前
    after = "after"     # 取 ID 之后
    latest = ""         # 最新消息
```

## MessagesPager

消息分页参数（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py#L92-L95)）。

```python
class MessagesPager(TypedDict):
    type: TypesEnum    # 分页方向
    id: str            # 起始消息 ID
    limit: str         # 每页条数
```

---

## 消息删除相关类型

### DMOriginalAuthor

私信原始作者（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py#L104-L107)）。

```python
class DMOriginalAuthor(TypedDict):
    id: str            # 用户 ID
    username: str      # 用户名
    bot: bool          # 是否为机器人
```

### DeletionOperator

删除操作者（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py#L117-L118)）。

```python
class DeletionOperator(TypedDict):
    id: str            # 操作者 ID
```

### DeletedMessage

被删除的消息（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py#L110-L114)）。

```python
class DeletedMessage(TypedDict):
    guild_id: str        # 频道 ID
    channel_id: str      # 子频道 ID
    id: str              # 被删除消息的 ID
    author: DMOriginalAuthor  # 消息原始作者
```

### DeletedMessageInfo

删除消息事件信息（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py#L121-L123)）。

```python
class DeletedMessageInfo(TypedDict):
    message: DeletedMessage    # 被删除的消息
    op_user: DeletionOperator  # 删除操作者
```

---

## 领域模型类

以下类在事件回调中作为参数传递，是对 TypedDict 数据的封装。

### Message ([`botpy/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/message.py#L5-L84))

通过 `on_at_message_create` 等事件回调接收。

```python
class Message:
    __slots__ = (
        "_api",           # BotAPI 实例
        "author",         # _User 对象
        "content",        # 消息内容
        "channel_id",     # 子频道 ID
        "id",             # 消息 ID
        "guild_id",       # 频道 ID
        "member",         # _Member 对象
        "message_reference",  # _MessageRef 对象
        "mentions",       # List[_User] 对象
        "attachments",    # List[_Attachments] 对象
        "seq",            # 全局消息序号
        "seq_in_channel", # 子频道消息序号
        "timestamp",      # 时间戳
        "event_id",       # 事件 ID
    )

    async def reply(self, **kwargs) -> dict:
        """快捷回复消息，内部调用 post_message()"""
        return await self._api.post_message(channel_id=self.channel_id, msg_id=self.id, **kwargs)
```

**内部嵌套类：**

| 类名 | 属性 | 说明 |
|------|------|------|
| `_User` | `id`, `username`, `bot`, `avatar` | 作者信息 |
| `_Member` | `nick`, `roles`, `joined_at` | 成员信息 |
| `_MessageRef` | `message_id` | 引用消息 ID |
| `_Attachments` | `content_type`, `filename`, `height`, `width`, `id`, `size`, `url` | 附件信息 |

### DirectMessage ([`botpy/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/message.py#L87-L163))

通过 `on_direct_message_create` 事件回调接收，继承自 `DirectMessagePayload`。

```python
class DirectMessage:
    __slots__ = (
        "_api", "author", "content", "direct_message", "channel_id", "id",
        "guild_id", "member", "message_reference", "attachments",
        "seq", "seq_in_channel", "src_guild_id", "timestamp", "event_id",
    )

    async def reply(self, **kwargs) -> dict:
        """快捷回复私信，内部调用 post_dms()"""
        return await self._api.post_dms(guild_id=self.guild_id, msg_id=self.id, **kwargs)
```

### MessageAudit ([`botpy/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/message.py#L167-L187))

通过 `on_message_audit_pass` / `on_message_audit_reject` 事件回调接收。

```python
class MessageAudit:
    __slots__ = (
        "_api", "audit_id", "message_id", "channel_id", "guild_id", "event_id",
    )
```

### GroupMessage ([`botpy/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/message.py#L238-L261))

群聊消息，通过 `on_group_at_message_create` 事件回调接收。继承自 `BaseMessage`。

```python
class GroupMessage(BaseMessage):
    __slots__ = ("author", "group_openid")

    async def reply(self, **kwargs) -> dict:
        return await self._api.post_group_message(group_openid=self.group_openid, msg_id=self.id, **kwargs)

    class _User:
        def __init__(self, data):
            self.member_openid = data.get("member_openid", None)
```

### C2CMessage ([`botpy/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/message.py#L263-L283))

C2C（单聊）消息，通过 `on_c2c_message_create` 事件回调接收。继承自 `BaseMessage`。

```python
class C2CMessage(BaseMessage):
    __slots__ = ("author",)

    async def reply(self, **kwargs) -> dict:
        return await self._api.post_c2c_message(openid=self.author.user_openid, msg_id=self.id, **kwargs)

    class _User:
        def __init__(self, data):
            self.user_openid = data.get("user_openid", None)
```
