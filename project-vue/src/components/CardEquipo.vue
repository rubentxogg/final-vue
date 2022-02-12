<template>
  <div class="equipos card text-center">
    <div class="card-header">
        <img :src="escudos[equipo.id]" width="24" height="24" class="me-1 mb-1" alt="escudo"/>
    </div>

    <div class="card-body">
      <h5 class="card-title">{{ equipo.name }}</h5>
      <p class="card-text">{{ fraseEquipo(equipo.id) }}</p>
      
      <button class="btn btn-outline-secondary" @click="getJugadores(equipo.name)">{{ mostrarOcultarJugadores }}</button>
      <tabla-jugadores class="mt-3" :jugadores="jugadores" v-if="jugadores.length > 0 & showJugadores" />

      <button :class="botonNuevoJugador" @click="mostrarFormularioNuevoJugador" class="mb-2 ms-3">
        <i class="bi bi-person-plus m-1"></i>{{ textoBotonFormularioNuevoJugador }}
      </button>

      <formulario-jugador v-if="showNuevoJugador" :escudos="escudos" class="form-jugador" :nombreEquipo="equipo.name" :isDisabled="true" @actualizarTablaJugadores="actualizarTablaJugadores"/>
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
      jugadores: [],
      frasesEquipo: [
        "Bihotz armagina",
        "O fogar da afouteza, orgullo e tradición",
        "Con la luz y la magia de la Alhambra y la Sierra Nevada y su blanco resplandor",
        "Zu zara nagusia",
        "Ese Cádiz, OÉ ",
        "Fuerte y rojo es el color de tu blusa y tu bandera",
        "Més que un club",
        "Mucho elche, mucho elche",
        "Hasta el final, vamos Real",
        "Vamos Geta",
        "Gure hiria, Gure Taldeak",
        "Hay una leyenda que recorre el mundo entero",
        "Con grandes triunfos se hace la historia",
        "Txuri urdin maitea",
        "Endavant",
        "¡HUESCA! ¡HUESCA!",
        "Che que bo",
        "Tu nombre, mi ideal",
        "Nunca dejes de creer",
        "Dicen que nunca se rinde"
      ]
    }
  },
  methods : {
    async getJugadores(equipo) {
      this.jugadores = [];

      await axios.get("http://localhost:3000/players", {
        params: { team: equipo },
      }).then((response) => {
        this.jugadores = response.data;
      }).then(() => {
        this.comprobarJugadores(equipo);
      });
    },
    mostrarFormularioNuevoJugador() {
      this.showNuevoJugador = !this.showNuevoJugador;
    },
    actualizarTablaJugadores(equipo) {
      this.getJugadores(equipo);
      this.showJugadores = !this.showJugadores;
    },
    comprobarJugadores(equipo) {
      if(this.jugadores.length<1) {
        window.alert(`No hay jugadores en ${equipo}`);
      } else {
        this.showJugadores= !this.showJugadores;
      }
    },
    fraseEquipo(equipo) {
      return this.frasesEquipo[equipo];
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
    },
  }
};
</script>

<style scoped>
.form-jugador {
  margin-top: -2rem;
}

.equipos {
  width: 33rem;
}
</style>