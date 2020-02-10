<template>
 <div id="app">
  <div id="nav">
   <!-- <router-link to="/">Home</router-link>|
   <router-link to="/login" msg="Login">Login</router-link>-->
   <Navbar />
  </div>
  <div id="view">
   <router-view />
  </div>
  <div id="fot">
   <Footer />
  </div>
 </div>
</template>
<script>

import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
 components: {
  Navbar,
  Footer
 }
}
</script>

<style lang="scss">
#app {
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
}

#nav {
 padding: 3%;

 a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
   color: #42b983;
  }
 }
}
#fot {
 padding: 2%;
}
#view {
 padding: 2%;
}
</style>
