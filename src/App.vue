<template>
 <div id="app">
  <router-view />
 </div>
</template>
<script>


export default {
 name: 'app',
 updated() {
  if (!localStorage.token && this.$route.path !== '/') {
   this.$router.push('/?redirect=' + this.$route.path)
  }
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
 padding-bottom: 3%;

 a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
   color: #42b983;
  }
 }
}
#fot {
 padding-top: 2%;
}
#view {
 padding-bottom: 2%;
}
</style>
