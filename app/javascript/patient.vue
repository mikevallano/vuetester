<template>
  <div id="pat">
    <h1>{{testMsg}}</h1>
    <h2>{{testMsg2}}</h2>
    <div class="card text-white bg-info mb-3">
      <div class="card-header">Patient Info</div>
      <div class="card-body">
        <span>{{patient.firstName}}</span>
        <span v-text="patient.lastName"></span>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'test',
    data() {
      return {
        testMsg: 'holamundo',
        testMsg2: 'holamundodos',
        patient: {
          firstName: 'Jimmy',
          lastName: 'Tester'
        }
      }
    }
  }
</script>
