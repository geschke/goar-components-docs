<template>
  <div class="row">


    <div class="mb-3">

      <button @click="showToast(GToastSuccess)" class="btn btn-primary">Show Success Toast</button>       <button @click="showToast(GToastInfo)" class="btn btn-info">Show Info Toast</button>


    </div>
    <div class="col-12">
      <label class="form-label" for="placement-select">Choose a placement:</label>
      <select class="form-select" v-model="placement" name="placement" id="placement-select">
        <option selected value="bottom-0 end-0">default (Bottom right)</option>
        <option value="top-0 start-0">Top left</option>
        <option value="top-0 start-50 translate-middle-x">Top center</option>
        <option value="top-0 end-0">Top right</option>
        <option value="top-50 start-0 translate-middle-y">Middle left</option>
        <option value="top-50 start-50 translate-middle">Middle center</option>
        <option value="top-50 end-0 translate-middle-y">Middle right</option>
        <option value="bottom-0 start-0">Bottom left</option>
        <option value="bottom-0 start-50 translate-middle-x">Bottom center</option>

      </select>


      <GToast :placement="placement" ref="toast" />

    </div>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import type GToastContent from 'goar-components';
import { GToast, GToastSuccess, GToastInfo } from 'goar-components';

const toast = ref();
const placement = ref("bottom-0 end-0");

function showToast(toastType) {
  toast.value.addToast({
    ...toastType,
    title: "Success!",
    content: "This is a success message.",
    delay: 5000,
    autohide: true,
    animation: true,
  });
}



</script>
