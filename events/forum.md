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
