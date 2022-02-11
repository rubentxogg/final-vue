<template>
    <table v-if="jugadores.length > 0" class="tabla-jugadores table table-secondary table-hover table-striped text-center caption-top table-borderless">
      <caption class="p-2 bg-dark rounded text-light"><i class="bi bi-caret-right me-1"></i>{{ jugadores[0].team }}</caption>
      <thead>
        <tr>
          <th><i class="bi bi-hash"></i></th>
          <th>Jugador</th>
          <th>Goles</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="jugador in jugadores" :key="jugador.id">
          <td><i class="bi bi-person-circle"></i></td>
          <td>{{ jugador.name }}</td>
          <td>{{ jugador.scores }}</td>
        </tr>
      </tbody>
    </table>
    
    <h2 v-else class="text-dark text-center">Haz click en un equipo</h2>
</template>

<script>
export default {
  name: "TablaJugadores",
  props: ["jugadores"],
};
</script>

<style scoped>
</style>
