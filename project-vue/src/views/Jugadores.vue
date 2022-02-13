<template>
  <div class="jugadores d-flex align-self-start">
    <h1 class="text-center mt-4 w-100"><i class="bi bi-people m-3"></i>Jugadores</h1>
    <hr class="w-75 mb-5" />
    <spinner v-if="isLoading" />

    <div v-else-if="equipos.length < 1">
      <h2 class="text-dark text-center mb-4">Oops! Error al conectar con la BBDD</h2>
      <img src="../assets/error.png" class="w-100 img-thumbnail rounded" alt="errorBDD" />
    </div>

    <div v-else class="container">
      <div class="row">
        <div class="col-6">
          <h2 class="text-center">
            <i class="bi bi-diagram-3 m-3"></i>
          </h2>
          <hr>
          
          <div v-for="equipo in equipos" :key="equipo.id">
             <h4 @click="getJugadores(equipo.name)">
              <img :src="escudos[equipo.id]" width="35" height="35" class="me-1 mb-1" alt="escudo"/> {{ equipo.name }}
             </h4>
            <hr />
          </div>
        </div>

        <div class="col-6">
          <h2 class="text-center">
            <i class="bi bi-person"></i>
          </h2>
          <hr>

          <accordion-jugador :jugadores="jugadores" @eliminarJugador="eliminarJugador" @anadirGoles="anadirGoles"/>
        </div>
      </div>
    </div>

    <pie-pagina />
  </div>
</template>

<script>
import Spinner from "@/components/Spinner.vue";
import PiePagina from "@/components/PiePagina.vue";
import AccordionJugador from "@/components/AccordionJugador.vue"
import axios from "axios";


export default {
    name: "Jugadores",
    components: {
      Spinner,
      PiePagina,
      AccordionJugador
    },
    props: ["escudos"],
    data() {
      return {
        isLoading: false,
        equipos: [],
        jugadores: [],
        isActive : false
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
      async getJugadores(equipo) {
        this.jugadores = [];

        try {
          const response = await axios.get("http://localhost:3000/players", {
            params: { team: equipo },
          });
          this.jugadores = response.data;

          if (this.jugadores.length < 1) window.alert(`No hay jugadores en ${equipo}`);
        } catch (err) {
          console.log(err);
        }
      },
      eliminarJugador(jugador) {
        axios.delete("http://localhost:3000/players/"+jugador.id)
          .then(() => this.getJugadores(jugador.team));
      },
      anadirGoles(jugador, goles) {
        axios.put("http://localhost:3000/players/"+jugador.id, {
          id: jugador.id,
          name: jugador.name,
          team: jugador.team,
          scores: jugador.scores + goles
        })
        .then(() => this.getJugadores(jugador.team));
      },
      equipoActivo() {
        this.isActive = !this.isActive;
      }
    },
    mounted() {
      this.getEquipos("http://localhost:3000/clubs");
    }
}
</script>

<style scoped>
h4{
  cursor: pointer;
}

h4:hover{
  color: red;
}
</style>