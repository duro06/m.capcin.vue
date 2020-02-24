<template>
  <div class="produksi">
    <Produksi :data="items" />
  </div>
</template>
<script>
import Produksi from "./ProduksiEl.vue";
import * as itemService from "../../services/item_services.js";

export default {
  name: "produksi",
  components: {
    Produksi
  },
  data() {
    return {
      items: {}
    };
  },
  created() {
    this.req();
  },
  methods: {
    req: async function() {
      let current_page = this.search == "" ? this.current_page : 1;
      let sorting = this.sortByDesc ? "DESC" : "ASC";
      let params = {
        params: {
          page: current_page,
          per_page: this.per_page,
          q: this.search,
          sortby: this.sortBy,
          sortbydesc: sorting
        }
      };
      try {
        const response = await itemService.loadData(params);
        console.log(response);
        let getData = response.data.data;
        this.items = getData.data;
        console.log(this.items);
      } catch (error) {
        console.log("" + error);
        this.flashMessage.error({
          message: "" + error,
          time: 5000
        });
      }
    }
  }
};
</script>
<style scoped>
/* @import "../../assets/css/debug.css"; */
</style>
