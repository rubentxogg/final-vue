<template>
  <div class="container-fluid">
    <div class="row">
      <menu-lateral class="col-xxl-2 col-lg-3 col-md-4 col-sm-5" />
      <router-view class="col-xxl-10 col-lg-9 col-md-8 col-sm-7 d-flex justify-content-center flex-wrap align-items-center bg-light" :escudos="escudos"/>
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
  data() {
    return {
      escudos: [
        require("./assets/escudos/eib.png"),
        require("./assets/escudos/cta.png"),
        require("./assets/escudos/gda.png"),
        require("./assets/escudos/ath.png"),
        require("./assets/escudos/cdz.png"),
        require("./assets/escudos/osa.png"),
        require("./assets/escudos/bcn.png"),
        require("./assets/escudos/elch.png"),
        require("./assets/escudos/rma.png"),
        require("./assets/escudos/gtf.png"),
        require("./assets/escudos/alv.png"),
        require("./assets/escudos/bts.png"),
        require("./assets/escudos/vlz.png"),
        require("./assets/escudos/rso.png"),
        require("./assets/escudos/vlr.png"),
        require("./assets/escudos/hsc.png"),
        require("./assets/escudos/vlc.png"),
        require("./assets/escudos/lvt.png"),
        require("./assets/escudos/atl.png"),
        require("./assets/escudos/sva.png"),
      ],
    }
  },
  computed() {
    if (this.$route.name === "Jornadas") { return this.escudos }
    if (this.$route.name === "Clasificacion") { return this.escudos }
    if (this.$route.name === "NuevoPartido") { return this.escudos }
  }
};
</script>

<style>
</style>
