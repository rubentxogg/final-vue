<template>
  <div class="desplegable-jugadores dropdown container">
    <button :class="desactivarBoton" type="button" id="dropdownEquipo" data-bs-toggle="dropdown" aria-expanded="false">
         <i class="bi bi-people me-1"></i> Jugadores
    </button>

    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="#dropdownEquipo">
      <li v-for="jugador in jugadores" :key="jugador.id" @click="seleccionarJugador(jugador)">
        <a class="dropdown-item">{{ jugador.name }}</a>
        <hr class="dropdown-divider" />
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
    name: "DesplegableJugadores",
    props: ["escudos", "jugadores", "isDisabled"],
    events: ["seleccionJugador"],
    methods: {
        seleccionarJugador(jugador) {
            this.$emit("seleccionJugador", jugador);
        }
    },
    computed: {
        desactivarBoton() {
          if(this.isDisabled) return "btn btn-outline-secondary dropdown-toggle disabled";
          return "btn btn-outline-secondary dropdown-toggle";
        }
  }
}
</script>

<style scoped>
li {
  cursor: pointer;
}
</style>