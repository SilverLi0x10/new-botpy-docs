# 配置说明

## Client 构造函数

```python
class Client(
    intents: Intents,
    timeout: int = 5,
    is_sandbox: bool = False,
    log_config: Union[str, dict] = None,
    log_format: str = None,
    log_level: int = None,
    bot_log: Union[bool, None] = True,
    ext_handlers: Union[dict, List[dict], bool] = True,
)
```

**参数说明**:

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `intents` | [`Intents`](intents.md) | **必填** | 事件订阅位掩码，通过 `Intents()` 创建 |
| `timeout` | `int` | `5` | HTTP 请求超时时间（秒） |
| `is_sandbox` | `bool` | `False` | 是否使用沙箱环境 |
| `log_config` | `Union[str, dict]` | `None` | 日志配置，详见[日志系统](logging.md) |
| `log_format` | `str` | `None` | 控制台输出格式 |
| `log_level` | `int` | `None` | 控制台日志级别 |
| `bot_log` | `Union[bool, None]` | `True` | 是否启用机器人日志 |
| `ext_handlers` | `Union[dict, List[dict], bool]` | `True` | 额外日志处理器 |

**源码位置**: [`botpy/client.py` 第 30-52 行](https://github.com/tencent-connect/botpy/tree/master/botpy/client.py#L30-L52)

## 鉴权配置

SDK 使用 AppID + AppSecret 进行鉴权，通过 [`Token`](#token-类) 类管理 `access_token` 的获取和自动刷新。

### 方式一：直接传入

```python
client.run(appid="你的AppID", secret="你的AppSecret")
```

### 方式二：配置文件

推荐使用 YAML 配置文件管理：

```yaml
# config.yaml
appid: "你的AppID"
secret: "你的AppSecret"
```

通过扩展模块读取：

```python
from botpy.ext.cog_yaml import read

config = read("config.yaml")
client.run(appid=config["appid"], secret=config["secret"])
```

## Token 类

```python
class Token(app_id: str, secret: str)
```

**源码位置**: [`botpy/robot.py` 第 22-81 行](https://github.com/tencent-connect/botpy/tree/master/botpy/robot.py#L22-L81)

| 参数 | 类型 | 说明 |
|------|------|------|
| `app_id` | `str` | 机器人 AppID |
| `secret` | `str` | 机器人密钥 |

**属性**:

| 属性 | 类型 | 说明 |
|------|------|------|
| `app_id` | `str` | 机器人 AppID |
| `secret` | `str` | 机器人密钥 |
| `access_token` | `Optional[str]` | 缓存的 access_token |
| `expires_in` | `int` | access_token 过期时间戳 |
| `Type` | `str` | 授权类型（`"QQBot"` 或 `"Bearer"`） |

**方法**:

| 方法 | 返回 | 说明 |
|------|------|------|
| `check_token()` | `None` | 检查 access_token 是否过期，过期则自动刷新 |
| `update_access_token()` | `None` | 向 QQ 平台请求新的 access_token |
| `bot_token()` | `Token` | 返回自身（机器人身份的 token） |
| `get_string()` | `str` | 获取授权头字符串，如 `"QQBot xxx"` |
| `get_type()` | `str` | 获取授权类型 |

### 鉴权流程

```
1. Token(app_id, secret)  →  创建 Token 实例
2. check_token()          →  检查 access_token 是否过期
3. update_access_token()  →  POST https://bots.qq.com/app/getAppAccessToken
   ├── 请求体: { "appId": app_id, "clientSecret": secret }
   └── 响应:  { "access_token": "...", "expires_in": 7200 }
4. 请求头: Authorization: QQBot {access_token}
5. 过期前自动刷新（expires_in + 当前时间戳对比）
```

## 沙箱环境

SDK 支持沙箱环境，在沙箱中测试不会影响线上数据：

```python
client = MyClient(intents=intents, is_sandbox=True)
```

沙箱环境使用不同的 API 域名：`sandbox.api.sgroup.qq.com`

生产环境 API 域名：`api.sgroup.qq.com`

在 `botpy/http.py` 的 `Route` 类中通过 `is_sandbox` 标志位切换，相关代码位置：[`botpy/http.py` 第 89-111 行](https://github.com/tencent-connect/botpy/tree/master/botpy/http.py#L89-L111)。

## 超时配置

可通过 `timeout` 参数设置 HTTP 请求超时时间（默认 5 秒）：

```python
client = MyClient(intents=intents, timeout=10)
```

超时作用于所有 HTTP 请求的 `aiohttp.ClientTimeout`，在 `BotHttp.request()` 方法中使用，源码位置：[`botpy/http.py` 第 186 行](https://github.com/tencent-connect/botpy/tree/master/botpy/http.py#L186)。

## 异步启动

SDK 支持异步上下文管理器方式启动，适用于需要与其他异步服务集成的场景：

```python
async with MyClient(intents=intents) as client:
    await client.start(appid="123", secret="xxx")
```

也可以获取协程对象自行调控：

```python
coro = await client.start(appid="123", secret="xxx", ret_coro=True)
# ... 自行管理协程执行
```

**`Client.start()` 方法签名**:

```python
async def start(
    self,
    appid: str,
    secret: str,
    ret_coro: bool = False,
) -> Optional[Coroutine]
```

源码位置：[`botpy/client.py` 第 139-159 行](https://github.com/tencent-connect/botpy/tree/master/botpy/client.py#L139-L159)。
