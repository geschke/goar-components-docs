<template>
  <div class="row">
    <div class="col-12">
      <GTable :headers="headers" :items="items" :pagination="false" :items-per-page="5"
        classes="table-striped table-hover" 
        checkEvent="myCheckEvent" @myCheckEvent="rightChanged" />
    </div>
    <div class="col-12">
      <p>
        Event Payload Dump: {{ currentPayload }}
      </p>
      <p>
        <button class="btn btn-primary" @click="clearPayload">Clear Payload</button>
      </p>
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

const items = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com', rights: 100 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', rights: 750 },
  { id: 3, name: 'Heinz Doe', email: 'heinz@example.com', rights: 0 },
  { id: 4, name: 'Carla Smith', email: 'carla@example.com', rights: 1000 },

]);

const currentPayload = ref([]);

function rightChanged(payload: any) {
  // do something with payload data!
  currentPayload.value.push(payload);
}

function clearPayload() {
  currentPayload.value = [];
}

</script>
