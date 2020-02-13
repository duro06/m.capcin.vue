<template>
 <section class="section">
  <div class="has-text-centered">
   <img class="login-logo" src="../../assets/logo.png" />
  </div>
  <transition name="slide-fade">
   <div class="notification is-warning is-light" v-if="show">
    <span class="icon is-medium has-text-danger">
     <i class="fas fa-2x fa-ban"></i>
    </span>
    <p>
     <strong>Oh Snap!</strong>
     {{ pesan }} Silahkan dunakan yang lain
    </p>
   </div>
  </transition>
  <div class="field">
   <div class="control has-icons-left has-icons-right">
    <input
     @change="UserValidation"
     :class="['input', classUser]"
     type="username"
     placeholder="Username"
     v-model="username"
    />
    <span class="icon is-small is-left">
     <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right" :style="{visibility: visUser}">
     <i class="fas fa-exclamation-triangle"></i>
    </span>
   </div>
   <p :class="['help', 'align-left', classUser]">{{ validUser }}</p>
  </div>

  <div class="field">
   <div class="control has-icons-left has-icons-right">
    <input
     @change="formValidation"
     :class="['input', classDanger]"
     type="email"
     placeholder="Email"
     v-model="email"
    />
    <span class="icon is-small is-left">
     <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right" :style="{visibility: visClass}">
     <i class="fas fa-exclamation-triangle"></i>
    </span>
   </div>
   <p :class="['help', 'align-left', classDanger]">{{ validMail }}</p>
  </div>

  <div class="field">
   <div class="control has-icons-left has-icons-right">
    <input
     @change="passOk"
     :class="['input', validPass]"
     type="password"
     placeholder="Password"
     v-model="password"
    />
    <span class="icon is-small is-left">
     <i class="fas fa-lock"></i>
    </span>
    <span class="icon is-small is-right is-success" :style="{visibility:visPass}">
     <i class="fas fa-check"></i>
    </span>
   </div>
   <p :class="['help', 'lign-left', validPass]">{{ passCheck }}</p>
  </div>

  <div class="field">
   <div class="control has-icons-left has-icons-right">
    <input
     :class="['input', classKonfirm]"
     type="password"
     placeholder="Konfirmasi Password"
     v-model="Kpassword"
    />
    <span class="icon is-small is-left">
     <i class="fas fa-lock"></i>
    </span>
    <span class="icon is-small is-right is-success" :style="{visibility:kPass}">
     <i class="fas fa-check"></i>
    </span>
   </div>
   <p :class="['help', 'lign-left', konfirm()]">{{ passKonfirm }}</p>
  </div>
  <div class="has-text-centered">
   <a
    :class="['button', 'is-vcentered', 'is-primary', 'is-outlined', loading]"
    @click.prevent="register()"
   >Sign Up!</a>
  </div>
  <div class="has-text-centered">
   <a href="/">Already have an account? Log in now !</a>
  </div>
 </section>
</template>
<script>
const _urlOriginApi = 'http://192.168.43.231/capcin/api/'
const _LurlApi = 'http://localhost/capcin/api/'
const _newUrlApp = _LurlApi + 'app'
const _newUrlUser = _LurlApi + 'users'
const _newUrlApiLogin = _LurlApi + 'apilogin'
const axios = require('axios').default
export default {
 name: 'signup',
 data() {
  return {
   pesan: 'pesan dari server',

   email: '',
   classDanger: '',
   visClass: 'hidden',
   validMail: '',

   password: '',
   validPass: '',
   visPass: 'hidden',
   passCheck: '',

   Kpassword: '',
   classKonfirm: '',
   kPass: 'hidden',
   passKonfirm: '',

   username: '',
   classUser: '',
   visUser: 'hidden',
   validUser: '',
   loading: '',
   Vmail: false,
   Vpass: false,
   show: false,
   reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,

  }
 },
 // computed: {

 // },
 methods: {
  register: function () {
   const vm = this
   const postData = {
    'username': encodeURIComponent(vm.username),
    'email': encodeURIComponent(vm.email),
    'password': encodeURIComponent(vm.password)
   }
   const config = {
    'X-API-KEY': 'capcin123'
   }
   if (vm.Vpass == true && vm.Vmail == true) {
    vm.loading = 'is-loading'
    axios.get(_newUrlUser + '/user?X-API-KEY=capcin123')
     .then(function (response) {

      console.log(response.data);
      vm.loading = ''
     })
     .catch(function (error) {
      console.log(error);
      vm.loading = ''
     })
     .then(function () {
      // always executed
     });
    // alert(postData)


   } else {
    vm.show = true
    setTimeout(function () {
     vm.show = false
    }, 1500)
   }
  },
  //====================== ngisi pesan aja ===============
  mailString(kelas, visib, pesan, pass) {
   const vm = this
   vm.classDanger = kelas
   vm.visClass = visib
   vm.validMail = pesan
   vm.Vmail = pass
  },
  passString(kelas, visib, pesan, pass) {
   const vm = this
   vm.validPass = kelas
   vm.visPass = visib
   vm.passCheck = pesan
   vm.Vpass = pass
  },
  //====================== ngisi pesan aja ===============

  //=================== validasi username ============
  UserValidation() {
   const vm = this
   if (vm.username == '') {
    vm.classUser = 'is-danger'
    vm.visUser = 'visible'
    vm.validUser = 'Tidak boleh kosong'
   } else if (vm.username != '' && vm.username.length <= 4) {
    vm.classUser = 'is-danger'
    vm.visUser = 'visible'
    vm.validUser = 'Minimal 5 karekter'
   } else {
    vm.classUser = 'is-success'
    vm.visUser = 'hidden'
    vm.validUser = ''
   }
  },
  konfirm() {
   const vm = this
   if (vm.password != vm.Kpassword && vm.Kpassword != '') {
    vm.classKonfirm = 'is-danger'
    vm.kPass = 'hidden'
    vm.passKonfirm = 'Tidak sama'
   } else if (vm.password == vm.Kpassword && vm.Kpassword != '') {
    vm.classKonfirm = 'is-success'
    vm.kPass = 'visible'
    vm.passKonfirm = ''

   } else {
    vm.classKonfirm = ''
    vm.kPass = 'hidden'
    vm.passKonfirm = ''
   }


  },
  //================= validasi email =====================
  formValidation: function () {
   const vm = this

   if (vm.email != '') {
    if (vm.reg.test(vm.email) == false) {
     vm.mailString('is-danger', 'visible', 'periksa kembali email anda', false)
    } else if (vm.reg.test(vm.email) == true) {
     vm.mailString('is-success', 'hidden', '', true)
    }
   } else {
    vm.mailString('', 'hidden', '', false)
   }
   return vm.classDanger
  },
  //=================== validasi Password ==================
  passOk: function () {
   const vm = this
   if (vm.email != '' && vm.validMail == '' && vm.password != '') {
    if (vm.password.length <= 5) {
     vm.passString('is-danger', 'hidden', 'password anda kurang dari 6 karakter', false)
    } else {
     vm.passString('is-success', 'visible', '', true)
    }
   } else if (vm.password != '' && vm.email == '') {
    vm.passString('is-danger', 'hidden', 'Email anda kosong', false)
   } else if (vm.password != '' && vm.validMail != '') {
    vm.passString('is-danger', 'hidden', 'Email anda belum valid', false)
   } else if (vm.password == '' && vm.email != '') {
    vm.passString('is-warning', 'hidden', 'Password tidak boleh kosong', false)
   }
   else {
    vm.passString('', 'hidden', '', false)
   }
   return vm.validPass
  },

 }

}
</script>
}

</script>
<style scoped>
img {
 width: 10%;
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