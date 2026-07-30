# 频道/子频道事件

需要 `Intents(guilds=True)`。

## on_guild_create

当机器人加入新频道时触发。

```python
async def on_guild_create(self, guild: Guild)
```

**事件触发详情**

- **触发解析**: `parse_guild_create` → `on_guild_create`
- **参数模型**: [`Guild`](../models/guild.md) — `__slots__` 包含: `id`, `name`, `icon`, `owner_id`, `is_owner`, `member_count`, `max_members`, `description`, `joined_at`, `event_id`
- **源码位置**: [`connection.py` 第 100-102 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L100-L102) | [`guild.py` 第 5-36 行](https://github.com/tencent-connect/botpy/tree/master/botpy/guild.py#L5-L36)

## on_guild_update

当频道资料变更时触发。

```python
async def on_guild_update(self, guild: Guild)
```

**事件触发详情**

- **触发解析**: `parse_guild_update` → `on_guild_update`
- **参数模型**: [`Guild`](../models/guild.md) — `__slots__` 包含: `id`, `name`, `icon`, `owner_id`, `is_owner`, `member_count`, `max_members`, `description`, `joined_at`, `event_id`
- **源码位置**: [`connection.py` 第 104-106 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L104-L106) | [`guild.py` 第 5-36 行](https://github.com/tencent-connect/botpy/tree/master/botpy/guild.py#L5-L36)

## on_guild_delete

当机器人退出频道时触发。

```python
async def on_guild_delete(self, guild: Guild)
```

**事件触发详情**

- **触发解析**: `parse_guild_delete` → `on_guild_delete`
- **参数模型**: [`Guild`](../models/guild.md) — `__slots__` 包含: `id`, `name`, `icon`, `owner_id`, `is_owner`, `member_count`, `max_members`, `description`, `joined_at`, `event_id`
- **源码位置**: [`connection.py` 第 108-110 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L108-L110) | [`guild.py` 第 5-36 行](https://github.com/tencent-connect/botpy/tree/master/botpy/guild.py#L5-L36)

## on_channel_create

当子频道被创建时触发。

```python
async def on_channel_create(self, channel: Channel)
```

**事件触发详情**

- **触发解析**: `parse_channel_create` → `on_channel_create`
- **参数模型**: [`Channel`](../models/channel.md) — `__slots__` 包含: `guild_id`, `id`, `name`, `type`, `sub_type`, `position`, `owner_id`, `private_type`, `speak_permission`, `application_id`, `permissions`, `event_id`
- **源码位置**: [`connection.py` 第 112-114 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L112-L114) | [`channel.py` 第 5-38 行](https://github.com/tencent-connect/botpy/tree/master/botpy/channel.py#L5-L38)

## on_channel_update

当子频道被更新时触发。

```python
async def on_channel_update(self, channel: Channel)
```

**事件触发详情**

- **触发解析**: `parse_channel_update` → `on_channel_update`
- **参数模型**: [`Channel`](../models/channel.md) — `__slots__` 包含: `guild_id`, `id`, `name`, `type`, `sub_type`, `position`, `owner_id`, `private_type`, `speak_permission`, `application_id`, `permissions`, `event_id`
- **源码位置**: [`connection.py` 第 116-118 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L116-L118) | [`channel.py` 第 5-38 行](https://github.com/tencent-connect/botpy/tree/master/botpy/channel.py#L5-L38)

## on_channel_delete

当子频道被删除时触发。

```python
async def on_channel_delete(self, channel: Channel)
```

**事件触发详情**

- **触发解析**: `parse_channel_delete` → `on_channel_delete`
- **参数模型**: [`Channel`](../models/channel.md) — `__slots__` 包含: `guild_id`, `id`, `name`, `type`, `sub_type`, `position`, `owner_id`, `private_type`, `speak_permission`, `application_id`, `permissions`, `event_id`
- **源码位置**: [`connection.py` 第 120-122 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L120-L122) | [`channel.py` 第 5-38 行](https://github.com/tencent-connect/botpy/tree/master/botpy/channel.py#L5-L38)
