# GToast example


<ExampleGToast />

<script setup>
//import ExampleGToast from './.vitepress/components/ExampleGToast.vue';

/*import { onMounted } from 'vue'

onMounted(() => {
  import('./lib-that-access-window-on-import').then((module) => {
    // use code
  })
})
*/
import { defineClientComponent } from 'vitepress'

const ExampleGToast = defineClientComponent(() => {
  return import('./.vitepress/components/ExampleGToast.vue')
})

</script>
