<template>
  <nav class="navbar is-fixed-top fadeInUp " v-wow data-wow-duration="2s">
    <div class="container ">
      <div class="navbar-brand level">
        <div class="level-item has-text-centered">
          <span>
            <router-link
              class="navbar-item slideInLeft "
              to="/home"
              v-wow
              data-wow-duration="1s"
            >
              <i
                class="fas fa-home slideInRight"
                v-wow
                data-wow-duration="1s"
              />
              Home</router-link
            >
          </span>
        </div>
        <span
          class="navbar-burger burger level-item"
          data-target="menuMakan"
          :class="{ 'is-active': isActive }"
          @click.prevent="switchMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>
      <div
        id="menuMakan"
        class="navbar-menu fadeInDown"
        :class="{ 'is-active': isActive }"
        v-wow
        data-wow-duration="1s"
      >
        <div class="navbar-end  has-text-centered">
          <router-link
            class="navbar-item slideInDown "
            v-if="level == 3"
            :to="{ path: '/level3' }"
            replace
            v-wow
            data-wow-duration="1s"
            data-wow-delay="0.4s"
            >Level 3</router-link
          >
          <router-link
            class="navbar-item slideInDown "
            v-if="level == 4"
            :to="{ path: '/level4' }"
            replace
            v-wow
            data-wow-duration="1s"
            data-wow-delay="0.4s"
            >Level 4</router-link
          >
          <router-link
            class="navbar-item slideInDown "
            v-if="level == 5"
            :to="{ path: '/level5' }"
            replace
            v-wow
            data-wow-duration="1s"
            data-wow-delay="0.4s"
            >Level 5</router-link
          >
          <router-link
            class="navbar-item slideInDown "
            v-if="level == 6"
            :to="{ path: '/level6' }"
            replace
            v-wow
            data-wow-duration="1s"
            data-wow-delay="0.4s"
            >Level 6</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "navbar",
  data: () => ({ isActive: false }),
  computed: {
    level() {
      return this.$store.getters.levelAccess;
    },
    check() {
      return console.log(this.level);
    }
  },
  methods: {
    switchMenu() {
      this.isActive = !this.isActive;
    }
  }
};
</script>
