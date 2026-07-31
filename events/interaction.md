# 互动事件

需要 `Intents(interaction=True)`。

## on_interaction_create

互动事件创建时触发（如消息按钮点击）。

```python
async def on_interaction_create(self, interaction: Interaction)
```

**事件触发详情**

- **触发解析**: `parse_interaction_create` → `on_interaction_create`
- **参数模型**: [`Interaction`](../models/other.md#interaction) — `__slots__` 包含: `id`, `application_id`, `type`, `scene`, `chat_type`, `event_id`, `data` (嵌套 `_Data`: `type`, `resolved` → `_Resolved` 包含 `button_id`, `button_data`, `message_id`, `user_id`, `feature_id`), `guild_id`, `channel_id`, `user_openid`, `group_openid`, `group_member_openid`, `timestamp`, `version`
- **源码位置**: [`connection.py` 第 165-167 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L165-L167) | [`interaction.py` 第 5-63 行](https://github.com/tencent-connect/botpy/tree/master/botpy/interaction.py#L5-L63)

Interaction 数据类型：`InteractionPayload`

| 字段 | 类型 | 说明 |
|------|------|------|
| id | str | 互动 ID |
| type | int | 互动类型（1=PING, 2=指令, 10=HTTP代理, 11=内联键盘） |
| scene | str | 场景 |
| chat_type | int | 聊天类型 |
| data | InteractionData | 互动数据 |

**InteractioType 枚举**:
| 值 | 枚举 | 说明 |
|----|------|------|
| 1 | PING | 心跳检测 |
| 2 | APPLICATION_COMMAND | 应用指令 |
| 10 | HTTP_PROXY | HTTP 代理 |
| 11 | INLINE_KEYBOARD | 内联键盘按钮 |
