# YAML 配置

简单的 YAML 文件读取工具，用于加载 Bot 配置。

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
