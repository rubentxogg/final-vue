<template>
  <form class="formulario-partido mb-auto">
    <fieldset class="border border-1 rounded p-5 pt-0 d-flex flex-wrap flex-column m-auto">
    <p class="d-flex mt-5">
      <desplegable-nueva-jornada :jornadas="jornadas" @seleccionJornada="seleccionarJornada"/>
      <input class="text-center fs-5 form-control" type="text" name="jornada" readonly :value="nombreJornada"/>
    </p>

    <p class="d-flex">
      <desplegable-equipos :escudos="escudos" :equipos="equipos" @seleccionEquipo="seleccionarEquipo1"/>
      <input class="text-center fs-5 form-control" type="text" name="jornada" readonly :value="equipo1"/>
    </p>

    <p class="d-flex">
      <desplegable-equipos :escudos="escudos" :equipos="equipos" @seleccionEquipo="seleccionarEquipo2"/>
      <input class="text-center fs-5 form-control" type="text" name="jornada" readonly :value="equipo2"/>
    </p>

    <p class="d-flex">
      <button class="btn btn-outline-secondary ms-4 date" type="button">
        <i class="bi bi-clock-history"></i> Fecha&nbsp;&nbsp;&nbsp;
      </button>
      <input class="m-auto fs-5 text-center ms-auto form-control" type="date" name="fecha" v-model="fecha">
    </p>

    <button type="button" :class="desactivarBoton" @click="nuevoPartido(nombreJornada, equipo1, equipo2, fecha)">Añadir</button>
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
    DesplegableEquipos,
  },
  props: ["escudos"],
  data() {
    return {
        jornadas: [],
        equipos: [],
        nombreJornada: "",
        equipo1: "",
        equipo2: "",
        fecha: "",
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
    },
    nuevoPartido(nombreJornada, equipo1, equipo2, fecha) {
      axios
        .post("http://localhost:3000/matches", {
          round: nombreJornada,
          date: fecha,
          team1: equipo1,
          team2: equipo2
        })
        .then(window.alert("Partido añadido con éxito"), this.fecha = "", this.equipo1 = "", this.equipo2 = "", this.nombreJornada = "");
    }
  },
  computed: {
    desactivarBoton() {
      if(this.equipo1 === "" || this.equipo2 === "" || this.fecha === "" || this.nombreJornada === "" || this.equipo1 === this.equipo2) return "btn btn-lg mt-4 w-75 m-auto btn-outline-danger disabled";
      return "btn btn-lg mt-4 w-75 m-auto btn-outline-success";
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

input[type="date"] {
  margin-left: 7rem !important;
  width: 223px;
  cursor: pointer;
}

.date {
  cursor: default;
}
</style>