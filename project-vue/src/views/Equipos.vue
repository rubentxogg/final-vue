<template>
  <div class="equipos">
    <h1 class="text-center mt-4 w-100"><i class="bi bi-diagram-3 m-3"></i>Equipos</h1>
    <hr class="w-75 mb-5" />

    <spinner v-if="isLoading" />
  
    <div v-else-if="equipos.length < 1">
      <h2 class="text-dark text-center mb-4 w-100">Oops! Error al conectar con la BBDD</h2>
      <img src="../assets/error.png" class="w-100 img-thumbnail rounded" alt="errorBDD" />
    </div>

    <div v-else v-for="equipo in equipos" :key="equipo.id" class="m-4">
      <card-equipo :escudos="escudos" :equipo="equipo"/>
    </div>
  </div>
</template>

<script>
import CardEquipo from "@/components/CardEquipo.vue";
import axios from "axios";

export default {
  name: "Equipos",
  props: ["escudos"],
  components: {
    CardEquipo,
  },
  data() {
    return {
      equipos: [],
      jugadores: [],
      isLoading: false,
      show: false
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
    },
    mounted() {
      this.getEquipos("http://localhost:3000/clubs");
    }
}
</script>

<style scoped>

</style>