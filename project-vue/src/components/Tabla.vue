<template>
  <div class="tabla">
    <table class="table table-hover table-striped">
      <thead>
        <tr>
          <th></th>
          <th colspan="2">Pos</th>
          <th>Club</th>
          <th>Pts</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(equipo, index) in equipos" :key="equipo.id">
          <td :class="asignarColorPosicion(index + 1)"></td>
          <th colspan="2">{{ index + 1 }}</th>
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
  data() {
    return {
      colorPosicion: {
        descenso: "table-danger rounded-3",
        champions: "table-primary rounded-3",
        uefa: "table-warning rounded-3"
      }
    }
  },
  methods: {
    asignarColorPosicion(index) {
      if(index > 17 && index < 21) return this.colorPosicion.descenso;
      if(index > 0 && index < 5) return this.colorPosicion.champions;
      if(index > 4 && index < 7) return this.colorPosicion.uefa;
      return "";
    }
  }
};
</script>

<style scoped>
.tabla {
  width: 75%;
}
</style>
