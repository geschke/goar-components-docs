<template>
  <div class="position-sticky pt-3">
    <ul class="nav nav-pills flex-column">
      <li v-for="group in sidebar" :key="group.text" class="nav-item">
        <h5 class="nav-link">{{ group.text }}</h5>
        <ul class="nav flex-column ms-3">
          <li v-for="item in group.items" :key="item.link" class="nav-item">
            <a :href="normalizeLink(item.link)" 
            :class="['nav-link', isActive(item.link)]">{{ item.text }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { normalizeLink } from './support/utils'

const { theme } = useData()
const sidebar = theme.value.sidebar 
const route = useRoute()

function isActive(link: string) {
  //const currentPath = route.path.replace(/\.html$/, '')
  //console.log("curentPath: ",currentPath, " link: ", normalizeLink(link))

  //return currentPath === link ? 'active' : ''
  return route.path === normalizeLink(link) ? 'active' : ''
  
}


</script>
