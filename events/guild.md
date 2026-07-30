# 频道/子频道事件

需要 `Intents(guilds=True)`。

## on_guild_create

当机器人加入新频道时触发。

```python
async def on_guild_create(self, guild: Guild)
```

## on_guild_update

当频道资料变更时触发。

```python
async def on_guild_update(self, guild: Guild)
```

## on_guild_delete

当机器人退出频道时触发。

```python
async def on_guild_delete(self, guild: Guild)
```

## on_channel_create

当子频道被创建时触发。

```python
async def on_channel_create(self, channel: Channel)
```

## on_channel_update

当子频道被更新时触发。

```python
async def on_channel_update(self, channel: Channel)
```

## on_channel_delete

当子频道被删除时触发。

```python
async def on_channel_delete(self, channel: Channel)
```
