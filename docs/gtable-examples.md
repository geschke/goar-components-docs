# GTable Examples

  <!-- <BaseButton> Click me </BaseButton>
-->

## Basic table

<GTableExample01></GTableExample01>

## Code snippet


<<< @/.vitepress/components/GTableExample01.vue

## Render function

<GTableExample02/>

<<< @/.vitepress/components/GTableExample02.vue

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

const GTableExample02 = defineClientComponent(() => {
  return import('./.vitepress/components/GTableExample02.vue')
})


</script>
