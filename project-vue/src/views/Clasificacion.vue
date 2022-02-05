<template>
  <div class="clasificacion">
    <h1 class="text-center m-5">Clasificación</h1>
    <h2 v-if="isLoading" class="text-center text-info">Cargando...</h2>
    <tabla v-else :equipos="equipos" :escudos="escudos"/>
    <pie-pagina />
  </div>
</template>

<script>
import Tabla from "@/components/Tabla.vue";
import PiePagina from "@/components/PiePagina.vue";
import axios from "axios";

export default {
  name: "Clasificacion",
  components: {
    Tabla,
    PiePagina,
  },
  data() {
    return {
      equipos: [],
      escudos: [
        require('../assets/escudos/rso.png'),
      ],
      isLoading: false,
    }
  },
  methods: {
    getEquipos(URL) {
      this.isLoading = true;
      axios
        .get(URL)
        .then((response) => (this.equipos = response.data))
        .catch((error) => console.error(error))
        .finally(() => (this.isLoading = false));
    },
    ordenarEquiposPorPts() {
      this.equipos.sort((a, b) => b.points - a.points);
    },
  },
  mounted() {
    this.getEquipos("http://localhost:3000/clubs/");
  },
  updated() {
    this.ordenarEquiposPorPts();
  },
};
</script>

<style scoped>
h1 {
  width: 100%;
}
</style>
