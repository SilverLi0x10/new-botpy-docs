# 数据模型

SDK 使用两种方式表示数据：

1. **TypedDict / 普通数据类**（`botpy.types`）— API 请求/响应的数据结构，提供类型提示的字典，通过键访问数据
2. **领域模型**（`botpy.message.*`、`botpy.guild.*` 等）— 事件回调中使用的 Python 对象，通过 `__slots__` 封装数据并绑定 `_api` 实例，可调用 API 方法

## 表格约定

- 每个类型单独成节，标题为该类型的名称；对同名（TypedDict 与领域模型）或需补充说明的类型，标题会附加中文注释，如 `Message (类型)`、`Message (领域模型)`。
- 每个类型使用三列表格列出**全部**变量：`变量名称 | 变量类型 | 语义说明`。
- 变量类型为 SDK 内部类型时，类型名会链接到对应文档小节。
- 部分 `Literal` 字面量别名（如 `AuditType`、`AudioStatus`）没有命名变量，使用 `取值 | 语义说明` 两列表格说明其合法取值。
- 已声明但无法从源码确定或未初始化的变量，语义标注为 **待确认**。

## 类型索引

### 消息类型（[message.md](message.md)）

| 类型 | 说明 |
|---|---|
| [MessagePayload](message.md#messagepayload) | 基础消息数据结构 |
| [DirectMessagePayload](message.md#directmessagepayload) | 私信消息数据结构 |
| [MessageAuditPayload](message.md#messageauditpayload) | 消息审核事件载荷 |
| [UserPayload](message.md#userpayload) | 用户基础信息（网关） |
| [MessageRefPayload](message.md#messagerefpayload) | 消息引用信息 |
| [MessageAttachPayload](message.md#messageattachpayload) | 消息附件信息 |
| [Attachment](message.md#attachment) / [Thumbnail](message.md#thumbnail) | 附件 / 缩略图 |
| [EmbedField](message.md#embedfield) / [Embed](message.md#embed) | Embed 消息 |
| [ArkObjKv](message.md#arkobjkv) / [ArkObj](message.md#arkobj) / [ArkKv](message.md#arkkv) / [Ark](message.md#ark-模板消息) | Ark 模板消息 |
| [Reference](message.md#reference-消息引用) | 消息引用配置 |
| [MessageMarkdownParams](message.md#messagemarkdownparams) / [MarkdownPayload](message.md#markdownpayload) | Markdown 消息 |
| [KeyboardPayload](message.md#keyboardpayload) | 内联键盘消息 |
| [Media](message.md#media-富媒体) | 富媒体消息 |
| [Message](message.md#message-类型) | 完整消息类型（继承 MessagePayload） |
| [TypesEnum](message.md#typesenum-消息分页方向) / [MessagesPager](message.md#messagespager) | 消息分页 |
| [DmsPayload](message.md#dmspayload) | 私信会话响应 |
| [DMOriginalAuthor](message.md#dmoriginalauthor) / [DeletedMessage](message.md#deletedmessage) / [DeletionOperator](message.md#deletionoperator) / [DeletedMessageInfo](message.md#deletedmessageinfo) | 消息删除相关 |

**领域模型：** [Message](message.md#message-领域模型)（含内嵌 `_User`/`_Member`/`_MessageRef`/`_Attachments`）、[DirectMessage](message.md#directmessage-领域模型)、[MessageAudit](message.md#messageaudit-领域模型)、[BaseMessage](message.md#basemessage-领域模型)、[GroupMessage](message.md#groupmessage-领域模型)、[C2CMessage](message.md#c2cmessage-领域模型)

### 频道类型（[guild.md](guild.md)）

| 类型 | 说明 |
|---|---|
| [GuildPayload](guild.md#guildpayload) | 频道数据结构 |
| [Role](guild.md#role-身份组) | 身份组 |
| [GuildRole](guild.md#guildrole) / [GuildRoles](guild.md#guildroles) | 身份组详情 / 列表 |
| [GuildMembers](guild.md#guildmembers) | 频道成员列表 |

**领域模型：** [Guild](guild.md#guild-领域模型)

### 子频道类型（[channel.md](channel.md)）

| 类型 | 说明 |
|---|---|
| [ChannelType](channel.md#channeltype-枚举) / [ChannelSubType](channel.md#channelsubtype-枚举) / [PrivateType](channel.md#privatetype-枚举) / [SpeakPermission](channel.md#speakpermission-枚举) | 子频道相关枚举 |
| [ChannelPayload](channel.md#channelpayload) | 子频道数据结构 |
| [ChannelPermissions](channel.md#channelpermissions) | 子频道权限 |

**领域模型：** [Channel](channel.md#channel-领域模型)

### 用户与成员类型（[user.md](user.md)）

| 类型 | 说明 |
|---|---|
| [User](user.md#user) | 用户信息 |
| [Member](user.md#member) | 成员信息 |
| [GuildMemberPayload](user.md#guildmemberpayload) | 频道成员信息 |

**领域模型：** [Member](user.md#member-领域模型)（含内嵌 `_User`）

### 内联键盘类型（[inline.md](inline.md)）

| 类型 | 说明 |
|---|---|
| [Keyboard](inline.md#keyboard) / [KeyboardRow](inline.md#keyboardrow) | 键盘结构 |
| [Button](inline.md#button) / [RenderData](inline.md#renderdata) / [Action](inline.md#action) / [Permission](inline.md#permission) | 按钮及行为 |

### 论坛类型（[forum.md](forum.md)）

| 类型 | 说明 |
|---|---|
| [Format](forum.md#format-字面量别名) | 帖子内容格式 |
| [ThreadInfo](forum.md#threadinfo) / [Thread](forum.md#thread-帖子) | 帖子 |
| [PostInfo](forum.md#postinfo) / [Post](forum.md#post-评论) | 评论 |
| [ReplyInfo](forum.md#replyinfo) / [Reply](forum.md#reply-回复) | 回复 |
| [AuditResult](forum.md#auditresult) | 发布审核结果 |
| [ForumRsp](forum.md#forumrsp) / [PostThreadRsp](forum.md#postthreadrsp) | 响应结构 |
| [OpenForumEvent](forum.md#openforumevent) | 开放论坛事件数据 |

**领域模型：** [Thread](forum.md#thread-领域模型)（含内嵌富文本结构）、[OpenThread](forum.md#openthread-领域模型)

### 富文本类型（[rich-text.md](rich-text.md)）

| 类型 | 说明 |
|---|---|
| [AuditType](rich-text.md#audittype) / [RichType](rich-text.md#richtype) / [AtType](rich-text.md#attype) / [ElemType](rich-text.md#elemtype) / [Alignment](rich-text.md#alignment) | 字面量别名 |
| [RichText](rich-text.md#richtext) / [Paragraph](rich-text.md#paragraph) / [ParagraphProps](rich-text.md#paragraphprops) | 富文本整体结构 |
| [Elem](rich-text.md#elem) / [TextElem](rich-text.md#textelem) / [TextProps](rich-text.md#textprops) / [ImageElem](rich-text.md#imageelem) / [PlatImage](rich-text.md#platimage) / [VideoElem](rich-text.md#videoelem) / [PlatVideo](rich-text.md#platvideo) / [URLElem](rich-text.md#urlelem) | 元素类型 |
| [RichObject](rich-text.md#richobject) / [TextInfo](rich-text.md#textinfo) / [AtInfo](rich-text.md#atinfo) / [AtUserInfo](rich-text.md#atuserinfo) / [AtRoleInfo](rich-text.md#atroleinfo) / [AtGuildInfo](rich-text.md#atguildinfo) / [URLInfo](rich-text.md#urlinfo) / [EmojiInfo](rich-text.md#emojiinfo) / [ChannelInfo](rich-text.md#channelinfo) | 富文本对象 |

### 其他类型（[other.md](other.md)）

| 类型 | 说明 |
|---|---|
| [WsContext](other.md#wscontext) / [ReadyEvent](other.md#readyevent) / [WsUrlPayload](other.md#wsurlpayload) | 网关基础类型 |
| [RecommendChannel](other.md#recommendchannel) / [AnnouncesType](other.md#announcestype-枚举) / [Announce](other.md#announce) | 公告 |
| [AudioStatus](other.md#audiostatus-字面量别名) / [PublicAudioType](other.md#publicaudiotype-字面量别名) / [AudioControl](other.md#audiocontrol) / [AudioAction](other.md#audioaction) / [AudioLive](other.md#audiolive) | 音频控制 |
| [EmojiType](other.md#emojitype-字面量别名) / [Emoji](other.md#emoji) | 表情 |
| [APIPermission](other.md#apipermission) / [APIPermissionDemandIdentify](other.md#apipermissiondemandidentify) / [APIPermissionDemand](other.md#apipermissiondemand) | API 权限 |
| [PinsMessage](other.md#pinsmessage-精华消息) | 精华消息 |
| [ReactionTargetType](other.md#reactiontargettype-字面量别名) / [ReactionTarget](other.md#reactiontarget) / [Reaction](other.md#reaction) / [ReactionUsers](other.md#reactionusers) | 表情表态 |
| [RemindType](other.md#remindtype-字面量别名) / [Schedule](other.md#schedule) | 日程 |
| [Robot](other.md#robot-类型) | 机器人信息 |
| [ShardConfig](other.md#shardconfig) / [Session](other.md#session) | WebSocket 会话 |
| [InteractionData](other.md#interactiondata) / [InteractionPayload](other.md#interactionpayload) / [InteractionType](other.md#interactiontype-枚举) / [InteractionDataType](other.md#interactiondatatype-枚举) | 交互 |

**领域模型：** [Robot](other.md#robot-领域模型)、[Token](other.md#token-领域模型)、[Audio](other.md#audio-领域模型)、[PublicAudio](other.md#publicaudio-领域模型)、[Reaction](other.md#reaction-领域模型)（含内嵌 `_Emoji`/`_Target`）、[Interaction](other.md#interaction)（含内嵌 `_Data`/`_Resolved`）、[GroupManageEvent](other.md#groupmanageevent-领域模型)、[C2CManageEvent](other.md#c2cmanageevent-领域模型)

## 数据流

```
QQ API 响应 (JSON)
  → BotAPI 方法返回 TypedDict (字典，用于 API 调用方)
  → 或 ConnectionState.parse_* 创建领域模型 (用于事件回调方)
```

## 类型映射表

| QQ API 数据 | TypedDict 类型 | 领域模型 |
|---|---|---|
| guild | [GuildPayload](guild.md#guildpayload) | [Guild](guild.md#guild-领域模型) |
| channel | [ChannelPayload](channel.md#channelpayload) | [Channel](channel.md#channel-领域模型) |
| message | [MessagePayload](message.md#messagepayload) / [Message](message.md#message-类型) | [Message](message.md#message-领域模型) |
| member | [Member](user.md#member) / [GuildMemberPayload](user.md#guildmemberpayload) | [Member](user.md#member-领域模型) |
| user | [User](user.md#user) / [UserPayload](message.md#userpayload) | `Message._User`（内嵌） |
| audio | [AudioAction](other.md#audioaction) / [AudioLive](other.md#audiolive) | [Audio](other.md#audio-领域模型) / [PublicAudio](other.md#publicaudio-领域模型) |
| reaction | [Reaction](other.md#reaction) | [Reaction](other.md#reaction-领域模型) |
| forum | [Thread](forum.md#thread-帖子) | [Thread](forum.md#thread-领域模型) |
| interaction | [InteractionPayload](other.md#interactionpayload) | [Interaction](other.md#interaction) |
