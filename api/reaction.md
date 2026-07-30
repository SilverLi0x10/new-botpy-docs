# 表情表态 API

## put_reaction

对消息进行表情表态。

**源码位置**: [`botpy/api.py` 第 1158 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L1158)

**API 路由**: `PUT /channels/{channel_id}/messages/{message_id}/reactions/{type}/{id}`

```python
async def put_reaction(
    channel_id: str,
    message_id: str,
    emoji_type: EmojiType,
    emoji_id: str,
) -> str
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| channel_id | str | 必填 | 消息所在子频道的 ID |
| message_id | str | 必填 | 要表态的消息 ID |
| emoji_type | [`EmojiType`](../models/other.md#emoji-表情) | 必填 | 表情类型：`1` 系统表情，`2` emoji 表情 |
| emoji_id | str | 必填 | 表情符号的 ID |

**表情列表**: 参考 [QQ 表情列表文档](https://bot.q.qq.com/wiki/develop/api/openapi/emoji/model.html#emoji-%E5%88%97%E8%A1%A8)

**返回**: 成功返回空字符串。

## delete_reaction

删除消息的表情表态。

**源码位置**: [`botpy/api.py` 第 1182 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L1182)

**API 路由**: `DELETE /channels/{channel_id}/messages/{message_id}/reactions/{type}/{id}`

```python
async def delete_reaction(
    channel_id: str,
    message_id: str,
    emoji_type: EmojiType,
    emoji_id: str,
) -> str
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| channel_id | str | 必填 | 消息所在子频道的 ID |
| message_id | str | 必填 | 要删除表态的消息 ID |
| emoji_type | [`EmojiType`](../models/other.md#emoji-表情) | 必填 | 表情类型：`1` 系统表情，`2` emoji 表情 |
| emoji_id | str | 必填 | 表情符号的 ID |

**返回**: 成功返回空字符串。

## get_reaction_users

获取表情表态用户列表。

**源码位置**: [`botpy/api.py` 第 1206 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L1206)

**API 路由**: `GET /channels/{channel_id}/messages/{message_id}/reactions/{type}/{id}`

```python
async def get_reaction_users(
    channel_id: str,
    message_id: str,
    emoji_type: EmojiType,
    emoji_id: str,
    cookie: str = None,
    limit: int = 20,
) -> ReactionUsers
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| channel_id | str | 必填 | 消息所在子频道的 ID |
| message_id | str | 必填 | 消息 ID |
| emoji_type | [`EmojiType`](../models/other.md#emoji-表情) | 必填 | 表情类型：`1` 系统表情，`2` emoji 表情 |
| emoji_id | str | 必填 | 表情符号的 ID |
| cookie | str | `None` | 分页 cookie，第一次请求无需填写，后续请求使用上次返回的 cookie |
| limit | int | `20` | 每页返回的用户数量，范围 1-100 |

**返回**: [`ReactionUsers`](../models/other.md#reaction-表情表态)

**ReactionUsers 字段**:
| 字段 | 类型 | 说明 |
|------|------|------|
| users | List[[`User`](../models/user.md#user)] | 表态用户列表 |
| cookie | str | 分页参数，用于拉取下一页 |
| is_end | bool | 是否已拉取完成到最后一页 |

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
