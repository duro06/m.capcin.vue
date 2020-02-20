<template>
  <nav
    class="navbar is-fixed-bottom-touch fadeInUp is-hidden-desktop"
    v-wow
    data-wow-duration="2s"
    style="color: aqua"
  >
    <div class="container ">
      <div class="navbar-brand level is-mobile">
        <div class="level-item has-text-centered">
          <a href="home">
            <i
              class="fas fa-home fa-2x slideInRight title"
              v-wow
              data-wow-duration="1s"
            />
            <p class="heading" style="color: white">
              Beranda
            </p>
          </a>
        </div>
        <div class="level-item has-text-centered">
          <a href="/">
            <i
              class="fas fa-info-circle slideInRight title"
              v-wow
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            ></i>
            <p class="heading" style="color: white">
              Informasi
            </p>
          </a>
        </div>
        <div class="level-item has-text-centered">
          <a href="/">
            <i
              class="fas fa-user-tie slideInRight title"
              v-wow
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            ></i>
            <p class="heading" style="color: white">
              Profile
            </p>
          </a>
        </div>
        <div v-if="!loggedIn" class="level-item has-text-centered">
          <a href="login">
            <i
              class="fas fa-sign-in-alt slideInRight title"
              v-wow
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            ></i>
            <p class="heading" style="color: white">
              Login
            </p>
          </a>
        </div>
        <div v-if="loggedIn" class="level-item has-text-centered">
          <a href="Logout">
            <i
              class="fas fa-sign-out-alt slideInRight title"
              v-wow
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            ></i>
            <p class="heading" style="color: white">
              Logout
            </p>
          </a>
        </div>
      </div>
    </div>
  </nav>
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
