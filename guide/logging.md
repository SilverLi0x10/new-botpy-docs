# 日志系统

SDK 内置了完善的日志系统，支持控制台彩色输出、文件滚动日志、自定义配置等。

## 获取日志器

```python
from botpy import logging

_log = logging.get_logger()  # 默认名称为 "botpy"
_log = logging.get_logger("my_bot")  # 自定义名称
```

## 基本使用

```python
_log.debug("调试信息")
_log.info("普通信息")
_log.warning("警告信息")
_log.error("错误信息")
```

## 开启调试日志

方式一：命令行参数

```bash
python bot.py -d
# 或
python bot.py --debug
```

方式二：程序中设置

```python
import logging
logging.getLogger("botpy").setLevel(logging.DEBUG)
```

## 配置日志

通过 `Client` 构造函数的参数配置：

```python
client = MyClient(
    intents=intents,
    log_config="logging.yaml",    # 从 YAML 文件加载配置
    log_format="%(levelname)s: %(message)s",  # 控制台格式
    log_level=logging.DEBUG,      # 控制台日志级别
    bot_log=True,                 # 启用 bot 日志
    ext_handlers=True,            # 添加默认文件日志处理器
)
```

### log_config 参数

支持多种格式：

- **dict**：直接传入 `logging.config.dictConfig` 配置
- **.json 文件路径**：从 JSON 文件读取配置
- **.yaml / .yml 文件路径**：从 YAML 文件读取配置
- **其他文件路径**：使用 `fileConfig` 读取

### 文件日志

默认文件日志配置（每日滚动，保留 7 天）：

```python
DEFAULT_FILE_HANDLER = {
    "handler": TimedRotatingFileHandler,
    "when": "D",         # 按天滚动
    "backupCount": 7,    # 保留 7 天
    "encoding": "utf-8",
    "filename": "botpy.log",
}
```

## 禁用日志

```python
# 仅禁用扩展日志
client = MyClient(intents=intents, bot_log=None)

# 禁用所有日志（包括控制台）
client = MyClient(intents=intents, bot_log=False)
```

## 日志颜色

控制台日志根据级别显示不同颜色：

| 级别 | 颜色 |
|------|------|
| DEBUG | 青色 |
| INFO | 绿色 |
| WARNING | 黄色 |
| ERROR | 红色 |
| CRITICAL | 红色 |
