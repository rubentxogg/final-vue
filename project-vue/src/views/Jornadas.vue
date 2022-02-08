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
        :escudos="escudos"
        :jornada="partido.round" 
        :fecha="partido.date"
        :equipo1="partido.team1"
        :goles1="partido.score[0]"
        :goles2="partido.score[1]"
        :equipo2="partido.team2"
        :jugado="true" />

      <jumbotron-partido 
        v-else
        :escudos="escudos"
        :jornada="partido.round" 
        :fecha="partido.date"
        :equipo1="partido.team1"
        :equipo2="partido.team2"
        :jugado="false"
        @actualizarJornada="actualizarJornada"
        @puntuacionEquipos="puntuarEquipos"/>
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
  props: ["escudos"],
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
    puntuarEmpate(equipo) {
        return axios.put("http://localhost:3000/clubs/"+equipo.id, {
          name: equipo.name,
          id: equipo.id,
          country: equipo.country,
          points: equipo.points+1
        });
    },
    puntuarVictoria(equipo) {
        return axios.put("http://localhost:3000/clubs/"+equipo.id, {
          name: equipo.name,
          id: equipo.id,
          country: equipo.country,
          points: equipo.points+3
        });
    },
    async getEquipo(team) {
        return await axios.get('http://localhost:3000/clubs?name='+team.split().join("+"))
          .then((response) => response.data[0]);
    },
    async puntuarEquipos(equipo1, cont1, equipo2 ,cont2) {
      let team1;
      let team2;

      team1 = await this.getEquipo(equipo1);
      team2 = await this.getEquipo(equipo2);
      
      if(cont1 > cont2) this.puntuarVictoria(team1);
      if(cont1 < cont2) this.puntuarVictoria(team2);
      if(cont1 === cont2) {
        this.puntuarEmpate(team1);
        this.puntuarEmpate(team2);
      }
    },
    async actualizarJornada(jornada, fecha, equipo1, contEquipo1, contEquipo2, equipo2) {
      const jor = await axios.get('http://localhost:3000/matches?round='+jornada.split().join("+")+'&team1='+equipo1.split().join("+")+'&team2='+equipo2.split().join("+")+'&fecha='+fecha)
          .then((response) => response.data[0]);
      
      const actualizar = await axios.put("http://localhost:3000/matches/"+jor.id, {
          round: jor.round,
          date: jor.date,
          team1: jor.team1,
          team2: jor.team2,
          score: [
            contEquipo1,
            contEquipo2
          ]
        });

      actualizar;
      this.getPartidosEnJornada(jor.round, jor.date);
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
