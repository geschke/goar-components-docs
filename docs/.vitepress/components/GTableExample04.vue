<template>
  <div class="row">
    <div col="12">
      <GTable :headers="headers" :items="items" :pagination="true" 
        :items-per-page="5" 
        :showLoading="true"
        :loading="loading" classes="table-striped table-hover">

        <template #tmplLoading>
          <div class="col text-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </template>

        <template #tmplEmpty>
          <div class="col text-center">
            <i class="bi bi-inbox"></i> No data available.
          </div>
        </template>

      </GTable>

      <p>
        <button class="btn btn-warning" @click="stopLoading">Stop loading</button> <button class="btn btn-success"
          @click="startLoading">Start loading again</button>
      </p>

    </div>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { GTable } from 'goar-components';
import type { GTableHeader } from 'goar-components';

const headers = ref<GTableHeader[]>([
  { title: 'Select', type: 'checkbox', field: 'id' },
  { title: "ID", field: "id" },
  { title: 'Name', field: 'name' }
]);

const items = ref([]);

const loading = ref(true);

function stopLoading() {
  loading.value = false;
}

function startLoading() {
  loading.value = true;
}

</script>
