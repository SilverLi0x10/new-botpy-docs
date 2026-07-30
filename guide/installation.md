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

核心依赖：

- **aiohttp >= 3.7.4, < 4** — 异步 HTTP 和 WebSocket 客户端
- **PyYAML** — 配置文件解析（扩展模块使用）
- **APScheduler** — 定时任务支持（扩展模块使用）

开发依赖：

- **pre-commit** — 代码格式化钩子
- **pytest** — 单元测试

## 验证安装

```python
import botpy
print(botpy.__version__)
```
