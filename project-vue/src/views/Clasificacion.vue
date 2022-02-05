<template>
  <div class="clasificacion">
    <h1 class="text-center m-5">Clasificación</h1>
    <tabla />
    <pie-pagina />
  </div>
</template>

<script>
import Tabla from "@/components/Tabla.vue";
import PiePagina from "@/components/PiePagina.vue"

export default {
    name: "Clasificacion",
    components: {
      Tabla,
      PiePagina
    }
}
</script>

<style scoped>
h1 {
  width: 100%;
}
</style>