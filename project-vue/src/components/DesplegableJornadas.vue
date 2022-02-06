<template>
  <div class="desplegable-jornadas mb-auto text-center">
    <button class="btn btn-dark btn-lg dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
      Seleccionar jornada
    </button>

    <ul class="dropdown-menu" arial-labelledby="dropdownMenuButton">
      <li class="dropdown-item" v-for="jornada in jornadas" :key="jornada.id">
        <i class="bi bi-calendar4 me-1"></i> {{ jornada.round }} - {{ jornada.date }}
        <hr class="dropdown-divider" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DesplegableJornadas",
  props: ["jornadas"],
};
</script>

<style scoped>
li {
  cursor: pointer;
}

.desplegable-jornadas {
  width: 100%;
}
</style>
