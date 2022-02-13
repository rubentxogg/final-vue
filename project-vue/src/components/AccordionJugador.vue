<template>
  <div class="accordion-jugadores">
    <div class="accordion-item" v-for="jugador in jugadores" :key="jugador.id">

      <h2 class="accordion-header" :id="jugador.id">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#'+jugadorUnico(jugador)" aria-expanded="false" :aria-controls="jugadorUnico(jugador)">
          <b>#{{jugador.id}}</b> &nbsp; {{ jugador.name }}
        </button>
      </h2>

      <div :id="jugadorUnico(jugador)" class="accordion-collapse collapse" :aria-labelledby="jugador.id" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          {{ jugador.id }} {{ jugador.name }} {{ jugador.team }} {{ jugador.scores }}
        </div>
      </div>

    </div>
  </div>
    
</template>

<script>
export default {
    name: "AccordionJugador",
    props: ["jugadores"],
    methods: {
      jugadorUnico(jugador) {
        return jugador.name.replace(/\s/g, "")+jugador.id;
      }
    }
}
</script>

<style>

</style>