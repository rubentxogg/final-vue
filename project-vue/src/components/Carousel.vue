<template>
  <div id="carouselControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="images[0]" class="d-block border border-light w-100 rounded-3" alt="oyar">
        <div class="carousel-caption">
          <h3 class="bg-dark bg-opacity-50">Entrega</h3>
        </div>
      </div>

      <div class="carousel-item">
        <img :src="images[1]" class="d-block border border-light w-100 rounded-3" alt="reala1">
        <div class="carousel-caption">
          <h3 class="bg-dark bg-opacity-50">Pasión</h3>
        </div>
      </div>

      <div class="carousel-item">
        <img :src="images[2]" class="d-block border border-light w-100 rounded-3" alt="reala2">
        <div class="carousel-caption">
          <h3 class="bg-dark bg-opacity-50">Conquista</h3>
        </div>
      </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>

    <button class="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Prueba",
  data() {
    return{
      images: [
        require('../assets/oyar1.jpg'),
        require('../assets/reala.jpg'),
        require('../assets/reala2.jpg')
      ]
    }
  }
};
</script>

<style>
</style>