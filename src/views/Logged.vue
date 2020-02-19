<template>
  <div class="logged fadeInUp" v-wow data-wow-duration="1s">
    <Welcome />
    <Level5 />
    <Footer />
  </div>
</template>
<script>
// import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Level5 from "@/components/Level5.vue";
import Welcome from "@/components/Welcome.vue";
export default {
  name: "logged",
  components: {
    // Navbar,
    Level5,
    Footer,
    Welcome
  }
};
</script>
<style scooped>
.logged {
  padding-top: 25px;
}
</style>
