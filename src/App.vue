<template>
  <div id="app">
    <Navbar v-if="loggedIn" />
    <router-view />
    <Footer v-if="loggedIn" />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "app",
  components: {
    Navbar,
    Footer
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
};
</script>

<style lang="scss">
@import "~bulma";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-bottom: 3%;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#fot {
  padding-top: 2%;
}
#view {
  padding-bottom: 2%;
}
</style>
