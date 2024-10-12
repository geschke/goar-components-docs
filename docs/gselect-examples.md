# GSelect Example

## Basic select box

::: raw
 <GSelectExample01 /> 
:::


### Code snippet

<<< @/.vitepress/components/GSelectExample01.vue{8-9,15,23}


## Loading indicator

::: raw
 <GSelectExample02 /> 
:::


### Code snippet

<<< @/.vitepress/components/GSelectExample02.vue


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

const GSelectExample02 = defineClientComponent(() => {
  return import('./.vitepress/components/GSelectExample02.vue')
})


</script>
