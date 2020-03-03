<template>
  <section id="app" class="hero is-danger is-small">
    <div class="hero-head">
      <FlashMessage
        position="right top"
        style="z-index: 19999 !important; position: fixed;"
      ></FlashMessage>
      <transition class="slideInLeft" v-wow data-wow-duration="1s">
        <router-view />
      </transition>
    </div>
  </section>
</template>
<script>
import * as auth from "./services/auth_service";
import store from "./store";
// import router from "./router";
export default {
  name: "app",
  data() {
    return {
      location: ""
    };
  },
  beforeCreate: async function() {
    localStorage.removeItem("level");
    console.log("App Get Profile");
    try {
      if (store.getters.loggedIn) {
        console.log("Login = ", store.getters.loggedIn);
        const response = await auth.getProfile();
        console.log(response);
        store.dispatch("aunthenticate", response.data);
      } else {
        console.log("Login = false");
        store.dispatch("destroyToken");
      }
      setTimeout(function() {}, 2000);
    } catch (error) {
      store.dispatch("destroyToken");
    }
  },
  beforeMount() {
    console.log("Before mount", this.location);
  }
};
</script>
