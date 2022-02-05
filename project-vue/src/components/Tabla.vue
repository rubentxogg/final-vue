<template>
  <div class="tabla">
    <h1 v-if="isLodaing">Cargando...</h1>

    <table v-else class="table table-striped table-hover">
      <thead>
        <tr>
          <th @click="ordenarEquiposPorPts">Pos</th>
          <th>Club</th>
          <th>Pts</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(equipo, index) in equipos" :key="equipo.id">
          <th>{{ index + 1 }}</th>
          <td>{{ equipo.name }}</td>
          <td>{{ equipo.points }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Tabla",
  data() {
    return {
      equipos: [],
      isLoading: false,
    };
  },
  methods: {
    getEquipos(URL) {
      this.isLoading = true;
      axios
        .get(URL)
        .then((response) => (this.equipos = response.data))
        .catch((error) => console.error(error))
        .finally(() => (this.isLoading = false));
    },
    ordenarEquiposPorPts() {
      this.equipos.sort((a, b) => b.points - a.points);
    },
  },
  mounted() {
    this.getEquipos("http://localhost:3000/clubs/");
  },
  updated() {
    this.ordenarEquiposPorPts();
  },
};
</script>

<style scoped>
.tabla {
  width: 75%;
}
</style>
