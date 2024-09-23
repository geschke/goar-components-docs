# GTable Examples

  <!-- <BaseButton> Click me </BaseButton>
-->

## Basic table

<GTableExample01></GTableExample01>

### Code snippet


<<< @/.vitepress/components/GTableExample01.vue{4-5,13-21}

## Use render function to create column content

<GTableExample02/>

### Code snippet


<<< @/.vitepress/components/GTableExample02.vue{19-26}


## Use slots to pass template fragment to build column content

<GTableExample03/>

### Code snippet

<<< @/.vitepress/components/GTableExample03.vue{7-17,56}



## Use slots to show/modify loading and empty status

<GTableExample04/>

### Code snippet

<<< @/.vitepress/components/GTableExample04.vue{6-21,46,48}


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

const GTableExample03 = defineClientComponent(() => {
  return import('./.vitepress/components/GTableExample03.vue')
})

const GTableExample04 = defineClientComponent(() => {
  return import('./.vitepress/components/GTableExample04.vue')
})



</script>
