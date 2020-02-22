<template>
  <div class="container">
    <div class="hero-body has-text-centered">
      <div class="section">
        <div>
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <figure class="image is-48x48">
                    <img
                      src="https://bulma.io/images/placeholders/96x96.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div class="media-content">
                  <p class="title is-4" style="color: black">{{ user.name }}</p>
                  <p class="subtitle is-6" style="color: black">
                    {{ user.email }}
                  </p>
                </div>
              </div>

              <div class="content">
                {{ user.role }} Capcin
                <br />
                <time datetime="now"></time>
              </div>
            </div>
          </div>
        </div>
        <div>
          <br />
          <router-link
            class="button is-info"
            type="primary"
            :to="{ path: '/home' }"
            replace
            >Kembali</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getProfile } from "../services/auth_service";
export default {
  name: "profile",
  data() {
    return {
      user: ""
    };
  },
  created() {
    // this.$store.dispatch("retrieveName");
    getProfile()
      .then(response => {
        this.user = response.data;
      })
      .catch(error => {
        switch (error.response.status) {
          case 422:
            this.errors = error.response.data.errors;
            break;
          case 500:
            this.flashMessage.error({
              message: error.response.data.message,
              time: 5000
            });
            break;
          case 401:
            this.flashMessage.error({
              message: error.response.data.message,
              time: 5000
            });
            break;
          case 404:
            this.flashMessage.error({
              message: error.response.data.message,
              time: 5000
            });
            break;
          default:
            this.flashMessage.error({
              message: "Some error occured, Please Try Again!",
              time: 5000
            });
            break;
        }
      });
  }
};
</script>
