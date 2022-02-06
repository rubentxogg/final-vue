<template>
  <div class="jornadas">
    <h1 class="text-center mt-4"><i class="bi bi-calendar-week m-3"></i>Jornadas</h1>
    <hr class="w-75 mb-5" />

    <desplegable-jornadas />
  </div>
</template>

<script>
import DesplegableJornadas from "@/components/DesplegableJornadas.vue";
import axios from "axios";

export default {
  name: "Jornadas",
  components: {
    DesplegableJornadas
  },
  data() {
    return {
      jornadas: []
    }
  },
  methods: {
    getJornadas(URL) {
      axios
        .get(URL)
        .then((response) => (this.jornadas = response.data))
        .catch((error) => console.error(error))
    }
  }
};
</script>

<style scoped>
h1, h2 {
  width: 100%;
}
</style>
