<template>
 <div id="coba">
  <VInput :Pkelas="kelas" :PVisible="visib" :Phelp="help" :Ppesan="pesan" v-model="email" />
 </div>
</template>
<script>

import VInput from '@/components/v-input.vue'

export default {
 name: 'coba',
 components: {
  VInput
 },
 data: () => ({
  email: '',
  kelas: 'is-danger',
  visib: 'visible',
  help: 'is-warning',
  pesan: 'tak coba sik pak'

 })

}
</script>