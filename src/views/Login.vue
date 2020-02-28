<template>
  <div class="login">
    <LoginForm msg="Login" />
  </div>
</template>
<script>
import LoginForm from "@/components/LoginTemplate.vue";
export default {
  name: "login",
  components: {
    LoginForm
  }
};
</script>
<style scoped></style>
