![SOCIALIFY-new-botpy-docs](https://socialify.git.ci/SilverLi0x10/new-botpy-docs/image?custom_language=Python&description=1&font=KoHo&language=1&logo=https%3A%2F%2Fraw.githubusercontent.com%2Ftencent-connect%2Fbot-docs%2Fmain%2Fdocs%2F.vuepress%2Fpublic%2Ffavicon-64px.png&name=1&owner=1&pattern=Circuit+Board&theme=Auto)

✨ [QQBot Python SDK](https://github.com/tencent-connect/botpy) · [机器人开放平台API](https://bot.q.qq.com/wiki/develop/api-v2/) ✨

本文档覆盖**频道、私信、群聊、C2C、音频、论坛、日程**等全部 QQ 机器人能力，包含使用指南、API 参考、事件列表、数据模型、扩展功能和 20+ 完整示例。

## 本地部署

环境要求：`Node.js ≥ 20`

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:5173）
npm run docs:dev

# 构建静态站点（输出到 .vitepress/dist）
npm run docs:build

# 预览构建产物
npm run docs:preview
```

## 目录结构

```
.
├── .vitepress/
│   ├── config.mts          # 站点配置：导航、侧边栏、搜索、editLink 等
│   └── theme/              # 自定义主题样式
├── guide/                  # 使用指南：安装、快速开始、配置、Client、Intents、日志
├── api/                    # API 参考：Guild、Channel、Message、DM、Group、C2C 等接口
├── events/                 # 事件列表：频道、消息、成员、互动、音频、论坛等 WebSocket 事件
├── models/                 # 数据模型：消息、频道、用户、论坛、富文本等 TypedDict 定义
├── extensions/             # 扩展功能：指令系统、定时任务、YAML 配置、频道跳转、颜色转换
├── examples/               # 示例代码：20+ 完整示例
└── index.md                # 首页
```

## 贡献文档

文档均为 Markdown 编写，欢迎提交 PR：

1. 修改对应的 `.md` 文件（新增页面时同步更新 `.vitepress/config.mts` 中的侧边栏）
2. 本地运行 `npm run docs:dev` 预览效果
3. 提交 PR
