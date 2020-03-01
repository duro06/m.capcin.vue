<template>
  <keep-alive>
    <div
      :class="['dropdown', { 'is-active': isActive }, 'is-small', 'is-right']"
    >
      <div class="dropdown-trigger">
        <button
          class="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu3"
          @click.prevent="dropdown"
        >
          <span class="is-7">{{ selected }}</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div
        class="dropdown-menu dropdown-menu-min-width has-text-right"
        id="dropdown-menu"
        role="menu"
      >
        <div class="dropdown-content">
          <div
            v-for="item in pages"
            :key="item"
            class="dropdown-item"
            @click.prevent="pilih"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </keep-alive>
</template>
<script>
export default {
  name: "dropdown",
  props: { pages: Array, current: Number },
  data() {
    return { isActive: "", selected: this.current };
  },
  computed: {},
  methods: {
    dropdown() {
      this.isActive = !this.isActive;
    },
    pilih(val) {
      // console.log(val.target.innerText);
      let i = Number(val.target.innerText);
      this.selected = i;
      this.$emit("dropdown", i);
      this.isActive = !this.isActive;
    }
  }
};
</script>
