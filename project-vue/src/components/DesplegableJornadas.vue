<template>
  <div class="desplegable-jornadas mt-3 text-center">
    <button class="btn btn-dark dropdown-toggle fs-4" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" @click="mostrarJornadas">
      Seleccionar jornada
    </button>

    <ul v-if="jornadas.length > 0" class="dropdown-menu" arial-labelledby="dropdownMenuButton">
      <li class="dropdown-item text-center p-2" v-for="jornada in jornadas" :key="jornada.id" @click="partidosJornada(jornada.round, jornada.date)">
        <i class="bi bi-calendar4 me-1 mb-1"></i> {{ jornada.round }} - {{ jornada.date }}
        <hr class="dropdown-divider" />
      </li>
    </ul>

    <h2 v-else class="text-center mt-5">No hay jornadas</h2>
  </div>
</template>

<script>
export default {
  name: "DesplegableJornadas",
  props: ["jornadas"],
  events: ["mostrarJornadas","partidosJornada"],
  methods: {
    partidosJornada(jornada, fecha) {
      this.$emit("partidosJornada", jornada, fecha);
    },
    mostrarJornadas() {
      this.$emit("mostrarJornadas");
    }
  }
};
</script>

<style scoped>
li {
  cursor: pointer;
}

.desplegable-jornadas {
  width: 100%;
}

h2 {
  width: 100%;
}
</style>
