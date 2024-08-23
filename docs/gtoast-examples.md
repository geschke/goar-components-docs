# GToast Examples

  <!-- <BaseButton> Click me </BaseButton>
-->

<GToastExample01></GToastExample01>

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

const GToastExample01 = defineClientComponent(() => {
  return import('./.vitepress/components/GToastExample01.vue')
})


</script>
