<template>
  <keep-alive>
    <nav
      class="pagination is-small is-rounded"
      role="navigation"
      aria-label="pagination"
    >
      <a
        style="background-color:white"
        class="pagination-previous"
        v-if="prev"
        @click.prevent="prevPage"
        >Previous</a
      >
      <a
        style="background-color:white"
        class="pagination-next"
        v-if="meta.current <= beforeLast"
        @click.prevent="nextPage"
        >Next page</a
      >
      <ul class="pagination-list">
        <li>
          <a
            style="background-color:white"
            class="pagination-link"
            aria-label="Goto page 1"
            v-if="meta.current != 1"
            @click.prevent="firstPage"
            >1</a
          >
        </li>
        <li>
          <span class="pagination-ellipsis" v-if="prev >= 2">&hellip;</span>
        </li>
        <li>
          <a
            style="background-color:white"
            class="pagination-link"
            aria-label="Goto page 45"
            v-if="prev >= 2"
            @click.prevent="prevPage"
            >{{ prev }}</a
          >
        </li>
        <li>
          <a
            class="pagination-link is-current"
            aria-label="Page 46"
            aria-current="page"
            >{{ meta.current }}</a
          >
        </li>
        <li>
          <a
            style="background-color:white"
            class="pagination-link"
            aria-label="Goto page 47"
            @click.prevent="nextPage"
            v-if="next"
            >{{ next }}</a
          >
        </li>
        <li>
          <span class="pagination-ellipsis" v-if="next < beforeLast && next"
            >&hellip;</span
          >
        </li>
        <li>
          <a
            style="background-color:white"
            class="pagination-link"
            @click.prevent="lastPage"
            v-if="next <= beforeLast && next"
            >{{ meta.last }}</a
          >
        </li>
      </ul>
    </nav>
  </keep-alive>
</template>
<script>
export default {
  name: "pagination",
  props: { meta: Object },

  computed: {
    // mengembalikan nilai halaman sebelum
    prev() {
      if (this.meta.current != 1) {
        return this.meta.current - 1;
      } else {
        return null;
      }
    },
    // mengembalikan nilai halaman sesudah
    next() {
      if (this.meta.current != this.meta.last) {
        return this.meta.current + 1;
      } else {
        return null;
      }
    },
    // mengembalikan nilai stuhalaman sebelum halaman terakhir
    beforeLast() {
      return this.meta.last - 1;
    }
  },
  methods: {
    changePage(val) {
      //kirim emit dengan nama pagination
      // valuenya masih tak cari
      this.$emit("pagination", val);
      // console.log(val);
    },
    // mengembalikan nilai stuhalaman sebelum halaman terakhir
    prevPage() {
      if (this.meta.current != 1) {
        let i = this.meta.current - 1;
        this.changePage(i);
      }
    },
    nextPage() {
      if (this.meta.current != this.meta.last) {
        let i = this.meta.current + 1;
        this.changePage(i);
      }
    },
    firstPage() {
      this.changePage(1);
    },
    lastPage() {
      this.changePage(this.meta.last);
    }
  }
};
</script>
