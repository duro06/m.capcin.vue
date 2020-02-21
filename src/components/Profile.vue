<template>
  <div>
    {{ user }}

    <router-link
      class="button is-info"
      type="primary"
      :to="{ path: '/home' }"
      replace
      >Kembali</router-link
    >
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
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
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
