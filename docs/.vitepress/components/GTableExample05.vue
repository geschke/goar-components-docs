<template>
  <div class="row">
    <div class="col-12">

      <h4 class="h4">Default style</h4>
      <div>
        <GTable :headers="headers" :items="items" :pagination="false" :items-per-page="5"
          classes="table-striped table-hover" />
      </div>

      <h4 class="h4">Switch style</h4>
      <div>
        <GTable :headers="headers2" :items="items" :pagination="false" :items-per-page="5"
          classes="table-striped table-hover" />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { GTable } from 'goar-components';
import type { GTableHeader } from 'goar-components';

const headers = ref<GTableHeader[]>([
  { field: "id", type: "checkbox" },
  { title: "ID", field: "id" },
  { title: 'Name', field: 'name' },
  { title: 'Email', field: 'email' }
]);

const headers2 = ref<GTableHeader[]>([
  { title: "ID", field: "id" },
  { title: 'Name', field: 'name' },
  { field: "id", type: "checkbox", checkboxStyle: "switch" },
  { title: 'Email', field: 'email' },
]);

const items = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Heinz Doe', email: 'heinz@example.com' },
  { id: 4, name: 'Carla Smith', email: 'carla@example.com' },

]);

</script>
