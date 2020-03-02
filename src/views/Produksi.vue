<template>
  <div class="produksi">
    <Produksi />
    <Footer />
  </div>
</template>
<script>
import Produksi from "@/components/produksi/ProduksiCard.vue";
import Footer from "@/components/element/bulmaFooter.vue";
// import store from "../store";
// import * as auth from "../services/auth_service";

export default {
  name: "produksi",
  components: {
    Produksi,
    Footer
  }
  // beforeCreate: async function() {
  //   console.log("App Get Profile");
  //   try {
  //     if (store.getters.loggedIn) {
  //       console.log("Login = true");
  //       const response = await auth.getProfile();
  //       store.dispatch("aunthenticate", response.data);
  //     } else {
  //       console.log("Login = false");
  //       store.dispatch("destroyToken");
  //     }
  //   } catch (error) {
  //     store.dispatch("destroyToken");
  //   }
  // },

  // beforeRouteEnter(to, from, next) {
  //   // to?({name:'produksi'})
  //   // from("*")
  //   console.log("Before Route Enter ", store.getters.levelAccess);
  //   if (store.getters.levelAccess === "Produksi") {
  //     console.log("Produksi confirm");
  //     next(true);
  //   } else {
  //     console.log("Produksi none are true");
  //     next("/home");
  //   }
  // }
};
</script>
<style scoped></style>
