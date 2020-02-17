<template>
  <div id="app">
    <div>
      <Navbar v-if="loggedIn" />
    </div>
    <div>
      <transition class="slideInLeft" v-wow data-wow-duration="1s">
        <router-view :class="kelas" />
      </transition>
    </div>
    <div>
      <Footer v-if="loggedIn" />
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "app",
  data() {
    return {
      ngiri: ""
    };
  },
  components: {
    Navbar,
    Footer
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
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
  // watch: {
  //   $route(to, from) {
  //     const toDepth = to.path.split("/").length;
  //     const fromDepth = from.path.split("/").length;
  //     this.ngiri = toDepth < fromDepth ? "slide-right" : "slide-left";
  //   }
  // }
};
</script>
<style scooped>
.route {
  padding-top: 55px;
  padding-bottom: 55px;
}
</style>

<style lang="scss">
@import "./assets/css/animate.css";
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
