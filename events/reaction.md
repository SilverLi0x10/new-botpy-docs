# 表态事件

需要 `Intents(guild_message_reactions=True)`。

## on_message_reaction_add

为消息添加表情表态。

```python
async def on_message_reaction_add(self, reaction: Reaction)
```

**事件触发详情**

- **触发解析**: `parse_message_reaction_add` → `on_message_reaction_add`
- **参数模型**: [`Reaction`](../models/reaction.md) — `__slots__` 包含: `user_id`, `channel_id`, `guild_id`, `emoji` (嵌套 `_Emoji`: `id`, `type`), `target` (嵌套 `_Target`: `id`, `type`), `event_id`
- **源码位置**: [`connection.py` 第 147-149 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L147-L149) | [`reaction.py` 第 5-43 行](https://github.com/tencent-connect/botpy/tree/master/botpy/reaction.py#L5-L43)

## on_message_reaction_remove

为消息删除表情表态。

```python
async def on_message_reaction_remove(self, reaction: Reaction)
```

**事件触发详情**

- **触发解析**: `parse_message_reaction_remove` → `on_message_reaction_remove`
- **参数模型**: [`Reaction`](../models/reaction.md) — `__slots__` 同 `on_message_reaction_add`
- **源码位置**: [`connection.py` 第 151-153 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L151-L153) | [`reaction.py` 第 5-43 行](https://github.com/tencent-connect/botpy/tree/master/botpy/reaction.py#L5-L43)
