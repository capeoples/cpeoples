<script setup>
import { useRoute } from 'vitepress'
import { computed } from 'vue'

const route = useRoute()

const navLinks = [
  { text: 'Work', href: '/work/' },
  { text: 'Process', href: '/process' },
  { text: 'Resume', href: '/resume' },
  { text: 'About', href: '/about' },
]

const isActive = (href) => {
  if (href === '/work/') return route.path.startsWith('/work')
  return route.path === href || route.path === href + '.html'
}
</script>

<template>
  <div class="page-wrap">
    <nav class="nav">
      <div class="nav-inner">
        <a href="/" class="nav-name">Colleen <strong>Peoples</strong></a>
        <ul class="nav-links">
          <li v-for="link in navLinks" :key="link.href">
            <a :href="link.href" :class="{ active: isActive(link.href) }">{{ link.text }}</a>
          </li>
        </ul>
      </div>
    </nav>
    <Content />
  </div>
</template>
