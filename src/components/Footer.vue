<template>
  <div id="foot">
    <div class="mobile-bottom-nav is-hidden-desktop">
      <a href="home" data-toggle="page" class="mobile-bottom-nav__item">
        <div class="mobile-bottom-nav__item-content">
          <i class="fas fa-home fa-2x" />
          Beranda
        </div>
      </a>
      <a href="front/logbook" class="mobile-bottom-nav__item">
        <div class="mobile-bottom-nav__item-content">
          <i class="fas fa-info-circle fa-2x"></i>
          Informasi
        </div>
      </a>
      <a href="front/profile" class="mobile-bottom-nav__item">
        <div class="mobile-bottom-nav__item-content">
          <i class="fas fa-user-tie fa-2x"></i>
          Profile
        </div>
      </a>

      <a v-if="!loggedIn" href="login" class="mobile-bottom-nav__item">
        <div class="mobile-bottom-nav__item-content">
          <i class="fas fa-sign-in-alt fa-2x"></i>
          Login
        </div>
      </a>

      <a v-if="loggedIn" href="logout" class="mobile-bottom-nav__item">
        <div class="mobile-bottom-nav__item-content">
          <i class="fas fa-sign-out-alt fa-2x"></i>
          Logout
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "footnav",
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    }
  }
};
</script>
<style scoped>
/*untuk bottom bar*/
.mobile-bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  will-change: transform;
  transform: translateZ(0);
  display: flex;
  height: 55px;
  box-shadow: 0 -2px 5px -2px #333;
  background-color: #fff;
}
.mobile-bottom-nav i {
  font-size: 15;
}
a.mobile-bottom-nav__item {
  flex-grow: 1;
  text-align: center;
  font-size: 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #636e72;
}
.activeX {
  color: #ff3860 !important;
}
.mobile-bottom-nav__item-content {
  display: flex;
  flex-direction: column;
}
</style>
