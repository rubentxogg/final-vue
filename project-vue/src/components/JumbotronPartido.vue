<template>
  <div class="jumbotron-partido mt-3 border border-5 p-5 text-center d-flex flex-wrap gap-2 justify-content-center">
    <h1 class="display-5 fw-bold">{{ jornada }} <i class="bi bi-caret-right"></i> {{ fecha }}</h1>
    <p v-if="jugado" class="col-md-8 fs-4 w-100">
      <img :src="escudos[mostrarEscudo(equipo1)]" width="24" height="24" class="me-1 mb-1" alt="º"/> 
      {{ equipo1 }} {{ goles1 }} - {{ goles2 }} {{ equipo2 }}
      <img :src="escudos[mostrarEscudo(equipo2)]" width="24" height="24" class="me-1 mb-1" alt="º"/>
    </p>

    <p v-else class="col-md-8 fs-4 w-100 ">
      <img :src="escudos[mostrarEscudo(equipo1)]" width="24" height="24" class="me-1 mb-1" alt="º"/>
      {{ equipo1 }} 
      <input type="number" name="cont1" min="0" class="me-3 rounded" v-model="contEquipo1"> 
      <input type="number" name="cont2" min="0" class="rounded" v-model="contEquipo2"> 
      {{ equipo2 }}
      <img :src="escudos[mostrarEscudo(equipo2)]" width="24" height="24" class="me-1 mb-1" alt="º"/>
      <button type="button" class="btn btn-outline-success ms-2" :class="desactivarBoton" @click="actualizarJornada(jornada, fecha, equipo1, contEquipo1, contEquipo2, equipo2); puntuacionEquipos(equipo1, equipo2)">Guardar</button>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "JumbotronPartido",
  props: [
    "escudos",
    "jornada", 
    "fecha", 
    "equipo1", 
    "goles1", 
    "goles2", 
    "equipo2", 
    "jugado"
  ],
  events: ["puntuacionEquipos", "actualizarJornada"],
  data() {
    return {
      contEquipo1: "",
      contEquipo2: "",
      equipos: [],
    }
  },
  methods: {
    puntuacionEquipos(equipo1, equipo2) {
      this.$emit("puntuacionEquipos",equipo1, this.contEquipo1, equipo2, this.contEquipo2);
      this.contEquipo1 = "";
      this.contEquipo2 = "";
    },
    getEquipos(URL) {
      this.isLoading = true;
      axios
        .get(URL)
        .then((response) => (this.equipos = response.data))
        .catch((error) => console.error(error))
        .finally(() => (this.isLoading = false));
    },
    mostrarEscudo(equipo) {
      for(let i=0; i<this.equipos.length; i++) {
        if(this.equipos[i].name == equipo) return this.equipos[i].id;
      }
    },
    actualizarJornada(jornada, fecha, equipo1, contEquipo1, contEquipo2, equipo2) {
      this.$emit("actualizarJornada", jornada, fecha, equipo1, contEquipo1, contEquipo2, equipo2);
    }
  },
  computed: {
    desactivarBoton() {
      let reg = /^\w+$/;
      if(this.contEquipo1 < 0 || this.contEquipo2 < 0 || !reg.test(this.contEquipo1) || !reg.test(this.contEquipo2)) return "btn btn-outline-danger disabled";
      return "btn btn-outline-success";
    }
  },
  mounted() {
    this.getEquipos("http://localhost:3000/clubs");
  }

  
};
</script>

<style scoped>
input {
  text-align: center;
  width: 5rem;
}

.jumbotron-partido:hover {
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.829);
}
</style>
