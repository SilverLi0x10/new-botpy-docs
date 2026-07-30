# 音频事件

需要 `Intents(audio_action=True)`。

## on_audio_start

音频开始播放时触发。

```python
async def on_audio_start(self, audio: Audio)
```

**事件触发详情**

- **触发解析**: `parse_audio_start` → `on_audio_start`
- **参数模型**: [`Audio`](../models/audio.md) — `__slots__` 包含: `channel_id`, `guild_id`, `audio_url`, `text`, `event_id`
- **源码位置**: [`connection.py` 第 179-181 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L179-L181) | [`audio.py` 第 5-25 行](https://github.com/tencent-connect/botpy/tree/master/botpy/audio.py#L5-L25)

## on_audio_finish

音频播放结束时触发。

```python
async def on_audio_finish(self, audio: Audio)
```

**事件触发详情**

- **触发解析**: `parse_audio_finish` → `on_audio_finish`
- **参数模型**: [`Audio`](../models/audio.md) — `__slots__` 同 `on_audio_start`
- **源码位置**: [`connection.py` 第 183-185 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L183-L185) | [`audio.py` 第 5-25 行](https://github.com/tencent-connect/botpy/tree/master/botpy/audio.py#L5-L25)

## on_audio_on_mic

上麦时触发。

```python
async def on_audio_on_mic(self, audio: Audio)
```

**事件触发详情**

- **触发解析**: `parse_on_mic` → `on_audio_on_mic`
- **参数模型**: [`Audio`](../models/audio.md) — `__slots__` 同 `on_audio_start`
- **源码位置**: [`connection.py` 第 187-189 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L187-L189) | [`audio.py` 第 5-25 行](https://github.com/tencent-connect/botpy/tree/master/botpy/audio.py#L5-L25)

## on_audio_off_mic

下麦时触发。

```python
async def on_audio_off_mic(self, audio: Audio)
```

**事件触发详情**

- **触发解析**: `parse_off_mic` → `on_audio_off_mic`
- **参数模型**: [`Audio`](../models/audio.md) — `__slots__` 同 `on_audio_start`
- **源码位置**: [`connection.py` 第 191-193 行](https://github.com/tencent-connect/botpy/tree/master/botpy/connection.py#L191-L193) | [`audio.py` 第 5-25 行](https://github.com/tencent-connect/botpy/tree/master/botpy/audio.py#L5-L25)
