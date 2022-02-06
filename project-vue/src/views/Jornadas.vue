<template>
  <div class="jornadas d-flex align-self-start">
    <h1 class="text-center mt-4"><i class="bi bi-calendar-week m-3"></i>Jornadas</h1>
    <hr class="w-75 mb-auto" />
    <h2 v-if="isLoading" class="text-center">Cargando...</h2>
    <h2 v-else-if="jornadas.lenth < 1" class="text-center">No hay jornadas para mostrar</h2>
    <desplegable-jornadas v-else :jornadas="jornadas" @partidosJornada="partidosEnJornada" @mostrarJornadas="mostrarJornadas"/>
  </div>
</template>

<script>
import DesplegableJornadas from "@/components/DesplegableJornadas.vue";
import axios from "axios";

export default {
  name: "Jornadas",
  components: {
    DesplegableJornadas
  },
  data() {
    return {
      jornadas: [],
      partidosPorJornada: [],
      isLoading: false
    }
  },
  methods: {
    getJornadas(URL) {
      this.isLoading = true;
      axios
        .get(URL)
        .then((response) => (this.jornadas = response.data))
        .then(() => (this.jornadas = [...new Map(this.jornadas.map(jornada => [jornada.round && jornada.date, jornada])).values()]))
        .catch((error) => console.error(error))
        .finally(() => (this.isLoading = false));
    },
    partidosEnJornada(jornada, fecha) {
      console.log(`${jornada} - ${fecha}`);
    },
    mostrarJornadas() {
     // TODO
    }
  },
  mounted() {
    this.getJornadas('http://localhost:3000/matches');
  },
};
</script>

<style scoped>
h1, h2 {
  width: 100%;
}
</style>
