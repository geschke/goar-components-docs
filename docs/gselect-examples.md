# GSelect Examples

Test Gselect Examples
::: raw

 <GSelectExample01 /> 
:::

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

const GSelectExample01 = defineClientComponent(() => {
  return import('./.vitepress/components/GSelectExample01.vue')
})

</script>
