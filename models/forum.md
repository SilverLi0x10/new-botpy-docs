# 论坛类型

**Source files:**
- TypedDict definitions: [`botpy/types/forum.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/forum.py)
- Domain models: [`botpy/forum.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/forum.py)

**Related types:** [Rich Text](rich-text.md) — `AuditType`, `RichText`, `RichObject`

---

## Format

帖子内容格式（[`types/forum.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/forum.py#L5)）。

```python
Format = Literal[1, 2, 3, 4]
# 1=普通文本, 2=HTML, 3=Markdown, 4=JSON
```

---

## Thread (帖子)

```python
class Thread(TypedDict):
    guild_id: str
    channel_id: str
    author_id: str
    thread_info: ThreadInfo

class ThreadInfo(TypedDict):
    thread_id: str
    title: str
    content: str
    date_time: str
```

---

## Post (评论)

```python
class Post(TypedDict):
    guild_id: str
    channel_id: str
    author_id: str
    post_info: PostInfo

class PostInfo(TypedDict):
    thread_id: str
    post_id: str
    content: str
    date_time: str
```

---

## Reply (回复)

```python
class Reply(TypedDict):
    guild_id: str
    channel_id: str
    author_id: str
    reply_info: ReplyInfo

class ReplyInfo(TypedDict):
    thread_id: str
    post_id: str
    reply_id: str
    content: str
    date_time: str
```

---

## AuditResult

审核结果（[`types/forum.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/forum.py#L51-L60)）。`type` 字段使用 `AuditType`（参见 [Rich Text](rich-text.md)）。

```python
class AuditResult(TypedDict):
    guild_id: str
    channel_id: str
    author_id: str
    thread_id: str
    post_id: str
    reply_id: str
    type: AuditType  # 1=帖子, 2=评论, 3=回复
    result: int
    err_msg: str
```

---

## ForumRsp

论坛帖子列表响应（[`types/forum.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/forum.py#L63-L65)）。

```python
class ForumRsp(TypedDict):
    threads: List[Thread]
    is_finish: int
```

---

## PostThreadRsp

发布帖子响应（[`types/forum.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/forum.py#L68-L70)）。

```python
class PostThreadRsp(TypedDict):
    task_id: str
    create_time: str
```

---

## OpenForumEvent

开放论坛事件（[`types/forum.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/forum.py#L72-L75)）。

```python
class OpenForumEvent(TypedDict):
    guild_id: str
    channel_id: str
    author_id: str
```

---

## 领域模型类

### Thread ([`botpy/forum.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/forum.py#L70-L152))

通过 `on_forum_thread_create` / `on_forum_thread_update` / `on_forum_thread_delete` 事件回调接收。

```python
class Thread:
    __slots__ = (
        "_api",           # BotAPI 实例
        "thread_info",    # _ThreadInfo 对象
        "channel_id",     # 子频道 ID
        "guild_id",       # 频道 ID
        "author_id",      # 作者 ID
        "event_id",       # 事件 ID
    )
```

`Thread._ThreadInfo` 嵌套属性：

| 属性 | 类型 | 说明 |
|------|------|------|
| `thread_id` | `str` | 帖子 ID |
| `title` | `_Title` | 标题（RichText 段落结构） |
| `content` | `_Content` | 内容（RichText 段落结构） |
| `date_time` | `str` | 发布时间 |

帖子的标题和内容使用富文本结构（`_Title` / `_Content`），包含 `paragraphs` 列表，每个段落包含 `elems` 元素列表（类型 1=文本, 2=图片, 3=视频, 4=URL）。

### OpenThread ([`botpy/forum.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/forum.py#L155-L172))

开放论坛事件使用的简化模型。

```python
class OpenThread:
    __slots__ = (
        "_api",           # BotAPI 实例
        "thread_info",    # 帖子信息
        "channel_id",     # 子频道 ID
        "guild_id",       # 频道 ID
        "author_id",      # 作者 ID
        "event_id",       # 事件 ID
    )
```
