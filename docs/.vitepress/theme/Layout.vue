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



        <nav v-if="control.prev?.link || control.next?.link" class="prev-next" aria-labelledby="doc-footer-aria-label">
          <span class="visually-hidden" id="doc-footer-aria-label">Pager</span>

          <div class="row mt-4 mb-4">

            <div v-if="control.prev?.link" class="col-sm-6 mb-3 mb-sm-0 pager">
              <div class="card">
                <div class="card-body">
                  <span class="small" v-html="theme.docFooter?.prev || 'Previous page'"></span>
                  <br />
                  <a v-if="control.prev?.link" class="stretched-link pager-link prev" :href="control.prev.link">

                    <span class="title" v-html="control.prev.text"></span>
                  </a>


                </div>
              </div>
            </div>
            <div v-else class="col-sm-6 mb-3 mb-sm-0">
            </div>
            <div  v-if="control.next?.link" class="col-sm-6">
              <div class="card text-end">
                <div class="card-body">

                  <span class="small" v-html="theme.docFooter?.next || 'Next page'"></span>
                  <br />
                  <a v-if="control.next?.link" class="stretched-link pager-link next" :href="control.next.link">

                    <span class="title" v-html="control.next.text"></span>
                  </a>

                </div>
              </div>
            </div>
          </div>

        </nav>


      </main>
      <div class="col-md-1 col-lg-1">&nbsp;</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from './Navbar.vue'
import Sidebar from './Sidebar.vue'
import { computed } from 'vue'
import { useRoute, useData } from 'vitepress'
import { usePrevNext } from './composables/prev-next'

// Zugriff auf die aktuelle Route und Sidebar-Daten
const route = useRoute()

const { theme, page, frontmatter } = useData()

const control = usePrevNext()

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
