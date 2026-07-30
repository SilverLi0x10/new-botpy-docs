# YAML 配置

简单的 YAML 文件读取工具，用于加载 Bot 配置。

**源码文件**: [`botpy/ext/cog_yaml/__init__.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/ext/cog_yaml/__init__.py)

## read 函数

### 函数签名

```python
def read(yaml_path) -> Dict[str, Any]
```

### 参数

| 参数 | 类型 | 说明 |
|------|------|------|
| `yaml_path` | `str` | YAML 文件的路径（相对当前工作目录或绝对路径均可） |

### 返回

| 类型 | 说明 |
|------|------|
| `Dict[str, Any]` | 解析后的 YAML 配置字典 |

### 实现细节

1. 使用 `open(yaml_path, "r", encoding="utf-8")` 以 UTF-8 编码打开文件，支持中文内容
2. 使用 `yaml.safe_load(f)` 安全加载 YAML 内容（避免任意代码执行风险）
3. 文件在 `with` 语句块中自动关闭

### 依赖

需要安装 `PyYAML` 库：

```bash
pip install PyYAML
```

## 使用

```python
from botpy.ext.cog_yaml import read

# 读取 YAML 配置文件
config = read("config.yaml")

# 使用配置
client.run(appid=config["appid"], secret=config["secret"])
```

## 配置文件示例

```yaml
# config.yaml
appid: "123456"
secret: "your_secret_here"
```
