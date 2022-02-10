<template>
  <form class="formulario-jugador">
    <h1 class="mb-5">FORMULARIO JUGADOR</h1>
 
    <input type="text" name="nombre" placeholder="Nombre" class="form-control" />
    <desplegable-equipos :equipos="equipos" :escudos="escudos"/>
    <input type="number" name="goles" class="form-control" />
 
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
};
</script>

<style>
</style>