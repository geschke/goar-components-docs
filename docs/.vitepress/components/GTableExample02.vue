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
  {
    title: 'Name',
    render: (item: any) => {
      return (
        item.firstname + " " + item.name
      );
    },
  },
  { title: 'Email', field: 'email' }
]);

const items = ref([
  { id: 1, firstname: 'John', name: 'Doe', email: 'john@example.com' },
  { id: 2, firstname: 'Jane', name: 'Smith', email: 'jane@example.com' },
  { id: 3, firstname: 'Heinz', name: 'Doe', email: 'heinz@example.com' },
  { id: 4, firstname: 'Carla', name: 'Smith', email: 'carla@example.com' },
  { id: 5, firstname: 'Fiona', name: 'Doe', email: 'fiona@example.com' },
  { id: 6, firstname: 'Max', name: 'Smith', email: 'max@example.com' },
  { id: 7, firstname: 'Lotte', name: 'Doe', email: 'lotte@example.com' },
  { id: 8, firstname: 'Alan', name: 'Smith', email: 'alan@example.com' },
  { id: 9, firstname: 'Aaron', name: 'Doe', email: 'aaron@example.com' },
  { id: 10, firstname: 'Bob', name: 'Smith', email: 'bob@example.com' },
  { id: 11, firstname: 'Alice', name: 'Doe', email: 'alice@example.com' },
  { id: 12, firstname: 'Steve', name: 'Smith', email: 'steve@example.com' }

]);

</script>
