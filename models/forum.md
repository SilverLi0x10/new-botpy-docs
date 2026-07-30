# 论坛类型

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

## AuditResult

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

## ForumRsp

```python
class ForumRsp(TypedDict):
    threads: List[Thread]
    is_finish: int
```

## PostThreadRsp

```python
class PostThreadRsp(TypedDict):
    task_id: str
    create_time: str
```
