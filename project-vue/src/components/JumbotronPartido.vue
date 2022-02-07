<template>
  <div class="jumbotron-partido mt-3 border border-5 p-5 text-center">
    <h1 class="display-5 fw-bold">{{ jornada }} <i class="bi bi-caret-right"></i> {{ fecha }}</h1>
    <p class="col-md-8 fs-4 w-100">{{ equipo1 }} {{ goles1 }} - {{ goles2 }} {{ equipo2 }}</p>
  </div>
</template>

<script>
export default {
  name: "JumbotronPartido",
  props: ["jornada", "fecha", "equipo1", "goles1", "goles2", "equipo2"]
};
</script>

<style></style>
