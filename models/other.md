# 其他类型

**Source files:** Multiple `botpy/types/*.py`

**Related types:** [Message](message.md), [User & Member](user.md), [Inline Keyboard](inline.md)

---

---

## Gateway 基础类型

### WsContext

被动事件上下文（[`types/gateway.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/gateway.py#L6-L7)）。

```python
class WsContext(TypedDict):
    id: str              # 被动事件里携带的上下文信息，目前仅有部分事件支持
```

### ReadyEvent

WebSocket 连接就绪事件（[`types/gateway.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/gateway.py#L32-L36)）。

```python
class ReadyEvent(TypedDict):
    version: int             # 协议版本
    session_id: str          # 会话 ID
    user: UserPayload        # 机器人用户信息
    shard: List[int]         # 分片信息 [shard_id, shard_count]
```

### WsUrlPayload

WebSocket 接入地址（[`types/gateway.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/gateway.py#L39-L40)）。

```python
class WsUrlPayload(TypedDict):
    url: str                 # WebSocket 接入地址
```

---

## Announce (公告)

**Source file:** [`botpy/types/announce.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/announce.py)

```python
class Announce(TypedDict):
    guild_id: str                           # 频道 ID
    channel_id: str                         # 子频道 ID
    message_id: str                         # 消息 ID
    announces_type: AnnouncesType           # 公告类型
    recommend_channels: List[RecommendChannel]  # 推荐子频道列表

class AnnouncesType(Enum):
    MEMBER = 0   # 成员公告
    WELCOME = 1  # 欢迎公告

class RecommendChannel(TypedDict):
    channel_id: str    # 推荐子频道 ID
    introduce: str     # 推荐语
```

---

## Audio (音频控制)

**Source file:** [`botpy/types/audio.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/audio.py)

```python
AudioStatus = Literal[0, 1, 2, 3]   # 0=开始, 1=暂停, 2=继续, 3=停止
PublicAudioType = Literal[2, 5]      # 2=音视频, 5=直播

class AudioControl(TypedDict):
    audio_url: str      # 音频 URL
    text: str           # 音频文本
    status: AudioStatus # 音频状态

class AudioAction(TypedDict):
    guild_id: str     # 频道 ID
    channel_id: str   # 子频道 ID
    audio_url: str    # 音频 URL
    text: str         # 音频文本

class AudioLive(TypedDict):
    guild_id: str                    # 频道 ID
    channel_id: str                  # 子频道 ID
    channel_type: PublicAudioType    # 频道类型（2=音视频, 5=直播）
    user_id: str                     # 用户 ID
```

---

## Emoji (表情)

**Source file:** [`botpy/types/emoji.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/emoji.py)

```python
EmojiType = Literal[1, 2]   # 1=系统表情, 2=emoji表情

class Emoji(TypedDict):
    id: str        # 表情 ID
    type: EmojiType # 表情类型（1=系统表情, 2=emoji表情）
```

---

## APIPermission (API 权限)

**Source file:** [`botpy/types/permission.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/permission.py)

```python
class APIPermission(TypedDict):
    path: str        # API 路径
    method: str      # 请求方法（GET/POST/PUT/DELETE 等）
    desc: str        # 权限描述
    auth_status: int # 授权状态（0=未授权, 1=已授权）

class APIPermissionDemandIdentify(TypedDict):
    path: str        # API 路径
    method: str      # 请求方法

class APIPermissionDemand(TypedDict):
    guild_id: str                       # 频道 ID
    channel_id: str                     # 子频道 ID
    api_identify: APIPermissionDemandIdentify  # API 权限需求标识
    title: str                          # 授权标题
    desc: str                           # 授权描述
```

---

## PinsMessage (精华消息)

**Source file:** [`botpy/types/pins_message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/pins_message.py)

**注意：** `PinsMessage` 是一个普通类（非 TypedDict）。

```python
class PinsMessage:
    guild_id: str           # 频道 ID
    channel_id: str         # 子频道 ID
    message_ids: List[str]  # 精华消息 ID 列表
```

---

## Reaction (表情表态)

**Source file:** [`botpy/types/reaction.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/reaction.py)

```python
ReactionTargetType = Literal[0, 1, 2, 3]  # 0=消息, 1=帖子, 2=评论, 3=回复

class ReactionTarget(TypedDict):
    id: str                # 目标 ID（消息 ID 或帖子/评论/回复 ID）
    type: ReactionTargetType  # 目标类型

class Reaction(TypedDict):
    user_id: str    # 用户 ID
    guild_id: str   # 频道 ID
    channel_id: str # 子频道 ID
    target: ReactionTarget  # 表态目标
    emoji: Emoji    # 表情

class ReactionUsers(TypedDict):
    users: List[User]
    cookie: str    # 分页参数
    is_end: bool   # 是否已拉取完成
```

---

## Schedule (日程)

**Source file:** [`botpy/types/schedule.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/schedule.py)

**注意：** `Schedule` 是一个普通类（非 TypedDict）。

```python
RemindType = Literal[0, 1, 2, 3, 4, 5]
# 0=不提醒, 1=开始时, 2=5分钟前, 3=15分钟前, 4=30分钟前, 5=60分钟前

class Schedule:
    id: str                # 日程 ID
    name: str              # 日程名称
    description: str       # 日程描述
    start_timestamp: str   # 开始时间戳
    end_timestamp: str     # 结束时间戳
    creator: Member        # 创建者信息
    jump_channel_id: str   # 跳转子频道 ID
    remind_type: RemindType  # 提醒类型
```

---

## Robot

**Source file:** [`botpy/types/robot.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/robot.py)

```python
class Robot(TypedDict):
    id: str            # 机器人 ID
    username: str      # 机器人用户名
    avatar: str        # 机器人头像 URL
```

---

## Session

**Source file:** [`botpy/types/session.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/session.py)

```python
class Session(TypedDict):
    session_id: str      # 会话 ID
    last_seq: int        # 最后收到的消息序号
    intent: int          # 事件订阅位掩码
    token: Token         # 授权 Token
    url: str             # WebSocket 接入地址
    shards: ShardConfig  # 分片配置

class ShardConfig(TypedDict):
    shard_id: int     # 当前分片 ID
    shard_count: int  # 总分片数
```

---

## Interaction

**Source file:** [`botpy/types/interaction.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/interaction.py)

```python
class InteractionData:
    type: int       # 数据类型
    resolved: object  # 解析后的数据对象

class InteractionPayload(TypedDict):
    id: str                       # 交互 ID
    application_id: int           # 应用 ID
    type: int                     # 交互类型
    scene: str                    # 场景
    chat_type: int                # 聊天类型
    data: InteractionData         # 交互数据
    guild_id: int                 # 频道 ID
    channel_id: int               # 子频道 ID
    user_openid: str              # 用户 openid
    group_openid: str             # 群组 openid
    group_member_openid: str      # 群成员 openid
    timestamp: int                # 时间戳
    version: int                  # 版本

class InteractionType(Enum):
    PING = 1
    APPLICATION_COMMAND = 2
    HTTP_PROXY = 10
    INLINE_KEYBOARD = 11

class InteractionDataType(Enum):
    CHAT_INPUT_SEARCH = 9
    HTTP_PROXY = 10
    INLINE_KEYBOARD_BUTTON_CLICK = 11
```

---

## 领域模型类

### Robot ([`botpy/robot.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/robot.py#L12-L19))

机器人信息类（注入到 `Client.robot` 属性）。

```python
class Robot:
    def __init__(self, data: robot.Robot):
        self.name = data.get("username")   # 机器人名称
        self.id = int(data["id"])          # 机器人 ID
        self.avatar = data.get("avatar")   # 机器人头像 URL
```

### Token ([`botpy/robot.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/robot.py#L22-L80))

授权令牌管理，自动刷新 access_token。

```python
class Token:
    TYPE_BOT = "QQBot"        # 机器人 Token 类型
    TYPE_NORMAL = "Bearer"    # 普通 Bearer Token

    def __init__(self, app_id: str, secret: str):
        self.app_id = app_id
        self.secret = secret
        self.access_token = None
        self.expires_in = 0
        self.Type = self.TYPE_BOT

    async def check_token(self):
        """检查 token 是否过期，过期则自动刷新"""

    async def update_access_token(self):
        """从 bots.qq.com 获取新的 access_token"""
```

### Audio ([`botpy/audio.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/audio.py#L5-L24))

音频控制事件，通过 `on_audio_control` 事件回调接收。

```python
class Audio:
    __slots__ = (
        "_api",           # BotAPI 实例
        "_ctx",           # 上下文
        "channel_id",     # 子频道 ID
        "guild_id",       # 频道 ID
        "audio_url",      # 音频 URL
        "text",           # 文本内容
        "event_id",       # 事件 ID
    )
```

### PublicAudio ([`botpy/audio.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/audio.py#L28-L45))

音视频/直播事件。

```python
class PublicAudio:
    __slots__ = (
        "_api",           # BotAPI 实例
        "_ctx",           # 上下文
        "guild_id",       # 频道 ID
        "channel_id",     # 子频道 ID
        "channel_type",   # 频道类型（2=音视频, 5=直播）
        "user_id",        # 用户 ID
    )
```

### Reaction ([`botpy/reaction.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/reaction.py#L5-L43))

表情表态事件，通过 `on_message_reaction_add` / `on_message_reaction_remove` 事件回调接收。

```python
class Reaction:
    __slots__ = (
        "_api",           # BotAPI 实例
        "_ctx",           # 上下文
        "user_id",        # 用户 ID
        "channel_id",     # 子频道 ID
        "guild_id",       # 频道 ID
        "emoji",          # _Emoji 对象（id, type）
        "target",         # _Target 对象（id, type）
        "event_id",       # 事件 ID
    )
```

**内部嵌套类：**

| 类名 | 属性 | 说明 |
|------|------|------|
| `_Emoji` | `id`, `type` | 表情对象 |
| `_Target` | `id`, `type` | 目标对象（0=消息, 1=帖子, 2=评论, 3=回复） |

### Interaction ([`botpy/interaction.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/interaction.py#L5-L63))

交互事件，通过 `on_interaction_create` 事件回调接收。

```python
class Interaction:
    __slots__ = (
        "_api",           # BotAPI 实例
        "_ctx",           # 上下文
        "id",             # 交互 ID
        "application_id", # 应用 ID
        "type",           # 交互类型
        "scene",          # 场景
        "chat_type",      # 聊天类型
        "event_id",       # 事件 ID
        "data",           # _Data 对象
        "guild_id",       # 频道 ID
        "channel_id",     # 子频道 ID
        "user_openid",    # 用户 openid
        "group_openid",   # 群组 openid
        "group_member_openid",  # 群成员 openid
        "timestamp",      # 时间戳
        "version",        # 版本
    )
```

**内部嵌套类：**

| 类名 | 属性 | 说明 |
|------|------|------|
| `_Data` | `type`, `resolved` | 交互数据 |
| `_Resolved` | `button_id`, `button_data`, `message_id`, `user_id`, `feature_id` | 解析后的交互数据 |
