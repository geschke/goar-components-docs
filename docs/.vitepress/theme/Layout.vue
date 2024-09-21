<!-- .vitepress/theme/Layout.vue -->
<template>
  <div class="container-fluid">
    <Navbar />
    <div class="row">
      <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar">
        <Sidebar />
      </nav>
      <main class="offset-md-1 offset-lg-1 col-md-7 ms-sm-auto col-lg-8 px-md-4">
        <Content class="vp-doc" />

        <PrevNext />

      </main>
      <div class="col-md-1 col-lg-1">&nbsp;</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'
import PrevNext from './PrevNext.vue'

import { computed } from 'vue'
import { useRoute, useData } from 'vitepress'


// Zugriff auf die aktuelle Route und Sidebar-Daten
//const route = useRoute()

//const { theme, page, frontmatter } = useData()

/*
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

// Funktion, um Bootstrap-Klassen hinzuzufügen
function addBootstrapTableClasses() {
  const tables = document.querySelectorAll('table');
  tables.forEach((table) => {
    table.classList.add('table', 'table-striped');
  });
}

const route = useRoute()

onMounted(() => {
  // Klassen beim ersten Rendern hinzufügen
  nextTick(() => {
    addBootstrapTableClasses();
  });

  // Beobachte die Route und füge nach jedem Routenwechsel die Klassen hinzu
  watch(route, async () => {
    await nextTick(); // Sicherstellen, dass die DOM-Änderungen abgeschlossen sind
    addBootstrapTableClasses();
  });
});*/

</script>
