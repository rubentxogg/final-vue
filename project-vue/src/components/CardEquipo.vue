<template>
  <div class="equipos card text-center">
    <div class="card-header">
        <img :src="escudos[equipo.id]" width="24" height="24" class="me-1 mb-1" alt="escudo"/>
    </div>

    <div class="card-body">
      <h5 class="card-title">{{ equipo.name }}</h5>
      <p class="card-text">
        With supporting text below as a natural lead-in to additional content.
      </p>
      
      <button class="btn btn-outline-secondary" @click="getJugadores(equipo.name)">{{ mostrarOcultarJugadores }}</button>
      <tabla-jugadores class="mt-3" :jugadores="jugadores" v-if="jugadores.length > 0 & showJugadores" />

      <button :class="botonNuevoJugador" @click="mostrarFormularioNuevoJugador">
        <i class="bi bi-person-plus m-1"></i>{{ textoBotonFormularioNuevoJugador }}
      </button>

      <formulario-jugador v-if="showNuevoJugador" :escudos="escudos" class="form-jugador" :nombreEquipo="equipo.name"/> //TODO :nombreEquipo
    </div>

    <div class="card-footer text-muted" >Vive el fútbol, vive La Liga</div>
  </div>
</template>

<script>
import TablaJugadores from "@/components/TablaJugadores.vue";
import FormularioJugador from "@/components/FormularioJugador.vue";
import axios from "axios";

export default {
  name: "CardEquipo",
  props: ["escudos", "equipo"],
  components: {
    TablaJugadores,
    FormularioJugador
  },
  data() {
    return {
      showJugadores: false,
      showNuevoJugador: false,
      nombreEquipo: "",
      jugadores: []
    }
  },
  methods : {
    async getJugadores(equipo) {
      this.jugadores = [];

      try {
        const response = await axios.get("http://localhost:3000/players", {
          params: { team: equipo },
        });
        this.jugadores = response.data;
        
        if (this.jugadores.length < 1) {
          window.alert(`No hay jugadores en ${equipo}`);
        } else {
          this.showJugadores = !this.showJugadores;
        }
      } catch (err) {
        console.log(err);
      }
    },
    mostrarFormularioNuevoJugador() {
      this.showNuevoJugador = !this.showNuevoJugador;
    }
  },
  computed: {
    mostrarOcultarJugadores() {
      if(!this.showJugadores) return "Mostrar jugadores";
      return "Ocultar jugadores";
    },
    textoBotonFormularioNuevoJugador() {
      if(!this.showNuevoJugador) return "Nuevo jugador";
      return "Cancelar"
    },
    botonNuevoJugador() {
      if(!this.showNuevoJugador) return "btn btn-outline-success mt-2";
      return "btn btn-outline-warning mt-2"
    }
  }
};
</script>

<style scoped>
.form-jugador {
  margin-top: -2rem;
}
</style>