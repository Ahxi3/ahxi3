import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/ahxi3/',
  title: "Ahxi3的博客",
  description: "这是一个博客网站👍",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '学习路径', link: '/learning-path' },
      { text: '工具箱', link: '/toolbox' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})