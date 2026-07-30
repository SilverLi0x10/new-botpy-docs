# 日程 API

日程接口用于管理日程子频道中的日程事件。
要求操作人具有管理频道的权限，如果是机器人，则需要将机器人设置为管理员。

## get_schedules

获取日程子频道当天的日程列表。

**源码位置**: [`botpy/api.py` 第 1016 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L1016)

**API 路由**: `GET /channels/{channel_id}/schedules`

```python
async def get_schedules(
    channel_id: str,
    since: str = None,
) -> List[Schedule]
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| channel_id | str | 必填 | 日程子频道的 ID |
| since | str | `None` | 起始时间戳（Unix 毫秒时间戳），返回此时间之后的日程。若不指定，默认返回当天的日程列表 |

**返回**: List[[`Schedule`](../models/other.md#schedule-日程)]

## get_schedule

获取指定日程详情。

**源码位置**: [`botpy/api.py` 第 1034 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L1034)

**API 路由**: `GET /channels/{channel_id}/schedules/{schedule_id}`

```python
async def get_schedule(channel_id: str, schedule_id: str) -> Schedule
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| channel_id | str | 必填 | 日程子频道的 ID |
| schedule_id | str | 必填 | 要查询的日程 ID |

**返回**: [`Schedule`](../models/other.md#schedule-日程)

## create_schedule

创建日程。

**源码位置**: [`botpy/api.py` 第 1049 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L1049)

**API 路由**: `POST /channels/{channel_id}/schedules`

```python
async def create_schedule(
    channel_id: str,
    name: str,
    start_timestamp: str,
    end_timestamp: str,
    jump_channel_id: str,
    remind_type: RemindType,
) -> Schedule
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| channel_id | str | 必填 | 日程子频道的 ID |
| name | str | 必填 | 日程名称 |
| start_timestamp | str | 必填 | 开始时间（Unix 毫秒时间戳） |
| end_timestamp | str | 必填 | 结束时间（Unix 毫秒时间戳） |
| jump_channel_id | str | 必填 | 跳转子频道 ID |
| remind_type | [`RemindType`](../models/other.md#schedule-日程) | 必填 | 提醒类型 |

**RemindType 提醒类型**:
| 值 | 说明 |
|----|------|
| 0 | 不提醒 |
| 1 | 开始时提醒 |
| 2 | 开始前 5 分钟 |
| 3 | 开始前 15 分钟 |
| 4 | 开始前 30 分钟 |
| 5 | 开始前 60 分钟 |

**返回**: [`Schedule`](../models/other.md#schedule-日程)

**频率限制**:
- 单个管理员每天限 10 次
- 单个频道每天限 100 次

## update_schedule

修改日程。

**源码位置**: [`botpy/api.py` 第 1094 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L1094)

**API 路由**: `PATCH /channels/{channel_id}/schedules/{schedule_id}`

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

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| channel_id | str | 必填 | 日程子频道的 ID |
| schedule_id | str | 必填 | 要修改的日程 ID |
| name | str | 必填 | 日程名称 |
| start_timestamp | str | 必填 | 开始时间（Unix 毫秒时间戳） |
| end_timestamp | str | 必填 | 结束时间（Unix 毫秒时间戳） |
| jump_channel_id | str | 必填 | 跳转子频道 ID |
| remind_type | [`RemindType`](../models/other.md#schedule-日程) | 必填 | 提醒类型 |

**返回**: [`Schedule`](../models/other.md#schedule-日程)

## delete_schedule

删除日程。

**源码位置**: [`botpy/api.py` 第 1138 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L1138)

**API 路由**: `DELETE /channels/{channel_id}/schedules/{schedule_id}`

```python
async def delete_schedule(channel_id: str, schedule_id: str) -> str
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| channel_id | str | 必填 | 日程子频道的 ID |
| schedule_id | str | 必填 | 要删除的日程 ID |

**返回**: 成功执行返回 `None`。

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
