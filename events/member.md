# 成员事件

需要 `Intents(guild_members=True)`。

## on_guild_member_add

当成员加入频道时触发。

```python
async def on_guild_member_add(self, member: Member)
```

**事件触发详情**

- **触发解析**: `parse_guild_member_add` → `on_guild_member_add`
- **参数模型**: [`Member`](../models/member.md) — `__slots__` 包含: `user` (嵌套 `_User`: `id`, `username`, `avatar`, `bot`, `union_openid`, `union_user_account`), `nick`, `roles`, `joined_at`, `event_id`, `guild_id`
- **源码位置**: [`connection.py` 第 125-127 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L125-L127) | [`user.py` 第 5-31 行](https://github.com/tencent-connect/botpy/tree/master/botpy/user.py#L5-L31)

## on_guild_member_update

当成员资料变更时触发。

```python
async def on_guild_member_update(self, member: Member)
```

**事件触发详情**

- **触发解析**: `parse_guild_member_update` → `on_guild_member_update`
- **参数模型**: [`Member`](../models/member.md) — `__slots__` 同 `on_guild_member_add`
- **源码位置**: [`connection.py` 第 129-131 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L129-L131) | [`user.py` 第 5-31 行](https://github.com/tencent-connect/botpy/tree/master/botpy/user.py#L5-L31)

## on_guild_member_remove

当成员被移除频道时触发。

```python
async def on_guild_member_remove(self, member: Member)
```

**事件触发详情**

- **触发解析**: `parse_guild_member_remove` → `on_guild_member_remove`
- **参数模型**: [`Member`](../models/member.md) — `__slots__` 同 `on_guild_member_add`
- **源码位置**: [`connection.py` 第 133-135 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L133-L135) | [`user.py` 第 5-31 行](https://github.com/tencent-connect/botpy/tree/master/botpy/user.py#L5-L31)

**使用示例**:

```python
class MyClient(botpy.Client):
    async def on_guild_member_add(self, member: Member):
        # 发送欢迎私信
        dms = await self.api.create_dms(member.guild_id, member.user.id)
        await self.api.post_dms(dms["guild_id"], content="欢迎加入频道！")

    async def on_guild_member_remove(self, member: Member):
        _log.info(f"{member.nick} 退出了频道")
```
