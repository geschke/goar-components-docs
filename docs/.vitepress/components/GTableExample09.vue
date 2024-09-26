<template>
  <div class="row">
    <div col="12">

      <GTable :headers="headers" :items="items" :pagination="false" :items-per-page="5"
        classes="table-striped table-hover" 
        expandEvent="expand-row" @expand-row="expandRowListener">

        <template #tmplExpandSomething="data">
          <div class="card card-body">
            <p>Display some senseful information here...
            </p>
          </div>
        </template>

      </GTable>
    </div>

    <div col="12">
      <p class="h5">
        Data of current expand event which is fired when expand or collapse row
      </p>
      <p>
        Index: {{ eventData.index }}<br>
        Expanded status: {{ eventData.expanded }}<br>
        Item content: {{ eventData.item }}
      </p>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { GTable } from 'goar-components';
import type { GTableHeader } from 'goar-components';

const headers = ref<GTableHeader[]>([
  { title: 'More Info', field: 'tmplExpandSomething', type: 'expandable' },
  { title: "ID", field: "id" },
  { title: 'Name', field: 'name' },
  { title: 'Email', field: 'email' }
]);

const items = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com', car: 'Mercedes' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', car: 'Volkswagen' },
  { id: 3, name: 'Heinz Doe', email: 'heinz@example.com', car: 'Tesla' },
  { id: 4, name: 'Carla Smith', email: 'carla@example.com', car: 'Chevrolet' },
  { id: 5, name: 'Fiona Doe', email: 'fiona@example.com', car: 'Toyota' }

]);

const eventData = ref(<any>{});

function expandRowListener(event: any) {
  eventData.value['expanded'] = event.expanded;
  eventData.value['index'] = event.index;
  eventData.value['item'] = event.item;
}


</script>
