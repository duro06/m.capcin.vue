<template>
  <div></div>
</template>
<script>
export default {
  created() {
    this.$store
      .dispatch("destroyToken")
      .then(this.$router.replace(this.$route.query.redirect || "/"))
      .catch(this.$router.replace(this.$route.query.redirect || "/"));
  }
};
</script>
