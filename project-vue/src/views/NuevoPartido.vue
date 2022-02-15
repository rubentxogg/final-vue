<template>
  <div class="nuevo-partido d-flex align-self-start">
    <h1 class="text-center mt-4"><i class="bi bi-plus-circle m-3"></i>Nuevo Partido</h1>
    <hr class="w-75 mb-5"/>
    <alert-exito :mensaje="msg" v-if="showAlertaExito" @cerrarExito="cerrarAlertaExito" id="alertaExito"/>

    <formulario-partido :escudos="escudos" @lanzarAlertaExito="mostrarAlertaExito"/>
  </div>
</template>

<script>
import FormularioPartido from "@/components/FormularioPartido.vue";
import AlertExito from "@/components/AlertExito.vue";

export default {
  name: "NuevoPartido",
  props: ["escudos"],
  data() {
    return {
      showAlertaExito: false,
      msg: ""
    }
  },
  components : {
    FormularioPartido,
    AlertExito
  },
  methods: {
    mostrarAlertaExito() {
      this.showAlertaExito = true;
      this.msg = "Partido añadido con éxito";
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
h1 {
  width: 100%;
}
</style>