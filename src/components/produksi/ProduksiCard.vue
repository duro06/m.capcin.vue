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
      <div class="level">
        <div class="level-item has-text-centered">
          <Search
            @search="handleSearch"
            class="is-small is-right is-7 search"
            v-model="search"
            :load="loading"
          />
        </div>
        <div class="level-item has-text-centered">
          <p class="subtitle is-7">
            Data ke {{ meta.from }} sampai {{ meta.to }}, dari total
            {{ meta.total }} data ditemukan
          </p>
        </div>
      </div>
      <!-- <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
  <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
</ul> -->
      <div class="content">
        <div class="iterasi is-hidden-desktop">
          <div
            v-for="(item, apem) in items"
            :key="apem"
            class="infinite-list-item"
          >
            <Produksi class="produksi" :data="item" />
          </div>
          <div
            v-infinite-scroll="Scroll"
            infinite-scroll-disabled="busy"
            infinite-scroll-distance="0"
            infinite-scroll-throttle-delay="2000"
          ></div>
        </div>
        <button
          v-if="this.more_exist"
          class="button is-info is-fullwidth is-loading"
        >
          Button loading
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Produksi from "./ProduksiEl.vue";
import Bilboard from "../element/ElementCard.vue";
import Search from "../element/Search.vue";
import * as itemService from "../../services/item_services.js";

export default {
  name: "produk",
  components: {
    Produksi,

    Search,

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
      current_page: 1, //DEFAULT PAGE YANG AKTIF ADA PAGE 1
      per_page: 8, //DEFAULT LOAD PERPAGE ADALAH 4
      search: "",
      sortBy: "created_at", //DEFAULT SORTNYA ADALAH CREATED_AT
      sortByDesc: false, //ASCEDING
      loading: "",
      more_exist: true,
      last_page: null
    };
  },
  created() {
    this.req();
    // this.Scroll();
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
        this.last_page = getData.last_page;
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
    //jika ada scroll event
    Scroll: async function() {
      let current_page;
      if (this.current_page <= this.last_page && this.search == "") {
        current_page = this.current_page + 1;
        this.more_exist = true;
        this.busy = false;
        console.log("Last page  :  ", this.meta.last);
        console.log("Current page  :  ", this.current_page);
      } else if (this.current_page < this.last_page && this.search != "") {
        current_page = this.current_page + 1;
        this.more_exist = true;
        this.busy = false;
        console.log("Last page  :  ", this.meta.last);
        console.log("Current page  :  ", this.current_page);
      } else {
        this.busy = true;
        this.more_exist = false;
      }
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
        this.busy = true;
        if (this.more_exist) {
          const response = await itemService.loadData(params);

          console.log(response);
          let getData = response.data.data;
          getData.data.forEach(data => {
            this.items.push(data);
          }); //ambil data yang dibutuhkan
          this.units = response.data.data_unit; //untuk sementara ini ga usah ga papa sih, selama ga bikin data baru
          this.totaldata = getData.total;
          this.current_page = getData.current_page;
          // masukkan data meta
          this.meta = {
            total: getData.total,
            current: getData.current_page,
            per_page: getData.per_page,
            from: getData.from,
            to: getData.to,
            last: getData.last_page
          };
        }
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
    //jika ada emmit jumlah data tiap halaman
    handleSearch(val) {
      this.current_page = 1; //reset halaman ke halaman satu
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
  /* justify-content: space-evenly; */
  /* height: 500px; */
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
