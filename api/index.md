# API 参考

`BotAPI` 类封装了所有 QQ 机器人 REST API 接口，通过 `client.api` 访问。

**源码位置**: [`botpy/api.py` 第 26 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L26)

## BotAPI 类

```python
class BotAPI(http: BotHttp)
```

| 参数 | 类型 | 说明 |
|------|------|------|
| `http` | [`BotHttp`](#bothttp-类和-route-类) | HTTP 客户端实例，由 `Client` 自动创建 |

在 `Client` 初始化时自动创建（[`botpy/client.py` 第 58 行](https://github.com/tencent-connect/botpy/tree/master/botpy/client.py#L58)）：
```python
self.http: BotHttp = BotHttp(timeout=timeout, is_sandbox=is_sandbox)
self.api: BotAPI = BotAPI(http=self.http)
```

## 访问 API

```python
class MyClient(botpy.Client):
    async def on_at_message_create(self, message: Message):
        # 通过 client.api 调用
        await self.api.post_message(
            channel_id=message.channel_id,
            content="Hello!"
        )
```

## API 分类

| 分类 | 说明 |
|------|------|
| [频道](guild.md) | 获取/修改频道信息、频道列表 |
| [子频道](channel.md) | 子频道的增删改查、权限管理 |
| [身份组](role.md) | 身份组 CRUD、身份组成员管理 |
| [成员](member.md) | 成员信息查询、成员列表、踢出 |
| [消息](message.md) | 发送/撤回消息（文本、Embed、ARK、Markdown、键盘等） |
| [私信](dm.md) | 创建私信会话、发送私信 |
| [禁言](mute.md) | 全体/指定成员禁言 |
| [公告](announce.md) | 创建/删除公告、推荐子频道 |
| [接口权限](permission.md) | 权限列表查询、权限申请 |
| [日程](schedule.md) | 日程的增删改查 |
| [表情表态](reaction.md) | 添加/删除表情表态、获取表态用户 |
| [精华消息](pin.md) | 精华消息的添加/删除/查询 |
| [音频](audio.md) | 音频控制、上/下麦 |
| [论坛](forum.md) | 帖子列表、详情、发表/删除 |
| [群消息](group.md) | 群消息发送、群文件上传 |
| [C2C 消息](c2c.md) | C2C 消息发送、C2C 文件上传 |

## BotHttp 类和 Route 类

### BotHttp

HTTP 客户端，基于 `aiohttp`。源码位置：[`botpy/http.py` 第 114 行](https://github.com/tencent-connect/botpy/tree/master/botpy/http.py#L114)。

```python
class BotHttp(
    timeout: int,
    is_sandbox: bool = False,
    app_id: str = None,
    secret: str = None,
)
```

| 方法 | 说明 |
|------|------|
| `check_session()` | 检查 token 和 session，自动刷新 access_token |
| `request(route, **kwargs)` | 执行 HTTP 请求，支持自动重试（最多 3 次） |
| `login(token)` | 登录并保存 token 和 session |
| `close()` | 关闭 HTTP 连接 |

### Route

路由构建类。源码位置：[`botpy/http.py` 第 89 行](https://github.com/tencent-connect/botpy/tree/master/botpy/http.py#L89)。

```python
class Route(method: str, path: str, is_sandbox: bool = False, **parameters)
```

**域名**:
- 生产环境: `api.sgroup.qq.com`
- 沙箱环境: `sandbox.api.sgroup.qq.com`

URL 通过 `str.format_map(parameters)` 构建，自动替换 `{path_param}` 占位符。

## 超时设置

```python
client = MyClient(intents=intents, timeout=10)
```

超时时间作用于 `BotHttp.request()` 中的 `aiohttp.ClientTimeout`。

## 返回类型

API 方法返回 TypedDict 字典数据，通过 `botpy.types` 下的类型定义提供类型提示。

| 分类 | 类型模块 |
|------|----------|
| 消息 | `types/message.py` |
| 频道 | `types/guild.py` |
| 子频道 | `types/channel.py` |
| 用户 | `types/user.py` |
| 内联键盘 | `types/inline.py` |
| 论坛 | `types/forum.py` |
| 富文本 | `types/rich_text.py` |
| 其他 | `types/announce.py`, `types/audio.py`, 等 |

详见[数据模型](../models/index.md)。
