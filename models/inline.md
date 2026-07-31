# 内联键盘模型

**来源文件：** [`botpy/types/inline.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/inline.py)

**相关类型：** [Message 模型](message.md) — `KeyboardPayload`

用于构建消息中的内联键盘（按钮组）。完整结构：`Keyboard` → `KeyboardRow` → `Button` → `RenderData` + `Action` → `Permission`。

---

## Keyboard

内联键盘整体结构。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| rows | List[[KeyboardRow](#keyboardrow)] | 按钮行列表 |

---

## KeyboardRow

键盘中的一行。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| buttons | List[[Button](#button)] | 该行包含的按钮列表 |

---

## Button

单个按钮。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| id | str | 按钮 ID |
| render_data | [RenderData](#renderdata) | 按钮渲染数据 |
| action | [Action](#action) | 点击行为定义 |

---

## RenderData

按钮的展示样式。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| label | str | 按钮标签 |
| visited_label | str | 点击后展示的标签 |
| style | int | 按钮样式（0=灰色，1=蓝色） |

---

## Action

按钮点击后的行为定义。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| type | int | 行为类型（0=跳转链接，1=回调，2=指令） |
| permission | [Permission](#permission) | 可点击的用户范围 |
| click_limit | int | 可点击次数上限 |
| data | str | 回调数据或指令内容 |
| at_bot_show_channel_list | bool | 是否展示子频道选择列表 |

---

## Permission

按钮的点击权限限制。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| type | int | 权限类型（0=所有人，1=指定成员，2=指定身份组） |
| specify_role_ids | List[str] | 指定身份组 ID 列表 |
| specify_user_ids | List[str] | 指定用户 ID 列表 |

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
