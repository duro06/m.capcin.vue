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
   <div class="control has-icons-right">
    <v-text-field class="input" type="username" placeholder="Username" :rules="[rules.requred]"></v-text-field>
    <span class="icon is-small is-right">
     <i class="fa fa-user"></i>
    </span>
   </div>
  </div>

  <div class="field">
   <div class="control has-icons-right">
    <input
     class="input"
     type="email"
     name="email"
     placeholder="Email"
     :rules="[rules.requred, rules.email]"
    />
    <span class="icon is-small is-right">
     <i class="fa fa-envelope"></i>
    </span>
   </div>
  </div>

  <div class="field">
   <div class="control has-icons-right">
    <input
     class="input"
     type="password"
     name="password"
     placeholder="Password"
     :rules="[rules.password]"
    />
    <span class="icon is-small is-right">
     <i class="fa fa-key"></i>
    </span>
   </div>
  </div>
  <div class="field">
   <div class="control has-icons-right">
    <input class="input" type="password" name="password" placeholder="konfirmasi Password" />
    <span class="icon is-small is-right">
     <i class="fa fa-key"></i>
    </span>
   </div>
  </div>
  <div class="has-text-centered">
   <a class="button is-vcentered is-primary is-outlined" @click.prevent="register()">Sign Up!</a>
  </div>
  <div class="has-text-centered">
   <a href="login">Already have an account? Log in now !</a>
  </div>
 </section>
</template>
<script>
export default {
 name: 'signup',
 data: () => ({
  // username: '',
  // password: '',
  // email: '',
  show: true,
  pesan: 'pesan dari server',
  reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
  rules: {
   required: value => !!value || "Tidak boleh kosong",
   email: value => {
    return reg.test(value) || "Email tidak Valid"
   },
   password: value => (value.leght <= 6) || "Passwor tidak boleh kurang dari 6 karakter"
  }
 }),
 methods: {

 }
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