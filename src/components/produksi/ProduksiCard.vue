<template>
  <div class="produksi">
    <Produksi :data="item" />
  </div>
</template>
<script>
import Produksi from "./ProduksiEl.vue";
export default {
  name: "produksi",
  components: {
    Produksi
  },
  data() {
    return {
      item: {
        name: "andi"
      }
    };
  }
};
</script>
<style scoped>
/* @import "../../assets/css/debug.css"; */
</style>
