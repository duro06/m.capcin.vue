<template>
  <nav
    class="navbar is-fixed-bottom-touch fadeInUp is-hidden-desktop "
    v-wow
    data-wow-duration="2s"
  >
    <div class="container " style="background-color: grey">
      <div class="navbar-brand level is-mobile">
        <div class="level-item has-text-centered">
          <router-link :to="{ path: '/home' }">
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
          </router-link>
        </div>
        <div class="level-item has-text-centered">
          <router-link :to="{ path: '/' }">
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
          </router-link>
        </div>
        <div class="level-item has-text-centered">
          <router-link :to="{ path: '/profile' }">
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
          </router-link>
        </div>
        <div v-if="!loggedIn" class="level-item has-text-centered">
          <router-link :to="{ path: '/login' }">
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
          </router-link>
        </div>
        <div v-if="loggedIn" class="level-item has-text-centered">
          <router-link :to="{ path: '/logout' }">
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
          </router-link>
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
    },
    isActive() {
      let active;
      let me = window.location;
      console.log("Location: ", me);
      return active;
    }
  }
};
</script>
