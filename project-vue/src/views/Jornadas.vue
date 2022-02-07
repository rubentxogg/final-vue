<template>
  <div class="jornadas d-flex align-self-start">
    <h1 class="text-center mt-4"><i class="bi bi-calendar-week m-3"></i>Jornadas</h1>
    <hr class="w-75 mb-auto" />

    <spinner v-if="isLoading" class="p-5"/>
    <h2 v-else-if="jornadas.lenth < 1" class="text-center">No hay jornadas para mostrar</h2>
    <desplegable-jornadas v-else :jornadas="jornadas" @partidosJornada="getPartidosEnJornada" @mostrarJornadas="mostrarJornadas"/>

    <div v-for="partido in partidosJornadaFecha" :key="partido.id">
      <jumbotron-partido 
        v-if="partido.hasOwnProperty('score')"
        :jornada="partido.round" 
        :fecha="partido.date"
        :equipo1="partido.team1"
        :goles1="partido.score[0]"
        :goles2="partido.score[1]"
        :equipo2="partido.team2"
        :jugado="true" />

      <jumbotron-partido 
        v-else
        :jornada="partido.round" 
        :fecha="partido.date"
        :equipo1="partido.team1"
        :equipo2="partido.team2"
        :jugado="false" />
    </div>
    
  </div>
</template>

<script>
import DesplegableJornadas from "@/components/DesplegableJornadas.vue";
import JumbotronPartido from '@/components/JumbotronPartido.vue';
import Spinner from "@/components/Spinner.vue"
import axios from "axios";

export default {
  name: "Jornadas",
  components: {
    DesplegableJornadas,
    JumbotronPartido,
    Spinner
  },
  data() {
    return {
      jornadas: [],
      partidosJornadaFecha: [],
      isLoading: false,
    }
  },
  methods: {
    getJornadas(URL) {
      this.isLoading = true;
      axios
        .get(URL)
        .then((response) => (this.jornadas = response.data))
        .then(() => (this.jornadas = [...new Map(this.jornadas.map(jornada => [jornada.round && jornada.date, jornada])).values()]))
        .catch((error) => console.error(error))
        .finally(() => (this.isLoading = false));
    },
    getPartidosEnJornada(jornada, fecha) {
      this.partidosJornadaFecha = [];
      axios
        .get('http://localhost:3000/matches', {
          params: { round: jornada, date: fecha }
        })
        .then((response) => this.partidosJornadaFecha = response.data)
        .catch((error) => console.error(error));
    },
    mostrarJornadas() {
     // TODO
    }
  },
  mounted() {
    this.getJornadas('http://localhost:3000/matches');
  },
};
</script>

<style scoped>
h1, h2 {
  width: 100%;
}
</style>
