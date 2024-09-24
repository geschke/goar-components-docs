# GTable Examples

  <!-- <BaseButton> Click me </BaseButton>
-->

## Basic table

<GTableExample01></GTableExample01>

### Code snippet


<<< @/.vitepress/components/GTableExample01.vue{4-5,13-20}

## Use render function to create cell content

<GTableExample02/>

### Code snippet


<<< @/.vitepress/components/GTableExample02.vue{19-25}


## Use slots to pass template fragment to build cell content

<GTableExample03/>

### Code snippet

<<< @/.vitepress/components/GTableExample03.vue{7-17,55}



## Use slots to show/modify loading and empty status

<GTableExample04/>

### Code snippet

<<< @/.vitepress/components/GTableExample04.vue{6-21,45,47}




## Checkbox styles

<GTableExample05/>

### Code snippet

<<< @/.vitepress/components/GTableExample05.vue


## Preset checkbox cells with callback function

<GTableExample06/>

### Code snippet

<<< @/.vitepress/components/GTableExample06.vue



## Get checkbox state change by event

<GTableExample07/>

Every time the state of a checkbox changes, an event is triggered and passed to the parent component. If multiple checkboxes in the table rows are changed by the checkbox in the table header, multiple events will be triggered, i.e. one event for each changed row state.

### Code snippet

<<< @/.vitepress/components/GTableExample07.vue




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

const GTableExample05 = defineClientComponent(() => {
  return import('./.vitepress/components/GTableExample05.vue')
})

const GTableExample06 = defineClientComponent(() => {
  return import('./.vitepress/components/GTableExample06.vue')
})

const GTableExample07 = defineClientComponent(() => {
  return import('./.vitepress/components/GTableExample07.vue')
})

</script>
