# 定时任务

基于 APScheduler 的异步定时任务支持，适用于需要定时执行任务的场景。

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
