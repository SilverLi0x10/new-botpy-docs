# 论坛 API

论坛 API 用于管理论坛子频道中的帖子（Thread）。

## get_threads

获取子频道下的帖子列表。

**源码位置**: [`botpy/api.py` 第 1306 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L1306)

**API 路由**: `GET /channels/{channel_id}/threads`

```python
async def get_threads(channel_id: str) -> ForumRsp
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| channel_id | str | 必填 | 论坛子频道的 ID |

**返回**: [`ForumRsp`](../models/forum.md#forumrsp)

**ForumRsp 字段**:
| 字段 | 类型 | 说明 |
|------|------|------|
| threads | List[[`Thread`](../models/forum.md#thread-帖子)] | 帖子列表 |
| is_finish | int | 是否已获取完成 |

## get_thread_detail

获取帖子详情。

**源码位置**: [`botpy/api.py` 第 1323 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L1323)

**API 路由**: `GET /channels/{channel_id}/threads/{thread_id}`

```python
async def get_thread_detail(channel_id: str, thread_id: str) -> ThreadInfo
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| channel_id | str | 必填 | 论坛子频道的 ID |
| thread_id | str | 必填 | 要查询的帖子 ID |

**返回**: [`ThreadInfo`](../models/forum.md#thread-帖子)

**ThreadInfo 字段**:
| 字段 | 类型 | 说明 |
|------|------|------|
| thread_id | str | 帖子 ID |
| title | str | 帖子标题 |
| content | str | 帖子内容 |
| date_time | str | 发布时间 |

## post_thread

发表帖子。

**源码位置**: [`botpy/api.py` 第 1342 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L1342)

**API 路由**: `PUT /channels/{channel_id}/threads`

```python
async def post_thread(
    channel_id: str,
    title: str,
    content: str,
    format: Format,
) -> PostThreadRsp
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| channel_id | str | 必填 | 论坛子频道的 ID |
| title | str | 必填 | 帖子标题 |
| content | str | 必填 | 帖子内容 |
| format | [`Format`](../models/forum.md) | 必填 | 内容格式：`1` 普通文本，`2` HTML，`3` Markdown，`4` JSON |

**返回**: [`PostThreadRsp`](../models/forum.md#postthreadrsp)

**PostThreadRsp 字段**:
| 字段 | 类型 | 说明 |
|------|------|------|
| task_id | str | 任务 ID |
| create_time | str | 创建时间 |

## delete_thread

删除帖子。

**源码位置**: [`botpy/api.py` 第 1364 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L1364)

**API 路由**: `DELETE /channels/{channel_id}/threads/{thread_id}`

```python
async def delete_thread(channel_id: str, thread_id: str) -> str
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| channel_id | str | 必填 | 论坛子频道的 ID |
| thread_id | str | 必填 | 要删除的帖子 ID |

**返回**: 成功返回空字符串。
