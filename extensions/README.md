# 扩展功能

SDK 在 `botpy.ext` 下提供了一系列实用扩展模块，方便开发者快速集成常见功能。

## 扩展列表

| 扩展 | 说明 |
|------|------|
| [指令系统](commands.md) | `@Commands` 装饰器，通过消息内容匹配指令 |
| [定时任务](apscheduler.md) | 基于 APScheduler 的异步定时任务 |
| [YAML 配置](yaml.md) | 读取 YAML 配置文件 |
| [频道跳转](channel-jump.md) | 识别和转义子频道跳转链接 |
| [颜色转换](color.md) | RGB/HEX 颜色值转整数 |

## 使用方法

```python
from botpy.ext.cog_yaml import read         # YAML 配置
from botpy.ext.command_util import Commands  # 指令装饰器
from botpy.ext.convert_color import start    # 颜色转换
from botpy.ext.channel_jump import get_channel_jump  # 频道跳转
```
