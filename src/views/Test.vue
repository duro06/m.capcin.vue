<template>
  <div id="coba">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div
            class="field fadeInUp"
            v-wow
            data-wow-delay="0s"
            data-wow-duration="2s"
          >
            <h1 class="avatar has-text-centered custom section">
              <img src="../assets/logocapcin.png" alt="logo" />
            </h1>
          </div>
          <div class="column is-4 is-offset-4">
            <article class="message is-danger">
              <div
                class="message-header field fadeInUp"
                v-wow
                data-wow-delay="0s"
                data-wow-duration="2s"
              >
                <p>
                  <strong>Anda telah berhasil melakukan Regestrasi</strong>
                </p>
              </div>
              <div
                class="message-body field fadeInUp"
                v-wow
                data-wow-delay="0s"
                data-wow-duration="2s"
              >
                <strong>Silahkan tunggu 1 x 24 jam</strong>
                <p>hubungi Admin di nomor</p>
                <strong>088 000 888 999</strong>
                <p>jika dalam waktu 1 x 24 jam halaman ini belum berubah</p>
              </div>
            </article>
            <div
              v-if="!waiting"
              class="message-body field fadeInUp"
              v-wow
              data-wow-delay="0s"
              data-wow-duration="2s"
            >
              <h3 class="notification berhasil">Anda sudah terverifikasi</h3>
              <a @click="pindah" class="button is-small is-rounded is-danger">
                Klik untuk Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
/* eslint-disable */

import Pusher from "pusher-js";

Pusher.logToConsole = true;

export default {
  name: "info",
  data () {
    return { messages: [] };
  },

  created () {
    this.subscribe();
    // this.kirimKePuser()
  },
  computed: {
    waiting () {
    return this.$store.getters.waitingVerified;
    }
  },
 // updated() {
 //  if (!(localStorage.getItem('waiting_verivication'))) {
 //   this.$router.replace(this.$route.query.redirect || '/')
 //  }


  methods: {
    pindah(){
      this.$router.replace({ name: "login" })
    },
    subscribe () {
    // const vm = this
    // Api key + cluster
    let pusher = new Pusher("ebfe3f8ff45ad9c3ad4c", {
      cluster: "ap1",
      forceTLS: true
    });
    let channel = pusher.subscribe("my-channel");

    channel.bind("my-event", data => {
      this.messages.push(data);
      if (data != "") {
      this.$store.dispatch("destroyVerifie");
      // this.$router.push('/')
      }

      console.log(data);
    });
    }
  }
};
</script>
<style scoped>
@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 30%, 0);
    -ms-transform: translate3d(0, 30%, 0);
    transform: translate3d(0, 30%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

.fadeInUp {
  animation-name: fadeInUp;
  animation-timing-function: ease-out;
}

</style>
<style lang="sass" scoped>

  @charset 'utf-8'
  Import Bulma core
  // @import 'bulma.sass';
  Import component
  // @import 'bulma-badge.sass';
  </style>
  <style scoped>
  .notification {
  padding: 10px;
  }
  .section {
  padding-top: 10px;
  padding-bottom: 10px;
  }
  .berhasil {
  background-color: rgb(255, 57, 90);
  color: white;
}
</style>
