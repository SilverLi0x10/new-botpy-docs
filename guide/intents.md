# Intents 事件订阅

`Intents` 用于配置机器人需要监听的事件通道。通过位掩码机制，可以灵活地开启或关闭特定类型的事件。

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

### `Intents.all()`

开启所有事件的监听：

```python
intents = botpy.Intents.all()
```

### `Intents.none()`

不开启任何事件，之后按需启用：

```python
intents = botpy.Intents.none()
intents.guild_messages = True
```

### `Intents.default()`

开启所有公域事件（`guild_messages` 和 `forums` 需要私域权限，默认关闭）：

```python
intents = botpy.Intents.default()
```

## 完整事件列表

| Flag 属性 | 位 | 对应事件 | 说明 |
|-----------|-----|---------|------|
| `guilds` | 1 << 0 | `on_guild_create` / `on_guild_update` / `on_guild_delete` / `on_channel_create` / `on_channel_update` / `on_channel_delete` | 频道和子频道事件 |
| `guild_members` | 1 << 1 | `on_guild_member_add` / `on_guild_member_update` / `on_guild_member_remove` | 频道成员事件 |
| `public_messages` | 1 << 25 | `on_group_at_message_create` / `on_c2c_message_create` / `on_group_add_robot` 等 | 群/C2C 公域消息事件 |
| `interaction` | 1 << 26 | `on_interaction_create` | 互动事件（按钮回调等） |
| `message_audit` | 1 << 27 | `on_message_audit_pass` / `on_message_audit_reject` | 消息审核事件 |
| `forums` | 1 << 28 | `on_forum_thread_create` / `on_forum_post_create` 等 | 论坛事件（仅私域） |
| `audio_action` | 1 << 29 | `on_audio_start` / `on_audio_finish` / `on_audio_on_mic` / `on_audio_off_mic` | 音频事件 |
| `public_guild_messages` | 1 << 30 | `on_at_message_create` / `on_public_message_delete` | 公域消息事件 |
| `audio_or_live_channel_member` | 1 << 19 | `on_audio_or_live_channel_member_enter` / `on_audio_or_live_channel_member_exit` | 音视频/直播成员进出 |
| `open_forum_event` | 1 << 18 | `on_open_forum_thread_create` / `on_open_forum_post_create` 等 | 开放论坛事件 |
| `guild_message_reactions` | 1 << 10 | `on_message_reaction_add` / `on_message_reaction_remove` | 消息互动事件 |
| `direct_message` | 1 << 12 | `on_direct_message_create` / `on_direct_message_delete` | 私信事件 |
| `guild_messages` | 1 << 9 | `on_message_create` / `on_message_delete` | 消息事件（仅私域） |

## 权限说明

- **公域机器人**：可使用 `public_guild_messages`、`public_messages`、`guilds` 等
- **私域机器人**：额外支持 `guild_messages`、`forums`
- 部分事件（如音频、互动）需申请对应机器人权限
