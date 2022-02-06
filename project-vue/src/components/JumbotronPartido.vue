<template>
  <div class="jumbotron-partido mt-3 border border-5 p-5">
    <h1 class="display-5 fw-bold">{{ jornada }} {{ fecha }}</h1>
    <p class="col-md-8 fs-4 w-100">Vive el fútbol, vive La Liga.</p>
  </div>
</template>

<script>
export default {
  name: "JumbotronPartido",
  props: ["jornada", "fecha"]
};
</script>

<style></style>
