# 日志系统

SDK 内置了完善的日志系统，支持控制台彩色输出、文件滚动日志、自定义配置等。

**源码位置**: [`botpy/logging.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/logging.py)

## 核心函数

### `get_logger(name=None)` → `logging.Logger`

获取日志器实例。源码位置：[`botpy/logging.py` 第 75-97 行](https://github.com/tencent-connect/botpy/tree/master/botpy/logging.py#L75-L97)。

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `name` | `Optional[str]` | `"botpy"` | 日志器名称，不同名称可独立配置 |

返回缓存的 Logger 实例。如果命令行参数包含 `-d` 或 `--debug`，自动将日志级别设为 `DEBUG`。

```python
from botpy import logging

_log = logging.get_logger()          # 默认名称为 "botpy"
_log = logging.get_logger("my_bot")  # 自定义名称
```

### `configure_logging(...)` → `None`

修改日志配置。源码位置：[`botpy/logging.py` 第 100-163 行](https://github.com/tencent-connect/botpy/tree/master/botpy/logging.py#L100-L163)。

```python
def configure_logging(
    config: Union[str, dict] = None,
    _format: str = None,
    level: int = None,
    bot_log: Union[bool, None] = True,
    ext_handlers: Union[dict, List, bool] = None,
    force: bool = False,
) -> None
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `config` | `Union[str, dict]` | `None` | `logging.config.dictConfig` 配置，支持 dict、JSON/YAML 文件路径、或 `fileConfig` 路径 |
| `_format` | `str` | `None` | `logging.basicConfig(format=...)` 格式 |
| `level` | `int` | `None` | 控制台输出级别 |
| `bot_log` | `Union[bool, None]` | `True` | `True`=启用, `None`=禁用扩展, `False`=禁用扩展+控制台 |
| `ext_handlers` | `Union[dict, List, bool]` | `None` | 额外 handler，`True`=使用默认 handler |
| `force` | `bool` | `False` | 是否在已有 handler 时强制追加 |

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

- **`dict`**：直接传入 `logging.config.dictConfig` 配置
- **`.json` 文件路径**：从 JSON 文件读取配置
- **`.yaml` / `.yml` 文件路径**：从 YAML 文件读取配置
- **其他文件路径**：使用 `fileConfig` 读取

### 文件日志

默认文件日志配置（每日滚动，保留 7 天）：

```python
DEFAULT_FILE_HANDLER = {
    "handler": TimedRotatingFileHandler,  # 按时间滚动
    "format": "%(asctime)s\t[%(levelname)s]\t(%(filename)s:%(lineno)s)%(funcName)s\t%(message)s",
    "level": logging.DEBUG,
    "when": "D",              # 按天滚动
    "backupCount": 7,         # 保留 7 天
    "encoding": "utf-8",
    "filename": os.path.join(os.getcwd(), "%(name)s.log"),  # 文件名中的 %(name)s 会被日志器名称替换
}
```

源码位置：[`botpy/logging.py` 第 26-39 行](https://github.com/tencent-connect/botpy/tree/master/botpy/logging.py#L26-L39)。

### `get_handler(handler: dict, name: str)` → `logging.Handler`

将 handler 字典配置实例化为 `Handler` 对象。源码位置：[`botpy/logging.py` 第 51-72 行](https://github.com/tencent-connect/botpy/tree/master/botpy/logging.py#L51-L72)。

## 禁用日志

```python
# 仅禁用扩展日志
client = MyClient(intents=intents, bot_log=None)

# 禁用所有日志（包括控制台）
client = MyClient(intents=intents, bot_log=False)
```

## 日志颜色

控制台日志根据级别显示不同颜色（通过 ANSI 转义码实现）：

| 级别 | 颜色 |
|------|------|
| DEBUG | 青色 `cyan` |
| INFO | 绿色 `green` |
| WARNING | 黄色 `yellow` |
| ERROR | 红色 `red` |
| CRITICAL | 红色 `red` |

颜色配置源码位置：[`botpy/logging.py` 第 12-17 行](https://github.com/tencent-connect/botpy/tree/master/botpy/logging.py#L12-L17)。

## 日志格式常量

| 常量 | 值 | 说明 |
|------|-----|------|
| `DEFAULT_LOGGER_NAME` | `"botpy"` | 默认日志器名称 |
| `DEFAULT_PRINT_FORMAT` | `"\033[1;33m[%(levelname)s]\t(%(filename)s:%(lineno)s)%(funcName)s\t\033[0m%(message)s"` | 控制台输出格式（带颜色） |
| `DEFAULT_FILE_FORMAT` | `"%(asctime)s\t[%(levelname)s]\t(%(filename)s:%(lineno)s)%(funcName)s\t%(message)s"` | 文件输出格式 |
