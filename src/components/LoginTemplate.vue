<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4 box">
          <div
            class="fadeInUp"
            v-wow
            data-wow-delay="0.2s"
            data-wow-duration="2s"
          >
            <h1 class="avatar has-text-centered section">
              <img src="../assets/logocapcin.png" alt="logo" />
            </h1>
          </div>

          <transition name="slide-fade">
            <p class="subtitle has-text-black" v-if="!show">
              Please login to proceed.
            </p>
            <div class="notification is-warning is-light" v-if="show">
              <span class="icon is-medium has-text-danger">
                <i class="fas fa-2x fa-ban"></i>
              </span>
              <p>
                <strong>Oh Snap!</strong>
                Diisi dulu om.. jangan buru-buru
              </p>
            </div>
          </transition>
          <form action>
            <div class="notification is-warning is-light" v-if="successMessage">
              <span class="icon is-medium has-text-danger">
                <i class="fas fa-2x fa-ban"></i>
              </span>
              <p>{{ successMessage }}</p>
            </div>
            <div class="notification is-warning is-light" v-if="serverError">
              <span class="icon is-medium has-text-danger">
                <i class="fas fa-2x fa-ban"></i>
              </span>
              <p>{{ serverError }}</p>
            </div>

            <div class="login-form">
              <form role="form" method="post">
                <div
                  class="field fadeInUp"
                  v-wow
                  data-wow-delay="0.2s"
                  data-wow-duration="2s"
                >
                  <p class="control has-icons-left has-icons-right">
                    <input
                      :class="['input', classDanger, 'is-small']"
                      type="email"
                      placeholder="Email"
                      data-lpignore="true"
                      v-model="email"
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
                  data-wow-delay="0.2s"
                  data-wow-duration="2s"
                >
                  <p class="control has-icons-left">
                    <input
                      :class="['input', passOk(), 'is-small']"
                      type="password"
                      placeholder="Password"
                      data-lpignore="true"
                      v-model="password"
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

                <div class="field" style="visibility:hidden">
                  <p class="control">
                    <label class="checkbox">
                      <input type="checkbox" />Remember me
                    </label>
                  </p>
                </div>
                <div
                  class="field fadeInUp"
                  v-wow
                  data-wow-delay="0.2s"
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
              data-wow-delay="0.2s"
              data-wow-duration="2s"
            >
              <p class="has-text-centered has-text-small">
                Did you
                <a class="is-small" href="/forgot">forgot your password</a> or
                <a href="/signup">need an account?</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Login2",
  props: {
    msg: String,
    dataSucccessMessage: String
  },
  data() {
    return {
      email: "",
      classDanger: "",
      visClass: "hidden",
      validMail: "",
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      password: "",
      visPass: "hidden",
      passCheck: "",
      validPass: "",

      Vmail: false,
      Vpass: false,
      show: false,
      loading: "",
      successMessage: this.dataSucccessMessage,
      serverError: ""
    };
  },
  // computed: {

  // },
  methods: {
    submitForm: function() {
      const vm = this;

      if (vm.Vpass == true && vm.Vmail == true) {
        vm.loading = "is-loading";
        vm.$store
          .dispatch("retrieveToken", {
            email: vm.email,
            password: vm.password
          })
          .then((vm.loading = ""), vm.$router.push("/logged"))
          .catch(error => {
            vm.loading = "";
            vm.serverError = error.response.data.message;
            vm.password = "";
            vm.successMessage = "";
            setTimeout(function() {
              vm.serverError = "";
            }, 2000);
          });
      } else {
        vm.show = true;
        setTimeout(function() {
          vm.show = false;
        }, 1500);
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

      if (vm.email != "") {
        if (vm.reg.test(vm.email) == false) {
          vm.mailString(
            "is-danger",
            "visible",
            "periksa kembali email anda",
            false
          );
        } else if (vm.reg.test(vm.email) == true) {
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
      if (vm.email != "" && vm.validMail == "" && vm.password != "") {
        if (vm.password.length <= 5) {
          vm.passString(
            "is-danger",
            "hidden",
            "password anda kurang dari 6 karakter",
            false
          );
        } else {
          vm.passString("is-success", "visible", "", true);
        }
      } else if (vm.password != "" && vm.email == "") {
        vm.passString("is-danger", "hidden", "Email anda kosong", false);
      } else if (vm.password != "" && vm.validMail != "") {
        vm.passString("is-danger", "hidden", "Email anda belum valid", false);
      } else if (vm.password == "" && vm.email != "") {
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

.fadeInUp {
  animation-name: fadeInUp;
  animation-timing-function: ease-out;
}
/* @import "../assets/css/login.css"; */
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
