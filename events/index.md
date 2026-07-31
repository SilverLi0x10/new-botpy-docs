# 事件列表

SDK 通过 WebSocket 接收 QQ 机器人平台推送的实时事件。继承 `Client` 并实现 `on_*` 方法来监听事件。

## 事件注册机制

当 WebSocket 收到事件时，`ConnectionState` 的 `parse_*` 方法将原始数据解析为模型对象，然后通过 `Client.ws_dispatch` 调用对应的 `on_*` 方法。

**源码位置**:
- 事件解析: [`botpy/connection.py` 第 78 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L78) (`ConnectionState`)
- 事件分发: [`botpy/client.py` 第 250 行](https://github.com/tencent-connect/botpy/tree/master/botpy/client.py#L250) (`ws_dispatch`)
- 事件调度: [`botpy/client.py` 第 265 行](https://github.com/tencent-connect/botpy/tree/master/botpy/client.py#L265) (`_schedule_event`)

### 解析流程

```
WebSocket 收到事件 payload
  → ConnectionState.parsers 匹配 parse_{event_name}
  → 创建领域模型对象 (Guild/Message/Member 等)
  → Client.ws_dispatch("event_name", model_object)
  → 查找 Client 的 on_event_name 方法
  → _schedule_event 将协程包装为 asyncio.Task 执行
```

### parsers 自动发现

`ConnectionState.__init__` 中使用 `inspect.getmembers(self)` 自动发现所有以 `parse_` 开头的方法，并建立 `{event_name: parse_method}` 映射：

```python
self.parsers: Dict[str, Callable[[Any], None]]
self.parsers = {}
for attr, func in inspect.getmembers(self):
    if attr.startswith("parse_"):
        self.parsers[attr[6:].lower()] = func
```

源码位置：[`botpy/connection.py` 第 84-88 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L84-L88)。

### ws_dispatch 分发

```python
def ws_dispatch(self, event: str, *args: Any, **kwargs: Any) -> None:
    method = "on_" + event
    if hasattr(self, method):
        coro = getattr(self, method)
        self._schedule_event(coro, method, *args, **kwargs)
```

源码位置：[`botpy/client.py` 第 250-262 行](https://github.com/tencent-connect/botpy/tree/master/botpy/client.py#L250-L262)。

## 事件注册示例

```python
class MyClient(botpy.Client):
    # 方法名 = "on_" + 事件名（小写）
    async def on_at_message_create(self, message: Message):
        # 处理 @消息 事件
        pass
```

## 事件分类

| 分类 | 对应 Intents | 说明 |
|------|-------------|------|
| [频道/子频道事件](guild.md) | `guilds` | 频道创建、更新、删除，子频道变化 |
| [消息事件](message.md) | `public_guild_messages` / `guild_messages` / `direct_message` / `message_audit` | @消息、消息创建/删除、私信、审核 |
| [成员事件](member.md) | `guild_members` | 成员加入、更新、退出 |
| [表态事件](reaction.md) | `guild_message_reactions` | 消息表情表态 |
| [音频事件](audio.md) | `audio_action` | 音频播放、上/下麦 |
| [论坛事件](forum.md) | `forums` / `open_forum_event` | 论坛帖子/评论 |
| [互动事件](interaction.md) | `interaction` | 按钮回调等 |
| [群管理事件](group-manage.md) | `public_messages` | 群添加/移除机器人、C2C 好友事件 |
| [音视频成员事件](group-manage.md#音视频子频道事件) | `audio_or_live_channel_member` | 用户进出音视频/直播子频道 |

## 事件与模型对照表

| 事件方法 | parse_* 方法 | 领域模型 | 模型位置 |
|----------|-------------|---------|---------|
| `on_guild_create` | `parse_guild_create` | `Guild` | [`botpy/guild.py`](../models/guild.md) |
| `on_channel_create` | `parse_channel_create` | `Channel` | [`botpy/channel.py`](../models/channel.md) |
| `on_at_message_create` | `parse_at_message_create` | `Message` | [`botpy/message.py`](../models/message.md) |
| `on_guild_member_add` | `parse_guild_member_add` | `Member` | [`botpy/user.py`](../models/user.md) |
| `on_message_reaction_add` | `parse_message_reaction_add` | `Reaction` | [`botpy/reaction.py`](../models/other.md#reaction-表情表态) |
| `on_audio_start` | `parse_audio_start` | `Audio` | [`botpy/audio.py`](../models/other.md#audio-音频控制) |
| `on_forum_thread_create` | `parse_forum_thread_create` | `Thread` | [`botpy/forum.py`](../models/forum.md) |
| `on_interaction_create` | `parse_interaction_create` | `Interaction` | [`botpy/interaction.py`](../models/other.md#interaction) |
| `on_group_at_message_create` | `parse_group_at_message_create` | `GroupMessage` | [`botpy/message.py`](../models/message.md) |
| `on_c2c_message_create` | `parse_c2c_message_create` | `C2CMessage` | [`botpy/message.py`](../models/message.md) |
| `on_group_add_robot` | `parse_group_add_robot` | `GroupManageEvent` | [`botpy/manage.py`](group-manage.md) |
| `on_friend_add` | `parse_friend_add` | `C2CManageEvent` | [`botpy/manage.py`](group-manage.md) |
| `on_audio_or_live_channel_member_enter` | `parse_audio_or_live_channel_member_enter` | `PublicAudio` | [`botpy/audio.py`](../models/other.md#audio-音频控制) |
| `on_open_forum_thread_create` | `parse_open_forum_thread_create` | `OpenThread` | [`botpy/forum.py`](../models/forum.md) |
