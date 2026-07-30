# 配置说明

## 鉴权配置

SDK 使用 AppID + AppSecret 进行鉴权，通过 `Token` 类管理 access_token 的获取和自动刷新。

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

### 鉴权流程

```
1. Token(app_id, secret)
2. check_token() → 检查 access_token 是否过期
3. update_access_token() → POST https://bots.qq.com/app/getAppAccessToken
   ├── 请求体: { "appId": app_id, "clientSecret": secret }
   └── 响应:  { "access_token": "...", "expires_in": 7200 }
4. 请求头: Authorization: QQBot {access_token}
```

Token 会在过期前自动刷新，无需手动处理。

## 沙箱环境

SDK 支持沙箱环境，在沙箱中测试不会影响线上数据：

```python
client = MyClient(intents=intents, is_sandbox=True)
```

沙箱环境使用不同的 API 域名：`sandbox.api.sgroup.qq.com`

## 超时配置

可通过 `timeout` 参数设置 HTTP 请求超时时间（默认 5 秒）：

```python
client = MyClient(intents=intents, timeout=10)
```

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
