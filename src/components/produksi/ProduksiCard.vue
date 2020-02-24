<template>
  <div class="produksi">
    <button class="button is-primary" @click.prevent="req">
      Test req server
    </button>
    <!-- <button class="button is-primary" @click.prevent="prev">
      Prev
    </button>
    <button class="button is-primary" @click.prevent="next">
      Next
    </button> -->
    <div id="satu" class="carousel is-6 carousel-animated ">
      <div class="carousel-container " style="max-width:250px">
        <!-- <div>
          data-slides-to-scroll="1" data-autoplay="true"
          data-navigation-keys="false" data-autoplay-speed="500"
          data-effect="translate" data-duration="1000"
        </div> -->
        <div v-for="(iteme, apem) in itemes" :key="apem">
          <Produksi :data="iteme" :class="['item' + apem + 1]" />
        </div>
      </div>
    </div>
    <!-- <div class="carousel-navigation is-centered">
      <div class="carousel-nav-left">
        <i class="fas fa-chevron-left" aria-hidden="true"></i>
      </div>
      <div class="carousel-nav-right">
        <i class="fas fa-chevron-right" aria-hidden="true"></i>
      </div>
    </div> -->
  </div>
</template>
<script>
import Produksi from "./ProduksiEl.vue";
// import Tabel from "../element/Tabel.vue";
import * as itemService from "../../services/item_services.js";
import bulmaCarousel from "bulma-carousel/dist/js/bulma-carousel.min.js";
import "bulma-carousel/dist/css/bulma-carousel.min.css";
export default {
  name: "produksi",
  components: {
    Produksi
    // Tabel
  },
  data() {
    return {
      item: {
        nama: "andi"
      },
      itemes: {},
      // columns: [
      //   { label: "Nama", field: "nama", sortable: true },
      //   { label: "Satuan", field: "satuan", type: "number", sortable: true },
      //   {
      //     label: "Harga",
      //     field: "harga_beli",
      //     type: "currency",
      //     sortable: true
      //   },
      //   {
      //     label: "Stock Awal",
      //     field: "stock_awal",
      //     type: "number",
      //     sortable: true
      //   }
      // ],
      // rows: [],

      current_page: 1, //DEFAULT PAGE YANG AKTIF ADA PAGE 1
      per_page: 10, //DEFAULT LOAD PERPAGE ADALAH 5
      search: "",
      sortBy: "created_at", //DEFAULT SORTNYA ADALAH CREATED_AT
      sortByDesc: false, //ASCEDING

      carousels: "",
      options: ""
    };
  },
  created() {
    // this.bCarousel();
    this.req();
  },
  mounted() {
    this.bCarousel();
  },

  methods: {
    // prev() {
    //   this.carousels.previous();
    // },
    // next() {
    //   this.carousels.next();
    // },
    bCarousel() {
      // alert("carousels mounted");
      // Initialize all elements with carousel class.
      const carousels = bulmaCarousel.attach(".carousel", {
        // bulmaCarousel.attach("carousel", {
        slideToScroll: 1,
        slideToShow: 1,
        loop: true,
        navigation: true,
        autoplay: true,
        autoplaySpeed: 1000
      });

      carousels.start;
      // To access to bulmaCarousel instance of an element
      const element = document.querySelector("#satu");
      if (element && element.bulmaCarousel) {
        // bulmaCarousel instance is available as element.bulmaCarousel
        element.bulmaCarousel.on("show", function(bulmaCarouselInstance) {
          console.log(bulmaCarouselInstance.index);
        });
      }
    },
    // selectionChanged(test) {
    //   let val = [];
    //   console.log(test.selectedRows);
    //   for (let i = 0; i <= test.selectedRows.length; i++) {
    //     val.push(test.selectedRows[i].id);
    //     console.log(val);
    //   }
    //   // console.log(val);
    // },
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
        this.itemes = getData.data;
        console.log(this.itemes);
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
<style lang="sass" scooped>
@import "../../assets/css/bulmaCarousel.sass";
</style>
