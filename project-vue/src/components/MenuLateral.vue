<template>
  <nav class="menu-lateral col-2 bg-primary bg-gradient">
    <router-link to="/">Inicio</router-link>
  </nav>
</template>

<script>
export default {
    name: "MenuLateral"
}
</script>

<style scoped>
nav{
  height: 100vh;
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>