<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light">
    <div class="container-fluid">
      <a class="navbar-brand d-flex align-items-center" href="/">
        <img :src="logo" alt="Logo" class="me-2" style="height: 40px;" />
        {{ siteTitle }}
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="link in navLinks" :key="link.text">
            <a
              :class="['nav-link', isActive(link.link)]"
              :href="link.link"
            >
            {{ link.text }}</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">  <!-- Social Links rechts ausrichten -->
          <li class="nav-item" v-for="socialLink in socialLinks" :key="socialLink.link">
            <a class="nav-link" :href="socialLink.link" target="_blank" rel="noopener">
              <i :class="getBootstrapIconClass(socialLink.icon)" style="font-size: 1.5rem;"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useData, useRoute } from 'vitepress'

const { site, theme } = useData()
const navLinks = theme.value.nav
const siteTitle = site.value.title
const logo = theme.value.logo
const socialLinks = theme.value.socialLinks
const route = useRoute()

function getBootstrapIconClass(icon: string) {
  switch (icon) {
    case 'github':
      return 'bi bi-github'  
    case 'twitter':
      return 'bi bi-twitter'  
    default:
      return ''
  }
}
function isActive(link: string) {
  const currentPath = route.path.replace(/\.html$/, '')

  console.log("in isActive");
  console.log(currentPath)
  console.log(link)
  return currentPath === link ? 'active' : ''
}

</script>


