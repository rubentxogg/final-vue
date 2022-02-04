<template>
  <div class="container-fluid">
    <div class="row">
      <menu-lateral class="col-2" />
      <router-view class="col-10 d-flex justify-content-center align-items-center bg-light" />
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

<style scoped>
</style>
