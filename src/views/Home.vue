<template>
  <div class="home">
    <Navbar />
    <Level3 />
    <Welcome />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Welcome from "@/components/Welcome.vue";
import Footer from "@/components/Footer.vue";
import Level3 from "@/components/Level3.vue";

export default {
  name: "Home",
  components: {
    Welcome,
    Navbar,
    Level3,
    Footer
  }
};
</script>
