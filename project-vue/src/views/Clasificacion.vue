<template>
  <div class="clasificacion">
    <h1 class="text-center mt-4"><i class="bi bi-bar-chart-line m-3"></i>Clasificación</h1>
    <hr class="w-75 mb-5" />
    <spinner v-if="isLoading" />

    <div v-else-if="equipos.length < 1">
      <h2 class="text-dark text-center mb-4">Oops! Error al conectar con la BBDD</h2>
      <img src="../assets/error.png" class="w-100 img-thumbnail rounded" alt="errorBDD" />
    </div>

    <div v-else class="container">
      <div class="row d-flex justify-content-between flex-wrap">
        <div class="col-6">
          <tabla-equipos :equipos="equipos" :escudos="escudos" @mostrarJugadores="getJugadores" />
        </div>

        <div class="col-6">
          <tabla-jugadores :jugadores="jugadores" />
        </div>
      </div>
    </div>

    <pie-pagina />
  </div>
</template>

<script>
import TablaEquipos from "@/components/TablaEquipos.vue";
import TablaJugadores from "@/components/TablaJugadores.vue";
import PiePagina from "@/components/PiePagina.vue";
import Spinner from "@/components/Spinner.vue"
import axios from "axios";

export default {
  name: "Clasificacion",
  components: {
    TablaEquipos,
    TablaJugadores,
    PiePagina,
    Spinner
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
      jugadores: [],
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
    async getJugadores(equipo) {
      this.jugadores = [];

      try {
        const response = await axios.get("http://localhost:3000/players", {
          params: { team: equipo },
        });
        this.jugadores = response.data;
        
        if (this.jugadores.length < 1) window.alert(`No hay jugadores en ${equipo}`);
      } catch (err) {
        console.log(err);
      }
    },
    ordenarEquiposPorPts() {
      this.equipos.sort((a, b) => b.points - a.points);
    },
    ordenarJugadoresPorGoles() {
      this.jugadores.sort((a, b) => b.scores - a.scores);
    },
  },
  mounted() {
    this.getEquipos("http://localhost:3000/clubs");
  },
  updated() {
    this.ordenarEquiposPorPts();
    this.ordenarJugadoresPorGoles();
  },
};
</script>

<style scoped>
h1,
h2 {
  width: 100%;
}
</style>
