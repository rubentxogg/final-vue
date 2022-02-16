<template>
  <div class="accordion-jugadores">
    <div class="accordion-item" v-for="jugador in jugadores" :key="jugador.id">

      <h2 class="accordion-header" :id="jugador.id">
        <button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" :data-bs-target="'#'+jugadorUnico(jugador)" aria-expanded="false" :aria-controls="jugadorUnico(jugador)">
          <b>#{{jugador.id}}</b> &nbsp; {{ jugador.name }}
        </button>
      </h2>

      <div :id="jugadorUnico(jugador)" class="accordion-collapse collapse bg-light" :aria-labelledby="jugador.id" data-bs-parent="#accordionExample">
        <div class="accordion-body container">
          <div class="row">
            <div class="col">
              <h5 class="text-center"><i class="bi bi-pencil-square"></i> Datos completos </h5>
                <table class="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Equipo</th>
                      <th>Goles</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th>{{ jugador.id }}</th>
                      <td>{{ jugador.name }}</td>
                      <td>{{ jugador.team }}</td>
                      <td>{{ jugador.scores }}</td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
         
          <div class="row d-flex justify-content-evenly">
            <div class="col-5 d-flex">
              <input type="number" v-model="goles" class=" me-1 form-control text-center fs-5" name="goles" placeholder="Goles"/>
              <button :class="desactivarBoton" @click="anadirGoles(jugador, goles)">
                <i class="bi bi-plus-circle fs-3"></i>
              </button>
            </div>
            
            <button type="button" class="col-5 btn btn-outline-danger" @click="eliminarJugador(jugador)">
              <i class="bi bi-person-x me-1"></i> Eliminar jugador
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
    
</template>

<script>
export default {
    name: "AccordionJugador",
    data() {
      return {
        goles: ""
      }
    },
    props: ["jugadores"],
    events: ["eliminarJugador", "anadirGoles"],
    methods: {
      jugadorUnico(jugador) {
        return jugador.name.replace(/\s/g, "")+jugador.id;
      },
      eliminarJugador(jugador) {
        this.$emit("eliminarJugador", jugador);
      },
      anadirGoles(jugador, goles) {
        this.$emit("anadirGoles", jugador, goles);
        this.goles = "";
      }
    },
    computed: {
      desactivarBoton() {
        let reg = /^\w+$/;

        if(this.goles < 0 || !reg.test(this.goles)) return "col-5 btn btn-outline-success disabled";
        return "col-5 btn btn-outline-success";
      }
    }
}
</script>

<style scoped>
.accordion-button:not(.collapsed) {
  color: rgb(255, 255, 255) !important;
  background-color: #1c1f23 !important;
}
</style>