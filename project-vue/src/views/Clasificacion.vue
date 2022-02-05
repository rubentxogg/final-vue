<template>
  <div class="clasificacion">
    <h1 class="text-center m-5">Clasificación</h1>
    <h2 v-if="isLoading" class="text-center">Cargando...</h2>

    <div v-else-if="equipos.length < 1">
      <h2 class="text-danger text-center mb-4">Oops! BDD no encontrada</h2>
      <img src="../assets/error.png" class="w-100 img-thumbnail rounded" alt="errorBDD"/>
    </div>

    <tabla v-else :equipos="equipos" :escudos="escudos" />
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
        require("../assets/escudos/eib.png"),
        require("../assets/escudos/cta.png"),
        require("../assets/escudos/gda.png"),
        require("../assets/escudos/ath.png"),
        require("../assets/escudos/cdz.png"),
        require("../assets/escudos/osa.png"),
        require("../assets/escudos/bcn.png"),
        require("../assets/escudos/elch.png"),
        require("../assets/escudos/rma.png"),
        require("../assets/escudos/gtf.png"),
        require("../assets/escudos/alv.png"),
        require("../assets/escudos/bts.png"),
        require("../assets/escudos/vlz.png"),
        require("../assets/escudos/rso.png"),
        require("../assets/escudos/vlr.png"),
        require("../assets/escudos/hsc.png"),
        require("../assets/escudos/vlc.png"),
        require("../assets/escudos/lvt.png"),
        require("../assets/escudos/atl.png"),
        require("../assets/escudos/sva.png"),
      ],
      isLoading: false,
    };
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
h1,
h2 {
  width: 100%;
}
</style>
