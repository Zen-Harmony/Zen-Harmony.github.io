import { defineConfig } from 'vitepress'

// VitePress site configuration
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/img/house-solid.webp' }]
  ],
  cleanUrls: true,
  sitemap: {
    hostname: 'https://www.zen-harmony.top',
    lastmodDateOnly: false
  },
  base: "/",
  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-mocha',
    },
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "志海融新",
      description: "Zen Harmony Team",
      themeConfig: {
        nav: [
          { text: '主页', link: '/' },
          { text: 'Linux 觅知园', link: 'https://doc.zen-harmony.top' },
          { text: 'QQ 群', link: 'https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=We3ez-d8QzdZpmW3JaYLGiIHlI74be-l&authKey=acLCg%2B1I4ieawMV30RF%2FOnl5tGxzgbK7HExXuZ1pQOkYm9J5VCp9uV4aLe5t0Uw6&noverify=0' },
        ],
        lastUpdatedText: '上次更新',
        editLink: {
          pattern: 'https://github.com/Zen-Harmony/Zen-Harmony.github.io/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页'
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        darkModeSwitchLabel: '外观',
        outlineTitle: '在此页上',
        sidebarMenuLabel: '目录',
        returnToTopLabel: '返回顶部',
        lastUpdated: true,
        footer: {
          message: "<a href=\"https://icp.gov.moe/?keyword=20250668\" target=\"_blank\">萌ICP备20250668号</a><br/>发布在 <a href=\"https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans\" target=\"_blank\">CC BY-SA 4.0</a> 许可证下。",
          copyright: "版权所有 © 2025-present <a href=\"https://github.com/Zen-Harmony\" target=\"_blank\">志海融新</a>"
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      title: "Zen Harmony Team",
      description: "志海融新",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/index' },
          { text: 'Linux Knowledge Base', link: 'https://doc.zen-harmony.top/en' },
          { text: 'QQ Group', link: 'https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=We3ez-d8QzdZpmW3JaYLGiIHlI74be-l&authKey=acLCg%2B1I4ieawMV30RF%2FOnl5tGxzgbK7HExXuZ1pQOkYm9J5VCp9uV4aLe5t0Uw6&noverify=0' },
        ],
        lastUpdated: true,
        editLink: {
          pattern: 'https://github.com/Zen-Harmony/Zen-Harmony.github.io/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
        footer: {
          message: "Released under the <a href=\"https://creativecommons.org/licenses/by-sa/4.0/deed.en\" target=\"_blank\">CC BY-SA 4.0</a> license.",
          copyright: "Copyright © 2025-present <a href=\"https://github.com/Zen-Harmony\" target=\"_blank\">Zen-Harmony</a>"
        }
      }
    }
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Zen-Harmony' }
    ],
    lastUpdated: true,
  }
})
