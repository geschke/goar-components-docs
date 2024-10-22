<template>
  <div class="row">
    <div class="col-12">
      <GTable ref="gtable10" :headers="headers" :items="items" :pagination="true" :items-per-page="5"
        classes="table-striped table-hover">

        <template #tmplExpandSomething="data">
          <div class="card card-body"><!-- {{  data.value }} -->
            <p>Got index of table row and item data of expanded row in slot props: {{ data }}. <br />
              So it's possible to display some additional information in a larger place, for example:
            </p>
            <p>Favorite car brand: {{ data.item.car }}

            </p>
          </div>
        </template>

      </GTable>

    </div>
    <div class="col-12">
      <p class="m-3">
        <button class="btn btn-warning" @click="collapseTest">Collapse All</button>&nbsp;
        <button class="btn btn-warning" @click="expandTest">Expand All</button>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { GTable } from 'goar-components';
import type { GTableHeader } from 'goar-components';

const gtable10: any = ref(null);

const headers = ref<GTableHeader[]>([
  { title: 'More Info', field: 'tmplExpandSomething', type: 'expandable', expandableAll: true },
  { title: "ID", field: "id" },
  { title: 'Name', field: 'name' },
  { title: 'Email', field: 'email' }
]);

const items = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com', car: 'Mercedes' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', car: 'Volkswagen' },
  { id: 3, name: 'Heinz Doe', email: 'heinz@example.com', car: 'Tesla' },
  { id: 4, name: 'Carla Smith', email: 'carla@example.com', car: 'Chevrolet' },
  { id: 5, name: 'Fiona Doe', email: 'fiona@example.com', car: 'Toyota' },
  { id: 6, name: 'Max Smith', email: 'max@example.com', car: 'Zastava' },
  { id: 7, name: 'Lotte Doe', email: 'lotte@example.com', car: 'Audi' },
  { id: 8, name: 'Alan Smith', email: 'alan@example.com', car: 'BMW' },
  { id: 9, name: 'Aaron Doe', email: 'aaron@example.com', car: 'Hyundai' },
  { id: 10, name: 'Bob Smith', email: 'bob@example.com', car: 'Ford' },
  { id: 11, name: 'Alice Doe', email: 'alice@example.com', car: 'Renault' },
  { id: 12, name: 'Steve Smith', email: 'steve@example.com', car: 'Volvo' }
]);


function collapseTest() {
  gtable10.value.collapseAll();
}

function expandTest() {
  gtable10.value.expandAll();
}

</script>
