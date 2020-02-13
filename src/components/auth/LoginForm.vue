<template>
 <div class="login">
  <section class="hero is-success is-fullheight is-flex-mobile">
   <div class="hero-body">
    <div class="container has-text-centered">
     <div class="column is-4 is-offset-4">
      <h2 class="mgbt-xs-5">
       <img :src="logo" alt="logo" />
      </h2>

      <h3 class="title has-text-black header">{{ msg }}</h3>
      <hr class="login-hr" />
      <transition name="slide-fade">
       <p class="subtitle has-text-black" v-if="!show">Please login to proceed.</p>
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
      <div class="box form-control">
       <figure class="avatar">
        <img :src="merk" />
       </figure>
       <form id="validate-form" action="#" @submit.prevent="submitForm">
        <div class="field">
         <div class="control has-icons-left has-icons-right">
          <input :class="['input', classDanger]" type="email" placeholder="Email" v-model="email" />
          <span class="icon is-small is-left">
           <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right" :style="{visibility: visClass}">
           <i class="fas fa-exclamation-triangle"></i>
          </span>
         </div>
         <p :class="['help', 'align-left', formValidation()]">{{ validMail }}</p>
        </div>

        <div class="field">
         <div class="control has-icons-left has-icons-right">
          <input
           :class="['input', passOk()]"
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
         <p :class="['help', 'lign-left', passOk()]">{{ passCheck }}</p>
        </div>
        <div class="field">
         <label class="checkbox">
          <input type="checkbox" />
          Remember me
         </label>
        </div>

        <button
         @click.prevent="submitForm"
         :class="['button', 'is-block', 'is-info', 'is-normal', 'is-fullwidth', loading, 'is-rounded']"
        >
         Login
         <i class="fas fa-sign-in-alt"></i>
        </button>
       </form>
      </div>
      <p class="has-text-grey">
       <a href="/signup">Sign Up</a> &nbsp;·&nbsp;
       <a href="../">Forgot Password</a> &nbsp;·&nbsp;
       <a href="../">Need Help?</a>
      </p>
     </div>
    </div>
   </div>
  </section>
 </div>
</template>
<script>
// const _urlOriginApi = 'http://192.168.43.231/capcin/api/'
// const _LurlApi = 'http://127.0.0.1/capcin/api/'
// const _newUrlApp = _LurlApi + 'app'
// const _newUrlUser = _LurlApi + 'user/login'
// const _newUrlApiLogin = _LurlApi + 'apilogin'

// const axios = require('axios').default

// import '../assets/js/bulma.js'
import { mapState } from 'vuex'
export default {
 name: 'LoginTemplate',
 props: {
  msg: String,
  dataSuccessMessage: String
 },
 data() {
  return {
   email: '',
   classDanger: '',
   visClass: 'hidden',
   validMail: '',
   reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
   password: '',
   visPass: 'hidden',
   passCheck: '',
   validPass: '',
   logo: '../../assets/logo.png',
   merk: 'https://placehold.it/128x128',
   Vmail: false,
   Vpass: false,
   show: false,
   loading: '',
   successMessage: this.dataSuccessMessage,
   serverError: ''
  }
 },
 // updated() {
 //  if (localStorage.getItem('access_token')) {
 //   this.$router.replace(this.$route.query.redirect || '/logged')
 //  }

 // },
 methods: {

  //================= login request ===============
  submitForm: function () {

   if (this.Vpass == true && this.Vmail == true) {
    this.loading = 'is-loading'

    //==========================ajax point ==============
    // $.ajax({
    //  url: _newUrlUser,
    //  type: 'post',
    //  dataType: 'json',
    //  data: {
    //   'X-API-KEY': 'capcin123',
    //   'email': this.email,
    //   'password': this.password
    //  },
    //  success: function (hasil) {
    //   vm.loading = ''
    //   if (hasil.status == true) {
    //    console.log(hasil)
    //    localStorage.token = hasil.data.token
    //    vm.$router.replace(vm.$route.query.redirect || '/logged')
    //   } else {
    //    vm.loading = ''
    //    delete localStorage.token
    //    alert('ga dapat data')

    //   }
    //  },
    //  error: function (error) {
    //   vm.loading = ''
    //   delete localStorage.token
    //   console.log(error.responseJSON)

    //   // alert('sorry bos Error')

    //  }
    // })
    // =============================================

    this.$store.dispatch('retrieveToken', {
     email: this.email,
     password: this.password,
    })
     .then(response => {
      this.loading = ''
      this.$router.push('/logged')
     })
     .catch(error => {
      this.loading = ''
      this.serverError = error.response.data.errors
      this.password = ''
      this.successMessage = ''
      // console.log(error.response.data)
     })


   } else {
    this.show = true
    setTimeout(function () { this.show = false }, 2000)
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
  //================= Re-render componen data ==============
  forceRendere() {
   const vm = this
   vm.logo = vm.logo
   // console.log(vm.logo)
  },
 },
 mounted: function () {
  //========================= ambil data ====================
  const vm = this
  const axios = require('axios').default
  // axios.defaults.headers.common['X-API-KEY'] = 'capcin123'
  axios.get('http://localhost/capcin/api/app')
   .then(function (response) {
    if (response.data.status == true) {
     vm.logo = response.data.data.logo
    }
   })
   .catch(function (error) {
    console.log(error);
    location.reload()
   })

 },

}

</script>
<style scoped>
.login {
 padding-bottom: 5%;
}
@import "../../assets/css/login.css";
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