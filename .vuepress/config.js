import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索文档',
        },
      },
      // 最大建议数
      maxSuggestions: 10,
      // 排除首页
      isSearchable: (page) => page.path !== '/',
    }),
  ],
  lang: 'zh-CN',
  title: 'QQ Bot Python SDK',
  description: '基于机器人开放平台API实现的QQ机器人框架',
  base: '/botpy/',
  head: [
    ['link', { rel: 'icon', href: 'https://github.com/tencent-connect/bot-docs/raw/main/docs/.vuepress/public/favicon-64px.png' }],
  ],
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: 'https://github.com/tencent-connect/bot-docs/raw/main/docs/.vuepress/public/favicon-64px.png',
    repo: 'tencent-connect/botpy',
    docsDir: 'docs',
    editLink: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: true,
    contributors: false,
    navbar: [
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
          children: [
            '/guide/README.md',
            '/guide/installation.md',
            '/guide/quick-start.md',
            '/guide/configuration.md',
            '/guide/client.md',
            '/guide/intents.md',
            '/guide/logging.md',
          ],
        },
      ],
      '/api/': [
        {
          text: 'API 参考',
          children: [
            '/api/README.md',
            '/api/guild.md',
            '/api/channel.md',
            '/api/role.md',
            '/api/member.md',
            '/api/message.md',
            '/api/dm.md',
            '/api/mute.md',
            '/api/announce.md',
            '/api/permission.md',
            '/api/schedule.md',
            '/api/reaction.md',
            '/api/pin.md',
            '/api/audio.md',
            '/api/forum.md',
            '/api/group.md',
            '/api/c2c.md',
          ],
        },
      ],
      '/events/': [
        {
          text: '事件列表',
          children: [
            '/events/README.md',
            '/events/guild.md',
            '/events/message.md',
            '/events/member.md',
            '/events/reaction.md',
            '/events/audio.md',
            '/events/forum.md',
            '/events/interaction.md',
            '/events/group-manage.md',
          ],
        },
      ],
      '/models/': [
        {
          text: '数据模型',
          children: [
            '/models/README.md',
            '/models/message.md',
            '/models/guild.md',
            '/models/channel.md',
            '/models/user.md',
            '/models/inline.md',
            '/models/forum.md',
            '/models/rich-text.md',
            '/models/other.md',
          ],
        },
      ],
      '/extensions/': [
        {
          text: '扩展功能',
          children: [
            '/extensions/README.md',
            '/extensions/commands.md',
            '/extensions/apscheduler.md',
            '/extensions/yaml.md',
            '/extensions/channel-jump.md',
            '/extensions/color.md',
          ],
        },
      ],
      '/examples/': [
        {
          text: '示例',
          children: [
            '/examples/README.md',
            '/examples/basic-reply.md',
            '/examples/ark-message.md',
            '/examples/embed-message.md',
            '/examples/commands.md',
            '/examples/file-image.md',
            '/examples/keyboard.md',
            '/examples/markdown.md',
            '/examples/reference.md',
            '/examples/dm.md',
            '/examples/recall.md',
            '/examples/announce.md',
            '/examples/permission.md',
            '/examples/pins.md',
            '/examples/schedule.md',
            '/examples/reaction.md',
            '/examples/guild-member.md',
            '/examples/group-message.md',
            '/examples/c2c-message.md',
            '/examples/group-file.md',
            '/examples/c2c-file.md',
            '/examples/group-manage.md',
            '/examples/c2c-manage.md',
            '/examples/audio-member.md',
            '/examples/open-forum.md',
          ],
        },
      ],
    },
  }),
})
