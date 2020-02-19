<template>
  <div class="home">
    <Navbar />
    <br />
    <Level3 />
    <Welcome />
    <Button type="button" class="button is-success" @click="message"
      >Test</Button
    >
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
  },
  methods: {
    message() {
      this.flashMessage.error({
        message: "anda belum login",
        time: 5000
      });
    }
  }
};
</script>
