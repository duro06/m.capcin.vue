<template>
  <div class="logged fadeInUp" v-wow data-wow-duration="1s">
    <div id="mid">
      <Welcome />
    </div>
  </div>
</template>
<script>
// import Navbar from "@/components/Navbar.vue";
// import Footer from "@/components/Footer.vue";
import Welcome from "@/components/Welcome.vue";
export default {
  name: "logged",
  components: {
    // Navbar,
    // Footer,
    Welcome
  }
};
</script>
<style scooped>
.logged {
  padding-top: 25px;
}
</style>
