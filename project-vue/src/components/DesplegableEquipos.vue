<template>
  <div class="desplegable-nueva-jornada dropdown container">
    <button :class="desactivarBoton" type="button" id="dropdownEquipo" data-bs-toggle="dropdown" aria-expanded="false">
         <i class="bi bi-diagram-3 me-1"></i> Equipos
    </button>

    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="#dropdownEquipo">
      <li v-for="equipo in equipos" :key="equipo.id" @click="seleccionarEquipo(equipo.name)">
        <a class="dropdown-item">
            <img :src="escudos[equipo.id]" width="24" height="24" class="me-1 mb-1" alt="-"/> {{ equipo.name }}
        </a>
        <hr class="dropdown-divider" />
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: "DesplegableNuevaJornada",
  props: ["equipos", "escudos", "isDisabled"],
  events: ["seleccionEquipo"],
  methods: {
    seleccionarEquipo(equipo) {
      this.$emit("seleccionEquipo", equipo);
    },
  },
  computed: {
    desactivarBoton() {
      if(this.isDisabled) return "btn btn-outline-secondary dropdown-toggle disabled";
      return "btn btn-outline-secondary dropdown-toggle";
    }
  }

}
</script>

<style scoped>
li {
  cursor: pointer;
}
</style>