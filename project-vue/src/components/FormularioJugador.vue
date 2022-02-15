<template>
  <form class="formulario-jugador">
     <fieldset class="p-5 pt-0 d-flex flex-wrap flex-column mt-1 g-1">
      <p class="mt-5 d-flex justify-content-center">
        <input type="text" name="nombre" placeholder="Nombre" class="form-control text-center fs-5" v-model="jugador" />
      </p>

      <p class="d-flex align-self-center">
        <desplegable-equipos :equipos="equipos" :escudos="escudos" @seleccionEquipo="seleccionarEquipo" class="d-flex" :isDisabled="isDisabled"/>
        <input type="text" name="equipos" class="form-control text-center fs-5" :value="equipo" readonly>
      </p>

      <p class="d-flex justify-content-center">
        <input type="number" name="goles" placeholder="Goles" class="form-control text-center fs-5" v-model="goles"/>
      </p>

      <button type="button" :class="desactivarBoton" @click="anadirJugador(jugador, equipo, goles)">Añadir</button>
    </fieldset>
  </form>
  
</template>

<script>
import DesplegableEquipos from "@/components/DesplegableEquipos";
import axios from "axios";

export default {
  name: "FormularioJugador",
  components: {
    DesplegableEquipos,
  },
  props: ["escudos", "nombreEquipo", "isDisabled"],
  data() {
    return {
      equipos: [],
      equipo: "",
      jugador: "",
      goles: ""
    }
  },
  events: ["actualizarTablaJugadores", "lanzarAlertaExito"],
  methods: {
    getEquipos(URL) {
      this.isLoading = true;
      axios
        .get(URL)
        .then((response) => (this.equipos = response.data))
        .catch((error) => console.error(error))
        .finally(() => (this.isLoading = false));
    },
     seleccionarEquipo(equipo) {
        this.equipo = equipo;
    },
    anadirJugador(jugador, equipo, goles) {
      axios
        .post("http://localhost:3000/players", {
          name: jugador,
          team: equipo,
          scores: goles
        })
        .then(() => {
          this.$emit("actualizarTablaJugadores", equipo);
          this.$emit("lanzarAlertaExito");
        })
        .finally(() => {
          this.jugador = "";
          this.goles = "";
        });
    }
  },
  computed: {
    desactivarBoton() {
      let regLetra = /^\w+$/;
      let regNum = /\d+/;

      if(this.equipo === undefined || this.jugador === "" || this.goles < 0 || !regLetra.test(this.goles) || regNum.test(this.jugador)) return "btn btn-lg mt-4 w-75 m-auto btn-outline-success disabled";
      return "btn btn-lg mt-4 w-75 m-auto btn-outline-success";
    },
  },
  mounted() {
    this.getEquipos("http://localhost:3000/clubs");
    this.equipo = this.nombreEquipo;
  },
};
</script>

<style scoped>

</style>