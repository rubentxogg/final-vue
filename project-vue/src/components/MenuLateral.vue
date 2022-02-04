<template>
  <nav class="menu-lateral bg-primary bg-gradient d-flex flex-column justify-content-start">
    <h2 class="text-white text-center mb-5">Menú</h2>

    <router-link to="/" class="mb-3 fs-5">
      <i class="bi bi-house m-4"></i>
      <span>Inicio</span>
    </router-link>

    <router-link to="/clasificacion" class="mb-3 fs-5">
      <i class="bi bi-bar-chart-line m-4"></i>
      <span>Clasificación</span>
    </router-link>

    <router-link to="/jornadas" class="mb-3 fs-5">
      <i class="bi bi-calendar-week m-4"></i>
      <span>Jornadas</span>
    </router-link>

    <router-link to="/nuevopartido" class="mb-3 fs-5">
      <i class="bi bi-plus-circle m-4"></i>
      <span>Nuevo Partido</span>
    </router-link>

    <router-link to="/equipos" class="mb-3 fs-5">
      <i class="bi bi-diagram-3 m-4"></i>
      <span>Equipos</span>
    </router-link>

    <router-link to="/jugadores" class="mb-3 fs-5">
      <i class="bi bi-people m-4"></i>
      <span>Jugadores</span>
    </router-link>
    
    <router-link to="/nuevojugador" class="mb-3 fs-5">
      <i class="bi bi-person-plus m-4"></i>
      <span>Nuevo Jugador</span>
    </router-link>

    <router-link to="/eliminarjugador" class="mb-3 fs-5">
      <i class="bi bi-person-x m-4"></i>
      <span>Eliminar Jugador</span>
    </router-link>
  </nav>
</template>

<script>
export default {
    name: "MenuLateral"
}
</script>

<style scoped>
nav{
  height: 95vh;
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: rgb(0, 0, 0);
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #ffffff;
}
</style>