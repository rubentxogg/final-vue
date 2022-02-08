<template>
  <div class="desplegable-nueva-jornada dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownJornada" data-bs-toggle="dropdown" aria-expanded="false">
        Jornada
    </button>

    <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="#dropdownJornada">
      <li v-for="jornada in jornadas" :key="jornada.id">
          <a class="dropdown-item">{{ jornada.round }}</a>
          <hr class="dropdown-divider" />
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: "DesplegableNuevaJornada",
  props: ["jornadas"]
}
</script>

<style scoped>
li {
    cursor: pointer;
}
</style>