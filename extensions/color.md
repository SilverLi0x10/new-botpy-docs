# 颜色转换

将 RGB 元组或 HEX 字符串转换为 QQ 机器人 API 所需的整数颜色值。

## 用法

```python
from botpy.ext.convert_color import start

# RGB 元组 → 整数
color = start((255, 200, 100))
# 返回: 6592255

# HEX 字符串 → 整数
color = start("#FFC864")
# 返回: 6592255
```

## 错误处理

```python
# 无效的 RGB 值
start((300, 0, 0))      # TypeError: RGB颜色应为一个三位数的tuple...

# 无效的 HEX 值
start("#GGGGGG")         # TypeError: 该HEX颜色不存在...

# 无效的参数类型
start(12345)             # TypeError: 颜色值应为RGB的三位tuple...
```

## 在身份组中使用

```python
color = start((255, 200, 100))
await self.api.create_guild_role(guild_id, name="彩色身份组", color=color)
```
