# 其他类型

## Announce (公告)

```python
class Announce(TypedDict):
    guild_id: str
    channel_id: str
    message_id: str
    announces_type: AnnouncesType
    recommend_channels: List[RecommendChannel]

class AnnounceType(Enum):
    MEMBER = 0   # 成员公告
    WELCOME = 1  # 欢迎公告

class RecommendChannel(TypedDict):
    channel_id: str
    introduce: str
```

## AudioControl (音频控制)

```python
AudioStatus = Literal[0, 1, 2, 3]   # 0=开始, 1=暂停, 2=继续, 3=停止

class AudioControl(TypedDict):
    audio_url: str
    text: str
    status: AudioStatus

class AudioAction(TypedDict):
    guild_id: str
    channel_id: str
    audio_url: str
    text: str

class AudioLive(TypedDict):
    guild_id: str
    channel_id: str
    channel_type: PublicAudioType  # 2=音视频, 5=直播
    user_id: str
```

## Emoji (表情)

```python
EmojiType = Literal[1, 2]   # 1=系统表情, 2=emoji表情

class Emoji(TypedDict):
    id: str
    type: EmojiType
```

## APIPermission

```python
class APIPermission(TypedDict):
    path: str
    method: str
    desc: str
    auth_status: int

class APIPermissionDemandIdentify(TypedDict):
    path: str
    method: str

class APIPermissionDemand(TypedDict):
    guild_id: str
    channel_id: str
    api_identify: APIPermissionDemandIdentify
    title: str
    desc: str
```

## PinsMessage (精华消息)

```python
class PinsMessage:
    guild_id: str
    channel_id: str
    message_ids: List[str]
```

## Reaction (表情表态)

```python
ReactionTargetType = Literal[0, 1, 2, 3]  # 0=消息, 1=帖子, 2=评论, 3=回复

class ReactionTarget(TypedDict):
    id: str
    type: ReactionTargetType

class Reaction(TypedDict):
    user_id: str
    guild_id: str
    channel_id: str
    target: ReactionTarget
    emoji: Emoji

class ReactionUsers(TypedDict):
    users: List[User]
    cookie: str    # 分页参数
    is_end: bool   # 是否已拉取完成
```

## Schedule (日程)

```python
RemindType = Literal[0, 1, 2, 3, 4, 5]
# 0=不提醒, 1=开始时, 2=5分钟前, 3=15分钟前, 4=30分钟前, 5=60分钟前

class Schedule:
    id: str
    name: str
    description: str
    start_timestamp: str
    end_timestamp: str
    creator: Member
    jump_channel_id: str
    remind_type: RemindType
```

## Robot

```python
class Robot(TypedDict):
    id: str
    username: str
    avatar: str
```

## Session

```python
class Session(TypedDict):
    session_id: str
    last_seq: int
    intent: int
    token: Token
    url: str
    shards: ShardConfig

class ShardConfig(TypedDict):
    shard_id: int
    shard_count: int
```

## Interaction

```python
class InteractionPayload(TypedDict):
    id: str
    application_id: int
    type: int
    scene: str
    chat_type: int
    data: InteractionData
    guild_id: int
    channel_id: int
    user_openid: str
    group_openid: str
    group_member_openid: str
    timestamp: int
    version: int

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
