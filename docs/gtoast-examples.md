# GToast Examples

<!--
## Basic Toast, default placement, type "success"

<GToastExample01></GToastExample01>

### Code snippet


<<< @/.vitepress/components/GToastExample01.vue{8,16,18,20-29}
-->

## Placement example

<GToastExample02></GToastExample02>

### Code snippet


<<< @/.vitepress/components/GToastExample02.vue



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

//const GToastExample01 = defineClientComponent(() => {
//  return import('./.vitepress/components/GToastExample01.vue')
//})

const GToastExample02 = defineClientComponent(() => {
  return import('./.vitepress/components/GToastExample02.vue')
})


</script>
