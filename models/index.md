# 数据模型

SDK 使用两种方式表示数据：

1. **TypedDict 类型**（`botpy.types`）— API 请求/响应的数据结构，提供类型提示的字典
2. **领域模型**（`botpy.message.*`, `botpy.guild.*` 等）— 事件回调中使用的 Python 对象，封装了数据访问

## TypedDict 类型定义

定义在 `botpy/types/` 目录下，主要用于 API 方法的参数和返回值类型提示。所有 TypedDict 都是字典类型，通过键访问数据。

| 分类 | 文件 | 内容 |
|------|------|------|
| [消息](message.md) | [`types/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/message.py)、[`types/gateway.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/gateway.py) | Message, MessagePayload, DirectMessagePayload, MessageAuditPayload, Embed, Ark, Markdown, Keyboard, Media, Attachment, DmsPayload, MessagesPager, TypesEnum 等 |
| [频道](guild.md) | [`types/guild.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/guild.py) | GuildPayload, Role, GuildRole, GuildRoles, GuildMembers |
| [子频道](channel.md) | [`types/channel.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/channel.py) | ChannelPayload, ChannelType, ChannelSubType, ChannelPermissions |
| [用户](user.md) | [`types/user.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/user.py) | User, Member, GuildMemberPayload |
| [内联键盘](inline.md) | [`types/inline.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/inline.py) | Keyboard, Button, Action, Permission, RenderData |
| [论坛](forum.md) | [`types/forum.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/forum.py) | Thread, Post, Reply, AuditResult, ForumRsp, PostThreadRsp, OpenForumEvent |
| [富文本](rich-text.md) | [`types/rich_text.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/rich_text.py) | RichText, Elem, Paragraph, RichObject, AuditType, RichType, AtType 等 |
| [其他](other.md) | `types/*` | WsContext, ReadyEvent, Announce, Audio, Emoji, Permission, PinsMessage, Reaction, Schedule, Robot, Session, Interaction 等 |

## 领域模型类

定义在 `botpy/` 根目录下，通过 `__slots__` 优化内存使用。事件回调中接收的是这些类的实例。

| 类 | 文件 | 用途 |
|-----|------|------|
| `Guild` | [`botpy/guild.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/guild.py) | 频道事件回调参数 |
| `Channel` | [`botpy/channel.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/channel.py) | 子频道事件回调参数 |
| `Message` | [`botpy/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/message.py) | 公域/私域消息事件回调参数，提供 `reply()` 方法 |
| `DirectMessage` | [`botpy/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/message.py) | 私信消息事件回调参数，提供 `reply()` 方法 |
| `GroupMessage` | [`botpy/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/message.py) | 群消息事件回调参数，提供 `reply()` 方法 |
| `C2CMessage` | [`botpy/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/message.py) | C2C 消息事件回调参数，提供 `reply()` 方法 |
| `MessageAudit` | [`botpy/message.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/message.py) | 消息审核事件回调参数 |
| `Member` | [`botpy/user.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/user.py) | 成员事件回调参数 |
| `Reaction` | [`botpy/reaction.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/reaction.py) | 表态事件回调参数 |
| `Audio` | [`botpy/audio.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/audio.py) | 音频事件回调参数 |
| `PublicAudio` | [`botpy/audio.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/audio.py) | 音视频子频道成员事件回调参数 |
| `Interaction` | [`botpy/interaction.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/interaction.py) | 互动事件回调参数 |
| `Thread` | [`botpy/forum.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/forum.py) | 私域论坛事件回调参数 |
| `OpenThread` | [`botpy/forum.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/forum.py) | 开放论坛事件回调参数 |
| `GroupManageEvent` | [`botpy/manage.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/manage.py) | 群管理事件回调参数 |
| `C2CManageEvent` | [`botpy/manage.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/manage.py) | C2C 管理事件回调参数 |

## 数据流

```
QQ API 响应 (JSON)
  → BotAPI 方法返回 TypedDict (字典，用于 API 调用方)
  → 或 ConnectionState.parse_* 创建领域模型 (用于事件回调方)
```

## 类型映射表

| QQ API 字段 | TypedDict 类型 | 领域模型 |
|-------------|---------------|---------|
| guild | `types.guild.GuildPayload` | `botpy.guild.Guild` |
| channel | `types.channel.ChannelPayload` | `botpy.channel.Channel` |
| message | `types.gateway.MessagePayload` / `types.message.Message` | `botpy.message.Message` |
| member | `types.user.Member` / `types.user.GuildMemberPayload` | `botpy.user.Member` |
| user | `types.user.User` / `types.gateway.UserPayload` | `message._User` (内嵌) |
| audio | `types.audio.AudioAction` / `types.audio.AudioLive` | `botpy.audio.Audio` / `botpy.audio.PublicAudio` |
| reaction | `types.reaction.Reaction` | `botpy.reaction.Reaction` |
| forum | `types.forum.Thread` | `botpy.forum.Thread` |
| interaction | `types.interaction.InteractionPayload` | `botpy.interaction.Interaction` |
