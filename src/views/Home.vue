<template>
  <div class="container">
    <Navbar class="navbar" />
    <div class=" hero-body has-text-centered">
      <Welcome />
      <router-view></router-view>
      <!-- <Produksi v-if="produksi" /> -->
    </div>
    <Footer class="navbar " />
  </div>
</template>

<script>
// import * as auth from "../services/auth_service";
// import store from "../store";
// @ is an alias to /src
// import Produksi from "@/components/produksi/ProduksiCard.vue";
import Navbar from "@/components/element/bulmaNav.vue";
import Welcome from "@/components/Welcome.vue";
import Footer from "@/components/element/bulmaFooter.vue";
// import Level3 from "@/components/Level3.vue";

export default {
  name: "Home",
  components: {
    Welcome,
    Navbar,
    // Produksi,
    Footer
  },
  computed: {
    produksi() {
      if (this.$store.getters.levelAccess == "Produksi") {
        return true;
      } else {
        return false;
      }
    }
  },

  created() {
    document.querySelector("body").style.backgroundColor = "#aef";
  }
};
</script>
<style scoped>
.content {
  padding: 60px 10px 53px 10px;
}
.mu {
  background-color: rgb(37, 221, 235);
}
</style>
