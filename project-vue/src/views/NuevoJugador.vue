<template>
  <div class="nuevo-jugador d-flex align-self-start">
    <h1 class="text-center mt-4 w-100">
      <i class="bi bi-person-plus m-3"></i>Nuevo Jugador
    </h1>
    <hr class="w-75 mb-auto" />
    <alert-exito :mensaje="msg" v-if="showAlertaExito" @cerrarExito="cerrarAlertaExito" id="alertaExito" class="mt-5"/>

    <formulario-jugador :escudos="escudos" class="border border-1 rounded mt-5" @lanzarAlertaExito="mostrarAlertaExito"/>
  </div>
</template>

<script>
import FormularioJugador from "@/components/FormularioJugador.vue";
import AlertExito from "@/components/AlertExito.vue";

export default {
  name: "NuevoJugador",
  components: {
    FormularioJugador,
    AlertExito
  },
  props: ["escudos"],
  data() {
    return {
      showAlertaExito: false
    }
  },
  methods: {
    mostrarAlertaExito() {
      this.showAlertaExito = true;
      this.msg = "Jugador añadido con éxito";
      this.goto("#alertaExito");
    },
    cerrarAlertaExito() {
      this.showAlertaExito = false;
    },
    goto(refName) { // Saltar a elemento
     var element = this.$refs[refName];
     
     window.scrollTo(0, element);
    }
  }
};
</script>

<style scoped>
</style>