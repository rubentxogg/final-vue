<template>
  <div class="container-fluid">
    <div class="row">
      <menu-lateral class="col-xxl-2 col-lg-3 col-md-4" />
      <router-view class="col-xxl-10 col-lg-9 col-md-8 d-flex justify-content-center flex-wrap align-items-center bg-light" />
    </div>

    <div class="row">
      <pie-pagina />
    </div>
  </div>
</template>

<script>
import MenuLateral from "@/components/MenuLateral.vue";
import PiePagina from "@/components/PiePagina.vue";

export default {
  name: "App",
  components: {
    MenuLateral,
    PiePagina,
  },
};
</script>

<style>
</style>
