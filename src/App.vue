<template>
  <section id="app" class="hero is-danger is-small">
    <div class="hero-head">
      <FlashMessage
        position="right top"
        style="z-index: 19999 !important; position: fixed;"
      ></FlashMessage>
      <transition class="slideInLeft" v-wow data-wow-duration="1s">
        <router-view :class="kelas" />
      </transition>
    </div>
  </section>
</template>
<script>
import * as auth from "./services/auth_service";
import store from "./store";
export default {
  name: "app",
  beforeCreate: async function() {
    console.log("App Get Profile");
    try {
      if (store.getters.loggedIn) {
        const response = await auth.getProfile();
        this.$store.dispatch("aunthenticate", response.data);
      }
    } catch (error) {
      this.$store.dispatch("destroyToken");
    }
  },
  data() {
    return {
      ngiri: ""
    };
  },
  computed: {
    kelas() {
      let kelas = "";
      if (this.loggedIn) {
        kelas = "route";
      } else {
        kelas = "";
      }
      return kelas;
    }
  }
};
</script>
