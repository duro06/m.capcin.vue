<template>
  <div class="produk">
    <div class="section">
      <h1 class="has-text-centered">Pengumuman</h1>
      <carousel
        :per-page="1"
        :autoplay="true"
        :autoplayTimeout="5000"
        :loop="true"
      >
        <slide
          v-for="(item, apem) in pengumuman"
          :key="apem"
          style="align: center"
        >
          <bilboard class="dat" :data="item"></bilboard>
        </slide>
      </carousel>
    </div>
    <div class="wrapper">
      <h2 class="has-text-centered">Produksi</h2>
      <div class="content">
        <div class="columns">
          <div class="column">
            <div>
              <div
                class="columns is-mobile is-hidden-desktop"
                v-for="(item, apem) in items"
                :key="apem"
              >
                <Produksi :data="item" class="column " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Produksi from "./ProduksiEl.vue";
import Bilboard from "../element/ElementCard.vue";
import * as itemService from "../../services/item_services.js";

export default {
  name: "produk",
  components: {
    Produksi,
    Bilboard
  },
  data() {
    return {
      pengumuman: [
        { image: "./img/image/chrysanthemum.jpg" },
        { image: "./img/image/Hydrangeas.jpg" },
        { image: "./img/image/Jellyfish.jpg" },
        { image: "./img/image/Koala.jpg" },
        { image: "./img/image/Lighthouse.jpg" },
        { image: "./img/image/Penguins.jpg" },
        { image: "./img/image/Tulips.jpg" },
        { image: "./img/image/Desert.jpg" }
      ],
      units: {},
      items: {},
      item: {},
      hal: {},
      current_page: 1, //DEFAULT PAGE YANG AKTIF ADA PAGE 1
      per_page: 10, //DEFAULT LOAD PERPAGE ADALAH 5
      search: "",
      sortBy: "created_at", //DEFAULT SORTNYA ADALAH CREATED_AT
      sortByDesc: false //ASCEDING
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
        this.units = response.data.data_unit;
        this.item = this.items[0];
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
.wrapper {
  padding: 0px 20px 50px 20px;
}
</style>
