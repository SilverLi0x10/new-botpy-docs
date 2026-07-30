# 事件列表

SDK 通过 WebSocket 接收 QQ 机器人平台推送的实时事件。继承 `Client` 并实现 `on_*` 方法来监听事件。

## 事件注册机制

当 WebSocket 收到事件时，`ConnectionState` 的 `parse_*` 方法将原始数据解析为模型对象，然后通过 `Client.ws_dispatch` 调用对应的 `on_*` 方法。

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
| [频道/子频道事件](guild.md) | guilds | 频道创建、更新、删除，子频道变化 |
| [消息事件](message.md) | public_guild_messages / guild_messages | @消息、消息创建/删除 |
| [成员事件](member.md) | guild_members | 成员加入、更新、退出 |
| [表态事件](reaction.md) | guild_message_reactions | 消息表情表态 |
| [音频事件](audio.md) | audio_action | 音频播放、上/下麦 |
| [论坛事件](forum.md) | forums / open_forum_event | 论坛帖子/评论 |
| [互动事件](interaction.md) | interaction | 按钮回调等 |
| [群管理事件](group-manage.md) | public_messages | 群添加/移除机器人、C2C 好友事件 |
