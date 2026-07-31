# 富文本模型

**来源文件：** [`botpy/types/rich_text.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/rich_text.py)

**相关类型：** [Forum 模型](forum.md) — `AuditResult`、`Thread`；[Message 模型](message.md)

用于论坛帖子等场景中的富文本内容。

---

## 字面量类型别名

以下 `Literal` 类型别名定义了固定的取值集合。由于它们是类型别名而非数据结构，此处列出各取值的含义。

### AuditType

审核类型（`Literal[1, 2, 3]`）。

| 取值 | 语义说明 |
|---|---|
| 1 | 帖子 |
| 2 | 评论 |
| 3 | 回复 |

### RichType

富文本对象类型（`Literal[1, 2, 3, 4, 5, 10, 11]`）。

| 取值 | 语义说明 |
|---|---|
| 1 | 普通文本 |
| 2 | @ 信息 |
| 3 | URL 信息 |
| 4 | 表情 |
| 5 | #子频道 |
| 10 | 视频 |
| 11 | 图片 |

### AtType

@ 信息类型（`Literal[1, 2, 3]`）。

| 取值 | 语义说明 |
|---|---|
| 1 | @ 特定的人 |
| 2 | @ 角色组所有人 |
| 3 | @ 频道所有人 |

### ElemType

富文本元素类型（`Literal[1, 2, 3, 4]`）。

| 取值 | 语义说明 |
|---|---|
| 1 | 文本 |
| 2 | 图片 |
| 3 | 视频 |
| 4 | URL |

### Alignment

段落对齐方式（`Literal[0, 1, 2]`）。

| 取值 | 语义说明 |
|---|---|
| 0 | 左对齐 |
| 1 | 居中 |
| 2 | 右对齐 |

---

## ParagraphProps

段落属性。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| alignment | [Alignment](#alignment) | 段落对齐方式 |

---

## URLElem

URL 元素。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| url | str | 跳转 URL |
| desc | str | 描述文本 |

---

## ImageElem

图片元素。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| third_url | str | 图片 URL |
| width_percent | float | 图片宽度百分比 |

---

## PlatImage

平台图片信息。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| url | str | 图片 URL |
| width | int | 图片宽度 |
| height | int | 图片高度 |
| image_id | str | 图片 ID |

---

## VideoElem

视频元素。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| third_url | str | 视频 URL |

---

## PlatVideo

平台视频信息。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| url | str | 视频 URL |
| width | int | 视频宽度 |
| height | int | 视频高度 |
| video_id | str | 视频 ID |
| duration | int | 视频时长 |
| cover | [PlatImage](#platimage) | 封面图 |

---

## TextProps

文本属性。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| font_bold | bool | 是否加粗 |
| italic | bool | 是否斜体 |
| underline | bool | 是否有下划线 |

---

## TextElem

文本元素。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| text | str | 文本内容 |
| props | [TextProps](#textprops) | 文本属性 |

---

## Elem

富文本元素（统一容器），根据 `type` 区分具体元素类型。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| text | [TextElem](#textelem) | 文本元素（`type=1` 时有效） |
| image | [ImageElem](#imageelem) | 图片元素（`type=2` 时有效） |
| video | [VideoElem](#videoelem) | 视频元素（`type=3` 时有效） |
| url | [URLElem](#urlelem) | URL 元素（`type=4` 时有效） |
| type | [ElemType](#elemtype) | 元素类型 |

---

## Paragraph

段落结构，包含一组元素。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| elems | List[[Elem](#elem)] | 元素列表 |
| props | [ParagraphProps](#paragraphprops) | 段落属性 |

---

## RichText

富文本整体结构。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| paragraphs | [Paragraph](#paragraph) | 段落 |

---

## ChannelInfo

子频道信息。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| channel_id | int | 子频道 ID |
| channel_name | str | 子频道名称 |

---

## EmojiInfo

表情信息。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| id | str | 表情 ID |
| type | str | 表情类型 |
| name | str | 表情名称 |
| url | str | 表情 URL |

---

## URLInfo

URL 信息。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| url | str | 跳转 URL |
| display_text | str | 展示文本 |

---

## AtGuildInfo

@ 频道信息。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| guild_id | str | 频道 ID |
| guild_name | str | 频道名称 |

---

## AtRoleInfo

@ 角色组信息。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| role_id | int | 身份组 ID |
| name | str | 身份组名称 |
| color | int | 身份组颜色 |

---

## AtUserInfo

@ 用户信息。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| id | str | 用户 ID |
| nick | str | 用户昵称 |

---

## AtInfo

@ 信息。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| type | [AuditType](#audittype) | @ 类型（1=@用户，2=@角色组，3=@所有人） |
| user_info | [AtUserInfo](#atuserinfo) | @ 用户信息 |
| role_info | [AtRoleInfo](#atroleinfo) | @ 角色组信息 |
| guild_info | [AtGuildInfo](#atguildinfo) | @ 频道信息 |

---

## TextInfo

文本信息。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| text | str | 文本内容 |

---

## RichObject

富文本对象（论坛事件等场景使用）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| type | [RichType](#richtype) | 富文本类型 |
| text_info | [TextInfo](#textinfo) | 文本信息 |
| at_info | [AtInfo](#atinfo) | @ 信息 |
| url_info | [URLInfo](#urlinfo) | URL 信息 |
| emoji_info | [EmojiInfo](#emojiinfo) | 表情信息 |
| channel_info | [ChannelInfo](#channelinfo) | 子频道信息 |
