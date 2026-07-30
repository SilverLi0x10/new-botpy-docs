# 安装

## 环境要求

- Python 3.8 或更高版本

## pip 安装

推荐使用 pip 安装稳定版：

```bash
pip install qq-botpy
```

更新到最新版：

```bash
pip install --upgrade qq-botpy
```

## 从源码安装

如果你需要最新的开发版本，可以直接从 GitHub 安装：

```bash
git clone https://github.com/tencent-connect/botpy.git
cd botpy
pip install -r requirements.txt
pip install .
```

## 依赖说明

核心依赖（在 `requirements.txt` 中声明）：

| 包名 | 版本 | 用途 |
|------|------|------|
| **aiohttp** | `>= 3.7.4, < 4` | 异步 HTTP 客户端和 WebSocket 客户端，SDK 的通信基础 |
| **PyYAML** | 最新 | YAML 配置文件解析（扩展模块 `cog_yaml` 使用） |
| **APScheduler** | 最新 | 异步定时任务支持（扩展模块 `cog_apscheduler` 使用） |

开发依赖：

| 包名 | 用途 |
|------|------|
| **pre-commit** | 代码格式化钩子，安装后 `git commit` 时自动格式化 |
| **pytest** | 单元测试框架 |

## 验证安装

```python
import botpy
print(botpy.__version__)
```

## 项目结构

安装后，`botpy` 包的主要模块结构：

```
botpy/
├── __init__.py      # 导出 Client, Intents, Permission
├── client.py        # 主入口 Client 类
├── api.py           # REST API 封装 BotAPI
├── http.py          # HTTP 客户端 BotHttp + Route
├── gateway.py       # WebSocket 客户端 BotWebSocket
├── connection.py    # 连接管理 ConnectionSession + ConnectionState
├── flags.py         # Intents + Permission 位掩码
├── message.py       # 消息领域模型
├── guild.py         # 频道领域模型
├── channel.py       # 子频道领域模型
├── user.py          # 成员领域模型
├── robot.py         # Token + Robot
├── logging.py       # 日志配置
├── types/           # TypedDict 类型定义
└── ext/             # 扩展模块
```

## PyPI 发布

SDK 以 `qq-botpy` 名称发布到 PyPI。版本号遵循语义化版本规范。
