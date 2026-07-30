# 消息事件

## 公域消息（推荐）

需要 `Intents(public_guild_messages=True)`。适用于大多数公域机器人。

### on_at_message_create

当收到 @机器人的消息时触发。

```python
async def on_at_message_create(self, message: Message)
```

**事件触发详情**

- **触发解析**: `parse_at_message_create` → `on_at_message_create`
- **参数模型**: [`Message`](../models/message.md) — `__slots__` 包含: `author` (嵌套 `_User`: `id`, `username`, `bot`, `avatar`), `content`, `channel_id`, `id`, `guild_id`, `member` (嵌套 `_Member`: `nick`, `roles`, `joined_at`), `message_reference` (嵌套 `_MessageRef`: `message_id`), `mentions` (列表 `_User`), `attachments` (列表 `_Attachments`: `content_type`, `filename`, `height`, `width`, `id`, `size`, `url`), `seq`, `seq_in_channel`, `timestamp`, `event_id`
- **源码位置**: [`connection.py` 第 196-198 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L196-L198) | [`message.py` 第 5-84 行](https://github.com/tencent-connect/botpy/tree/master/botpy/message.py#L5-L84)

### on_public_message_delete

当频道的消息被删除时触发。

```python
async def on_public_message_delete(self, message: Message)
```

**事件触发详情**

- **触发解析**: `parse_public_message_delete` → `on_public_message_delete`
- **参数模型**: [`Message`](../models/message.md) — `__slots__` 同 `on_at_message_create`
- **源码位置**: [`connection.py` 第 200-202 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L200-L202) | [`message.py` 第 5-84 行](https://github.com/tencent-connect/botpy/tree/master/botpy/message.py#L5-L84)

## 私域消息

需要 `Intents(guild_messages=True)`。仅私域机器人可用。

### on_message_create

发送消息事件，包含频道内的全部消息（不只是 @机器人的消息）。

```python
async def on_message_create(self, message: Message)
```

**事件触发详情**

- **触发解析**: `parse_message_create` → `on_message_create`
- **参数模型**: [`Message`](../models/message.md) — `__slots__` 同 `on_at_message_create`
- **源码位置**: [`connection.py` 第 138-140 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L138-L140) | [`message.py` 第 5-84 行](https://github.com/tencent-connect/botpy/tree/master/botpy/message.py#L5-L84)

### on_message_delete

删除（撤回）消息事件。

```python
async def on_message_delete(self, message: Message)
```

**事件触发详情**

- **触发解析**: `parse_message_delete` → `on_message_delete`
- **参数模型**: [`Message`](../models/message.md) — `__slots__` 同 `on_at_message_create`
- **源码位置**: [`connection.py` 第 142-144 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L142-L144) | [`message.py` 第 5-84 行](https://github.com/tencent-connect/botpy/tree/master/botpy/message.py#L5-L84)

## 私信消息

需要 `Intents(direct_message=True)`。

### on_direct_message_create

当收到用户发给机器人的私信消息时触发。

```python
async def on_direct_message_create(self, message: DirectMessage)
```

**事件触发详情**

- **触发解析**: `parse_direct_message_create` → `on_direct_message_create`
- **参数模型**: [`DirectMessage`](../models/direct-message.md) — `__slots__` 包含: `author` (嵌套 `_User`: `id`, `username`, `avatar`), `content`, `direct_message`, `channel_id`, `id`, `guild_id`, `member` (嵌套 `_Member`: `joined_at`), `message_reference` (嵌套 `_MessageRef`: `message_id`), `attachments` (列表 `_Attachments`), `seq`, `seq_in_channel`, `src_guild_id`, `timestamp`, `event_id`
- **源码位置**: [`connection.py` 第 156-158 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L156-L158) | [`message.py` 第 87-164 行](https://github.com/tencent-connect/botpy/tree/master/botpy/message.py#L87-L164)

### on_direct_message_delete

私信消息被撤回时触发。

```python
async def on_direct_message_delete(self, message: DirectMessage)
```

**事件触发详情**

- **触发解析**: `parse_direct_message_delete` → `on_direct_message_delete`
- **参数模型**: [`DirectMessage`](../models/direct-message.md) — `__slots__` 同 `on_direct_message_create`
- **源码位置**: [`connection.py` 第 160-162 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L160-L162) | [`message.py` 第 87-164 行](https://github.com/tencent-connect/botpy/tree/master/botpy/message.py#L87-L164)

## 消息审核

需要 `Intents(message_audit=True)`。

### on_message_audit_pass

消息审核通过时触发。

```python
async def on_message_audit_pass(self, message_audit: MessageAudit)
```

**事件触发详情**

- **触发解析**: `parse_message_audit_pass` → `on_message_audit_pass`
- **参数模型**: [`MessageAudit`](../models/message-audit.md) — `__slots__` 包含: `audit_id`, `message_id`, `channel_id`, `guild_id`, `event_id`
- **源码位置**: [`connection.py` 第 170-172 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L170-L172) | [`message.py` 第 167-187 行](https://github.com/tencent-connect/botpy/tree/master/botpy/message.py#L167-L187)

### on_message_audit_reject

消息审核不通过时触发。

```python
async def on_message_audit_reject(self, message_audit: MessageAudit)
```

**事件触发详情**

- **触发解析**: `parse_message_audit_reject` → `on_message_audit_reject`
- **参数模型**: [`MessageAudit`](../models/message-audit.md) — `__slots__` 包含: `audit_id`, `message_id`, `channel_id`, `guild_id`, `event_id`
- **源码位置**: [`connection.py` 第 174-176 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L174-L176) | [`message.py` 第 167-187 行](https://github.com/tencent-connect/botpy/tree/master/botpy/message.py#L167-L187)
