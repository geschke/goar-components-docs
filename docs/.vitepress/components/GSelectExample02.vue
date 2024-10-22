<template>
  <div class="row">
    <div class="col-12">
      <form>
        <div class="row mb-3">
          <label for="basicSelect" class="col-sm-2 col-form-label">Please select:</label>
          <div class="col-sm-5">
            <GSelect v-model="selectedValue" :options="options" :showLoading="true" :loading="loading"
              name="basicSelect" :height="150" />

          </div>
        </div>
      </form>

      <p>Selected Value: {{ selectedValue }}</p>

    </div>
    <div class="col-12">
      <p>
        <button class="btn btn-primary" @click="addOptions">Add Option Values</button>
      </p>

      <p>
        <button class="btn btn-secondary" @click="resetOptions">Reset</button> (simulate loading)
      </p>
    </div>


  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { GSelect } from 'goar-components';

const selectedValue = ref<string>('');

const loading = ref(true);

const options = ref<Array<{ key: string; value: string }>>([

]);

function addOptions() {
  loading.value = false;
  options.value = [{ key: '1', value: 'Option 1' },
  { key: '2', value: 'Option 2' },
  { key: '3', value: 'Option 3' },
  { key: '4', value: 'Option 4' },
  { key: '5', value: 'Option 5' }
  ];
}

function resetOptions() {
  loading.value = true;
  options.value = [];
}

</script>
