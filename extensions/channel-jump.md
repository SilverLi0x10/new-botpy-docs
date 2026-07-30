# 频道跳转

用于识别和操作子频道跳转链接（`#频道名`）的工具函数。

## get_channel_jump

粗略识别文本中的子频道跳转。

```python
def get_channel_jump(text: str = None, message: Message = None) -> List[str]
```

**返回**: 子频道名称列表（不带 `#` 号）

## get_channel_jump_strict

准确识别文本中的子频道跳转（通过 API 查询验证）。

```python
async def get_channel_jump_strict(
    api: BotAPI,
    message: Message = None,
    text: str = None,
    guild_id: str = None,
) -> Dict[str, str]
```

**返回**: `{频道名: 频道ID}` 的字典

## escape_channel_jump

将文本中的 `#频道名` 转义为 `<#频道ID>` 格式。

```python
async def escape_channel_jump(
    api: BotAPI,
    message: Message = None,
    text: str = None,
    guild_id: str = None,
) -> str
```

## 注意事项

- 发送格式要求严格（`#频道名` 后需有空格）
- 无法识别真假跳转
- 当子频道重名时无法准确识别
- 当提供子频道跳转字段时请弃用本模块
