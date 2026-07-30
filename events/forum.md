# 论坛事件

## 私域论坛

需要 `Intents(forums=True)`，仅私域机器人可用。

| 事件方法 | 说明 |
|---------|------|
| `on_forum_thread_create` | 用户创建主题 |
| `on_forum_thread_update` | 用户更新主题 |
| `on_forum_thread_delete` | 用户删除主题 |
| `on_forum_post_create` | 用户创建帖子 |
| `on_forum_post_delete` | 用户删除帖子 |
| `on_forum_reply_create` | 用户回复评论 |
| `on_forum_reply_delete` | 用户删除评论 |
| `on_forum_publish_audit_result` | 发表审核结果 |

**事件触发详情（私域论坛）**

| 事件方法 | 触发解析 | 参数模型 | 源码位置 |
|---------|---------|---------|---------|
| `on_forum_thread_create` | `parse_forum_thread_create` → `on_forum_thread_create` | [`Thread`](../models/thread.md) | [`connection.py` 第 246-248 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L246-L248) / [`forum.py` 第 70-152 行](https://github.com/tencent-connect/botpy/tree/master/botpy/forum.py#L70-L152) |
| `on_forum_thread_update` | `parse_forum_thread_update` → `on_forum_thread_update` | [`Thread`](../models/thread.md) | [`connection.py` 第 250-252 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L250-L252) / [`forum.py` 第 70-152 行](https://github.com/tencent-connect/botpy/tree/master/botpy/forum.py#L70-L152) |
| `on_forum_thread_delete` | `parse_forum_thread_delete` → `on_forum_thread_delete` | [`Thread`](../models/thread.md) | [`connection.py` 第 254-256 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L254-L256) / [`forum.py` 第 70-152 行](https://github.com/tencent-connect/botpy/tree/master/botpy/forum.py#L70-L152) |
| `on_forum_post_create` | `parse_forum_post_create` → `on_forum_post_create` | 原始 dict | [`connection.py` 第 258-259 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L258-L259) |
| `on_forum_post_delete` | `parse_forum_post_delete` → `on_forum_post_delete` | 原始 dict | [`connection.py` 第 261-262 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L261-L262) |
| `on_forum_reply_create` | `parse_forum_reply_create` → `on_forum_reply_create` | 原始 dict | [`connection.py` 第 264-265 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L264-L265) |
| `on_forum_reply_delete` | `parse_forum_reply_delete` → `on_forum_reply_delete` | 原始 dict | [`connection.py` 第 267-268 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L267-L268) |
| `on_forum_publish_audit_result` | `parse_forum_publish_audit_result` → `on_forum_publish_audit_result` | 原始 dict | [`connection.py` 第 270-271 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L270-L271) |

`Thread` 模型的 `__slots__`: `thread_info` (嵌套 `_ThreadInfo`: `thread_id`, `title` → `_Title` (含 `paragraphs` → `_Paragraphs` → `_Elems`), `content` → `_Content` (含 `paragraphs` → `_Paragraphs` → `_Elems`), `date_time`), `channel_id`, `guild_id`, `author_id`, `event_id`

## 开放论坛

需要 `Intents(open_forum_event=True)`。

| 事件方法 | 参数类型 | 说明 |
|---------|---------|------|
| `on_open_forum_thread_create` | OpenThread | 用户创建主题 |
| `on_open_forum_thread_update` | OpenThread | 用户修改主题 |
| `on_open_forum_thread_delete` | OpenThread | 用户删除主题 |
| `on_open_forum_post_create` | OpenThread | 用户创建帖子 |
| `on_open_forum_post_delete` | OpenThread | 用户删除帖子 |
| `on_open_forum_reply_create` | OpenThread | 用户回复评论 |
| `on_open_forum_reply_delete` | OpenThread | 用户删除评论 |

**事件触发详情（开放论坛）**

| 事件方法 | 触发解析 | 参数模型 | 源码位置 |
|---------|---------|---------|---------|
| `on_open_forum_thread_create` | `parse_open_forum_thread_create` → `on_open_forum_thread_create` | [`OpenThread`](../models/open-thread.md) | [`connection.py` 第 281-283 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L281-L283) / [`forum.py` 第 155-172 行](https://github.com/tencent-connect/botpy/tree/master/botpy/forum.py#L155-L172) |
| `on_open_forum_thread_update` | `parse_open_forum_thread_update` → `on_open_forum_thread_update` | [`OpenThread`](../models/open-thread.md) | [`connection.py` 第 285-287 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L285-L287) / [`forum.py` 第 155-172 行](https://github.com/tencent-connect/botpy/tree/master/botpy/forum.py#L155-L172) |
| `on_open_forum_thread_delete` | `parse_open_forum_thread_delete` → `on_open_forum_thread_delete` | [`OpenThread`](../models/open-thread.md) | [`connection.py` 第 289-291 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L289-L291) / [`forum.py` 第 155-172 行](https://github.com/tencent-connect/botpy/tree/master/botpy/forum.py#L155-L172) |
| `on_open_forum_post_create` | `parse_open_forum_post_create` → `on_open_forum_post_create` | 原始 dict | [`connection.py` 第 293-295 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L293-L295) |
| `on_open_forum_post_delete` | `parse_open_forum_post_delete` → `on_open_forum_post_delete` | 原始 dict | [`connection.py` 第 297-299 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L297-L299) |
| `on_open_forum_reply_create` | `parse_open_forum_reply_create` → `on_open_forum_reply_create` | 原始 dict | [`connection.py` 第 301-303 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L301-L303) |
| `on_open_forum_reply_delete` | `parse_open_forum_reply_delete` → `on_open_forum_reply_delete` | 原始 dict | [`connection.py` 第 305-307 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L305-L307) |

`OpenThread` 模型的 `__slots__`: `guild_id`, `channel_id`, `author_id`, `event_id`
