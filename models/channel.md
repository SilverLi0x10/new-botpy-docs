# 子频道类型

**Source file:** [`botpy/types/channel.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/channel.py)

**Related types:** [Guild](guild.md), [User & Member](user.md)

---

## ChannelType 枚举

子频道类型枚举（[`types/channel.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/channel.py#L6-L17)）。

```python
class ChannelType(Enum):
    TEXT_CHANNEL = 0          # 文字子频道
    VOICE_CHANNEL = 2         # 语音子频道
    GROUP_CHANNEL = 4         # 子频道分组
    LIVE_CHANNEL = 10005      # 直播子频道
    APP_CHANNEL = 10006       # 应用子频道
    DISCUSSION_CHANNEL = 10007  # 论坛子频道
```

**注意：** 值为 1 和 3 的枚举保留，不可使用。

---

## ChannelSubType 枚举

子频道子类型（[`types/channel.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/channel.py#L20-L27)）。

```python
class ChannelSubType(Enum):
    TALK = 0    # 闲聊
    POST = 1    # 公告
    CHEAT = 2   # 攻略
    BLACK = 3   # 开黑
```

---

## PrivateType 枚举

子频道可见性类型（[`types/channel.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/channel.py#L30-L36)）。

```python
class PrivateType(Enum):
    PUBLIC = 0          # 公开频道
    ADMIN = 1           # 管理员和群主可见
    SPECIFIED_USER = 2  # 群主管理员+指定成员
```

---

## SpeakPermission 枚举

子频道发言权限（[`types/channel.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/channel.py#L39-L44)）。

```python
class SpeakPermission(Enum):
    INVALID = 0   # 无效类型
    EVERYONE = 1  # 所有人
    ADMIN = 2     # 群主管理员+指定成员
```

---

## ChannelPayload

子频道数据结构（[`types/channel.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/channel.py#L48-L60)）。

```python
class ChannelPayload(TypedDict):
    id: str                # 子频道 ID
    guild_id: str          # 频道 ID
    name: str              # 子频道名称
    type: ChannelType      # 子频道类型
    sub_type: ChannelSubType  # 子频道子类型
    position: int          # 排序位置
    parent_id: str         # 父级 ID（所属分组 ID）
    owner_id: str          # 创建者 ID
    private_type: PrivateType  # 私密类型
    speak_permission: SpeakPermission  # 发言权限
    application_id: str    # 应用子频道 AppID（仅应用子频道）
    permissions: str       # 权限串
```

---

## ChannelPermissions

子频道权限（[`types/channel.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/channel.py#L63-L67)）。

```python
class ChannelPermissions(TypedDict):
    channel_id: str    # 子频道 ID
    user_id: str       # 用户 ID
    permissions: str   # 权限串（二进制位表示）
    role_id: str       # 身份组 ID
```

---

## 领域模型类

### Channel ([`botpy/channel.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/channel.py#L5-L38))

通过 `on_channel_create` / `on_channel_update` / `on_channel_delete` 事件回调接收。

```python
class Channel:
    __slots__ = (
        "_api",           # BotAPI 实例
        "guild_id",       # 频道 ID
        "id",             # 子频道 ID
        "name",           # 子频道名称
        "type",           # ChannelType 值
        "sub_type",       # ChannelSubType 值
        "position",       # 排序位置
        "owner_id",       # 创建者 ID
        "private_type",   # PrivateType 值
        "speak_permission",  # SpeakPermission 值
        "application_id", # 应用 ID
        "permissions",    # 权限串
        "event_id",       # 事件 ID
    )
```
