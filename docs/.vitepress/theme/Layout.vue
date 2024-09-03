<!-- .vitepress/theme/Layout.vue -->
<template>
  <div class="container-fluid">
    <Navbar />
    <div class="row">
      <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar">
        <Sidebar />
      </nav>
      <main class="offset-md-1 offset-lg-1 col-md-7 ms-sm-auto col-lg-8 px-md-4">
        <Content class="vp-doc"/>
      </main>
      <div class="col-md-1 col-lg-1">&nbsp;</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'
</script>
