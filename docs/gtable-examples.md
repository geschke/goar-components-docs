# GTable Examples

## Basic Example

  <GTable
    :headers="headers"
    :items="items"
    :pagination="true"
    :items-per-page="10"/>



<script setup lang="ts">
import { ref } from 'vue';
import { GTable } from 'goar-components';
import type { GTableHeader } from 'goar-components';

const headers = ref<GTableHeader[]>([
   { title: 'Select', type: 'checkbox', field: 'id' },
  { title: 'Name', field: 'name' },
  { title: 'Email', field: 'email' }
]);

const items = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'John Doe', email: 'john@example.com' },
  { id: 4, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 5, name: 'John Doe', email: 'john@example.com' },
  { id: 6, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 7, name: 'John Doe', email: 'john@example.com' },
  { id: 8, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 9, name: 'John Doe', email: 'john@example.com' },
  { id: 10, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 11, name: 'John Doe', email: 'john@example.com' },
  { id: 12, name: 'Jane Smith', email: 'jane@example.com' }

]);

</script>


