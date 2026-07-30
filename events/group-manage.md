# 群/C2C 管理事件

需要 `Intents(public_messages=True)`。

## 群管理事件

### on_group_at_message_create

当收到群 @机器人的消息时触发。

```python
async def on_group_at_message_create(self, message: GroupMessage)
```

**事件触发详情**

- **触发解析**: `parse_group_at_message_create` → `on_group_at_message_create`
- **参数模型**: [`GroupMessage`](../models/group-message.md) — `__slots__`（继承自 `BaseMessage` + 自有）: `content`, `id`, `message_reference` (嵌套 `_MessageRef`: `message_id`), `mentions` (列表 `_User`), `attachments` (列表 `_Attachments`), `msg_seq`, `timestamp`, `event_id`, `author` (嵌套 `_User`: `member_openid`), `group_openid`
- **源码位置**: [`connection.py` 第 205-207 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L205-L207) | [`message.py` 第 190-261 行](https://github.com/tencent-connect/botpy/tree/master/botpy/message.py#L190-L261)

### on_group_add_robot

机器人加入群聊时触发。

```python
async def on_group_add_robot(self, event: GroupManageEvent)
```

**事件触发详情**

- **触发解析**: `parse_group_add_robot` → `on_group_add_robot`
- **参数模型**: [`GroupManageEvent`](../models/group-manage-event.md) — `__slots__` 包含: `event_id`, `timestamp`, `group_openid`, `op_member_openid`
- **源码位置**: [`connection.py` 第 213-215 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L213-L215) | [`manage.py` 第 5-22 行](https://github.com/tencent-connect/botpy/tree/master/botpy/manage.py#L5-L22)

### on_group_del_robot

机器人退出群聊时触发。

```python
async def on_group_del_robot(self, event: GroupManageEvent)
```

**事件触发详情**

- **触发解析**: `parse_group_del_robot` → `on_group_del_robot`
- **参数模型**: [`GroupManageEvent`](../models/group-manage-event.md) — `__slots__` 同 `on_group_add_robot`
- **源码位置**: [`connection.py` 第 217-219 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L217-L219) | [`manage.py` 第 5-22 行](https://github.com/tencent-connect/botpy/tree/master/botpy/manage.py#L5-L22)

### on_group_msg_reject

群聊拒绝机器人主动消息。

```python
async def on_group_msg_reject(self, event: GroupManageEvent)
```

**事件触发详情**

- **触发解析**: `parse_group_msg_reject` → `on_group_msg_reject`
- **参数模型**: [`GroupManageEvent`](../models/group-manage-event.md) — `__slots__` 同 `on_group_add_robot`
- **源码位置**: [`connection.py` 第 221-223 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L221-L223) | [`manage.py` 第 5-22 行](https://github.com/tencent-connect/botpy/tree/master/botpy/manage.py#L5-L22)

### on_group_msg_receive

群聊接受机器人主动消息。

```python
async def on_group_msg_receive(self, event: GroupManageEvent)
```

**事件触发详情**

- **触发解析**: `parse_group_msg_receive` → `on_group_msg_receive`
- **参数模型**: [`GroupManageEvent`](../models/group-manage-event.md) — `__slots__` 同 `on_group_add_robot`
- **源码位置**: [`connection.py` 第 225-227 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L225-L227) | [`manage.py` 第 5-22 行](https://github.com/tencent-connect/botpy/tree/master/botpy/manage.py#L5-L22)

## C2C 管理事件

### on_c2c_message_create

当收到 C2C 的消息时触发。

```python
async def on_c2c_message_create(self, message: C2CMessage)
```

**事件触发详情**

- **触发解析**: `parse_c2c_message_create` → `on_c2c_message_create`
- **参数模型**: [`C2CMessage`](../models/c2c-message.md) — `__slots__`（继承自 `BaseMessage` + 自有）: `content`, `id`, `message_reference` (嵌套 `_MessageRef`: `message_id`), `mentions` (列表 `_User`), `attachments` (列表 `_Attachments`), `msg_seq`, `timestamp`, `event_id`, `author` (嵌套 `_User`: `user_openid`)
- **源码位置**: [`connection.py` 第 209-211 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L209-L211) | [`message.py` 第 263-283 行](https://github.com/tencent-connect/botpy/tree/master/botpy/message.py#L263-L283)

### on_friend_add

用户添加机器人为好友时触发。

```python
async def on_friend_add(self, event: C2CManageEvent)
```

**事件触发详情**

- **触发解析**: `parse_friend_add` → `on_friend_add`
- **参数模型**: [`C2CManageEvent`](../models/c2c-manage-event.md) — `__slots__` 包含: `event_id`, `timestamp`, `openid`
- **源码位置**: [`connection.py` 第 229-231 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L229-L231) | [`manage.py` 第 25-40 行](https://github.com/tencent-connect/botpy/tree/master/botpy/manage.py#L25-L40)

### on_friend_del

用户删除机器人好友时触发。

```python
async def on_friend_del(self, event: C2CManageEvent)
```

**事件触发详情**

- **触发解析**: `parse_friend_del` → `on_friend_del`
- **参数模型**: [`C2CManageEvent`](../models/c2c-manage-event.md) — `__slots__` 同 `on_friend_add`
- **源码位置**: [`connection.py` 第 233-235 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L233-L235) | [`manage.py` 第 25-40 行](https://github.com/tencent-connect/botpy/tree/master/botpy/manage.py#L25-L40)

### on_c2c_msg_reject

用户拒绝机器人主动消息。

```python
async def on_c2c_msg_reject(self, event: C2CManageEvent)
```

**事件触发详情**

- **触发解析**: `parse_c2c_msg_reject` → `on_c2c_msg_reject`
- **参数模型**: [`C2CManageEvent`](../models/c2c-manage-event.md) — `__slots__` 同 `on_friend_add`
- **源码位置**: [`connection.py` 第 237-239 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L237-L239) | [`manage.py` 第 25-40 行](https://github.com/tencent-connect/botpy/tree/master/botpy/manage.py#L25-L40)

### on_c2c_msg_receive

用户接受机器人主动消息。

```python
async def on_c2c_msg_receive(self, event: C2CManageEvent)
```

**事件触发详情**

- **触发解析**: `parse_c2c_msg_receive` → `on_c2c_msg_receive`
- **参数模型**: [`C2CManageEvent`](../models/c2c-manage-event.md) — `__slots__` 同 `on_friend_add`
- **源码位置**: [`connection.py` 第 241-243 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L241-L243) | [`manage.py` 第 25-40 行](https://github.com/tencent-connect/botpy/tree/master/botpy/manage.py#L25-L40)

## 音视频子频道事件

需要 `Intents(audio_or_live_channel_member=True)`。

### on_audio_or_live_channel_member_enter

用户进入音视频/直播子频道时触发。

```python
async def on_audio_or_live_channel_member_enter(self, audio: PublicAudio)
```

**事件触发详情**

- **触发解析**: `parse_audio_or_live_channel_member_enter` → `on_audio_or_live_channel_member_enter`
- **参数模型**: [`PublicAudio`](../models/public-audio.md) — `__slots__` 包含: `guild_id`, `channel_id`, `channel_type`, `user_id`
- **源码位置**: [`connection.py` 第 273-275 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L273-L275) | [`audio.py` 第 28-45 行](https://github.com/tencent-connect/botpy/tree/master/botpy/audio.py#L28-L45)

### on_audio_or_live_channel_member_exit

用户退出音视频/直播子频道时触发。

```python
async def on_audio_or_live_channel_member_exit(self, audio: PublicAudio)
```

**事件触发详情**

- **触发解析**: `parse_audio_or_live_channel_member_exit` → `on_audio_or_live_channel_member_exit`
- **参数模型**: [`PublicAudio`](../models/public-audio.md) — `__slots__` 同 `on_audio_or_live_channel_member_enter`
- **源码位置**: [`connection.py` 第 277-279 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L277-L279) | [`audio.py` 第 28-45 行](https://github.com/tencent-connect/botpy/tree/master/botpy/audio.py#L28-L45)
