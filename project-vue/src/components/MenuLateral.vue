<template>
  <nav class="menu-lateral d-flex flex-column justify-content-start bg-dark bg-gradient">
    <h2 class="text-white text-center mb-5">Menú</h2>

    <router-link to="/" class="mb-3 fs-8">
      <i class="bi bi-house m-1"></i>
      <span>Inicio</span>
    </router-link>

    <router-link to="/clasificacion" class="mb-3 fs-8">
      <i class="bi bi-bar-chart-line m-1"></i>
      <span>Clasificación</span>
    </router-link>

    <router-link to="/jornadas" class="mb-2 fs-8">
      <i class="bi bi-calendar-week m-1"></i>
      <span>Jornadas</span>
    </router-link>

    <router-link to="/nuevopartido" class="ms-4 mb-3 fs-8">
      <i class="bi bi-plus-circle m-1"></i>
      <span>Nuevo Partido</span>
    </router-link>

    <router-link to="/equipos" class="mb-3 fs-8">
      <i class="bi bi-diagram-3 m-1"></i>
      <span>Equipos</span>
    </router-link>

    <router-link to="/jugadores" class="mb-2 fs-8">
      <i class="bi bi-people m-1"></i>
      <span>Jugadores</span>
    </router-link>

    <router-link to="/nuevojugador" class="ms-4 mb-3 fs-8">
      <i class="bi bi-person-plus m-1"></i>
      <span>Nuevo Jugador</span>
    </router-link>

    <router-link to="/eliminarjugador" class="ms-4 mb-3 fs-8">
      <i class="bi bi-person-x m-1"></i>
      <span>Eliminar Jugador</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "MenuLateral",
};
</script>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: rgb(109, 109, 109);
  text-decoration: none;
}

nav a:hover {
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.521);
  width: 100%;
}

nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
