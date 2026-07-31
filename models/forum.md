# 论坛模型

**来源文件：**
- TypedDict 定义：[`botpy/types/forum.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/forum.py)
- 领域模型：[`botpy/forum.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/forum.py)

**相关类型：** [Rich Text 模型](rich-text.md) — `AuditType`、`RichText`、`RichObject`

---

## Format (字面量别名)

帖子内容格式（`Literal[1, 2, 3, 4]`）。

| 取值 | 语义说明 |
|---|---|
| 1 | 普通文本 |
| 2 | HTML |
| 3 | Markdown |
| 4 | JSON |

---

## ThreadInfo

帖子信息结构。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| thread_id | str | 帖子 ID |
| title | str | 帖子标题 |
| content | str | 帖子内容 |
| date_time | str | 发布时间 |

---

## Thread (帖子)

帖子数据结构。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| guild_id | str | 频道 ID |
| channel_id | str | 子频道 ID |
| author_id | str | 作者 ID |
| thread_info | [ThreadInfo](#threadinfo) | 帖子信息 |

---

## PostInfo

评论信息结构。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| thread_id | str | 所属帖子 ID |
| post_id | str | 评论 ID |
| content | str | 评论内容 |
| date_time | str | 发布时间 |

---

## Post (评论)

评论数据结构。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| guild_id | str | 频道 ID |
| channel_id | str | 子频道 ID |
| author_id | str | 作者 ID |
| post_info | [PostInfo](#postinfo) | 评论信息 |

---

## ReplyInfo

回复信息结构。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| thread_id | str | 所属帖子 ID |
| post_id | str | 所属评论 ID |
| reply_id | str | 回复 ID |
| content | str | 回复内容 |
| date_time | str | 发布时间 |

---

## Reply (回复)

回复数据结构。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| guild_id | str | 频道 ID |
| channel_id | str | 子频道 ID |
| author_id | str | 作者 ID |
| reply_info | [ReplyInfo](#replyinfo) | 回复信息 |

---

## AuditResult

论坛内容发布审核结果。`type` 字段取值见 [AuditType](rich-text.md#audittype)。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| guild_id | str | 频道 ID |
| channel_id | str | 子频道 ID |
| author_id | str | 作者 ID |
| thread_id | str | 帖子 ID |
| post_id | str | 评论 ID |
| reply_id | str | 回复 ID |
| type | [AuditType](rich-text.md#audittype) | 审核类型（1=帖子，2=评论，3=回复） |
| result | int | 审核结果（0=通过，1=不通过，2=忽略） |
| err_msg | str | 错误信息 |

---

## ForumRsp

论坛帖子列表响应。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| threads | List[[Thread](#thread-帖子)] | 帖子列表 |
| is_finish | int | 是否已获取完成（0=未完成，1=已完成） |

---

## PostThreadRsp

发布帖子响应。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| task_id | str | 任务 ID |
| create_time | str | 创建时间 |

---

## OpenForumEvent

开放论坛事件数据结构。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| guild_id | str | 频道 ID |
| channel_id | str | 子频道 ID |
| author_id | str | 作者 ID |

---

## Thread (领域模型)

帖子领域模型，通过 `on_forum_thread_create` / `on_forum_thread_update` / `on_forum_thread_delete` 事件回调接收，是对 `Thread` 数据结构的封装。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| _api | [BotAPI](../api/) | BotAPI 实例，用于调用 API 方法 |
| thread_info | Thread._ThreadInfo | 帖子信息（嵌套对象） |
| channel_id | str | 子频道 ID |
| guild_id | str | 频道 ID |
| author_id | str | 作者 ID |
| event_id | str | 事件 ID |

### Thread._ThreadInfo

帖子信息对象，标题与内容以富文本段落结构保存。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| title | Thread._Title | 帖子标题（富文本段落结构） |
| content | Thread._Content | 帖子内容（富文本段落结构） |
| thread_id | str | 帖子 ID |
| date_time | str | 发布时间 |

### Thread._Title

标题富文本结构。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| paragraphs | List[Thread._Paragraphs] | 段落列表 |

### Thread._Content

内容富文本结构。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| paragraphs | List[Thread._Paragraphs] | 段落列表 |

### Thread._Paragraphs

富文本段落，每个段落由元素列表与段落属性组成。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| elems | List[Thread._Elems] | 元素列表 |
| props | 待确认 | 段落属性，直接透传原始数据 |

### Thread._Elems

富文本元素，根据 `type` 区分具体元素类型。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| type | int | 元素类型（1=文本，2=图片，3=视频，4=URL） |
| text | _Text | 文本元素（`type=1` 时有效） |
| image | _Image | 图片元素（`type=2` 时有效） |
| video | _Video | 视频元素（`type=3` 时有效） |
| url | _Url | URL 元素（`type=4` 时有效） |

元素对象 `_Text`（含 `text`）、`_Image`（含 `plat_image`，其内部 `_PlatImage` 含 `url`/`width`/`height`/`image_id`）、`_Video`（含 `plat_video`，其内部 `_PlatVideo` 含 `url`/`width`/`height`/`video_id`/`cover`）、`_Url`（含 `url`/`desc`），均为模块级私有类，字段类型待确认。

---

## OpenThread (领域模型)

开放论坛事件使用的领域模型，通过 `on_open_forum_thread_create` 等事件回调接收。构造函数仅接收 `(api, data)`，`__init__` 中未初始化部分已声明的 `__slots__` 变量。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| _api | [BotAPI](../api/) | BotAPI 实例，用于调用 API 方法 |
| thread_info | 待确认 | 帖子信息，已在 `__slots__` 中声明但当前实现未初始化 |
| channel_id | str | 子频道 ID |
| guild_id | str | 频道 ID |
| author_id | str | 作者 ID |
| event_id | 待确认 | 事件 ID，已在 `__slots__` 中声明但当前实现未初始化 |
