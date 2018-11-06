import Vue from 'vue/dist/vue.esm'
import Patient from '../patient.vue'

document.addEventListener('DOMContentLoaded', () => {
  const patient = new Vue({
    el: '#pat',
    data: {
      message: "hola patient"
    },
    components: { Patient }
  })
})
