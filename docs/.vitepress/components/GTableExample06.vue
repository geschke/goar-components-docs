<template>
  <div class="row">
    <div col="12">
      <GTable :headers="headers" :items="items" :pagination="false" :items-per-page="5"
        classes="table-striped table-hover" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { GTable } from 'goar-components';
import type { GTableHeader } from 'goar-components';

const headers = ref<GTableHeader[]>([
  {
    title: "", field: "id",
    type: "checkbox",
    checkboxStyle: "switch",
    isChecked: (item: any) => {
      return (item.rights > 500 ? true : false);
    }
  },
  { title: "ID", field: "id" },
  { title: 'Name', field: 'name' },
  { title: 'Email', field: 'email' }

]);

//
// example: user data with some rights values, admin access when value > 500
// 
const items = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com', rights: 100 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', rights: 750 },
  { id: 3, name: 'Heinz Doe', email: 'heinz@example.com', rights: 0 },
  { id: 4, name: 'Carla Smith', email: 'carla@example.com', rights: 1000 },

]);

</script>
