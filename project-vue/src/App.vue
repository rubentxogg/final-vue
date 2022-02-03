<template>
  <div class="container-fill">
    <div class="row">
      <h1>HEADER</h1>
    </div>

    <div class="row">
        <menu-lateral class="col-2"/>
        <router-view class="col-10 d-flex justify-content-center"/>
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

<style scoped>
</style>
