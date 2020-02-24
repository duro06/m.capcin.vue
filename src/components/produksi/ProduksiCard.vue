<template>
  <div class="produksi">
    <!-- <Produksi :data="item" /> -->
    <!-- <Tabel :data="item" /> -->
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :search-options="{
        enabled: true
      }"
      class="table is-fullwidth has-text-centered"
      theme="black-rhino"
      styleClass="vgt-table striped"
      @on-selected-rows-change="selectionChanged($event)"
      :selectOptions="{
        enabled: true,
        selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
        selectionInfoClass: 'custom-class',
        selectionText: 'rows selected',
        clearSelectionText: 'clear',
        disableSelectInfo: true // disable the select info panel on top
      }"
      :pagination-options="{
        enabled: true
      }"
    />

    <button class="button is-primary" @click.prevent="req">
      Test req server
    </button>
  </div>
</template>
<script>
// import Produksi from "./ProduksiEl.vue";
// import Tabel from "../element/Tabel.vue";
import * as itemService from "../../services/item_services.js";
export default {
  name: "produksi",
  components: {
    // Produksi,
    // Tabel
  },
  data() {
    return {
      // item: {
      //   name: "andi"
      // },
      columns: [
        { label: "Nama", field: "nama", sortable: true },
        { label: "Satuan", field: "satuan", type: "number", sortable: true },
        {
          label: "Harga",
          field: "harga_beli",
          type: "currency",
          sortable: true
        },
        {
          label: "Stock Awal",
          field: "stock_awal",
          type: "number",
          sortable: true
        }
      ],
      rows: [],

      current_page: 1, //DEFAULT PAGE YANG AKTIF ADA PAGE 1
      per_page: 5, //DEFAULT LOAD PERPAGE ADALAH 5
      search: "",
      sortBy: "created_at", //DEFAULT SORTNYA ADALAH CREATED_AT
      sortByDesc: false //ASCEDING
    };
  },
  created() {
    this.req();
  },
  methods: {
    selectionChanged(test) {
      let val = [];
      console.log(test.selectedRows);
      for (let i = 0; i <= test.selectedRows.length; i++) {
        val.push(test.selectedRows[i].id);
        console.log(val);
      }
      // console.log(val);
    },
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
        this.rows = response.data.data.data;
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
