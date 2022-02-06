<template>
  <div class="tabla-jugadores border border-1 rounded">
    <table v-if="jugadores.length > 0" class="table table-secondary table-hover table-striped text-center caption-top table-borderless">
      <caption class="p-2 bg-dark text-light"><i class="bi bi-caret-right me-1"></i>{{ jugadores[0].team }}</caption>
      <thead>
        <tr>
          <th>Jugador</th>
          <th>Goles</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="jugador in jugadores" :key="jugador.id">
          <td>{{ jugador.name }}</td>
          <td>{{ jugador.scores }}</td>
        </tr>
      </tbody>
    </table>
    
    <h2 v-else class="text-dark text-center">No hay jugadores en el equipo</h2>
  </div>
</template>

<script>
export default {
  name: "TablaJugadores",
  props: ["jugadores"],
};
</script>

<style scoped>
</style>
