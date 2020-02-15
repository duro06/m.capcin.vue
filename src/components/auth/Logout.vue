<template></template>
<script>
export default {
  created () {
    this.$store.dispatch('destroyToken')
      .then(response => {
        this.$router.replace(this.$route.query.redirect || '/')
      })
      .catch(error => {
        this.$router.replace(this.$route.query.redirect || '/')
      })
  }

}
</script>
