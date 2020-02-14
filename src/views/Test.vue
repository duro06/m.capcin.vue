<template>
 <div id="coba">
  <div class="container has-text-centered">
   <div class="column is-4 is-offset-4">
    <h3 class="notification is-light is-info">
     <strong>Anda telah berhasil melakukan Regestrasi</strong>
    </h3>
    <div class="notification is-primary is-light">
     <strong>Silahkan tunggu 1 x 24 jam</strong>
     <p>hubungi Admin di nomor</p>
     <strong>088 000 888 999</strong>
     <p>jika dalam waktu 1 x 24 jam halaman ini belum berubah</p>
    </div>
    <h3 class="notification is-primary is-light" v-if="!waiting">Anda sudah terverifikasi</h3>
   </div>
  </div>
 </div>
</template>
<script>

Pusher.logToConsole = true;


export default {
 name: 'info',
 data() {
  return { messages: [], }
 },


 created() {

  this.subscribe()
  // this.kirimKePuser()
 },
 computed: {
  waiting() {
   return this.$store.getters.waitingVerified
  }



 },
 updated() {
  if (!(localStorage.getItem('waiting_verivication'))) {
   this.$router.replace(this.$route.query.redirect || '/')
  }

 },

 methods: {
  // kirimKePuser() {
  //  const vm = this
  //  vm.$store.dispatch('verivication')

  // },
  subscribe() {
   // const vm = this
   // Api key + cluster
   let pusher = new Pusher('ebfe3f8ff45ad9c3ad4c', {
    cluster: 'ap1',
    forceTLS: true
   })
   let channel = pusher.subscribe('my-channel')

   channel.bind('my-event', data => {
    this.messages.push(data)
    if (data != '') {
     this.$store.dispatch('destroyVerifie')
     this.$router.push('/')
    }

    console.log(data)
   })
  },

 }
}
</script>
// <style lang="sass">
// @charset 'utf-8'
// // Import Bulma core
// @import 'bulma.sass';
// // Import component
// @import 'bulma-badge.sass';
</style>