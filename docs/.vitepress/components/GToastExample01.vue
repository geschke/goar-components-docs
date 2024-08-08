<template>
  <div>
    <button @click="showToast" class="btn btn-primary">Show Toast</button>
    <GToast ref="toast" />
  
<!--    <h2>Toast component Test</h2>

    <button type="button" @click="toastTest" class="btn btn-primary" id="liveToastBtn">Show live toast</button>

<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
     
      <strong class="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
  </div>
</div>

-->

<!-- <BToast></BToast> -->

  </div>
</template>

<script setup lang="ts">
//import { BToast } from 'goar-components';

/*import { Toast } from 'bootstrap';

function toastTest() {
  console.log("in toastTest");
const toastLiveExample = document.getElementById('liveToast')

  const toastBootstrap = Toast.getOrCreateInstance(toastLiveExample)

    toastBootstrap.show()
  

}
*/

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
