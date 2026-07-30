# 成员事件

需要 `Intents(guild_members=True)`。

## on_guild_member_add

当成员加入频道时触发。

```python
async def on_guild_member_add(self, member: Member)
```

## on_guild_member_update

当成员资料变更时触发。

```python
async def on_guild_member_update(self, member: Member)
```

## on_guild_member_remove

当成员被移除频道时触发。

```python
async def on_guild_member_remove(self, member: Member)
```

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
