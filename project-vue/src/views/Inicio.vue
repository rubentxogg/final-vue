<template>
  <div class="inicio">
    <h1 class="text-center">INICIO</h1>
    <carousel />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue';

export default {
  name: "Inicio",
  components: {
    Carousel
  },
};
</script>

<style scoped>
h1{
  width: 100%;
}
</style>