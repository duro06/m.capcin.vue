<template>
 <div id="navbar">
  <nav class="navbar is-fixed-top is-danger" role="navigation" aria-label="main navigation">
   <div class="navbar-brand">
    <router-link class="navbar-item wow slideInLeft" to="/" data-wow-duration="1s">Home</router-link>
    <!-- <a><?= app_name()?></!-->

    <a
     role="button"
     class="navbar-burger has-text-white"
     :class="{ 'is-active': isActive }"
     aria-label="menu"
     aria-expanded="false"
     @click="switchMenu"
    >
     <span aria-hidden="true"></span>
     <span aria-hidden="true"></span>
     <span aria-hidden="true"></span>
    </a>
   </div>

   <div
    class="navbar-menu wow fadeInDown"
    :class="{ 'is-active': isActive }"
    data-wow-duration="1s"
   >
    <div class="navbar-start">
     <div class="navbar-item wow slideInDown" data-wow-duration="1s">
      <div class="field is-grouped">
       <p class="control">
        <router-link class="button is-ligth" to="/login">
         <span class="icon">
          <i class="fas fa-sign-in-alt"></i>
         </span>
         <span>
          <!-- <router-link to="/login" msg="Login">Login</router-link> -->
          Login
         </span>
        </router-link>
       </p>
      </div>
     </div>
    </div>

    <div class="navbar-end">
     <a
      class="navbar-item wow slideInDown <?= (isset($menu) && $menu === 'home' ? 'is-active' : ''); ?>"
      href="<?= base_url('home') ?>"
      data-wow-duration="1s"
      data-wow-delay="0.4s"
     >Beranda</a>

     <a
      class="navbar-item wow slideInDown <?= (isset($menu) && $menu === 'puskesmas' ? 'is-active' : ''); ?>"
      href="<?= base_url('puskesmas') ?>"
      data-wow-duration="1s"
      data-wow-delay="0.4s"
     >Puskesmas</a>

     <a
      class="navbar-item wow slideInDown <?= (isset($menu) && $menu === 'rsk' ? 'is-active' : ''); ?>"
      href="<?= base_url('rsk') ?>"
      data-wow-duration="1s"
      data-wow-delay="0.6s"
     >Rumah Sakit Khusus</a>

     <a
      class="navbar-item wow slideInDown <?= (isset($menu) && $menu === 'rsu' ? 'is-active' : ''); ?>"
      href="<?= base_url('rsu') ?>"
      data-wow-duration="1s"
      data-wow-delay="0.8s"
     >Rumah Sakit Umum</a>
    </div>
   </div>
  </nav>
 </div>
</template>
<script>
// import '/assets/js/bulma.js'
export default {
 name: 'navbar',
 props: {
  msg: String
 },
 data: () => ({
  isActive: false
 }),

 methods: {
  switchMenu() {
   this.isActive = !this.isActive
  }
 }
}
</script>
