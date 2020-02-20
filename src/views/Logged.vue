<template>
  <div class="container ">
    <Navbar />
    <div class="section has-text-centered">
      <Welcome />
    </div>
    <Footer class="navbar" />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
// import Level5 from "@/components/Level5.vue";
import Welcome from "@/components/Welcome.vue";
export default {
  name: "logged",
  components: {
    Navbar,
    // Level5,
    Footer,
    Welcome
  },
  created() {
    document.querySelector("body").style.backgroundColor = "#fff";
  }
};
</script>
<style scooped>
.logged {
  padding-top: 25px;
}
</style>
