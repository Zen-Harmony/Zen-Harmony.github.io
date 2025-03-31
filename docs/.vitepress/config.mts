import { defineConfig } from 'vitepress'

// 共享SEO配置
const seoConfig = {
  head: [
    ['link', { rel: 'icon', href: '/img/house-solid.webp' }],
    ['meta', { name: 'theme-color', content: '#6366f1' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: '志海融新' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@ZenHarmonyTeam' }]
  ],
  sitemap: {
    hostname: 'https://www.zen-harmony.top',
    lastmodDateOnly: true
  }
}

// 共享主题配置
const baseThemeConfig = {
  search: { provider: 'local' },
  socialLinks: [{ icon: 'github', link: 'https://github.com/Zen-Harmony' }],
  lastUpdated: true,
  editLink: {
    pattern: 'https://github.com/Zen-Harmony/Zen-Harmony.github.io/edit/main/docs/:path'
  }
}

export default defineConfig({
  ...seoConfig,
  cleanUrls: true,
  markdown: {
    theme: { light: 'catppuccin-latte', dark: 'catppuccin-mocha' },
    lineNumbers: true
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "志海融新 - 资源整理团队",
      description: "专注于优质资源的收集与整理",
      themeConfig: {
        ...baseThemeConfig,
        nav: [
          { text: '主页', link: '/' },
          { text: 'Linux觅知园', link: 'https://doc.zen-harmony.top' },
          { text: 'QQ群', link: 'https://qm.qq.com/q/We3ez-d8Qz' }
        ],
        footer: {
          message: '萌ICP备20250668号 | CC BY-SA 4.0 许可',
          copyright: '© 2025-present 志海融新团队'
        }
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      title: "Zen Harmony - Resource Team",
      description: "Dedicated to collecting and organizing quality resources",
      themeConfig: {
        ...baseThemeConfig,
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Linux Knowledge Base', link: 'https://doc.zen-harmony.top/en' },
          { text: 'QQ Group', link: 'https://qm.qq.com/q/We3ez-d8Qz' }
        ],
        footer: {
          message: 'Licensed under CC BY-SA 4.0',
          copyright: '© 2025-present Zen Harmony Team'
        }
      }
    }
  }
})
