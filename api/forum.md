# 论坛 API

## get_threads

获取子频道下的帖子列表。

```python
async def get_threads(channel_id: str) -> ForumRsp
```

## get_thread_detail

获取帖子详情。

```python
async def get_thread_detail(channel_id: str, thread_id: str) -> ThreadInfo
```

## post_thread

发表帖子。

```python
async def post_thread(
    channel_id: str,
    title: str,
    content: str,
    format: Format,  # 内容格式: 1=文本, 2=HTML, 3=Markdown, 4=JSON
) -> PostThreadRsp
```

## delete_thread

删除帖子。

```python
async def delete_thread(channel_id: str, thread_id: str) -> str
```
