<template>
  <div class="equipos d-flex align-self-start">
    <h1 class="text-center mt-4 w-100"><i class="bi bi-diagram-3 m-3"></i>Equipos</h1>
    <hr class="w-75 mb-auto" />
    <alert-warning :mensaje="msg" v-if="showAlertaWarning" @cerrarWarning="cerrarAlertaWarning" id="alertaWarning"/>
    <alert-exito :mensaje="msg" v-if="showAlertaExito" @cerrarExito="cerrarAlertaExito" id="alertaExito" class="mt-5"/>

    <spinner class="p-5" v-if="isLoading" />
  
    <div v-else-if="equipos.length < 1">
      <h2 class="text-dark text-center mb-4 w-100">Oops! Error al conectar con la BBDD</h2>
      <img src="../assets/error.png" class="w-100 img-thumbnail rounded" alt="errorBDD" />
    </div>

    <div v-else v-for="equipo in equipos" :key="equipo.id" class="m-4">
      <card-equipo :escudos="escudos" :equipo="equipo" @lanzarAlertaWarning="mostrarAlertaWarning" @lanzarAlertaExito="mostrarAlertaExito"/>
    </div>
  </div>
</template>

<script>
import CardEquipo from "@/components/CardEquipo.vue";
import Spinner from "@/components/Spinner.vue"
import AlertWarning from "@/components/AlertWarning.vue";
import AlertExito from "@/components/AlertExito.vue";
import axios from "axios";

export default {
  name: "Equipos",
  props: ["escudos"],
  components: {
    CardEquipo,
    Spinner,
    AlertWarning,
    AlertExito
  },
  data() {
    return {
      equipos: [],
      jugadores: [],
      isLoading: false,
      show: false,
      msg: "",
      showAlertaWarning: false,
      showAlertaExito: false
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
      mostrarAlertaWarning(msg) {
        this.showAlertaWarning = true;
        this.msg = msg;
        this.goto("#alertaWarning");
      },
      cerrarAlertaWarning() {
        this.showAlertaWarning = false;
      },
      mostrarAlertaExito() {
        this.showAlertaExito = true;
        this.msg = "Jugador añadido con éxito";
        this.goto("#alertaExito");
      },
      cerrarAlertaExito() {
        this.showAlertaExito = false;
      },
      goto(refName) { // Saltar a elemento
       var element = this.$refs[refName];
     
       window.scrollTo(0, element);
      }
    },
    mounted() {
      this.getEquipos("http://localhost:3000/clubs");
    }
}
</script>

<style scoped>

</style>