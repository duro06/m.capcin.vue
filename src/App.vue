<template>
  <section id="app" class="hero is-danger is-small is-fullheight">
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
export default {
  name: "app",
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
  // watch: {
  //   $route(to, from) {
  //     const toDepth = to.path.split("/").length;
  //     const fromDepth = from.path.split("/").length;
  //     this.ngiri = toDepth < fromDepth ? "slide-right" : "slide-left";
  //   }
  // }
};
</script>
