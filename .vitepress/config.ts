import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Colleen Peoples',
  description: 'UX Designer',
  base: '/cpeoples/',
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap', rel: 'stylesheet' }],
  ],
  themeConfig: {},
  cleanUrls: true,
  vite: {
    build: {
      rollupOptions: {
        external: [/^\/images\//],
      },
    },
  },
})
