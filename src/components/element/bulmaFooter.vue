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
              class="fas fa-home slideInRight"
              style="color: white"
              v-wow
              data-wow-duration="2s"
            />
            <p
              class="heading slideInLeft"
              style="color: white"
              v-wow
              data-wow-duration="2s"
            >
              Beranda
            </p>
          </a>
        </div>
        <div class="level-item has-text-centered">
          <a href="/">
            <i
              class="fas fa-info-circle slideInRight"
              style="color: white"
              v-wow
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            ></i>
            <p
              class="heading slideInLeft"
              style="color: white"
              v-wow
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              Informasi
            </p>
          </a>
        </div>
        <div class="level-item has-text-centered">
          <a href="/profile">
            <i
              class="fas fa-user-tie slideInRight "
              style="color: white"
              v-wow
              data-wow-duration="2s"
              data-wow-delay="0.7s"
            ></i>
            <p
              class="heading slideInLeft"
              style="color: white"
              v-wow
              data-wow-duration="2s"
              data-wow-delay="0.7s"
            >
              Profile
            </p>
          </a>
        </div>
        <div v-if="!loggedIn" class="level-item has-text-centered">
          <a href="login">
            <i
              class="fas fa-sign-in-alt slideInRight"
              style="color: white"
              v-wow
              data-wow-duration="2s"
              data-wow-delay="0.9s"
            ></i>
            <p
              class="heading slideInLeft"
              style="color: white"
              v-wow
              data-wow-duration="2s"
              data-wow-delay="0.9s"
            >
              Login
            </p>
          </a>
        </div>
        <div v-if="loggedIn" class="level-item has-text-centered">
          <a href="Logout">
            <i
              class="fas fa-sign-out-alt slideInRight"
              style="color: white"
              v-wow
              data-wow-duration="2s"
              data-wow-delay="0.9s"
            ></i>
            <p
              class="heading slideInLeft"
              style="color: white"
              v-wow
              data-wow-duration="2s"
              data-wow-delay="0.9s"
            >
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
