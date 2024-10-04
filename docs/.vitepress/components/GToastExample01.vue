<template>
  <div class="row">

    <div class="mb-3">
      <button @click="showToast()" class="btn btn-success">Show Success Toast</button>
    </div>

    <GToast ref="toast" />

  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { GToast, GToastSuccess } from 'goar-components';

const toast = ref();

function showToast() {
  toast.value.addToast({
    ...GToastSuccess,
    title: "Success!",
    content: "This is a success message.",
    delay: 5000,
    autohide: true,
    animation: true,
  });
}

</script>
