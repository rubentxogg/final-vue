<template>
  <div class="tabla">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Pos</th>
          <th>Club</th>
          <th>Pts</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(equipo, index) in equipos" :key="equipo.id">
          <th>{{ index + 1 }}</th>
          <td><img :src="escudos[equipo.id]" width="24" height="24" class="me-1 mb-1"/> {{ equipo.name }}</td>
          <td>{{ equipo.points }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Tabla",
  props: ["equipos", "escudos"],
};
</script>

<style scoped>
.tabla {
  width: 75%;
}
</style>
