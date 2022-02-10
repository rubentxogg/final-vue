<template>
  <form class="formulario-jugador">
    <input type="text" name="nombre" placeholder="Nombre" class="form-control text-center fs-5" v-model="jugador" />

    <desplegable-equipos :equipos="equipos" :escudos="escudos" @seleccionEquipo="seleccionarEquipo"/>
    <input type="text" name="equipos" class="form-control text-center fs-5" :value="equipo" readonly>

    <input type="number" name="goles" class="form-control text-center fs-5" v-model="goles"/>

    <button type="button" :class="desactivarBoton">Añadir</button>
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
  props: ["escudos"],
  data() {
    return {
      equipos: [],
      equipo: "",
      jugador: "",
      goles: ""
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
     seleccionarEquipo(equipo) {
        this.equipo = equipo;
    },
  },
  computed: {
    desactivarBoton() {
      let reg = /^\w+$/;

      if(this.equipo === "" || this.jugador === "" || this.goles < 0 || !reg.test(this.goles)) return "btn btn-lg mt-4 w-75 m-auto btn-outline-danger disabled";
      return "btn btn-lg mt-4 w-75 m-auto btn-outline-success";
    },
  },
   mounted() {
    this.getEquipos("http://localhost:3000/clubs");
  }
};
</script>

<style>
</style>