<template>
  <div class="inicio">
    <jumbotron />
    <carousel />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import Jumbotron from '@/components/Jumbotron.vue';

export default {
  name: "Inicio",
  components: {
    Carousel,
    Jumbotron
  },
};
</script>

<style scoped>
h1{
  width: 100%;
}
</style>