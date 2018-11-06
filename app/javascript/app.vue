<template>
  <div id="hello">
    <patient></patient>
  </div>
</template>

<script>

import Patient from './patient.vue'

export default {
  // data: function () {
  //   return {
  //     message: "Hello Vue!"
  //   }
  // }
  name: 'app',
  components: {
    Patient
  }
}
</script>

<!-- <style scoped>
p {
  font-size: 4em !important;
  text-align: center;
  color: red;
}
</style> -->
