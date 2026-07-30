# 定时任务

基于 APScheduler 的异步定时任务支持，适用于需要定时执行任务的场景。

**源码文件**: [`botpy/ext/cog_apscheduler/__init__.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/ext/cog_apscheduler/__init__.py)

## scheduler 实例

### 实例签名

```python
scheduler = AsyncIOScheduler()
```

`scheduler` 是一个由 `apscheduler.schedulers.asyncio.AsyncIOScheduler` 实例化的全局单例对象。

### 初始化流程

导入 `scheduler` 后，会自动完成以下操作：

1. **创建实例**: `scheduler = AsyncIOScheduler()`
2. **配置时区**: `scheduler.configure({"apscheduler.timezone": "Asia/Shanghai"})` — 将时区设置为 `Asia/Shanghai`
3. **启动调度器**: `scheduler.start()` — 立即开始运行，无需手动调用

### 依赖

需要安装 `APScheduler` 库：

```bash
pip install APScheduler
```

## 启用

```python
from botpy.ext.cog_apscheduler import scheduler
```

导入后会自动启动一个 `AsyncIOScheduler` 实例。

## 使用示例

```python
from botpy.ext.cog_apscheduler import scheduler

# 每天 12:00 执行
@scheduler.scheduled_job("cron", hour=12, minute=0)
async def daily_task():
    _log.info("执行每日任务")

# 每隔 30 分钟执行
@scheduler.scheduled_job("interval", minutes=30)
async def interval_task():
    _log.info("执行间隔任务")

# 指定时间执行一次
@scheduler.scheduled_job("date", run_date="2024-12-01 00:00:00")
async def one_time_task():
    _log.info("执行一次性任务")
```

## 配置

调度器默认使用 `Asia/Shanghai` 时区：

```python
scheduler.configure({"apscheduler.timezone": "Asia/Shanghai"})
```

如需更改时区，可在导入后重新调用 `scheduler.configure()`。

## APScheduler 触发器类型

| 触发器 | 装饰器参数 | 说明 |
|--------|-----------|------|
| `"cron"` | `hour=, minute=, day=, month=, day_of_week=` | 类似 Linux cron，指定具体时间点执行 |
| `"interval"` | `seconds=, minutes=, hours=, days=` | 每隔固定时间间隔执行 |
| `"date"` | `run_date=` | 在指定的日期时间执行一次 |
