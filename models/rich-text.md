# 富文本类型

**Source file:** [`botpy/types/rich_text.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/rich_text.py)

**Related types:** [Forum](forum.md) — `AuditResult`, `Thread`

用于论坛帖子中的富文本内容。

---

## Literal 类型定义

以下类型别名定义了枚举范围（[`types/rich_text.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/rich_text.py#L3-L12)）。

```python
AuditType = Literal[1, 2, 3]
# 1=帖子, 2=评论, 3=回复

RichType = Literal[1, 2, 3, 4, 5, 10, 11]
# 1=普通文本, 2=@信息, 3=url信息, 4=表情, 5=#子频道, 10=视频, 11=图片

AtType = Literal[1, 2, 3]
# 1=@特定的人, 2=@角色组所有人, 3=@频道所有人

ElemType = Literal[1, 2, 3, 4]
# 1=文本, 2=图片, 3=视频, 4=url

Alignment = Literal[0, 1, 2]
# 0=左对齐, 1=居中, 2=右对齐
```

---

## 基本元素

```python
class RichText(TypedDict):
    paragraphs: Paragraph   # 段落

class Paragraph(TypedDict):
    elems: List[Elem]       # 元素列表
    props: ParagraphProps   # 段落属性

class ParagraphProps(TypedDict):
    alignment: Alignment    # 对齐方式
```

---

## 元素类型

```python
class Elem(TypedDict):
    type: ElemType   # 元素类型（1=文本, 2=图片, 3=视频, 4=url）
    text: TextElem   # 文本元素（type=1 时有效）
    image: ImageElem # 图片元素（type=2 时有效）
    video: VideoElem # 视频元素（type=3 时有效）
    url: URLElem     # URL 元素（type=4 时有效）
```

---

### 文本元素

```python
class TextElem(TypedDict):
    text: str        # 文本内容
    props: TextProps # 文本属性

class TextProps(TypedDict):
    font_bold: bool    # 粗体
    italic: bool       # 斜体
    underline: bool    # 下划线
```

---

### 图片元素

```python
class ImageElem(TypedDict):
    third_url: str       # 图片 URL
    width_percent: float # 宽度百分比
```

### PlatImage

平台图片信息（[`types/rich_text.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/rich_text.py#L29-L33)）。

```python
class PlatImage(TypedDict):
    url: str               # 图片 URL
    width: int             # 宽度
    height: int            # 高度
    image_id: str          # 图片 ID
```

---

### 视频元素

```python
class VideoElem(TypedDict):
    third_url: str       # 视频 URL
```

### PlatVideo

平台视频信息（[`types/rich_text.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/rich_text.py#L40-L45)）。

```python
class PlatVideo(TypedDict):
    url: str               # 视频 URL
    width: int             # 宽度
    height: int            # 高度
    video_id: str          # 视频 ID
    duration: int          # 时长
    cover: PlatImage       # 封面图
```

---

### URL 元素

```python
class URLElem(TypedDict):
    url: str    # 跳转 URL
    desc: str   # 描述文本
```

---

## 富文本对象

用于论坛事件中的富文本内容（[`types/rich_text.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/rich_text.py#L121-L127)）。

```python
class RichObject(TypedDict):
    type: RichType              # 富文本类型（1=文本, 2=@信息, 3=url, 4=表情, 5=#子频道, 10=视频, 11=图片）
    text_info: TextInfo         # 文本信息
    at_info: AtInfo             # @信息
    url_info: URLInfo           # URL 信息
    emoji_info: EmojiInfo       # 表情信息
    channel_info: ChannelInfo   # 子频道信息
```

---

### 信息子类型

```python
class TextInfo(TypedDict):
    text: str                      # 文本内容

class ChannelInfo(TypedDict):
    channel_id: int                # 子频道 ID
    channel_name: str              # 子频道名称

class EmojiInfo(TypedDict):
    id: str                        # 表情 ID
    type: str                      # 表情类型
    name: str                      # 表情名称
    url: str                       # 表情 URL

class URLInfo(TypedDict):
    url: str                       # 跳转 URL
    display_text: str              # 展示文本
```

---

### @信息子类型

```python
class AtUserInfo(TypedDict):
    id: str                        # 用户 ID
    nick: str                      # 用户昵称

class AtRoleInfo(TypedDict):
    role_id: int                   # 身份组 ID
    name: str                      # 身份组名称
    color: int                     # 身份组颜色

class AtGuildInfo(TypedDict):
    guild_id: str                  # 频道 ID
    guild_name: str                # 频道名称

class AtInfo(TypedDict):
    type: AuditType                # @类型（1=@用户, 2=@角色组, 3=@所有人）
    user_info: AtUserInfo          # @用户信息
    role_info: AtRoleInfo          # @角色组信息
    guild_info: AtGuildInfo        # @频道信息
```
