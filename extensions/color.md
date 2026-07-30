# 颜色转换

将 RGB 元组或 HEX 字符串转换为 QQ 机器人 API 所需的整数颜色值。

**源码文件**: [`botpy/ext/convert_color/__init__.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/ext/convert_color/__init__.py)

## start 函数

### 函数签名

```python
def start(color: Union[tuple, str]) -> int
```

### 参数

| 参数 | 类型 | 说明 |
|------|------|------|
| `color` | `tuple` 或 `str` | 输入 RGB 的三位 tuple 或 HEX 的 string 颜色 |

### 返回

| 类型 | 说明 |
|------|------|
| `int` | 颜色的 RGB 整数值 |

### 转换公式

```python
result = R + 256 * G + (256**2) * B
```

其中 `R`、`G`、`B` 分别是红、绿、蓝分量的整数值（0\~255）。

### 支持的输入格式

| 格式 | 示例 | 说明 |
|------|------|------|
| RGB 元组 | `(255, 200, 100)` | 三个整数，取值范围 0\~255 |
| HEX 字符串 | `"#FFC864"` 或 `"FFC864"` | `#` 号可选，六位十六进制数，不区分大小写 |

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

# HEX 长度错误
start("#FFF")            # TypeError: HEX颜色应为一个 #加六位数字或字母 的string...
```

## 在身份组中使用

```python
color = start((255, 200, 100))
await self.api.create_guild_role(guild_id, name="彩色身份组", color=color)
```
