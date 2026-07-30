# 表态事件

需要 `Intents(guild_message_reactions=True)`。

## on_message_reaction_add

为消息添加表情表态。

```python
async def on_message_reaction_add(self, reaction: Reaction)
```

## on_message_reaction_remove

为消息删除表情表态。

```python
async def on_message_reaction_remove(self, reaction: Reaction)
```
