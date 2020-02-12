<template>
 <div class="logged">
  <div id="nav">
   <Navbar />
  </div>
  <div id="mid">
   <img alt="Vue logo" src="../assets/logo.png" />
   <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
  <div id="fot">
   <Footer />
  </div>
 </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import HelloWorld from '@/components/HelloWorld.vue'
export default {

 name: 'logged',
 components: {
  Navbar,
  Footer,
  HelloWorld
 }
}
</script>
