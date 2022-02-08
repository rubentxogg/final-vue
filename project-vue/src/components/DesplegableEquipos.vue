<template>
  <div class="desplegable-nueva-jornada dropdown container">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownEquipo" data-bs-toggle="dropdown" aria-expanded="false">
         <i class="bi bi-diagram-3 me-1"></i> Equipos
    </button>

    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="#dropdownEquipo">
      <li v-for="equipo in equipos" :key="equipo.id" @click="seleccionarEquipo(equipo.name)">
          <a class="dropdown-item">{{ equipo.name }}</a>
          <hr class="dropdown-divider" />
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: "DesplegableNuevaJornada",
  props: ["equipos", "escudos"],
  events: ["seleccionEquipo"],
  methods: {
    seleccionarEquipo(equipo) {
      this.$emit("seleccionEquipo", equipo);
    }
  }
}
</script>

<style scoped>
li {
    cursor: pointer;
}
</style>