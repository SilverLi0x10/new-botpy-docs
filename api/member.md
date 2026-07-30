# 成员 API

## get_guild_member

获取频道指定成员信息。

```python
async def get_guild_member(guild_id: str, user_id: str) -> Member
```

## get_guild_members

获取频道成员列表（需要私域机器人权限）。

```python
async def get_guild_members(
    guild_id: str,
    after: str = "0",   # 上一页最后一个用户 ID
    limit: int = 1,     # 分页大小（1-400）
) -> List[Member]
```

## get_guild_role_members

获取频道身份组成员列表。

```python
async def get_guild_role_members(
    guild_id: str,
    role_id: str,
    start_index: str = "0",  # 分页起始
    limit: int = 1,          # 分页大小（1-400）
) -> Dict[str, Union[List[Member], str]]
```

## get_delete_member

删除频道成员（踢出）。

```python
async def get_delete_member(
    guild_id: str,
    user_id: str,
    add_blacklist: bool = False,            # 是否同时加入黑名单
    delete_history_msg_days: int = 0,       # 撤回消息范围：0/3/7/15/30/-1
) -> str
```

::: warning 注意
`delete_history_msg_days` 仅支持固定值：3、7、15、30、0（不撤回）、-1（撤回全部）
:::

## get_voice_members

获取语音频道中的成员列表。

```python
async def get_voice_members(channel_id: str) -> List[Member]
```

::: warning 注意
该接口仅私域机器人可用，且子频道必须是语音子频道。
:::
