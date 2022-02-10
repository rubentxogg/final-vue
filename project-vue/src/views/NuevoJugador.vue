<template>
  <div class="nuevo-jugador d-flex align-self-start">
    <h1 class="text-center mt-4 w-100">
      <i class="bi bi-person-plus m-3"></i>Nuevo Jugador
    </h1>
    <hr class="w-75 mb-auto" />

    <formulario-jugador :escudos="escudos"/>
  </div>
</template>

<script>
import FormularioJugador from "@/components/FormularioJugador.vue";

export default {
  name: "NuevoJugador",
  components: {
    FormularioJugador,
  },
  props: ["escudos"]
};
</script>

<style>
</style>