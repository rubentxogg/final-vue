<template>
  <div class="jugadores d-flex align-self-start">
    <h1 class="text-center mt-4 w-100"><i class="bi bi-people m-3"></i>Jugadores</h1>
    <hr class="w-75" />
    <alert-warning :mensaje="msg" v-if="showAlertaWarning" @cerrarWarning="cerrarAlertaWarning" id="alertaWarning"/>

    <spinner v-if="isLoading" />

    <div v-else-if="equipos.length < 1">
      <h2 class="text-dark text-center mb-4">Oops! Error al conectar con la BBDD</h2>
      <img src="../assets/error.png" class="w-100 img-thumbnail rounded" alt="errorBDD" />
    </div>

    <div v-else class="container mt-5">
      <div class="row">
        <div class="col-6">
          <h2 class="text-center" id="jugadores">
            <i class="bi bi-diagram-3 m-3"></i>
          </h2>
          <hr>
          
          <div v-for="equipo in equipos" :key="equipo.id">
             <h4 @click="getJugadores(equipo.name); asignarEquipoActivo(equipo.name); goto('jugadores')" :class="{ isActive: equipoActivado(equipo.name) }">
              <img :src="escudos[equipo.id]" width="35" height="35" class="me-1 mb-1" alt="escudo"/> {{ equipo.name }} 
              <i v-if="equipoActivado(equipo.name)" class="bi bi-arrow-left-circle ms-1"></i>
             </h4>
            <hr />
          </div>
        </div>

        <div class="col-6">
          <h2 class="text-center">
            <i class="bi bi-person"></i>
          </h2>
          <hr>

          <accordion-jugador v-if="jugadores.length > 0" :jugadores="jugadores" @eliminarJugador="eliminarJugador" @anadirGoles="anadirGoles"/>
          <h2 v-else class="text-center">Haz click en un equipo</h2>
        </div>
      </div>
    </div>
    
    <pie-pagina />
  </div>
</template>

<script>
import Spinner from "@/components/Spinner.vue";
import PiePagina from "@/components/PiePagina.vue";
import AccordionJugador from "@/components/AccordionJugador.vue";
import AlertWarning from "@/components/AlertWarning.vue";
import axios from "axios";


export default {
    name: "Jugadores",
    components: {
      Spinner,
      PiePagina,
      AccordionJugador,
      AlertWarning
    },
    props: ["escudos"],
    data() {
      return {
        isLoading: false,
        equipos: [],
        jugadores: [],
        isActive : false,
        equipoActivo: "",
        showAlertaWarning: false,
        msg: ""
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

          if (this.jugadores.length < 1) {
            this.msg = `No hay jugadores en ${equipo}`;
            this.mostrarAlertaWarning();
          }
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
      asignarEquipoActivo(equipo) {
        this.equipoActivo = equipo;
      },
      equipoActivado(equipo) {
        if(equipo === this.equipoActivo) return true;
        return false;  
      },
      goto(refName) { // Saltar a elemento
        var element = this.$refs[refName];
      
        window.scrollTo(0, element);
      },
      mostrarAlertaWarning() {
        this.showAlertaWarning = true;
        this.goto("#alertaWarning");
      },
      cerrarAlertaWarning() {
        this.showAlertaWarning = false;
      },
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
  opacity: 80%;
}

.isActive {
text-align: center;
transform: scale(1.3,1.3);
}
</style>