# 富文本类型

用于论坛帖子中的富文本内容。

## 基本元素

```python
class RichText(TypedDict):
    paragraphs: Paragraph   # 段落

class Paragraph(TypedDict):
    elems: List[Elem]       # 元素列表
    props: ParagraphProps   # 段落属性

class ParagraphProps(TypedDict):
    alignment: Alignment    # 对齐方式 (0=左, 1=中, 2=右)
```

## 元素类型

```python
ElemType = Literal[1, 2, 3, 4]
# 1=文本, 2=图片, 3=视频, 4=url

class Elem(TypedDict):
    text: TextElem
    image: ImageElem
    video: VideoElem
    url: URLElem
    type: ElemType
```

### 文本元素

```python
class TextElem(TypedDict):
    text: str
    props: TextProps

class TextProps(TypedDict):
    font_bold: bool    # 粗体
    italic: bool       # 斜体
    underline: bool    # 下划线
```

### 图片元素

```python
class ImageElem(TypedDict):
    third_url: str       # 图片 URL
    width_percent: float # 宽度百分比
```

### 视频元素

```python
class VideoElem(TypedDict):
    third_url: str       # 视频 URL
```

### URL 元素

```python
class URLElem(TypedDict):
    url: str
    desc: str
```

## 富文本对象

用于论坛事件中的富文本内容：

```python
class RichObject(TypedDict):
    type: RichType       # 1=文本, 2=@信息, 3=url, 4=表情, 5=#子频道, 10=视频, 11=图片
    text_info: TextInfo
    at_info: AtInfo
    url_info: URLInfo
    emoji_info: EmojiInfo
    channel_info: ChannelInfo
```
