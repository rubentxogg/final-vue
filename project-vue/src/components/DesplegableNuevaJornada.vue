<template>
  <div class="desplegable-nueva-jornada dropdown container">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownJornada" data-bs-toggle="dropdown" aria-expanded="false">
      <i class="bi bi-calendar-week me-1"></i>Jornada
    </button>

    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="#dropdownJornada">
      <li v-for="jornada in jornadas" :key="jornada.id" @click="seleccionarJornada(jornada.round)">
          <a class="dropdown-item">{{ jornada.round }}</a>
          <hr class="dropdown-divider" />
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: "DesplegableNuevaJornada",
  props: ["jornadas"],
  events: ["seleccionJornada"],
  methods: {
    seleccionarJornada(jornada) {
      this.$emit("seleccionJornada", jornada);
    }
  }
}
</script>

<style scoped>
li {
    cursor: pointer;
}
</style>