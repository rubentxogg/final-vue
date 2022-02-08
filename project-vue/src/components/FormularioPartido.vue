<template>
  <form class="formulario-partido mb-auto">
    <fieldset class="border border-4 rounded p-5 pt-0">
      <legend class="text-muted text-center fs-4 mb-4 mt-2">Añadir partido</legend>

    <p class="d-flex">
      <desplegable-nueva-jornada :jornadas="jornadas" @seleccionJornada="seleccionarJornada"/>
      <input class="text-center fs-5" type="text" name="jornada" readonly :value="nombreJornada"/>
    </p>

    <p class="d-flex">
      <desplegable-equipos :equipos="equipos" @seleccionEquipo="seleccionarEquipo1"/>
      <input class="text-center fs-5" type="text" name="jornada" readonly :value="equipo1"/>
    </p>

    <p class="d-flex">
      <desplegable-equipos :equipos="equipos" @seleccionEquipo="seleccionarEquipo2"/>
      <input class="text-center fs-5" type="text" name="jornada" readonly :value="equipo2"/>
    </p>
    
    </fieldset>
  </form>
</template>

<script>
import DesplegableNuevaJornada from "@/components/DesplegableNuevaJornada";
import DesplegableEquipos from "@/components/DesplegableEquipos";
import axios from 'axios';

export default {
  name: "FormularioPartido",
  components: {
    DesplegableNuevaJornada,
    DesplegableEquipos
  },
  data() {
    return {
        jornadas: [],
        equipos: [],
        nombreJornada: "",
        equipo1: "",
        equipo2: ""
    }
  },
  methods: {
    getJornadas(URL) {
    axios
     .get(URL)
     .then((response) => (this.jornadas = response.data))
     .then(() => (this.jornadas = [...new Map(this.jornadas.map(jornada => [jornada.round, jornada])).values()]))
     .catch((error) => console.error(error));
    },
    getEquipos(URL) {
      axios
        .get(URL)
        .then((response) => (this.equipos = response.data))
        .catch((error) => console.error(error));

    },
    seleccionarJornada(jornada) {
      this.nombreJornada = jornada;
    },
    seleccionarEquipo1(equipo) {
      this.equipo1 = equipo;
    },
    seleccionarEquipo2(equipo) {
      this.equipo2 = equipo;
    }
  },
  mounted() {
    this.getJornadas('http://localhost:3000/matches');
    this.getEquipos("http://localhost:3000/clubs");
  }
};
</script>

<style scoped>
li {
  cursor: pointer;
}

input{
  border: 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.705);
}
</style>