<template>
  <div class="inicio">
    <jumbotron-inicio />
    <carousel />
    <pie-pagina />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import JumbotronInicio from '@/components/JumbotronInicio.vue';
import PiePagina from '@/components/PiePagina.vue';

export default {
  name: "Inicio",
  components: {
    Carousel,
    JumbotronInicio,
    PiePagina
  },
};
</script>

<style scoped>
</style>