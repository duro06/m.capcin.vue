<template>
  <keep-alive>
    <div :class="['dropdown', { 'is-active': isActive }]">
      <div class="dropdown-trigger">
        <button
          class="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu3"
          @click.prevent="dropdown"
        >
          <span>Dropdown button</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            Dropdown item
          </a>
          <a class="dropdown-item">
            Other dropdown item
          </a>
          <a href="#" class="dropdown-item is-active">
            Active dropdown item
          </a>
          <a href="#" class="dropdown-item">
            Other dropdown item
          </a>
          <hr class="dropdown-divider" />
          <a href="#" class="dropdown-item">
            With a divider
          </a>
        </div>
      </div>
    </div>
  </keep-alive>
</template>
<script>
export default {
  name: "page",
  data() {
    return { isActive: "" };
  },
  methods: {
    dropdown() {
      this.isActive = !this.isActive;
    }
  }
};
</script>
