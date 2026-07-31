# 其他模型

**来源文件：** 多个 `botpy/types/*.py` 与 `botpy/` 根目录领域模型

**相关类型：** [Message 模型](message.md)、[User & Member 模型](user.md)、[Inline 模型](inline.md)

---

## Gateway 基础类型

### WsContext

被动事件上下文（[`types/gateway.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/gateway.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| id | str | 被动事件携带的上下文信息，目前仅部分事件支持 |

### ReadyEvent

WebSocket 连接就绪事件（[`types/gateway.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/gateway.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| version | int | 协议版本 |
| session_id | str | 会话 ID |
| user | [UserPayload](message.md#userpayload) | 机器人用户信息 |
| shard | List[int] | 分片信息 `[shard_id, shard_count]` |

### WsUrlPayload

WebSocket 接入地址（[`types/gateway.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/gateway.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| url | str | WebSocket 接入地址 |

---

## Announce (公告)

公告相关的数据结构（[`types/announce.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/announce.py)）。

### RecommendChannel

推荐子频道信息。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| channel_id | str | 推荐子频道 ID |
| introduce | str | 推荐语 |

### AnnouncesType (枚举)

公告类型。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| MEMBER | int | 成员公告（值 0） |
| WELCOME | int | 欢迎公告（值 1） |

### Announce

公告数据结构。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| guild_id | str | 频道 ID |
| channel_id | str | 子频道 ID |
| message_id | str | 消息 ID |
| announces_type | [AnnouncesType](#announcestype-枚举) | 公告类型 |
| recommend_channels | List[[RecommendChannel](#recommendchannel)] | 推荐子频道列表 |

---

## Audio (音频控制)

音频控制相关的数据结构（[`types/audio.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/audio.py)）。

### AudioStatus (字面量别名)

音频状态（`Literal[0, 1, 2, 3]`）。

| 取值 | 语义说明 |
|---|---|
| 0 | 开始 |
| 1 | 暂停 |
| 2 | 继续 |
| 3 | 停止 |

### PublicAudioType (字面量别名)

音视频子频道类型（`Literal[2, 5]`）。

| 取值 | 语义说明 |
|---|---|
| 2 | 音视频 |
| 5 | 直播 |

### AudioControl

音频控制参数。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| audio_url | str | 音频 URL |
| text | str | 音频文本 |
| status | [AudioStatus](#audiostatus-字面量别名) | 音频状态 |

### AudioAction

音频操作事件数据。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| guild_id | str | 频道 ID |
| channel_id | str | 子频道 ID |
| audio_url | str | 音频 URL |
| text | str | 音频文本 |

### AudioLive

音视频 / 直播子频道成员事件数据。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| guild_id | str | 频道 ID |
| channel_id | str | 子频道 ID |
| channel_type | [PublicAudioType](#publicaudiotype-字面量别名) | 频道类型（2=音视频，5=直播） |
| user_id | str | 用户 ID |

---

## Emoji (表情)

表情相关的数据结构（[`types/emoji.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/emoji.py)）。

### EmojiType (字面量别名)

表情类型（`Literal[1, 2]`）。

| 取值 | 语义说明 |
|---|---|
| 1 | 系统表情 |
| 2 | emoji 表情 |

### Emoji

表情数据结构。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| id | str | 表情 ID |
| type | [EmojiType](#emojitype-字面量别名) | 表情类型（1=系统表情，2=emoji 表情） |

---

## APIPermission (API 权限)

API 权限相关的数据结构（[`types/permission.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/permission.py)）。

### APIPermissionDemandIdentify

API 权限需求标识。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| path | str | API 路径 |
| method | str | 请求方法 |

### APIPermissionDemand

API 权限需求。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| guild_id | str | 频道 ID |
| channel_id | str | 子频道 ID |
| api_identify | [APIPermissionDemandIdentify](#apipermissiondemandidentify) | API 权限需求标识 |
| title | str | 授权标题 |
| desc | str | 授权描述 |

### APIPermission

单个 API 的权限信息。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| path | str | API 路径 |
| method | str | 请求方法（GET/POST/PUT/DELETE 等） |
| desc | str | 权限描述 |
| auth_status | int | 授权状态（0=未授权，1=已授权） |

---

## PinsMessage (精华消息)

精华消息数据结构（[`types/pins_message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/pins_message.py)）。注意：`PinsMessage` 是普通类，非 TypedDict。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| guild_id | str | 频道 ID |
| channel_id | str | 子频道 ID |
| message_ids | List[str] | 精华消息 ID 列表 |

---

## Reaction (表情表态)

表情表态相关的数据结构（[`types/reaction.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/reaction.py)）。

### ReactionTargetType (字面量别名)

表态目标类型（`Literal[0, 1, 2, 3]`）。

| 取值 | 语义说明 |
|---|---|
| 0 | 消息 |
| 1 | 帖子 |
| 2 | 评论 |
| 3 | 回复 |

### ReactionTarget

表态目标。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| id | str | 目标 ID（消息 ID 或帖子/评论/回复 ID） |
| type | [ReactionTargetType](#reactiontargettype-字面量别名) | 目标类型 |

### Reaction

表态数据结构。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| user_id | str | 用户 ID |
| guild_id | str | 频道 ID |
| channel_id | str | 子频道 ID |
| target | [ReactionTarget](#reactiontarget) | 表态目标 |
| emoji | [Emoji](#emoji) | 表情 |

### ReactionUsers

表态用户列表响应。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| users | List[[User](user.md#user)] | 用户列表 |
| cookie | str | 分页参数，用于拉取下一页 |
| is_end | bool | 是否已拉取到最后一页 |

---

## Schedule (日程)

日程相关的数据结构（[`types/schedule.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/schedule.py)）。

### RemindType (字面量别名)

提醒类型（`Literal[0, 1, 2, 3, 4, 5]`）。

| 取值 | 语义说明 |
|---|---|
| 0 | 不提醒 |
| 1 | 开始时提醒 |
| 2 | 开始前 5 分钟提醒 |
| 3 | 开始前 15 分钟提醒 |
| 4 | 开始前 30 分钟提醒 |
| 5 | 开始前 60 分钟提醒 |

### Schedule

日程数据结构。注意：`Schedule` 是普通类，非 TypedDict。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| id | str | 日程 ID |
| name | str | 日程名称 |
| description | str | 日程描述 |
| start_timestamp | str | 开始时间戳 |
| end_timestamp | str | 结束时间戳 |
| creator | [Member](user.md#member) | 创建者信息 |
| jump_channel_id | str | 跳转子频道 ID |
| remind_type | [RemindType](#remindtype-字面量别名) | 提醒类型 |

---

## Robot (类型)

机器人信息数据结构（[`types/robot.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/robot.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| id | str | 机器人 ID |
| username | str | 机器人用户名 |
| avatar | str | 机器人头像 URL |

---

## Session (会话)

WebSocket 会话配置（[`types/session.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/session.py)）。

### ShardConfig

分片配置。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| shard_id | int | 当前分片 ID |
| shard_count | int | 总分片数 |

### Session

会话数据结构。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| session_id | str | 会话 ID |
| last_seq | int | 最后收到的消息序号 |
| intent | int | 事件订阅位掩码 |
| token | [Token](#token-领域模型) | 授权 Token |
| url | str | WebSocket 接入地址 |
| shards | [ShardConfig](#shardconfig) | 分片配置 |

---

## InteractionData

交互数据（[`types/interaction.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/interaction.py)）。注意：`InteractionData` 是普通类，非 TypedDict。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| type | int | 数据类型 |
| resolved | object | 解析后的数据对象 |

---

## InteractionPayload

交互事件数据（[`types/interaction.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/interaction.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| id | str | 交互 ID |
| application_id | int | 应用 ID |
| type | int | 交互类型 |
| scene | str | 场景 |
| chat_type | int | 聊天类型 |
| data | [InteractionData](#interactiondata) | 交互数据 |
| guild_id | int | 频道 ID |
| channel_id | int | 子频道 ID |
| user_openid | str | 用户 openid |
| group_openid | str | 群组 openid |
| group_member_openid | str | 群成员 openid |
| timestamp | int | 时间戳 |
| version | int | 版本 |

---

## InteractionType (枚举)

交互类型（[`types/interaction.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/interaction.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| PING | int | 心跳（值 1） |
| APPLICATION_COMMAND | int | 应用指令（值 2） |
| HTTP_PROXY | int | HTTP 代理（值 10） |
| INLINE_KEYBOARD | int | 内联键盘（值 11） |

---

## InteractionDataType (枚举)

交互数据类型（[`types/interaction.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/interaction.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| CHAT_INPUT_SEARCH | int | 输入搜索（值 9） |
| HTTP_PROXY | int | HTTP 代理（值 10） |
| INLINE_KEYBOARD_BUTTON_CLICK | int | 内联键盘按钮点击（值 11） |

---

## 领域模型类

以下领域模型在事件回调中作为参数传递。

### Robot (领域模型)

机器人信息模型，注入到 `Client.robot` 属性（[`botpy/robot.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/robot.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| name | str | 机器人名称 |
| id | int | 机器人 ID |
| avatar | str | 机器人头像 URL |

### Token (领域模型)

授权令牌管理，自动刷新 access_token（[`botpy/robot.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/robot.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| app_id | str | 机器人 appid |
| secret | str | 机器人密钥 |
| access_token | str | 当前有效的 access_token |
| expires_in | int | access_token 过期时间戳 |
| Type | str | Token 类型（`QQBot` 或 `Bearer`） |

### Audio (领域模型)

音频控制事件模型，通过 `on_audio_start` / `on_audio_finish` / `on_mic` / `off_mic` 事件回调接收（[`botpy/audio.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/audio.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| _api | [BotAPI](../api/) | BotAPI 实例，用于调用 API 方法 |
| _ctx | 待确认 | 上下文对象，已在 `__slots__` 中声明但当前实现未初始化 |
| channel_id | str | 子频道 ID |
| guild_id | str | 频道 ID |
| audio_url | str | 音频 URL |
| text | str | 音频文本 |
| event_id | str | 事件 ID |

### PublicAudio (领域模型)

音视频 / 直播子频道成员事件模型，通过 `on_audio_or_live_channel_member_enter` / `on_audio_or_live_channel_member_exit` 事件回调接收（[`botpy/audio.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/audio.py)）。注意：构造函数仅接收 `(api, data)`，无 `event_id`。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| _api | [BotAPI](../api/) | BotAPI 实例，用于调用 API 方法 |
| _ctx | 待确认 | 上下文对象，已在 `__slots__` 中声明但当前实现未初始化 |
| guild_id | str | 频道 ID |
| channel_id | str | 子频道 ID |
| channel_type | int | 频道类型（2=音视频，5=直播） |
| user_id | str | 用户 ID |

### Reaction (领域模型)

表情表态事件模型，通过 `on_message_reaction_add` / `on_message_reaction_remove` 事件回调接收（[`botpy/reaction.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/reaction.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| _api | [BotAPI](../api/) | BotAPI 实例，用于调用 API 方法 |
| _ctx | 待确认 | 上下文对象，已在 `__slots__` 中声明但当前实现未初始化 |
| user_id | str | 用户 ID |
| channel_id | str | 子频道 ID |
| guild_id | str | 频道 ID |
| emoji | Reaction._Emoji | 表情（嵌套对象） |
| target | Reaction._Target | 表态目标（嵌套对象） |
| event_id | str | 事件 ID |

#### Reaction._Emoji

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| id | str | 表情 ID |
| type | int | 表情类型 |

#### Reaction._Target

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| id | str | 目标 ID |
| type | int | 目标类型（0=消息，1=帖子，2=评论，3=回复） |

### Interaction

交互事件模型，通过 `on_interaction_create` 事件回调接收（[`botpy/interaction.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/interaction.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| _api | [BotAPI](../api/) | BotAPI 实例，用于调用 API 方法 |
| _ctx | 待确认 | 上下文对象，已在 `__slots__` 中声明但当前实现未初始化 |
| id | str | 交互 ID |
| application_id | int | 应用 ID |
| type | int | 交互类型 |
| scene | str | 场景 |
| chat_type | int | 聊天类型 |
| event_id | str | 事件 ID |
| data | Interaction._Data | 交互数据（嵌套对象） |
| guild_id | int | 频道 ID |
| channel_id | int | 子频道 ID |
| user_openid | str | 用户 openid |
| group_openid | str | 群组 openid |
| group_member_openid | str | 群成员 openid |
| timestamp | int | 时间戳 |
| version | int | 版本 |

#### Interaction._Data

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| type | int | 数据类型 |
| resolved | Interaction._Resolved | 解析后的交互数据（嵌套对象） |

#### Interaction._Resolved

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| button_id | str | 按钮 ID |
| button_data | str | 按钮数据 |
| message_id | str | 消息 ID |
| user_id | str | 用户 ID |
| feature_id | str | 功能 ID |

### GroupManageEvent (领域模型)

群管理事件模型，通过 `on_group_add_robot` / `on_group_del_robot` / `on_group_msg_reject` / `on_group_msg_receive` 事件回调接收（[`botpy/manage.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/manage.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| _api | [BotAPI](../api/) | BotAPI 实例，用于调用 API 方法 |
| event_id | str | 事件 ID |
| timestamp | str | 事件时间戳 |
| group_openid | str | 群 openid |
| op_member_openid | str | 操作成员 openid |

### C2CManageEvent (领域模型)

C2C 管理事件模型，通过 `on_friend_add` / `on_friend_del` / `on_c2c_msg_reject` / `on_c2c_msg_receive` 事件回调接收（[`botpy/manage.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/manage.py)）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| _api | [BotAPI](../api/) | BotAPI 实例，用于调用 API 方法 |
| event_id | str | 事件 ID |
| timestamp | str | 事件时间戳 |
| openid | str | 用户 openid |
