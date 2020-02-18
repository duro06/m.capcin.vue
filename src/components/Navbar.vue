<template>
  <nav
    class="navbar is-fixed-top is-danger fadeInUp"
    role="navigation"
    aria-label="main navigation"
    v-wow
    data-wow-delay="0s"
    data-wow-duration="2s"
  >
    <div class="navbar-brand">
      <router-link
        class="navbar-item wow slideInLeft"
        to="/home"
        data-wow-duration="1s"
        v-wow
        >Home</router-link
      >
      <!-- <a><?= app_name()?></!-->
      <div class="column wow slideInRight" v-wow>
        <span
          class="has-badge-rounded has-badge-success has-badge-outlined"
          data-badge="0"
        >
          <i class="far fa-bell"></i>
        </span>
      </div>
      <a
        role="button"
        v-wow
        class="navbar-burger has-text-white slideInRight"
        :class="{ 'is-active': isActive }"
        aria-label="menu"
        aria-expanded="false"
        @click="switchMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      class="navbar-menu wow fadeInDown"
      :class="{ 'is-active': isActive }"
      data-wow-duration="1s"
      v-wow
    >
      <div class="navbar-end">
        <router-link
          class="navbar-item wow slideInDown"
          :to="{ path: '/level3' }"
          replace
          v-wow
          data-wow-duration="1s"
          data-wow-delay="0.4s"
          >Level 3
        </router-link>

        <router-link
          class="navbar-item wow slideInDown"
          to="/level4"
          replace
          v-wow
          data-wow-duration="1s"
          data-wow-delay="0.4s"
          >Level 4
        </router-link>

        <router-link
          class="navbar-item wow slideInDown"
          to="/level5"
          replace
          v-wow
          data-wow-duration="1s"
          data-wow-delay="0.6s"
          >Level 5
        </router-link>

        <router-link
          class="navbar-item wow slideInDown"
          to="/level6"
          replace
          v-wow
          data-wow-duration="1s"
          data-wow-delay="0.8s"
          >Level 6
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script>
// import '/assets/js/bulma.js'
export default {
  name: "navbar",
  props: {
    msg: String
  },
  data: () => ({
    isActive: false
  }),

  methods: {
    switchMenu() {
      this.isActive = !this.isActive;
    }
  }
};
</script>
<style scoped>
#navbar {
  padding-left: 1px;
  padding-right: 5px;
  padding-top: 5px;
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 30%, 0);
    -ms-transform: translate3d(0, 30%, 0);
    transform: translate3d(0, 30%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
}

/* @keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 30%, 0);
    -ms-transform: translate3d(0, 30%, 0);
    transform: translate3d(0, 30%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
  }
} */

.fadeInUp {
  animation-name: fadeInUp;
  animation-timing-function: ease-out;
}

/* .fadeInDown {
  animation-name: fadeInDown;
  animation-timing-function: ease-in;
} */
</style>
