<template>
  <div class="clasificacion d-flex align-self-start">
    <h1 class="text-center mt-4"><i class="bi bi-bar-chart-line m-3"></i>Clasificación</h1>
    <hr class="w-75 mb-1" />
    <alert-warning :mensaje="msg" v-if="showAlertaWarning" @cerrarWarning="cerrarAlertaWarning" id="alertaWarning" class="mb-2"/>

    <spinner v-if="isLoading" />

    <div v-else-if="equipos.length < 1">
      <h2 class="text-dark text-center mb-4">Oops! Error al conectar con la BBDD</h2>
      <img src="../assets/error.png" class="w-100 img-thumbnail rounded" alt="errorBDD" />
    </div>

    <div v-else class="container mt-5">
      <div class="row d-flex justify-content-between flex-wrap">
        <div class="col-6">
          <tabla-equipos :equipos="equipos" :escudos="escudos" @mostrarJugadores="getJugadores"/>
        </div>

        <div class="col-6">
          <tabla-jugadores :jugadores="jugadores" id="jugadores" />
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
import Spinner from "@/components/Spinner.vue";
import AlertWarning from "@/components/AlertWarning.vue";
import axios from "axios";

export default {
  name: "Clasificacion",
  components: {
    TablaEquipos,
    TablaJugadores,
    PiePagina,
    Spinner,
    AlertWarning
  },
  props: ["escudos"],
  data() {
    return {
      equipos: [],
      jugadores: [],
      isLoading: false,
      msg: "",
      showAlertaWarning: false
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
        
        if (this.jugadores.length < 1) {
          this.msg = `No hay jugadores en ${equipo}`;
          this.mostrarAlertaWarning();
        } else {
          this.goto('jugadores');
        }
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
    goto(refName) { // Saltar a elemento
      var element = this.$refs[refName];
     
      window.scrollTo(0, element);
    },
    mostrarAlertaWarning() {
      this.showAlertaWarning = true;
      this.goto("#alertaWarning");
    },
    cerrarAlertaWarning() {
      this.showAlertaWarning = false;
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
