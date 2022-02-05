<template>
  <div class="container-fluid">
    <div class="row">
      <menu-lateral class="col-xxl-2 col-lg-3 col-md-4 col-sm-5" />
      <router-view class="col-xxl-10 col-lg-9 col-md-8 col-sm-7 d-flex justify-content-center flex-wrap align-items-center bg-light" />
    </div>
  </div>
</template>

<script>
import MenuLateral from "@/components/MenuLateral.vue";

export default {
  name: "App",
  components: {
    MenuLateral,
  },
};
</script>

<style>
</style>
