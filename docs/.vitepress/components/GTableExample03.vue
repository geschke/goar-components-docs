<template>
  <div class="row">
    <div col="12">
      <GTable :headers="headers" :items="items" :pagination="true" :items-per-page="5"
        classes="table-striped table-hover">

        <template #tmplUserActions="data">
          <div class="btn-group btn-group-sm" role="group" aria-label="User actions">
            <button type="button" class="btn btn-outline-primary">
              <i class="bi-pencil"></i> button with user id: {{
              data.value.id }}
              </button>
            <button type="button" class="btn btn-outline-primary" 
              @click="deleteItem(data.value)"><i
                class="bi-trash3"></i> delete example</button>
          </div>
        </template>

      </GTable>
    </div>
  </div>


  <!-- Bootstrap Modal -->
  <div class="modal fade" id="modalUserDelete" tabindex="-1" aria-labelledby="Delete User" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Example dialog</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Just a dialog example with row data: {{ toBeDeleted.id }} {{ toBeDeleted.email }}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeDelete">Cancel</button>

        </div>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { GTable } from 'goar-components';
import type { GTableHeader } from 'goar-components';
import { Modal } from 'bootstrap';


const headers = ref<GTableHeader[]>([
  { title: 'Select', type: 'checkbox', field: 'id' },
  { title: "ID", field: "id" },
  { title: 'Name', field: 'name' },
  { title: 'Actions', field: 'tmplUserActions' }
]);

const items = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Heinz Doe', email: 'heinz@example.com' },
  { id: 4, name: 'Carla Smith', email: 'carla@example.com' },

]);

const toBeDeleted = ref({});

function deleteItem(item: any) {
  toBeDeleted.value = item;
  const deleteModal = new Modal('#modalUserDelete', {});
  deleteModal.show();
}


function closeDelete() {
  toBeDeleted.value = {};
}

</script>
