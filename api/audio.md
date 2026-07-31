# 音频 API

音频接口仅限音频类机器人使用，需联系平台申请权限。

## update_audio

音频控制，用于控制子频道 `channel_id` 下的音频。

**源码位置**: [`botpy/api.py` 第 721 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L721)

**API 路由**: `POST /channels/{channel_id}/audio`

```python
async def update_audio(
    channel_id: str,
    audio_control: AudioControl,
) -> str
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| channel_id | str | 必填 | 音频播放的子频道 ID |
| audio_control | [`AudioControl`](../models/other.md#audio-音频控制) | 必填 | 音频控制参数 |

**AudioControl**:
| 字段 | 类型 | 说明 |
|------|------|------|
| audio_url | str | 音频 URL |
| text | str | 音频文本 |
| status | int | 音频状态：`0` 开始，`1` 暂停，`2` 继续，`3` 停止 |

**返回**: 成功执行返回空字符串。

## on_microphone

机器人在语音子频道上麦。

**源码位置**: [`botpy/api.py` 第 740 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L740)

**API 路由**: `PUT /channels/{channel_id}/mic`

```python
async def on_microphone(channel_id: str) -> str
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| channel_id | str | 必填 | 语音子频道 ID |

**返回**: 成功执行返回空字符串。

## off_microphone

机器人在语音子频道下麦。

**源码位置**: [`botpy/api.py` 第 756 行](https://github.com/tencent-connect/botpy/tree/master/botpy/api.py#L756)

**API 路由**: `DELETE /channels/{channel_id}/mic`

```python
async def off_microphone(channel_id: str) -> str
```

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| channel_id | str | 必填 | 语音子频道 ID |

**返回**: 成功执行返回空字符串。

::: warning
音频接口仅限音频类机器人使用，后续会根据机器人类型自动开通接口权限，现如需调用，需联系平台申请权限。
:::
