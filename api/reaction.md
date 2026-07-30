# 表情表态 API

## put_reaction

对消息进行表情表态。

```python
async def put_reaction(
    channel_id: str,
    message_id: str,
    emoji_type: EmojiType,  # 1=系统表情, 2=emoji
    emoji_id: str,          # 表情 ID
) -> str
```

**表情列表**: 参考 [QQ 表情列表文档](https://bot.q.qq.com/wiki/develop/api/openapi/emoji/model.html#emoji-%E5%88%97%E8%A1%A8)

## delete_reaction

删除消息的表情表态。

```python
async def delete_reaction(
    channel_id: str,
    message_id: str,
    emoji_type: EmojiType,
    emoji_id: str,
) -> str
```

## get_reaction_users

获取表情表态用户列表。

```python
async def get_reaction_users(
    channel_id: str,
    message_id: str,
    emoji_type: EmojiType,
    emoji_id: str,
    cookie: str = None,   # 分页 cookie
    limit: int = 20,      # 每页数量（1-100）
) -> ReactionUsers
```

**分页遍历所有用户**:
```python
users = []
cookie = ""
while True:
    result = await self.api.get_reaction_users(
        channel_id, message_id, 1, "4", cookie=cookie
    )
    if not result:
        break
    users.extend(result["users"])
    if result["is_end"]:
        break
    cookie = result["cookie"]

print(f"共 {len(users)} 个用户表态")
```
