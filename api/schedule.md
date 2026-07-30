# 日程 API

## get_schedules

获取日程子频道当天的日程列表。

```python
async def get_schedules(
    channel_id: str,
    since: str = None,  # 起始时间戳，返回此时间之后的日程
) -> List[Schedule]
```

## get_schedule

获取指定日程详情。

```python
async def get_schedule(channel_id: str, schedule_id: str) -> Schedule
```

## create_schedule

创建日程。

```python
async def create_schedule(
    channel_id: str,
    name: str,                    # 日程名称
    start_timestamp: str,         # 开始时间（Unix 毫秒时间戳）
    end_timestamp: str,           # 结束时间
    jump_channel_id: str,         # 跳转子频道 ID
    remind_type: RemindType,      # 提醒类型
) -> Schedule
```

**RemindType 提醒类型**:
| 值 | 说明 |
|----|------|
| 0 | 不提醒 |
| 1 | 开始时提醒 |
| 2 | 开始前 5 分钟 |
| 3 | 开始前 15 分钟 |
| 4 | 开始前 30 分钟 |
| 5 | 开始前 60 分钟 |

::: warning 频率限制
- 单个管理员每天限 10 次
- 单个频道每天限 100 次
:::

## update_schedule

修改日程。

```python
async def update_schedule(
    channel_id: str,
    schedule_id: str,
    name: str,
    start_timestamp: str,
    end_timestamp: str,
    jump_channel_id: str,
    remind_type: RemindType,
) -> Schedule
```

## delete_schedule

删除日程。

```python
async def delete_schedule(channel_id: str, schedule_id: str) -> str
```

**使用示例**:
```python
import time

# 创建日程
delay = 60 * 1000  # 1 分钟后
start_time = str(int(round(time.time() * 1000)) + delay)
end_time = str(int(start_time) + delay)

schedule = await self.api.create_schedule(
    channel_schedule_id,
    name="会议",
    start_timestamp=start_time,
    end_timestamp=end_time,
    jump_channel_id=channel_schedule_id,
    remind_type="0",
)
```
