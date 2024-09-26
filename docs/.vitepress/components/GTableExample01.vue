<template>
  <div class="row">
    <div col="12">
      <GTable :headers="headers" :items="items" :pagination="true" :items-per-page="5"
        classes="table-striped table-hover" />

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { GTable } from 'goar-components';
import type { GTableHeader } from 'goar-components';

const headers = ref<GTableHeader[]>([
  { title: "ID", field: "id" },
  { title: 'Name', field: 'name' },
  { title: 'Email', field: 'email' }
]);



const items = ref([
{ id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Heinz Doe', email: 'heinz@example.com' },
  { id: 4, name: 'Carla Smith', email: 'carla@example.com' },
  { id: 5, name: 'Fiona Doe', email: 'fiona@example.com' },
  { id: 6, name: 'Max Smith', email: 'max@example.com' },
  { id: 7, name: 'Lotte Doe', email: 'lotte@example.com' },
  { id: 8, name: 'Alan Smith', email: 'alan@example.com' },
  { id: 9, name: 'Aaron Doe', email: 'aaron@example.com' },
  { id: 10, name: 'Bob Smith', email: 'bob@example.com' },
  { id: 11, name: 'Alice Doe', email: 'alice@example.com' },
  { id: 12, name: 'Steve Smith', email: 'steve@example.com' }
]);

</script>
