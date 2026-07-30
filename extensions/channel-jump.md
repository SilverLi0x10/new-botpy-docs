# 频道跳转

用于识别和操作子频道跳转链接（`#频道名`）的工具函数。

**源码文件**: [`botpy/ext/channel_jump/__init__.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/ext/channel_jump/__init__.py)

**导出的函数**:

```python
__all__ = ["get_channel_jump", "get_channel_jump_strict", "escape_channel_jump"]
```

### 正则模式

所有函数使用以下正则表达式识别频道跳转语法：

```python
channel_jump_re = re.compile(r"#(.{1,12}?)(?= )")
```

- 匹配以 `#` 开头、后跟 1 到 12 个字符，紧接着一个空格的模式
- 只能匹配频道名后**有空格**的情况

---

## get_channel_jump

粗略识别文本中的子频道跳转，仅使用正则匹配，不调用 API。

```python
def get_channel_jump(text: str = None, message: Message = None) -> List[str]
```

### 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `text` | `str` | `None` | 要解析的文本。如果为 `None`，则使用 `message.content` |
| `message` | `Message` | `None` | 消息对象，当 `text` 为 `None` 时从中获取 `message.content` |

### 返回

| 类型 | 说明 |
|------|------|
| `List[str]` | 子频道名称列表（不带 `#` 号） |

### 示例

```python
from botpy.ext.channel_jump import get_channel_jump

names = get_channel_jump(text="#音乐区 欢迎来玩 #闲聊区")
# 返回: ["音乐区", "闲聊区"]
```

---

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

### 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `api` | `BotAPI` | (必填) | BotAPI 实例，用于调用 `api.get_channels()` |
| `message` | `Message` | `None` | 消息对象，当 `text`/`guild_id` 为 `None` 时提供回退值 |
| `text` | `str` | `None` | 要解析的文本。如果为 `None`，则使用 `message.content` |
| `guild_id` | `str` | `None` | 频道（ guild ）ID。如果为 `None`，则使用 `message.guild_id` |

### 返回

| 类型 | 说明 |
|------|------|
| `Dict[str, str]` | `{子频道名称(不带#): 子频道id}` 的字典（已去重） |

### 实现逻辑

1. 通过 `api.get_channels(guild_id)` 获取该频道下的所有子频道列表
2. 遍历每个子频道，检查 `#子频道名`（后跟空格）是否出现在文本中
3. 如果存在则记录 `{channel["name"]: channel["id"]}` 到结果字典

### 示例

```python
from botpy.ext.channel_jump import get_channel_jump_strict

jumps = await get_channel_jump_strict(api=api, message=message)
# 返回: {"音乐区": "123456", "闲聊区": "789012"}
```

---

## escape_channel_jump

将文本中的 `#频道名` 转义为 `<#频道ID>` 格式，用于在消息中发送可点击的子频道跳转。

```python
async def escape_channel_jump(
    api: BotAPI,
    message: Message = None,
    text: str = None,
    guild_id: str = None,
) -> str
```

### 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `api` | `BotAPI` | (必填) | BotAPI 实例，用于调用 `api.get_channels()` |
| `message` | `Message` | `None` | 消息对象，当 `text`/`guild_id` 为 `None` 时提供回退值 |
| `text` | `str` | `None` | 要转义的文本。如果为 `None`，则使用 `message.content` |
| `guild_id` | `str` | `None` | 频道（ guild ）ID。如果为 `None`，则使用 `message.guild_id` |

### 返回

| 类型 | 说明 |
|------|------|
| `str` | 转义后的文本，所有 `#频道名 ` 被替换为 `<#频道ID> ` |

### 实现逻辑

1. 通过 `api.get_channels(guild_id)` 获取所有子频道
2. 对每个子频道，将文本中的 `#频道名 ` 替换为 `<#频道ID> `
3. 返回替换后的完整文本

### 示例

```python
from botpy.ext.channel_jump import escape_channel_jump

text = await escape_channel_jump(api=api, text="#音乐区 欢迎来玩", guild_id="guild_id")
# 返回: "<#123456> 欢迎来玩"
```

---

## 注意事项

- 发送格式要求严格（`#频道名` 后需有空格）
- 无法识别真假跳转
- 当子频道重名时无法准确识别
- 当提供子频道跳转字段时请弃用本模块
