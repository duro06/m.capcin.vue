<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4 box">
          <div
            class="fadeInUp"
            v-wow
            data-wow-delay="0s"
            data-wow-duration="2s"
          >
            <h1 class="avatar has-text-centered section">
              <img src="../assets/logocapcin.png" alt="logo" />
            </h1>
          </div>

          <transition name="slide-fade">
            <div
              class="fadeInUp"
              v-wow
              data-wow-delay="0s"
              data-wow-duration="2s"
            >
              <p id="log" class="subtitle has-text-black">
                Please login to proceed.
              </p>
            </div>
          </transition>
          <form action>
            <div class="login-form">
              <form role="form" method="post">
                <div
                  class="field fadeInUp"
                  v-wow
                  data-wow-delay="0s"
                  data-wow-duration="2s"
                >
                  <p class="control has-icons-left has-icons-right">
                    <input
                      :class="['input', classDanger, 'is-small']"
                      type="email"
                      placeholder="Email"
                      data-lpignore="true"
                      v-model="user.email"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                    <span
                      class="icon is-small is-right"
                      :style="{ visibility: visClass }"
                    >
                      <i class="fas fa-exclamation-triangle"></i>
                    </span>
                  </p>
                  <p :class="['help', 'align-left', formValidation()]">
                    {{ validMail }}
                  </p>
                </div>

                <div
                  class="field fadeInUp"
                  v-wow
                  data-wow-delay="0s"
                  data-wow-duration="2s"
                >
                  <p class="control has-icons-left has-icons-right">
                    <input
                      :class="['input', passOk(), 'is-small']"
                      type="password"
                      placeholder="Password"
                      data-lpignore="true"
                      v-model="user.password"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                    <span
                      class="icon is-small is-right is-success"
                      :style="{ visibility: visPass }"
                    >
                      <i class="fas fa-check"></i>
                    </span>
                  </p>
                  <p :class="['help', 'lign-left', passOk()]">
                    {{ passCheck }}
                  </p>
                </div>

                <div
                  class="field fadeInUp level"
                  v-wow
                  data-wow-delay="0s"
                  data-wow-duration="2s"
                >
                  <div class="level-item has-text-centered ">
                    <input type="checkbox" v-model="user.remember" />
                    <label class="checkbox is-size-7 ">
                      Remember me
                    </label>
                  </div>
                </div>
                <div
                  class="field fadeInUp"
                  v-wow
                  data-wow-delay="0s"
                  data-wow-duration="2s"
                >
                  <p class="control">
                    <button
                      @click.prevent="submitForm"
                      :class="[
                        'button',
                        'is-block',
                        'is-danger',
                        'is-small',
                        'is-fullwidth',
                        loading,
                        'is-rounded'
                      ]"
                    >
                      Login
                    </button>
                  </p>
                </div>
              </form>
            </div>
            <hr />
            <div
              class="forgot-password fadeInUp"
              v-wow
              data-wow-delay="0s"
              data-wow-duration="2s"
            >
              <p class="has-text-centered has-text-small">
                Did you
                <a class="is-small" @click="forgot">forgot your password</a> or
                <a @click="signup">need an account?</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { login } from "../services/auth_service";
export default {
  name: "Login2",
  props: {
    msg: String
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
        remember: false
      },
      errors: {},

      classDanger: "",
      visClass: "hidden",
      validMail: "",
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      visPass: "hidden",
      passCheck: "",
      validPass: "",

      Vmail: false,
      Vpass: false,
      show: false,
      loading: ""
    };
  },
  updated() {
    if (localStorage.getItem("access_token")) {
      this.$router.replace(
        this.$route.query.redirect || { name: "home" },
        () => {}
      );
    }
  },
  // computed: {
  //   logged() {
  //     console.log(this.$store.getters.loggedIn);
  //     return this.$store.getters.loggedIn;
  //   }
  // },
  methods: {
    signup() {
      this.$router.replace("/signup");
    },
    forgot() {
      this.$router.replace("/forgot");
    },
    submitForm: async function() {
      const vm = this;

      if (vm.Vpass == true && vm.Vmail == true) {
        vm.loading = "is-loading";
        // vm.$store
        //   .dispatch("retrieveToken", this.user)
        //   .then(respons => {
        try {
          const response = await login(this.user);
          console.log(response);
          vm.loading = "";
          vm.$router.replace({ name: "home" }, () => {});
          this.flashMessage.success({
            message: "Login success",
            time: 2000
          });
          this.errors = {};
          // console.log(vm.logged);
          // if (response) {
          // }
        } catch (error) {
          console.log(error.response);
          if (error.response != undefined) {
            vm.loading = "";
            vm.user.password = "";
            //   console.log(error.response.data.message);

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
          }
        }
      } else {
        this.flashMessage.error({
          message: "Jangan buru-buru Om, di isi dulu",
          time: 4000
        });
      }
    },
    //====================== ngisi pesan aja ===============
    mailString(kelas, visib, pesan, pass) {
      const vm = this;
      vm.classDanger = kelas;
      vm.visClass = visib;
      vm.validMail = pesan;
      vm.Vmail = pass;
    },
    passString(kelas, visib, pesan, pass) {
      const vm = this;
      vm.validPass = kelas;
      vm.visPass = visib;
      vm.passCheck = pesan;
      vm.Vpass = pass;
    },
    //================= validasi email =====================
    formValidation: function() {
      const vm = this;

      if (vm.user.email != "") {
        if (vm.reg.test(vm.user.email) == false) {
          vm.mailString(
            "is-danger",
            "visible",
            "periksa kembali email anda",
            false
          );
        } else if (vm.reg.test(vm.user.email) == true) {
          vm.mailString("is-success", "hidden", "", true);
        }
      } else {
        vm.mailString("", "hidden", "", false);
      }
      return vm.classDanger;
    },
    //=================== validasi Password ==================
    passOk: function() {
      const vm = this;
      if (vm.user.email != "" && vm.validMail == "" && vm.user.password != "") {
        if (vm.user.password.length <= 5) {
          vm.passString(
            "is-danger",
            "hidden",
            "password anda kurang dari 6 karakter",
            false
          );
        } else {
          vm.passString("is-success", "visible", "", true);
        }
      } else if (vm.user.password != "" && vm.user.email == "") {
        vm.passString("is-danger", "hidden", "Email anda kosong", false);
      } else if (vm.user.password != "" && vm.validMail != "") {
        vm.passString("is-danger", "hidden", "Email anda belum valid", false);
      } else if (vm.user.password == "" && vm.user.email != "") {
        vm.passString(
          "is-warning",
          "hidden",
          "Password tidak boleh kosong",
          false
        );
      } else {
        vm.passString("", "hidden", "", false);
      }
      return vm.validPass;
    }
  }
};
</script>
<style scoped>
#log {
  padding-bottom: 10px;
}
</style>
