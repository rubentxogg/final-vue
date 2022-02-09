<template>
  <div class="equipos card text-center">
    <div class="card-header">
        <img :src="escudos[equipo.id]" width="24" height="24" class="me-1 mb-1" alt="escudo"/>
    </div>

    <div class="card-body">
      <h5 class="card-title">{{ equipo.name }}</h5>
      <p class="card-text">
        With supporting text below as a natural lead-in to additional content.
      </p>
      
      <button class="btn btn-primary">Mostrar jugadores</button>
    </div>

    <div class="card-footer text-muted">Vive La Liga</div>
  </div>
</template>

<script>
export default {
  name: "CardEquipo",
  props: ["escudos", "equipo"]
};
</script>

<style scoped>

</style>