<template>
  <div class="test">
    <button class="button is-info" @click.prevent="test">Test</button>
  </div>
</template>
<script>
export default {
  name: "tabel",

  methods: {
    test() {
      console.log(window.location);
      window.location = this.$store.getters.serverUrl;
      console.log(this.$store.getters.serverUrl);
      console.log(window.location);
    }
  }
};
</script>
<style scoped>
@import "../../assets/css/debug.css";
</style>
