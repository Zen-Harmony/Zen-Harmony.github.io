import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Zen Harmony Team",
  description: "志海融新",
  markdown: {
    theme: {
      light: 'catppuccin-latte',
      dark: 'catppuccin-mocha',
    },
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'QQ Group', link: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=We3ez-d8QzdZpmW3JaYLGiIHlI74be-l&authKey=acLCg%2B1I4ieawMV30RF%2FOnl5tGxzgbK7HExXuZ1pQOkYm9J5VCp9uV4aLe5t0Uw6&noverify=0&group_code=985191565' }
    ],

    sidebar: [
      {
        text: '📖 About',
        collapsed: true,
        items: [
          { text: "Join Us", link: '/docs/join-us' },
          { text: "What does Zen Harmony's Chinese name mean?", link: '/docs/chinese-name' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Zen-Harmony' }
    ]
  }
})
