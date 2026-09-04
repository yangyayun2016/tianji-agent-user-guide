import { defineConfig } from 'vitepress'

// GitHub 项目页部署在子路径下，base 必须与仓库名一致，否则线上样式与资源会全部 404
const BASE = '/tianji-agent-user-guide/'

export default defineConfig({
  base: BASE,
  lang: 'zh-CN',
  title: '天机智能体使用指南',
  description: '天机智能体使用指南 —— 面向跨境电商卖家的 AI 数据分析助手，从注册到出报告的完整用法。',
  cleanUrls: true,
  // 构建产物放到仓库根目录，避免落在 srcDir 内触发开发服务器反复热更新
  outDir: '../dist',
  lastUpdated: true,
  ignoreDeadLinks: false,

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: `${BASE}images/logo.png` }],
    ['meta', { name: 'theme-color', content: '#000000' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '天机智能体使用指南' }],
    ['meta', { property: 'og:description', content: '跨境电商 AI 数据分析助手，一个对话框问遍你所有的数据平台。' }]
  ],

  themeConfig: {
    logo: '/images/logo.png',
    siteTitle: '天机智能体',

    nav: [
      { text: '快速开始', link: '/getting-started' },
      {
        text: '功能指南',
        items: [
          { text: '智能对话', link: '/chat' },
          { text: '技能', link: '/skills' },
          { text: '连接器', link: '/connectors' },
          { text: '知识库', link: '/knowledge-base' },
          { text: '数据库连接', link: '/database' },
          { text: '报告与定时任务', link: '/reports-and-schedule' },
          { text: '飞书接入', link: '/feishu' },
          { text: '积分与邀请', link: '/credits' }
        ]
      },
      { text: '常见问题', link: '/faq' },
      {
        text: '关于天机',
        items: [
          { text: '产品介绍', link: '/introduction' },
          { text: '产品定位', link: '/tianji-agent' }
        ]
      }
    ],

    sidebar: [
      {
        text: '开始之前',
        collapsed: false,
        items: [
          { text: '产品介绍', link: '/introduction' },
          { text: '产品定位', link: '/tianji-agent' },
          { text: '快速开始', link: '/getting-started' }
        ]
      },
      {
        text: '核心功能',
        collapsed: false,
        items: [
          { text: '智能对话', link: '/chat' },
          { text: '技能', link: '/skills' },
          { text: '连接器', link: '/connectors' },
          { text: '知识库', link: '/knowledge-base' },
          { text: '数据库连接', link: '/database' },
          { text: '报告与定时任务', link: '/reports-and-schedule' },
          { text: '飞书接入', link: '/feishu' },
          { text: '积分与邀请', link: '/credits' }
        ]
      },
      {
        text: '遇到问题',
        collapsed: false,
        items: [
          { text: '常见问题', link: '/faq' },
          { text: '管理后台', link: '/admin' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yangyayun2016/tianji-agent-user-guide' }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    outline: { level: [2, 3], label: '本页导航' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    lastUpdatedText: '最后更新',

    footer: {
      message: '天机智能体使用指南 · 只讲怎么用',
      copyright: '面向跨境电商卖家的 AI 数据分析助手'
    }
  }
})
