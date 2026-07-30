# 数据模型

SDK 使用两种方式表示数据：

1. **TypedDict 类型**（`botpy.types`）— API 请求/响应的数据结构，提供类型提示的字典
2. **领域模型**（`botpy.message.*`, `botpy.guild.*` 等）— 事件回调中使用的 Python 对象，封装了数据访问

## 类型定义目录

| 分类 | 文件 | 内容 |
|------|------|------|
| [消息](message.md) | types/message.py | Message, Embed, Ark, Markdown, Keyboard, Media 等 |
| [频道](guild.md) | types/guild.py | Guild, Role |
| [子频道](channel.md) | types/channel.py | Channel, ChannelType, ChannelSubType, ChannelPermissions |
| [用户](user.md) | types/user.py | User, Member |
| [内联键盘](inline.md) | types/inline.py | Keyboard, Button, Action, Permission, RenderData |
| [论坛](forum.md) | types/forum.py | Thread, Post, Reply, ForumRsp |
| [富文本](rich-text.md) | types/rich_text.py | RichText, Elem, Paragraph 等 |
| [其他](other.md) | types/* | Announce, Audio, Emoji, Permission, PinsMessage, Reaction, Schedule 等 |
