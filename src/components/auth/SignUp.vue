<template>
 <section class="hero is-success is-fullheight is-flex-mobile">
  <div class="hero-body">
   <div class="container has-text-centered">
    <transition name="slide-fade">
     <div class="notification is-warning is-light" v-if="show">
      <span class="icon is-medium has-text-danger">
       <i class="fas fa-2x fa-ban"></i>
      </span>
      <p>
       <strong>Oh Snap!</strong>
       Silahkan di isi dahulu
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
     <figure class="avatar">
      <img src="../../assets/logocapcin.png" />
     </figure>
     <form action="#" @submit.prevent="register">
      <div class="field">
       <div class="control has-icons-left">
        <input
         @change="NameValidation"
         :class="['input', className]"
         type="name"
         placeholder="Nama"
         v-model="name"
        />
        <span class="icon is-small is-left">
         <i class="fas fa-portrait"></i>
        </span>
       </div>
       <p :class="['help', 'align-left', className]">{{ validName }}</p>
      </div>

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
       <div class="control has-icons-left">
        <input
         @change="phoneValidation"
         :class="['input', classPhone]"
         type="phone"
         placeholder="Telepon"
         v-model="phone"
        />
        <span class="icon is-small is-left">
         <i class="fas fa-phone"></i>
        </span>
       </div>
       <p :class="['help', 'align-left', classPhone]">{{ validPhone }}</p>
      </div>

      <div class="field">
       <div class="control has-icons-left">
        <input
         @change="addresValidation"
         :class="['input', classAddres]"
         type="address"
         placeholder="Alamat"
         v-model="addres"
        />
        <span class="icon is-small is-left">
         <i class="fas fa-map-marker-alt"></i>
        </span>
       </div>
       <p :class="['help', 'align-left', classAddres]">{{ validAddres }}</p>
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
       <button
        :class="['button', 'is-vcentered', 'is-primary', 'is-outlined', loading]"
        @click.prevent="register"
       >Daftar</button>
      </div>
     </form>
    </div>
    <div class="has-text-centered">
     <a href="/">
      Sudah Punya Akun?
      <strong style="text-decoration:underline;">Log in</strong> Sekarang !
     </a>
    </div>
   </div>
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
   pesan: '',

   name: '',
   className: '',
   validName: '',

   email: '',
   classDanger: '',
   visClass: 'hidden',
   validMail: '',

   phone: null,
   classPhone: '',
   validPhone: '',

   addres: '',
   classAddres: '',
   validAddres: '',

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
   reg2: /^[a-z0-9]+$/i,
   reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,

  }
 },
 // computed: {

 // },
 methods: {
  register: function () {
   const vm = this

   if (vm.Vpass == true && vm.Vmail == true) {
    vm.loading = 'is-loading'
    vm.$store.dispatch('register', {
     nama: vm.name,
     username: vm.username,
     email: vm.email,
     telp: vm.phone,
     alamat: vm.addres,
     password: vm.password,
    })
     .then(function (response) {
      console.log(response.data)
      vm.$store.dispatch('retrieveVerifie', 'register')
      vm.loading = ''
      this.$router.push('/test')
     })
     .catch(function (error) {
      vm.loading = ''
      console.log(error.response.data.message)
      vm.pesan = error.response.data.errors
      setTimeout(function () { vm.pesan = '' }, 5000)
     })
     .then(function () {
      // always executed
     });
    // alert(postData)


   } else if (vm.name == '' || vm.phone == '' || vm.addres == '') {
    vm.NameValidation()
    vm.phoneValidation()
    vm.addresValidation()
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
  //====================== Validasi nama ===============
  NameValidation() {
   if (this.name == '') {
    this.className = 'is-danger'
    this.validName = 'Nama tidak boleh kosong'
   } else {
    this.className = ''
    this.validName = ''
   }

  },
  //====================== Validasi tlp ===============

  phoneValidation() {
   if (this.phone == '') {
    this.classPhone = 'is-danger'
    this.validPhone = 'nomor telepon tidak boleh kosong'
   } else if (isNaN(this.phone)) {
    this.classPhone = 'is-danger'
    this.validPhone = 'nomor telepon hanya diisi angka'
   } else {
    this.classPhone = ''
    this.validPhone = ''
   }

  },
  //====================== Validasi alamat ===============

  addresValidation() {
   if (this.addres == '') {
    this.classAddres = 'is-danger'
    this.validAddres = 'alamat tidak boleh kosong'
   } else {
    this.classAddres = ''
    this.validAddres = ''
   }
  },
  //=================== validasi username ============
  UserValidation() {
   const vm = this
   if (vm.username == '') {
    vm.classUser = 'is-danger'
    vm.visUser = 'visible'
    vm.validUser = 'Tidak boleh kosong'
   } else if ((vm.reg2.test(vm.username) == false)) {
    vm.classUser = 'is-danger'
    vm.visUser = 'visible'
    vm.validUser = 'gunakan karakter alpha-numerik (a-z / 0-9) dalam satu kata'
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
    vm.Vpass = false
   } else if (vm.password == vm.Kpassword && vm.Kpassword != '') {
    vm.classKonfirm = 'is-success'
    vm.kPass = 'visible'
    vm.passKonfirm = ''
    vm.Vpass = true
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