<template>
  <section class="hero is-danger is-fullheight is-flex-mobile">
    <div class="hero-body">
      <div class="container has-text-centered">
        <transition name="slide-fade">
          <div class="notification is-warning is-light" v-if="show">
            <span class="icon is-medium has-text-danger">
              <i class="fas fa-2x fa-ban"></i>
            </span>
            <p>
              <strong>Oh Snap!</strong>
              Silahkan di isi dahulu yang belum di isi
            </p>
          </div>
        </transition>
        <transition name="slide-fade">
          <div class="notification is-warning is-light" v-if="pesan">
            <span class="icon is-medium has-text-danger">
              <i class="fas fa-2x fa-ban"></i>
            </span>
            <p>
              <strong>Oh Snap!</strong>
              {{ pesan }}
            </p>
          </div>
        </transition>
        <div class="box form-control">
          <div
            class="field fadeInUp"
            v-wow
            data-wow-delay="0s"
            data-wow-duration="2s"
          >
            <figure class="avatar">
              <img src="../../assets/logocapcin.png" />
            </figure>
          </div>
          <form
            action="#"
            @submit.prevent="register"
            class="is-light is-danger"
          >
            <div
              class="field fadeInUp"
              v-wow
              data-wow-delay="0s"
              data-wow-duration="2s"
            >
              <div class="field">
                <div class="control has-icons-left">
                  <input
                    @change="NameValidation"
                    :class="['input', className, 'is-small']"
                    type="name"
                    placeholder="Nama"
                    v-model="user.name"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-portrait"></i>
                  </span>
                </div>
                <p :class="['help', 'align-left', className]">
                  {{ validName }}
                </p>
              </div>
            </div>

            <!-- <div
              class="field fadeInUp"
              v-wow
              data-wow-delay="0s"
              data-wow-duration="2s"
            >
              <div class="field">
                <div class="control has-icons-left has-icons-right">
                  <input
                    @change="UserValidation"
                    :class="['input', classUser, 'is-small']"
                    type="username"
                    placeholder="Username"
                    v-model="username"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                  <span
                    class="icon is-small is-right"
                    :style="{ visibility: visUser }"
                  >
                    <i class="fas fa-exclamation-triangle"></i>
                  </span>
                </div>
                <p :class="['help', 'align-left', classUser]">
                  {{ validUser }}
                </p>
              </div>
            </div> -->

            <div
              class="field fadeInUp"
              v-wow
              data-wow-delay="0s"
              data-wow-duration="2s"
            >
              <div class="field">
                <div class="control has-icons-left has-icons-right">
                  <input
                    @change="formValidation"
                    :class="['input', classDanger, 'is-small']"
                    type="email"
                    placeholder="Email"
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
                </div>
                <p :class="['help', 'align-left', classDanger]">
                  {{ validMail }}
                </p>
              </div>
            </div>

            <div
              class="field fadeInUp"
              v-wow
              data-wow-delay="0s"
              data-wow-duration="2s"
            >
              <div class="field">
                <div class="control has-icons-left">
                  <div :class="['select', valSelect, 'is-small']">
                    <select v-model="user.role" @change="validasiSelect">
                      <option v-for="(level, t) in levels" :key="t">
                        {{ level.nama }}
                      </option>
                    </select>
                  </div>
                  <span class="icon is-small is-left">
                    <i class="far fa-id-card"></i>
                  </span>
                </div>
              </div>
            </div>

            <div
              class="field fadeInUp"
              v-wow
              data-wow-delay="0s"
              data-wow-duration="2s"
            >
              <div class="field">
                <div class="control has-icons-left has-icons-right">
                  <input
                    @change="passOk"
                    :class="['input', validPass, 'is-small']"
                    type="password"
                    placeholder="Password"
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
                </div>
                <p :class="['help', 'lign-left', validPass]">{{ passCheck }}</p>
              </div>
            </div>

            <div
              class="field fadeInUp"
              v-wow
              data-wow-delay="0s"
              data-wow-duration="2s"
            >
              <div class="field">
                <div class="control has-icons-left has-icons-right">
                  <input
                    :class="['input', classKonfirm, 'is-small']"
                    type="password"
                    placeholder="Konfirmasi Password"
                    v-model="user.password_confirmation"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                  <span
                    class="icon is-small is-right is-success"
                    :style="{ visibility: kPass }"
                  >
                    <i class="fas fa-check"></i>
                  </span>
                </div>
                <p :class="['help', 'lign-left', konfirm()]">
                  {{ passKonfirm }}
                </p>
              </div>
            </div>

            <div
              class="field fadeInUp"
              v-wow
              data-wow-delay="0s"
              data-wow-duration="2s"
            >
              <div class="has-text-centered">
                <button
                  :class="[
                    'button',
                    'is-vcentered',
                    'is-primary',
                    'is-outlined',
                    loading,
                    'is-small',
                    'is-rounded'
                  ]"
                  @click.prevent="register"
                >
                  Daftar
                </button>
              </div>
            </div>
          </form>
        </div>
        <div
          class="field fadeInUp"
          v-wow
          data-wow-delay="0s"
          data-wow-duration="2s"
        >
          <div class="has-text-centered">
            <a @click="toLogin" style="color: white">
              Sudah Punya Akun?
              <strong style="text-decoration:underline;">Log in</strong>
              Sekarang !
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "signup",
  data() {
    return {
      pesan: "",

      user: {
        name: "",
        email: "",
        role: "",
        password: "",
        password_confirmation: ""
      },

      username: "",

      className: "",
      validName: "",
      classDanger: "",
      visClass: "hidden",
      validMail: "",

      levels: [
        { id: "", nama: "Pilih bagian" },
        { id: 3, nama: "Produksi" },
        { id: 4, nama: "Packing" },
        { id: 5, nama: "Supplier" },
        { id: 6, nama: "Mitra" }
      ],
      // phone: null,
      // classPhone: '',
      // validPhone: '',

      // addres: '',
      // classAddres: '',
      // validAddres: '',
      valSelect: "",
      validPass: "",
      visPass: "hidden",
      passCheck: "",

      classKonfirm: "",
      kPass: "hidden",
      passKonfirm: "",

      ServerError: "",

      classUser: "",
      visUser: "hidden",
      validUser: "",
      loading: "",
      Vmail: false,
      Vpass: false,
      show: false,
      reg2: /^[a-z0-9]+$/i,
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    };
  },
  updated() {
    if (localStorage.getItem("waiting_verivication")) {
      this.$router.replace(this.$route.query.redirect || "/test");
    }
  },
  methods: {
    toLogin() {
      this.$router.replace("/");
    },
    register: function() {
      const vm = this;
      // if (vm.role == "") {
      //   vm.valSelect = "is-danger";
      // }
      if (vm.Vpass == true && vm.Vmail == true) {
        vm.loading = "is-loading";
        // const params = new FormData();
        // params.append("nama", vm.name);
        // params.append("username", vm.username);
        // params.append("email", vm.email);
        // params.append("id_level", vm.role);
        // params.append("password", vm.password);

        vm.$store
          .dispatch("register", this.user)
          .then(response => {
            console.log(response);
            vm.$store.dispatch(
              "retrieveVerifie",
              "asdasdadasdasdadasdasdasdasdasdasdasdasdsad"
            );
            this.flashMessage.success({
              message: response.data.message,
              time: 5000
            });
            vm.loading = "";
            this.$router.replace({ name: "test" }, () => {});
          })
          .catch(error => {
            if (error) {
              console.log(error);
              // if (error.response.data.errors.username == "username") {
              //   vm.classUser = "is-danger";
              //   vm.visUser = "visible";
              //   (vm.validUser = "Username sudah ada, harap diganti"),
              //     (vm.username = "");
              // }
              if (error.response.data.errors.email == "email") {
                vm.classDanger = "is-danger";
                vm.visClass = "visible";
                vm.validMail = "Email sudah terdaftar, harap diganti";
                vm.user.email = "";
              }
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
                default:
                  this.flashMessage.error({
                    message: "Some error occured, Please Try Again!",
                    time: 5000
                  });
                  break;
              }

              vm.loading = "";
            }
          })
          .then(function() {
            // always executed
          });
        // alert(postData)
      } else if (
        vm.user.name == "" ||
        vm.user.email == "" ||
        vm.slected == "" ||
        // vm.username == "" ||
        vm.user.password == ""
      ) {
        vm.NameValidation();
        vm.validasiSelect();
        // vm.UserValidation();
        vm.formValidation();
        vm.passOk();
        this.flashMessage.error({
          message: "silahkan isi dahulu yang belum di isi",
          time: 5000
        });
      } else {
        this.flashMessage.error({
          message: "silahkan isi dahulu yang belum di isi",
          time: 5000
        });
        vm.show = true;
        setTimeout(function() {
          vm.show = false;
        }, 1500);
      }
    },
    splitError(e) {
      // const vm = this
      const data = e.split(":");
      console.log(data);
    },
    //= ===================== ngisi pesan aja ===============
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
    //= ===================== Validasi nama ===============
    NameValidation() {
      if (this.name == "") {
        this.className = "is-danger";
        this.validName = "Nama tidak boleh kosong";
      } else {
        this.className = "";
        this.validName = "";
      }
    },
    //= ===================== Validasi Level ===============

    validasiSelect() {
      if (this.role == "") {
        this.valSelect = "is-danger";
      } else {
        this.valSelect = "";
      }
    },
    // //====================== Validasi alamat ===============

    // addresValidation() {
    //  if (this.addres == "") {
    //   this.classAddres = "is-danger"
    //   this.validAddres = "alamat tidak boleh kosong"
    //  } else {
    //   this.classAddres = ""
    //   this.validAddres = ""
    //  }
    // },
    //= ================== validasi username ============
    // UserValidation() {
    //   const vm = this;
    //   if (vm.username == "") {
    //     vm.classUser = "is-danger";
    //     vm.visUser = "visible";
    //     vm.validUser = "Tidak boleh kosong";
    //   } else if (vm.reg2.test(vm.username) == false) {
    //     vm.classUser = "is-danger";
    //     vm.visUser = "visible";
    //     vm.validUser =
    //       "gunakan karakter alpha-numerik (a-z / 0-9) dalam satu kata";
    //   } else if (vm.username >= 20) {
    //     vm.classUser = "is-danger";
    //     vm.visUser = "visible";
    //     vm.validUser = "tidak boleh lebih dari 20 karakter";
    //   } else {
    //     vm.classUser = "is-success";
    //     vm.visUser = "hidden";
    //     vm.validUser = "";
    //   }
    // },
    konfirm() {
      const vm = this;
      if (
        vm.user.password != vm.user.password_confirmation &&
        vm.user.password_confirmation != ""
      ) {
        vm.classKonfirm = "is-danger";
        vm.kPass = "hidden";
        vm.passKonfirm = "Tidak sama";
        vm.Vpass = false;
      } else if (
        vm.user.password == vm.user.password_confirmation &&
        vm.user.password_confirmation != ""
      ) {
        vm.classKonfirm = "is-success";
        vm.kPass = "visible";
        vm.passKonfirm = "";
        vm.Vpass = true;
      } else {
        vm.classKonfirm = "";
        vm.kPass = "hidden";
        vm.passKonfirm = "";
      }
    },
    //= ================ validasi email =====================
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
      } else if (vm.user.email >= 80) {
        vm.mailString(
          "is-danger",
          "visible",
          "tidak boleh lebih dari 80 karakter",
          false
        );
      } else {
        vm.mailString("", "hidden", "", false);
      }
      return vm.classDanger;
    },
    //= ================== validasi Password ==================
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

@import "../../assets/css/login.css";
.hero-body {
  padding-top: 20px;
  padding-bottom: 20px;
}

img {
  width: 20%;
  height: auto;
}
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
