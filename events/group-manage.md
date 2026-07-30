# 群/C2C 管理事件

需要 `Intents(public_messages=True)`。

## 群管理事件

### on_group_at_message_create

当收到群 @机器人的消息时触发。

```python
async def on_group_at_message_create(self, message: GroupMessage)
```

### on_group_add_robot

机器人加入群聊时触发。

```python
async def on_group_add_robot(self, event: GroupManageEvent)
```

### on_group_del_robot

机器人退出群聊时触发。

```python
async def on_group_del_robot(self, event: GroupManageEvent)
```

### on_group_msg_reject

群聊拒绝机器人主动消息。

```python
async def on_group_msg_reject(self, event: GroupManageEvent)
```

### on_group_msg_receive

群聊接受机器人主动消息。

```python
async def on_group_msg_receive(self, event: GroupManageEvent)
```

## C2C 管理事件

### on_c2c_message_create

当收到 C2C 的消息时触发。

```python
async def on_c2c_message_create(self, message: C2CMessage)
```

### on_friend_add

用户添加机器人为好友时触发。

```python
async def on_friend_add(self, event: C2CManageEvent)
```

### on_friend_del

用户删除机器人好友时触发。

```python
async def on_friend_del(self, event: C2CManageEvent)
```

### on_c2c_msg_reject

用户拒绝机器人主动消息。

```python
async def on_c2c_msg_reject(self, event: C2CManageEvent)
```

### on_c2c_msg_receive

用户接受机器人主动消息。

```python
async def on_c2c_msg_receive(self, event: C2CManageEvent)
```

## 音视频子频道事件

需要 `Intents(audio_or_live_channel_member=True)`。

### on_audio_or_live_channel_member_enter

用户进入音视频/直播子频道时触发。

```python
async def on_audio_or_live_channel_member_enter(self, audio: PublicAudio)
```

### on_audio_or_live_channel_member_exit

用户退出音视频/直播子频道时触发。

```python
async def on_audio_or_live_channel_member_exit(self, audio: PublicAudio)
```
