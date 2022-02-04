<template>
  <div id="carouselControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/oyar1.jpg" class="d-block w-100" alt="oyar">
      </div>

      <div class="carousel-item">
        <img :src="images[1]" class="d-block w-100" alt="reala1">
      </div>

      <div class="carousel-item">
        <img :src="images[2]" class="d-block w-100" alt="reala2">
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
        '../assets/oyar1.jpg',
        '../assets/reala.jpg',
        '../assets/reala2.jpg'
      ]
    }
  }
};
</script>

<style>
</style>