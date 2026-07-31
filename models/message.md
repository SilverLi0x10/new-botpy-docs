# 消息模型

**来源文件：**
- TypedDict 定义：[`botpy/types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py)、[`botpy/types/gateway.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/gateway.py)
- 领域模型：[`botpy/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/message.py)

**相关类型：** [User & Member 模型](user.md)、[Inline 模型](inline.md)、[Other 模型](other.md)

---

## MessagePayload

基础消息数据结构（[`types/gateway.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/gateway.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| author | [UserPayload](#userpayload) | 消息作者 |
| channel_id | str | 子频道 ID |
| content | str | 消息内容 |
| guild_id | str | 频道 ID |
| id | str | 消息 ID |
| member | [Member](user.md#member) | 成员信息 |
| message_reference | [MessageRefPayload](#messagerefpayload) | 被引用消息信息 |
| mentions | List[[UserPayload](#userpayload)] | @ 的用户列表 |
| attachments | List[[MessageAttachPayload](#messageattachpayload)] | 附件列表 |
| seq | int | 全局消息序号，用于消息排序 |
| seq_in_channel | str | 子频道消息序号 |
| timestamp | str | 消息时间戳 |

---

## DirectMessagePayload

私信消息数据结构（[`types/gateway.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/gateway.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| author | [UserPayload](#userpayload) | 消息作者 |
| channel_id | str | 子频道 ID |
| content | str | 消息内容 |
| direct_message | bool | 是否为私信消息 |
| guild_id | str | 频道 ID（私信会话的 guild_id） |
| id | str | 消息 ID |
| member | [Member](user.md#member) | 成员信息 |
| message_reference | [MessageRefPayload](#messagerefpayload) | 被引用消息信息 |
| attachments | List[[MessageAttachPayload](#messageattachpayload)] | 附件列表 |
| seq | int | 全局消息序号 |
| seq_in_channel | str | 子频道消息序号 |
| src_guild_id | str | 来源频道 ID |
| timestamp | str | 消息时间戳 |

---

## MessageAuditPayload

消息审核事件载荷（[`types/gateway.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/gateway.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| audit_id | str | 审核 ID |
| message_id | str | 消息 ID |
| guild_id | str | 频道 ID |
| channel_id | str | 子频道 ID |
| audit_time | str | 审核时间 |
| create_time | str | 创建时间 |
| seq_in_channel | str | 子频道消息序号 |

---

## UserPayload

用户基础信息（[`types/gateway.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/gateway.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| id | str | 用户 ID |
| username | str | 用户名 |
| bot | bool | 是否为机器人 |
| status | int | 用户状态 |
| avatar | str | 头像 URL |

---

## MessageRefPayload

消息引用信息（[`types/gateway.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/gateway.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| message_id | str | 被引用消息的 ID |

---

## MessageAttachPayload

消息附件信息（[`types/gateway.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/gateway.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| content_type | str | 内容类型（如 image/png） |
| filename | str | 文件名 |
| height | int | 高度（图片） |
| width | int | 宽度（图片） |
| id | str | 附件 ID |
| size | int | 文件大小 |
| url | str | 附件 URL |

---

## Attachment

附件（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| url | str | 附件 URL |

---

## Thumbnail

缩略图（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| url | str | 图片地址 |

---

## EmbedField

Embed 字段（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| name | str | 字段名称 |

---

## Embed

Embed 消息（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py)，`total=False`，全部字段可选）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| title | str | 标题 |
| prompt | str | 消息弹窗内容 |
| thumbnail | [Thumbnail](#thumbnail) | 缩略图 |
| fields | List[[EmbedField](#embedfield)] | 字段列表 |

---

## ArkObjKv

Ark 子对象键值（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| key | str | 键 |
| value | str | 值 |

---

## ArkObj

Ark 子对象（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| obj_kv | List[[ArkObjKv](#arkobjkv)] | 键值对列表 |

---

## ArkKv

Ark 键值参数（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py)，`total=False`）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| key | str | 键 |
| value | str | 值 |
| obj | List[[ArkObj](#arkobj)] | 子对象列表 |

---

## Ark (模板消息)

Ark 模板消息（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| template_id | int | 模板 ID（需向平台申请） |
| kv | List[[ArkKv](#arkkv)] | 模板 KV 参数 |

---

## Reference (消息引用)

消息引用配置（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| message_id | str | 被引用消息 ID |
| ignore_get_message_error | bool | 是否忽略获取被引用消息失败的错误 |

---

## MessageMarkdownParams

Markdown 模板参数（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| key | str | 参数名 |
| values | List[str] | 参数值列表 |

---

## MarkdownPayload

Markdown 消息（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py)，`total=False`）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| custom_template_id | str | 自定义模板 ID |
| params | List[[MessageMarkdownParams](#messagemarkdownparams)] | 模板参数 |
| content | str | Markdown 原始内容 |

---

## KeyboardPayload

内联键盘消息（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py)，`total=False`）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| id | str | 预设键盘 ID |
| content | [Keyboard](inline.md#keyboard) | 自定义键盘内容 |

---

## Media (富媒体)

富媒体消息（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| file_uuid | str | 文件 ID |
| file_info | str | 文件信息，用于发消息接口的 `media` 字段 |
| ttl | int | 有效期（秒），0 表示长期有效 |

---

## Message (类型)

完整消息类型，继承自 [MessagePayload](#messagepayload)。下表列出自身新增字段，其余字段（`author`、`content`、`id` 等）见 [MessagePayload](#messagepayload)。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| edited_timestamp | str | 编辑时间戳 |
| mention_everyone | str | 是否 @ 全体成员 |
| attachments | List[[Attachment](#attachment)] | 附件列表 |
| embeds | List[[Embed](#embed)] | Embed 消息列表 |
| ark | [Ark](#ark-模板消息) | Ark 模板消息 |
| message_reference | [Reference](#reference-消息引用) | 消息引用 |
| markdown | [MarkdownPayload](#markdownpayload) | Markdown 消息 |
| keyboard | [KeyboardPayload](#keyboardpayload) | 内联键盘 |

---

## TypesEnum (消息分页方向)

消息分页方向枚举（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| around | str | 取 ID 前后消息 |
| before | str | 取 ID 之前消息 |
| after | str | 取 ID 之后消息 |
| latest | str | 最新消息（空字符串） |

---

## MessagesPager

消息分页参数（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| type | [TypesEnum](#typesenum-消息分页方向) | 分页方向 |
| id | str | 起始消息 ID |
| limit | str | 每页条数 |

---

## DmsPayload

创建私信会话的响应（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| guild_id | str | 私信会话的 guild_id（每个私信会话是独立的 guild） |
| channel_id | str | 私信会话的子频道 ID |
| creat_time | str | 创建时间 |

---

## DMOriginalAuthor

私信消息原始作者（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| id | str | 用户 ID |
| username | str | 用户名 |
| bot | bool | 是否为机器人 |

---

## DeletedMessage

被删除的消息（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| guild_id | str | 频道 ID |
| channel_id | str | 子频道 ID |
| id | str | 被删除消息的 ID |
| author | [DMOriginalAuthor](#dmoriginalauthor) | 消息原始作者 |

---

## DeletionOperator

删除操作者（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| id | str | 操作者 ID |

---

## DeletedMessageInfo

删除消息事件信息（[`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| message | [DeletedMessage](#deletedmessage) | 被删除的消息 |
| op_user | [DeletionOperator](#deletionoperator) | 删除操作者 |

---

## Message (领域模型)

消息领域模型，通过 `on_at_message_create`、`on_message_create`、`on_public_message_delete` 等事件回调接收，是对 `MessagePayload` 的封装，提供 `reply()` 方法。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| _api | [BotAPI](../api/) | BotAPI 实例，用于调用 API 方法 |
| author | Message._User | 消息作者（嵌套对象） |
| content | str | 消息内容 |
| channel_id | str | 子频道 ID |
| id | str | 消息 ID |
| guild_id | str | 频道 ID |
| member | Message._Member | 成员信息（嵌套对象） |
| message_reference | Message._MessageRef | 被引用消息信息（嵌套对象） |
| mentions | List[Message._User] | @ 的用户列表 |
| attachments | List[Message._Attachments] | 附件列表 |
| seq | int | 全局消息序号 |
| seq_in_channel | str | 子频道消息序号 |
| timestamp | str | 消息时间戳 |
| event_id | str | 事件 ID |

`reply(**kwargs)`：快捷回复消息，内部调用 `post_message(channel_id=..., msg_id=...)`。

### Message._User

消息作者对象，由 `__init__` 中的赋值逻辑推断得出。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| id | str | 用户 ID |
| username | str | 用户名 |
| bot | bool | 是否为机器人 |
| avatar | str | 头像 URL |

### Message._Member

成员信息对象。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| nick | str | 频道昵称 |
| roles | List[str] | 身份组 ID 列表 |
| joined_at | str | 加入时间 |

### Message._MessageRef

引用消息对象。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| message_id | str | 被引用消息 ID |

### Message._Attachments

附件对象。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| content_type | str | 内容类型（如 image/png） |
| filename | str | 文件名 |
| height | int | 高度（图片） |
| width | int | 宽度（图片） |
| id | str | 附件 ID |
| size | int | 文件大小 |
| url | str | 附件 URL |

---

## DirectMessage (领域模型)

私信消息领域模型，通过 `on_direct_message_create` / `on_direct_message_delete` 事件回调接收，是对 `DirectMessagePayload` 的封装，提供 `reply()` 方法。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| _api | [BotAPI](../api/) | BotAPI 实例，用于调用 API 方法 |
| author | DirectMessage._User | 消息作者（嵌套对象） |
| content | str | 消息内容 |
| direct_message | bool | 是否为私信消息 |
| channel_id | str | 子频道 ID |
| id | str | 消息 ID |
| guild_id | str | 频道 ID（私信会话的 guild_id） |
| member | DirectMessage._Member | 成员信息（嵌套对象） |
| message_reference | DirectMessage._MessageRef | 被引用消息信息（嵌套对象） |
| attachments | List[DirectMessage._Attachments] | 附件列表 |
| seq | int | 全局消息序号 |
| seq_in_channel | str | 子频道消息序号 |
| src_guild_id | str | 来源频道 ID |
| timestamp | str | 消息时间戳 |
| event_id | str | 事件 ID |

`reply(**kwargs)`：快捷回复私信，内部调用 `post_dms(guild_id=..., msg_id=...)`。

### DirectMessage._User

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| id | str | 用户 ID |
| username | str | 用户名 |
| avatar | str | 头像 URL |

### DirectMessage._Member

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| joined_at | str | 加入时间 |

### DirectMessage._MessageRef

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| message_id | str | 被引用消息 ID |

### DirectMessage._Attachments

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| content_type | str | 内容类型（如 image/png） |
| filename | str | 文件名 |
| height | int | 高度（图片） |
| width | int | 宽度（图片） |
| id | str | 附件 ID |
| size | int | 文件大小 |
| url | str | 附件 URL |

---

## MessageAudit (领域模型)

消息审核领域模型，通过 `on_message_audit_pass` / `on_message_audit_reject` 事件回调接收。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| _api | [BotAPI](../api/) | BotAPI 实例，用于调用 API 方法 |
| audit_id | str | 审核 ID |
| message_id | str | 消息 ID |
| channel_id | str | 子频道 ID |
| guild_id | str | 频道 ID |
| event_id | str | 事件 ID |

---

## BaseMessage (领域模型)

群聊 / C2C 消息的公共基类，封装了消息通用字段。不会被直接实例化。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| _api | [BotAPI](../api/) | BotAPI 实例，用于调用 API 方法 |
| content | str | 消息内容 |
| id | str | 消息 ID |
| message_reference | BaseMessage._MessageRef | 被引用消息信息（嵌套对象） |
| mentions | List[_User] | @ 的用户列表（`_User` 由子类提供） |
| attachments | List[BaseMessage._Attachments] | 附件列表 |
| msg_seq | str | 全局消息序号 |
| timestamp | str | 消息时间戳 |
| event_id | str | 事件 ID |

### BaseMessage._MessageRef

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| message_id | str | 被引用消息 ID |

### BaseMessage._Attachments

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| content_type | str | 内容类型（如 image/png） |
| filename | str | 文件名 |
| height | int | 高度（图片） |
| width | int | 宽度（图片） |
| id | str | 附件 ID |
| size | int | 文件大小 |
| url | str | 附件 URL |

---

## GroupMessage (领域模型)

群聊消息领域模型，继承自 [BaseMessage](#basemessage-领域模型)，通过 `on_group_at_message_create` 事件回调接收，提供 `reply()` 方法。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| _api | [BotAPI](../api/) | BotAPI 实例（继承自 BaseMessage） |
| content | str | 消息内容（继承自 BaseMessage） |
| id | str | 消息 ID（继承自 BaseMessage） |
| message_reference | GroupMessage._MessageRef | 被引用消息信息（继承自 BaseMessage） |
| mentions | List[GroupMessage._User] | @ 的用户列表（继承自 BaseMessage） |
| attachments | List[GroupMessage._Attachments] | 附件列表（继承自 BaseMessage） |
| msg_seq | str | 全局消息序号（继承自 BaseMessage） |
| timestamp | str | 消息时间戳（继承自 BaseMessage） |
| event_id | str | 事件 ID（继承自 BaseMessage） |
| author | GroupMessage._User | 消息作者（嵌套对象） |
| group_openid | str | 群 openid |

`reply(**kwargs)`：快捷回复群消息，内部调用 `post_group_message(group_openid=..., msg_id=...)`。

### GroupMessage._User

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| member_openid | str | 群成员 openid |

---

## C2CMessage (领域模型)

C2C（单聊）消息领域模型，继承自 [BaseMessage](#basemessage-领域模型)，通过 `on_c2c_message_create` 事件回调接收，提供 `reply()` 方法。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| _api | [BotAPI](../api/) | BotAPI 实例（继承自 BaseMessage） |
| content | str | 消息内容（继承自 BaseMessage） |
| id | str | 消息 ID（继承自 BaseMessage） |
| message_reference | C2CMessage._MessageRef | 被引用消息信息（继承自 BaseMessage） |
| mentions | List[C2CMessage._User] | @ 的用户列表（继承自 BaseMessage） |
| attachments | List[C2CMessage._Attachments] | 附件列表（继承自 BaseMessage） |
| msg_seq | str | 全局消息序号（继承自 BaseMessage） |
| timestamp | str | 消息时间戳（继承自 BaseMessage） |
| event_id | str | 事件 ID（继承自 BaseMessage） |
| author | C2CMessage._User | 消息作者（嵌套对象） |

`reply(**kwargs)`：快捷回复 C2C 消息，内部调用 `post_c2c_message(openid=...)`。

### C2CMessage._User

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| user_openid | str | 用户 openid |
