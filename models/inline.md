# 内联键盘类型

**Source file:** [`botpy/types/inline.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/inline.py)

**Related types:** [Message](message.md) — `KeyboardPayload`

---

## Keyboard 结构

```python
class Keyboard(TypedDict):
    rows: List[KeyboardRow]

class KeyboardRow(TypedDict):
    buttons: List[Button]
```

---

## Button

```python
class Button(TypedDict):
    id: str                    # 按钮 ID
    render_data: RenderData    # 渲染数据
    action: Action             # 行为定义
```

---

## RenderData

```python
class RenderData(TypedDict):
    label: str          # 按钮标签
    visited_label: str  # 点击后标签
    style: int          # 样式（0=灰色, 1=蓝色）
```

---

## Action

```python
class Action(TypedDict):
    type: int                    # 行为类型（0=跳转, 1=回调, 2=指令）
    permission: Permission       # 权限
    click_limit: int             # 点击次数限制
    data: str                    # 回调数据或指令
    at_bot_show_channel_list: bool  # 是否展示频道列表
```

---

## Permission

```python
class Permission(TypedDict):
    type: int                     # 权限类型（0=所有人, 1=指定成员, 2=指定身份组）
    specify_role_ids: List[str]   # 指定身份组 ID
    specify_user_ids: List[str]   # 指定用户 ID
```

---

## 构建示例

```python
button = Button(
    id="1",
    render_data=RenderData(label="按钮", visited_label="已点击", style=0),
    action=Action(
        type=2,
        permission=Permission(type=2, specify_role_ids=["1"], specify_user_ids=[]),
        click_limit=10,
        data="/搜索",
        at_bot_show_channel_list=True,
    ),
)
row = KeyboardRow(buttons=[button])
keyboard = Keyboard(rows=[row])
```
