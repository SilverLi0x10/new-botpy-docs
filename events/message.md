# 消息事件

## 公域消息（推荐）

需要 `Intents(public_guild_messages=True)`。适用于大多数公域机器人。

### on_at_message_create

当收到 @机器人的消息时触发。

```python
async def on_at_message_create(self, message: Message)
```

### on_public_message_delete

当频道的消息被删除时触发。

```python
async def on_public_message_delete(self, message: Message)
```

## 私域消息

需要 `Intents(guild_messages=True)`。仅私域机器人可用。

### on_message_create

发送消息事件，包含频道内的全部消息（不只是 @机器人的消息）。

```python
async def on_message_create(self, message: Message)
```

### on_message_delete

删除（撤回）消息事件。

```python
async def on_message_delete(self, message: Message)
```

## 私信消息

需要 `Intents(direct_message=True)`。

### on_direct_message_create

当收到用户发给机器人的私信消息时触发。

```python
async def on_direct_message_create(self, message: DirectMessage)
```

### on_direct_message_delete

私信消息被撤回时触发。

```python
async def on_direct_message_delete(self, message: DirectMessage)
```

## 消息审核

需要 `Intents(message_audit=True)`。

### on_message_audit_pass

消息审核通过时触发。

```python
async def on_message_audit_pass(self, message_audit: MessageAudit)
```

### on_message_audit_reject

消息审核不通过时触发。

```python
async def on_message_audit_reject(self, message_audit: MessageAudit)
```
