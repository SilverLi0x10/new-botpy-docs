import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'QQ Bot Python SDK',
  description: '基于机器人开放平台API实现的QQ机器人框架',
  base: '/botpy/',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: 'https://github.com/tencent-connect/bot-docs/raw/main/docs/.vuepress/public/favicon-64px.png' }],
  ],

  themeConfig: {
    logo: 'https://github.com/tencent-connect/bot-docs/raw/main/docs/.vuepress/public/favicon-64px.png',

    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'API 参考', link: '/api/' },
      { text: '事件列表', link: '/events/' },
      { text: '数据模型', link: '/models/' },
      { text: '扩展功能', link: '/extensions/' },
      { text: '示例', link: '/examples/' },
      { text: 'GitHub', link: 'https://github.com/tencent-connect/botpy' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/' },
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quick-start' },
            { text: '配置说明', link: '/guide/configuration' },
            { text: 'Client 客户端', link: '/guide/client' },
            { text: 'Intents 事件订阅', link: '/guide/intents' },
            { text: '日志系统', link: '/guide/logging' },
          ],
        },
      ],
      '/api/': [
        {
          text: 'API 参考',
          items: [
            { text: '概览', link: '/api/' },
            { text: 'Guild（频道）', link: '/api/guild' },
            { text: 'Channel（子频道）', link: '/api/channel' },
            { text: 'Role（身份组）', link: '/api/role' },
            { text: 'Member（成员）', link: '/api/member' },
            { text: 'Message（消息）', link: '/api/message' },
            { text: 'Direct Message（私信）', link: '/api/dm' },
            { text: 'Mute（禁言）', link: '/api/mute' },
            { text: 'Announce（公告）', link: '/api/announce' },
            { text: 'Permission（权限）', link: '/api/permission' },
            { text: 'Schedule（日程）', link: '/api/schedule' },
            { text: 'Reaction（表情）', link: '/api/reaction' },
            { text: 'Pin（置顶）', link: '/api/pin' },
            { text: 'Audio（音频）', link: '/api/audio' },
            { text: 'Forum（论坛）', link: '/api/forum' },
            { text: 'Group（群聊）', link: '/api/group' },
            { text: 'C2C（单聊）', link: '/api/c2c' },
          ],
        },
      ],
      '/events/': [
        {
          text: '事件列表',
          items: [
            { text: '概览', link: '/events/' },
            { text: '频道事件', link: '/events/guild' },
            { text: '消息事件', link: '/events/message' },
            { text: '成员事件', link: '/events/member' },
            { text: '表情事件', link: '/events/reaction' },
            { text: '音频事件', link: '/events/audio' },
            { text: '论坛事件', link: '/events/forum' },
            { text: '互动事件', link: '/events/interaction' },
            { text: '群管理事件', link: '/events/group-manage' },
          ],
        },
      ],
      '/models/': [
        {
          text: '数据模型',
          items: [
            { text: '概览', link: '/models/' },
            { text: '消息模型', link: '/models/message' },
            { text: '频道模型', link: '/models/guild' },
            { text: '子频道模型', link: '/models/channel' },
            { text: '用户模型', link: '/models/user' },
            { text: 'Inline 模型', link: '/models/inline' },
            { text: '论坛模型', link: '/models/forum' },
            { text: '富文本模型', link: '/models/rich-text' },
            { text: '其他模型', link: '/models/other' },
          ],
        },
      ],
      '/extensions/': [
        {
          text: '扩展功能',
          items: [
            { text: '概览', link: '/extensions/' },
            { text: '指令系统', link: '/extensions/commands' },
            { text: '定时任务', link: '/extensions/apscheduler' },
            { text: 'YAML 配置', link: '/extensions/yaml' },
            { text: '频道跳转', link: '/extensions/channel-jump' },
            { text: '颜色转换', link: '/extensions/color' },
          ],
        },
      ],
      '/examples/': [
        {
          text: '示例',
          items: [
            { text: '概览', link: '/examples/' },
            { text: '基础回复', link: '/examples/basic-reply' },
            { text: 'ARK 消息', link: '/examples/ark-message' },
            { text: 'Embed 消息', link: '/examples/embed-message' },
            { text: '指令示例', link: '/examples/commands' },
            { text: '文件与图片', link: '/examples/file-image' },
            { text: 'Keyboard 消息', link: '/examples/keyboard' },
            { text: 'Markdown 消息', link: '/examples/markdown' },
            { text: '引用消息', link: '/examples/reference' },
            { text: '私信', link: '/examples/dm' },
            { text: '撤回消息', link: '/examples/recall' },
            { text: '公告', link: '/examples/announce' },
            { text: '权限', link: '/examples/permission' },
            { text: '置顶消息', link: '/examples/pins' },
            { text: '日程', link: '/examples/schedule' },
            { text: '表情', link: '/examples/reaction' },
            { text: '频道成员', link: '/examples/guild-member' },
            { text: '群聊消息', link: '/examples/group-message' },
            { text: 'C2C 消息', link: '/examples/c2c-message' },
            { text: '群文件', link: '/examples/group-file' },
            { text: 'C2C 文件', link: '/examples/c2c-file' },
            { text: '群管理', link: '/examples/group-manage' },
            { text: 'C2C 管理', link: '/examples/c2c-manage' },
            { text: '音频与麦位', link: '/examples/audio-member' },
            { text: '开放论坛', link: '/examples/open-forum' },
          ],
        },
      ],
    },

    // VitePress 内置全文搜索（本地按需搜索）
    search: {
      provider: 'local',
    },

    editLink: {
      pattern: 'https://github.com/tencent-connect/botpy/edit/master/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    lastUpdated: true,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tencent-connect/botpy' },
    ],
  },
})
