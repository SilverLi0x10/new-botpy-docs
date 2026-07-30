# 示例

SDK 提供了 20+ 完整示例代码，涵盖各种消息类型和业务场景。示例代码存放在项目根目录的 `examples/` 目录下。

## 运行示例

所有示例都需要创建 `config.yaml` 配置文件：

```yaml
appid: "你的AppID"
secret: "你的AppSecret"
```

然后直接运行对应的 Python 文件：

```bash
python examples/demo_at_reply.py
```

## 示例索引

| 示例 | 文件 | 说明 |
|------|------|------|
| [基础回复](basic-reply.md) | demo_at_reply.py | 被 @ 时自动回复 |
| [ARK 模板消息](ark-message.md) | demo_at_reply_ark.py | 发送模板消息 |
| [Embed 消息](embed-message.md) | demo_at_reply_embed.py | 发送富文本 embed 消息 |
| [指令系统](commands.md) | demo_at_reply_command.py | 使用 @Commands 装饰器 |
| [本地图片](file-image.md) | demo_at_reply_file_data.py | 发送本地图片消息 |
| [内联键盘](keyboard.md) | demo_at_reply_keyboard.py | 发送按钮/键盘消息 |
| [Markdown](markdown.md) | demo_at_reply_markdown.py | 发送 Markdown 消息 |
| [消息引用](reference.md) | demo_at_reply_reference.py | 引用回复消息 |
| [私信](dm.md) | demo_dms_reply.py | 发送和接收私信 |
| [撤回消息](recall.md) | demo_recall.py | 撤回已发送消息 |
| [公告](announce.md) | demo_announce.py | 公告创建和删除 |
| [接口权限](permission.md) | demo_api_permission.py | 权限查询和申请 |
| [精华消息](pins.md) | demo_pins_message.py | 精华消息管理 |
| [日程](schedule.md) | demo_schedule.py | 日程增删改查 |
| [表情表态](reaction.md) | demo_get_reaction_users.py | 表情表态管理 |
| [成员事件](guild-member.md) | demo_guild_member_event.py | 成员进出事件 |
| [群消息](group-message.md) | demo_group_reply_text.py | 群聊消息收发 |
| [C2C 消息](c2c-message.md) | demo_c2c_reply_text.py | C2C 消息收发 |
| [群文件](group-file.md) | demo_group_reply_file.py | 群聊富媒体文件 |
| [C2C 文件](c2c-file.md) | demo_c2c_reply_file.py | C2C 富媒体文件 |
| [群管理](group-manage.md) | demo_group_manage_event.py | 群管理事件 |
| [C2C 管理](c2c-manage.md) | demo_c2c_manage_event.py | C2C 管理事件 |
| [音视频成员](audio-member.md) | demo_audio_or_live_channel_member.py | 音视频/直播成员进出 |
| [开放论坛](open-forum.md) | demo_open_forum_event.py | 开放论坛事件 |
