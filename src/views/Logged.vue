<template>
 <div class="logged">
  <div id="nav">
   <Navbar />
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

 name: 'logged',
 components: {
  Navbar,
  Footer
 }
}
</script>