# 音频 API

## update_audio

音频控制（仅音频类机器人可用）。

```python
async def update_audio(
    channel_id: str,
    audio_control: AudioControl,
) -> str
```

**AudioControl**:
| 字段 | 类型 | 说明 |
|------|------|------|
| audio_url | str | 音频 URL |
| text | str | 音频文本 |
| status | int | 0=开始, 1=暂停, 2=继续, 3=停止 |

## on_microphone

机器人在语音子频道上麦。

```python
async def on_microphone(channel_id: str) -> str
```

## off_microphone

机器人在语音子频道下麦。

```python
async def off_microphone(channel_id: str) -> str
```

::: warning
音频接口仅限音频类机器人使用，需联系平台申请权限。
:::
