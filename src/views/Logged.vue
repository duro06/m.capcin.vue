<template>
 <div class="logged">
  <div id="mid">
   <img alt="Vue logo" src="../assets/logocapcin.png" />
   <Welcome />
  </div>
 </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Welcome from '@/components/Welcome.vue'
export default {

  name: 'logged',
  components: {
    Navbar,
    Footer,
    Welcome
  }
}
</script>
