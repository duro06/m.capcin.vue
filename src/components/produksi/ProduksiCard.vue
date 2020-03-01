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
      <Search
        @search="handleSearch"
        class="is-small is-right is-7"
        v-model="search"
        :load="loading"
      />
      <div class="level">
        <div class="level-item has-text-centered">
          <p class="is-7 title">Show :</p>
          <p>
            <Dropdown
              :pages="page"
              :current="per_page"
              @dropdown="handleDropdown"
              class="is-small is-right is-7"
            />
          </p>
        </div>
        <div class="level-item has-text-centered">
          <p class="subtitle is-7">
            Data ke {{ meta.from }} sampai {{ meta.to }}, dari total
            {{ meta.total }} data ditemukan
          </p>
        </div>
      </div>
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
import Dropdown from "../element/Dropdown.vue";
import Search from "../element/Search.vue";
import * as itemService from "../../services/item_services.js";

export default {
  name: "produk",
  components: {
    Produksi,
    Dropdown,
    Search,
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
      page: [4, 8, 10, 20, 30, 40, 50],
      current_page: 1, //DEFAULT PAGE YANG AKTIF ADA PAGE 1
      per_page: 4, //DEFAULT LOAD PERPAGE ADALAH 4
      search: "",
      sortBy: "created_at", //DEFAULT SORTNYA ADALAH CREATED_AT
      sortByDesc: false, //ASCEDING
      totaldata: null,
      loading: ""
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
      this.loading = "is-loading";
      // let current_page = this.search == "" ? this.current_page : 1;
      let sorting = this.sortByDesc ? "DESC" : "ASC";
      let params = {
        //kalo ga ada params servernya ga mau.. karena sudah di setting gitu..
        //dan params ini sudah sesuai dengan permintaan server, kepala ga boleh diganti
        // yang boleh diganti itu ekornya
        params: {
          page: this.current_page,
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
        this.totaldata = getData.total;
        // masukkan data meta
        this.meta = {
          total: getData.total,
          current: getData.current_page,
          per_page: getData.per_page,
          from: getData.from,
          to: getData.to,
          last: getData.last_page
        };
        this.loading = "";
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
    },
    //jika ada emmit jumlah data tiap halaman
    handleDropdown(val) {
      this.per_page = val; // masukkan nilai perhalaman
      this.req(); //reload data
    },
    //jika ada emmit jumlah data tiap halaman
    handleSearch(val) {
      this.search = val; // masukkan nilai perhalaman
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
.search {
  padding: 5px;
}
</style>
