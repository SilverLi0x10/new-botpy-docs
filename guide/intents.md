# Intents 事件订阅

`Intents` 用于配置机器人需要监听的事件通道。通过位掩码机制，可以灵活地开启或关闭特定类型的事件。

**源码位置**: [`botpy/flags.py` 第 104-165 行](https://github.com/tencent-connect/botpy/tree/master/botpy/flags.py#L104-L165)

## 类定义

```python
class Intents(**kwargs: bool)
```

继承自 `BaseFlags`，通过 `@fill_with_flags()` 装饰器自动收集所有 `@Flag` 属性。

## 基本用法

```python
import botpy

# 方式一：通过 kwargs 设置
intents = botpy.Intents(public_guild_messages=True, guild_messages=True)

# 方式二：通过属性设置
intents = botpy.Intents.none()
intents.public_guild_messages = True
intents.guild_messages = True

# 传给 Client
client = MyClient(intents=intents)
```

## 预设模式

### `Intents.all()` → `Intents`

开启所有事件的监听。代码位置：[`botpy/flags.py` 第 131-147 行](https://github.com/tencent-connect/botpy/tree/master/botpy/flags.py#L131-L147)。

```python
@classmethod
def all(cls) -> Intents:
    """打开所有事件的监听"""
```

开启的 Flags：
- `guild_messages`
- `forums`
- `interaction`
- `audio_action`
- `guilds`
- `guild_members`
- `guild_message_reactions`
- `direct_message`
- `message_audit`
- `public_messages`
- `public_guild_messages`
- `audio_or_live_channel_member`
- `open_forum_event`

### `Intents.none()` → `Intents`

不开启任何事件，之后按需启用。代码位置：[`botpy/flags.py` 第 149-154 行](https://github.com/tencent-connect/botpy/tree/master/botpy/flags.py#L149-L154)。

```python
@classmethod
def none(cls) -> Intents:
    """不主动打开"""
```

### `Intents.default()` → `Intents`

开启所有公域事件（`guild_messages` 和 `forums` 需要私域权限，默认关闭）。代码位置：[`botpy/flags.py` 第 156-165 行](https://github.com/tencent-connect/botpy/tree/master/botpy/flags.py#L156-L165)。

```python
@classmethod
def default(cls) -> Intents:
    """打开所有公域事件的监听"""
```

## 完整事件列表

| Flag 属性 | 位 | 枚举值 | 对应事件 | 说明 |
|-----------|-----|--------|---------|------|
| `guilds` | 1 << 0 | `1` | `on_guild_create` / `on_guild_update` / `on_guild_delete` / `on_channel_create` / `on_channel_update` / `on_channel_delete` | 频道和子频道事件 |
| `guild_members` | 1 << 1 | `2` | `on_guild_member_add` / `on_guild_member_update` / `on_guild_member_remove` | 频道成员事件 |
| `guild_message_reactions` | 1 << 10 | `1024` | `on_message_reaction_add` / `on_message_reaction_remove` | 消息互动事件 |
| `direct_message` | 1 << 12 | `4096` | `on_direct_message_create` / `on_direct_message_delete` | 私信事件 |
| `audio_or_live_channel_member` | 1 << 19 | `524288` | `on_audio_or_live_channel_member_enter` / `on_audio_or_live_channel_member_exit` | 音视频/直播成员进出 |
| `public_messages` | 1 << 25 | `33554432` | `on_group_at_message_create` / `on_c2c_message_create` / `on_group_add_robot` 等 | 群/C2C 公域消息事件 |
| `interaction` | 1 << 26 | `67108864` | `on_interaction_create` | 互动事件（按钮回调等） |
| `message_audit` | 1 << 27 | `134217728` | `on_message_audit_pass` / `on_message_audit_reject` | 消息审核事件 |
| `forums` | 1 << 28 | `268435456` | `on_forum_thread_create` / `on_forum_post_create` 等 | 论坛事件（仅私域） |
| `audio_action` | 1 << 29 | `536870912` | `on_audio_start` / `on_audio_finish` / `on_audio_on_mic` / `on_audio_off_mic` | 音频事件 |
| `public_guild_messages` | 1 << 30 | `1073741824` | `on_at_message_create` / `on_public_message_delete` | 公域消息事件 |
| `guild_messages` | 1 << 9 | `512` | `on_message_create` / `on_message_delete` | 消息事件（仅私域） |
| `open_forum_event` | 1 << 18 | `262144` | `on_open_forum_thread_create` / `on_open_forum_post_create` 等 | 开放论坛事件 |

## 权限说明

- **公域机器人**：可使用 `public_guild_messages`、`public_messages`、`guilds` 等
- **私域机器人**：额外支持 `guild_messages`、`forums`
- 部分事件（如音频、互动）需申请对应机器人权限

## BaseFlags 基类

所有 Flags 类的基类，源码位置：[`botpy/flags.py` 第 29-77 行](https://github.com/tencent-connect/botpy/tree/master/botpy/flags.py#L29-L77)。

```python
class BaseFlags:
    VALID_FLAGS: ClassVar[Dict[str, int]]  # 自动收集的有效 flag 名→位值映射
    DEFAULT_VALUE: ClassVar[int]           # 默认值（0 或全 1）
    value: int                             # 当前位掩码值
```

**方法**:

| 方法 | 返回 | 说明 |
|------|------|------|
| `has_flag(o: int)` | `bool` | 检查某一位是否已设置 |
| `set_flag(o: int, toggle: bool)` | `None` | 设置或清除某一位 |

## Permission 类

用于子频道权限管理的位掩码类，源码位置：[`botpy/flags.py` 第 342-371 行](https://github.com/tencent-connect/botpy/tree/master/botpy/flags.py#L342-L371)。

```python
class Permission(**kwargs: bool)
```

**可用 Flags**:

| 属性 | 位 | 说明 |
|------|-----|------|
| `view_permission` | 1 << 0 | 可查看子频道 |
| `manager_permission` | 1 << 1 | 可管理子频道 |
| `speak_permission` | 1 << 2 | 可发言子频道 |
| `live_permission` | 1 << 3 | 可直播子频道 |

**使用示例**:
```python
from botpy import Permission

# 添加可读权限
add = Permission(view_permission=True)

# 删除可读和发言权限
remove = Permission(view_permission=True, speak_permission=True)

# 获取权限值
print(add.value)  # 1
print(remove.value)  # 5 (1 + 4)
```
