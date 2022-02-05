<template>
  <aside class="meu-lateral">
    <nav class="d-flex flex-column justify-content-start col-xxl-2 col-lg-3 col-md-4 col-sm-5 border-end border-3">
      <h2 class="text-dark text-center mb-3">
        <i class="bi bi-justify me-3"></i>Menú
        <hr class="text-muted" />
      </h2>

      <router-link to="/" class="fs-8 rounded-pill p-2">
        <i class="bi bi-house m-3"></i>
        <span>Inicio</span>
      </router-link>

      <router-link to="/clasificacion" class="fs-8 rounded-pill p-2">
        <i class="bi bi-bar-chart-line m-3"></i>
        <span>Clasificación</span>
      </router-link>

      <router-link to="/jornadas" class="fs-8 rounded-pill p-2">
        <i class="bi bi-calendar-week m-3"></i>
        <span>Jornadas</span>
      </router-link>

      <router-link to="/nuevopartido" class="ms-4 fs-8 rounded-pill p-1">
        <i class="bi bi-plus-circle m-3"></i>
        <span>Nuevo Partido</span>
      </router-link>

      <router-link to="/equipos" class="fs-8 rounded-pill p-2">
        <i class="bi bi-diagram-3 m-3"></i>
        <span>Equipos</span>
      </router-link>

      <router-link to="/jugadores" class="fs-8 rounded-pill p-2">
        <i class="bi bi-people m-3"></i>
        <span>Jugadores</span>
      </router-link>

      <router-link to="/nuevojugador" class="ms-4 fs-8 rounded-pill p-1">
        <i class="bi bi-person-plus m-3"></i>
        <span>Nuevo Jugador</span>
      </router-link>

      <router-link to="/eliminarjugador" class="ms-4 fs-8 rounded-pill p-1">
        <i class="bi bi-person-x m-3"></i>
        <span>Eliminar Jugador</span>
      </router-link>

      <span class="text-light text-center text-muted fs-5 mt-auto">
        <hr /> <i class="bi bi-arrow-down-right-circle text-dark"></i> <a href="https://www.laliga.com/" class="link text-dark">LaLiga</a>
      </span>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "MenuLateral",
};
</script>

<style scoped>
aside {
  padding: 0;
  height: 100vh;
}

nav {
  padding: 30px;
  height: 100%;
  position: fixed;
  background-color: #f0f3f4;
}

nav a {
  font-weight: bold;
  color: rgb(109, 109, 109);
  text-decoration: none;
}

nav a:hover {
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.829);
  width: 100%;
}

nav a.router-link-exact-active {
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.884);
}

.link:hover{
  background-color: rgba(0, 0, 0, 0);
}
</style>
