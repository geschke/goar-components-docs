# GTable Examples

  <!-- <BaseButton> Click me </BaseButton>
-->

<GTableExample01></GTableExample01>

<!-- <ExampleGToast /> -->

<script setup>
//import ExampleGToast from './.vitepress/components/ExampleGToast.vue';

//import { BaseButton }from 'gcomp';


/*import { onMounted } from 'vue'
/*
onMounted(() => {
  import('./lib-that-access-window-on-import').then((module) => {
    // use code
  })
})
*/

import { defineClientComponent } from 'vitepress'

const GTableExample01 = defineClientComponent(() => {
  return import('./.vitepress/components/GTableExample01.vue')
})

</script>
