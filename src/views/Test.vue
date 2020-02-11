<template>
 <div id="coba">
  <VInput @keypress="formValidation" />
 </div>
</template>
<script>

import VInput from '@/components/v-input.vue'
import { mapGetters } from 'vuex'
export default {
 name: 'coba',
 components: {
  VInput
 },
 data() {  return {
   email: '',
   reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,

  }

 },
 computed: {
  ...mapGetters(["GLOBALINPUT"]),

 },
 methods: {
  mailString(klas, visib, psan, pass) {
   const vm = this
   vm.$store.commit('SET_GLOBALINPUT', {
    kelas: klas,
    holder: '',
    lefticon: "envelope",
    rigthicon: "fa-sign-in-alt",
    visible: visib,
    help: "help",
    pesan: psan,
    model: vm.email
   })
  },
  formValidation: function () {
   const vm = this
   let i = 1

   if (vm.email != '') {
    if (vm.reg.test(vm.email) == false) {
     vm.mailString('is-danger', 'visible', 'periksa kembali email anda', false)
    } else if (vm.reg.test(vm.email) == true) {
     vm.mailString('is-success', 'hidden', '', true)
    }
   } else {
    vm.mailString('', 'hidden', '', false)
   }
   console.log(i++)
   return

  },

 }

}
</script>