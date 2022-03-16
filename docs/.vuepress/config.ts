import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import vueJsx from '@vitejs/plugin-vue-jsx'
export default defineUserConfig<DefaultThemeOptions>({
  title: 'zheng-ui-next',
  description: '基于 vue3.x 的UI组件库',
  // theme: 'foo',
  themeConfig: {
    // sidebarDepth: 2, 
    lastUpdated: true,
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/Month7' },
    ],
    repoLabel: 'https://github.com/Month7',
    sidebar: {
      '/': [
        {
          text: '开发指南',
          collapsible: true,
          children: [
            '/views/guide/install.md',
            '/views/guide/getting-started.md'
          ]
        }, 
        {
          text: '组件',
          collapsible: true,
          children: [
            '/views/components/button.md',
            '/views/components/toast.md'
          ]
        }
      ],
    }
    
  },
  bundlerConfig: {
    viteOptions: {
      plugins: [vueJsx({})]
    },
  }
})
