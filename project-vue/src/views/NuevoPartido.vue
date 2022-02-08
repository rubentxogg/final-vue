<template>
  <div class="nuevo-partido">
    <h1 class="text-center mt-4"><i class="bi bi-plus-circle m-3"></i>Nuevo Partido</h1>
    <hr class="w-75 mb-auto" />

    <formulario-partido :escudos="escudos"/>
  </div>
</template>

<script>
import FormularioPartido from "@/components/FormularioPartido.vue";

export default {
  name: "NuevoPartido",
  props: ["escudos"],
  components : {
    FormularioPartido
  },
};
</script>

<style scoped>
h1 {
  width: 100%;
}
</style>