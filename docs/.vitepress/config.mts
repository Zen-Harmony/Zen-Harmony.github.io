import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
      // 添加图标
      ['link', { rel: 'icon', href: '/house-solid.svg' }]
    ],
  cleanUrls: true,
  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-mocha',
    },
  },
  locales: {
    en: {
      label: 'English',
      lang: 'en',
      title: "Zen Harmony Team",
      description: "志海融新",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: 'Home', link: '/en/index' },
          { text: 'Linux Knowledge Base', link: 'https://doc.zen-harmony.top/en' },
          { text: 'QQ Group', link: 'https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=We3ez-d8QzdZpmW3JaYLGiIHlI74be-l&authKey=acLCg%2B1I4ieawMV30RF%2FOnl5tGxzgbK7HExXuZ1pQOkYm9J5VCp9uV4aLe5t0Uw6&noverify=0&group_code=985191565' }
        ],
      }
    },
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "志海融新",
      description: "Zen Harmony Team",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: '主页', link: '/' },
          { text: 'Linux 觅知园', link: 'https://doc.zen-harmony.top' },
          { text: 'QQ 群', link: 'https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=We3ez-d8QzdZpmW3JaYLGiIHlI74be-l&authKey=acLCg%2B1I4ieawMV30RF%2FOnl5tGxzgbK7HExXuZ1pQOkYm9J5VCp9uV4aLe5t0Uw6&noverify=0&group_code=985191565' }
        ],
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        darkModeSwitchLabel: '外观',
        outlineTitle: '在此页上',
        sidebarMenuLabel: '目录',
        returnToTopLabel: '返回顶部',
      }
    }
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    socialLinks: [
          { icon: 'github', link: 'https://github.com/Zen-Harmony' }
    ]
  }
})
