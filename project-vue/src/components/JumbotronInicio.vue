<template>
<div class="jumbotron-inicio text-center">
      <img :src="logo" alt="laLigaLogo" class="img-fluid">
        <h1 class="display-5 fw-bold">Temporada 2021-2022</h1>
        <p class="col-md-8 fs-4 w-100">
          Vive el fútbol, vive La Liga.
        </p>
</div>
</template>

<script>
export default {
    name: "JumbotronInicio",
    data() {
      return {
        logo: require('../assets/laliga.jpg'),
      }
    }
}
</script>

<style scoped>
h1{
    width: 100%;
}


</style>