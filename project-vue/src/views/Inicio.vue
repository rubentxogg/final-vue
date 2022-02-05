<template>
  <div class="inicio">
    <jumbotron />
    <carousel />
    <pie-pagina />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import Jumbotron from '@/components/Jumbotron.vue';
import PiePagina from '@/components/PiePagina.vue';

export default {
  name: "Inicio",
  components: {
    Carousel,
    Jumbotron,
    PiePagina
  },
};
</script>

<style scoped>
</style>