<template>
 <div class="login">
  <LoginForm msg="Login" />
 </div>
</template>
<script>
import LoginForm from '@/components/auth/LoginForm.vue'
export default {
  name: 'login',
  components: {
    LoginForm
  }
}
</script>
<style scoped>
@import "../assets/css/login.css";
</style>
