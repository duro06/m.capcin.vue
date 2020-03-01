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
    <div class="wrapper  has-text-centered">
      <h2 class="has-text-centered">Produksi</h2>

      <Pagination :meta="meta" @pagination="handlePagination" />
      <div class="content">
        <div class="iterasi is-hidden-desktop">
          <div v-for="(item, apem) in items" :key="apem">
            <Produksi class="produksi" :data="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Produksi from "./ProduksiEl.vue";
import Bilboard from "../element/ElementCard.vue";
import Pagination from "../element/Pagination.vue";
import * as itemService from "../../services/item_services.js";

export default {
  name: "produk",
  components: {
    Produksi,
    Pagination,
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
      meta: {},
      current_page: 4, //DEFAULT PAGE YANG AKTIF ADA PAGE 1
      per_page: 4, //DEFAULT LOAD PERPAGE ADALAH 6
      search: "",
      sortBy: "created_at", //DEFAULT SORTNYA ADALAH CREATED_AT
      sortByDesc: false //ASCEDING
    };
  },
  created() {
    this.req();
  },
  // computed: {
  //   kunci() {
  //     let c = [];
  //     let i = this.items.length / 2;
  //     for (let a = 0; a < this.items.length; a++) {
  //       c = [this.items[i], this.items[i + 1]];
  //     }
  //     return c;
  //   }
  // },

  methods: {
    req: async function() {
      let current_page = this.search == "" ? this.current_page : 1;
      let sorting = this.sortByDesc ? "DESC" : "ASC";
      let params = {
        //kalo ga ada params servernya ga mau.. karena sudah di setting gitu..
        //dan params ini sudah sesuai dengan permintaan server, kepala ga boleh diganti
        // yang boleh diganti itu ekornya
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
        this.items = getData.data; //ambil data yang dibutuhkan
        this.units = response.data.data_unit; //untuk sementara ini ga usah ga papa sih, selama ga bikin data baru
        // masukkan data meta
        this.meta = {
          total: getData.total,
          current: getData.current_page,
          per_page: getData.per_page,
          from: getData.from,
          to: getData.to,
          last: getData.last_page,
          next_url: getData.next_page_url,
          prev_url: getData.prev_page_url,
          first_url: getData.first_page_url,
          last_url: getData.last_page_url
        };
        console.log(this.items);
      } catch (error) {
        console.log("" + error);
        this.flashMessage.error({
          message: "" + error,
          time: 5000
        });
      }
    },
    //jika ada emmit halaman yang akan dituju
    handlePagination(val) {
      this.current_page = val; // masukkan nilai halaman yang aktif
      this.req(); //reload data
    }
  }
};
</script>
<style scoped>
/* @import "../../assets/css/debug.css"; */
.wrapper {
  padding: 0px 20px 55px 20px;
}
.iterasi {
  display: flex;
  flex-wrap: wrap;
}
.iterasi > div {
  background-color: #f14668;
  width: 50%;
  height: auto;
}
</style>
