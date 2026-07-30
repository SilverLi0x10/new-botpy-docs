# 音频事件

需要 `Intents(audio_action=True)`。

## on_audio_start

音频开始播放时触发。

```python
async def on_audio_start(self, audio: Audio)
```

## on_audio_finish

音频播放结束时触发。

```python
async def on_audio_finish(self, audio: Audio)
```

## on_audio_on_mic

上麦时触发。

```python
async def on_audio_on_mic(self, audio: Audio)
```

## on_audio_off_mic

下麦时触发。

```python
async def on_audio_off_mic(self, audio: Audio)
```
