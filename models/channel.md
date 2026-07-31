# 子频道模型

**来源文件：**
- TypedDict 与枚举定义：[`botpy/types/channel.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/types/channel.py)
- 领域模型：[`botpy/channel.py`](https://github.com/tencent-connect/botpy/tree/master/botpy/channel.py)

**相关类型：** [Guild 模型](guild.md)、[User & Member 模型](user.md)

---

## ChannelType (枚举)

子频道类型枚举。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| TEXT_CHANNEL | int | 文字子频道（值 0） |
| VOICE_CHANNEL | int | 语音子频道（值 2） |
| GROUP_CHANNEL | int | 子频道分组（值 4） |
| LIVE_CHANNEL | int | 直播子频道（值 10005） |
| APP_CHANNEL | int | 应用子频道（值 10006） |
| DISCUSSION_CHANNEL | int | 论坛子频道（值 10007） |

> 值为 1 和 3 的枚举保留，不可使用。

---

## ChannelSubType (枚举)

子频道子类型。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| TALK | int | 闲聊（值 0） |
| POST | int | 公告（值 1） |
| CHEAT | int | 攻略（值 2） |
| BLACK | int | 开黑（值 3） |

---

## PrivateType (枚举)

子频道私密类型（可见性）。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| PUBLIC | int | 公开频道（值 0） |
| ADMIN | int | 管理员和群主可见（值 1） |
| SPECIFIED_USER | int | 群主、管理员及指定成员可见（值 2） |

---

## SpeakPermission (枚举)

子频道发言权限。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| INVALID | int | 无效类型（值 0） |
| EVERYONE | int | 所有人可发言（值 1） |
| ADMIN | int | 仅群主、管理员及指定成员可发言（值 2） |

---

## ChannelPayload

子频道数据结构，API 返回的原始数据。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| id | str | 子频道 ID |
| guild_id | str | 所属频道 ID |
| name | str | 子频道名称 |
| type | [ChannelType](#channeltype-枚举) | 子频道类型 |
| sub_type | [ChannelSubType](#channelsubtype-枚举) | 子频道子类型 |
| position | int | 排序位置 |
| parent_id | str | 父级分组 ID |
| owner_id | str | 创建者 ID |
| private_type | [PrivateType](#privatetype-枚举) | 私密类型 |
| speak_permission | [SpeakPermission](#speakpermission-枚举) | 发言权限 |
| application_id | str | 应用子频道的 AppID（仅应用子频道存在） |
| permissions | str | 权限串 |

---

## ChannelPermissions

子频道权限数据。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| channel_id | str | 子频道 ID |
| user_id | str | 用户 ID |
| permissions | str | 权限串（以二进制位表示） |
| role_id | str | 身份组 ID |

---

## Channel (领域模型)

子频道领域模型，通过 `on_channel_create` / `on_channel_update` / `on_channel_delete` 事件回调接收，是对 `ChannelPayload` 的封装。

| 变量名称 | 变量类型 | 语义说明 |
|---|---|---|
| _api | [BotAPI](../api/) | BotAPI 实例，用于调用 API 方法 |
| guild_id | str | 所属频道 ID |
| id | str | 子频道 ID |
| name | str | 子频道名称 |
| type | [ChannelType](#channeltype-枚举) | 子频道类型 |
| sub_type | [ChannelSubType](#channelsubtype-枚举) | 子频道子类型 |
| position | int | 排序位置 |
| owner_id | str | 创建者 ID |
| private_type | [PrivateType](#privatetype-枚举) | 私密类型 |
| speak_permission | [SpeakPermission](#speakpermission-枚举) | 发言权限 |
| application_id | str | 应用子频道的 AppID |
| permissions | str | 权限串 |
| event_id | str | 事件 ID |
