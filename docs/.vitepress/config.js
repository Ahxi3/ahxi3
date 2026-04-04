import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  base: '/ahxi3/',
  title: "Ahxi3的博客",
  description: "这是一个博客网站👍",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '学习笔记', link: '/notes/' },
      { text: '项目实战', link: '/projects/' },
      { text: '工具箱', link: '/toolbox/' },
      {
        text: '关于我',
        items: [
          { text: '个人简介', link: '/about/' },
          { text: 'GitHub', link: 'https://github.com/Ahxi3' },
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    sidebar: generateSidebar({
      documentRootPath: '/docs',
      scanStartPath: '/',
      collapseDepth: 1,
      resolvePath: '/ahxi3/',
      basePath: '/ahxi3/', 
      separateSidebar: true,
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      excludeFolders: ['.vitepress', 'public'],
      excludeFiles: ['index.md'],
    }),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ahxi3' }
    ]
  }
})