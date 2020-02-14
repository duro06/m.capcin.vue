<template>
 <div id="coba">
  <section class="hero is-fullheight">
   <div class="hero-body">
    <div class="container has-text-centered">
     <h1 class="avatar has-text-centered custom section">
      <img src="../assets/logocapcin.png" alt="logo" />
     </h1>
     <div class="column is-4 is-offset-4">
      <article class="message is-danger">
       <div class="message-header">
        <p>
         <strong>Anda telah berhasil melakukan Regestrasi</strong>
        </p>
       </div>
       <div class="message-body">
        <strong>Silahkan tunggu 1 x 24 jam</strong>
        <p>hubungi Admin di nomor</p>
        <strong>088 000 888 999</strong>
        <p>jika dalam waktu 1 x 24 jam halaman ini belum berubah</p>
       </div>
      </article>

      <h3 class="notification berhasil">Anda sudah terverifikasi</h3>
      <a href="/" class="button is-small is-rounded is-danger">Klik untuk Login</a>
     </div>
    </div>
   </div>
  </section>
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
 // updated() {
 //  if (!(localStorage.getItem('waiting_verivication'))) {
 //   this.$router.replace(this.$route.query.redirect || '/')
 //  }

 // },

 methods: {
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
<style lang="sass" scoped>
@charset 'utf-8'
Import Bulma core
// @import 'bulma.sass';
Import component
// @import 'bulma-badge.sass';
</style>
<style  scoped>
.notification {
 padding: 10px;
}
.section {
 padding-top: 10px;
}
.berhasil {
 background-color: rgb(255, 57, 90);
 color: white;
}
</style>