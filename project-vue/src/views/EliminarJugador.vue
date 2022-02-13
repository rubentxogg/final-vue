<template>
  <div class="eliminar-jugador">
    <h1 class="text-center mt-4 w-100">
       <i class="bi bi-person-x m-3"></i> Eliminar Jugador
    </h1>
    <hr class="w-75 mb-auto" />

    <form class="mb-auto">
      <fieldset class="border border-1 rounded p-5 pt-0 d-flex flex-wrap flex-column m-auto">
       <p class="d-flex">
         <desplegable-equipos :escudos="escudos" :equipos="equipos" @seleccionEquipo="seleccionarEquipo"/>
         <input class="text-center fs-5 form-control" type="text" name="jornada" readonly :value="equipo"/>
       </p>

       <button type="button">Eliminar</button>
      </fieldset>
      </form>
  </div>
</template>

<script>
import DesplegableEquipos from "@/components/DesplegableEquipos.vue";
import axios from "axios";

export default {
    name: "EliminarJugador",
    props: ["escudos"],
    data() {
      return {
        equipos: [],
        equipo: "",
      }
    },
    components: {
      DesplegableEquipos
    },
    methods: {
      getEquipos(URL) {
        this.isLoading = true;
        axios
          .get(URL)
          .then((response) => (this.equipos = response.data))
          .catch((error) => console.error(error))
          .finally(() => (this.isLoading = false));
      },
      seleccionarEquipo (equipo) {
        this.equipo = equipo;
      }
    },
    mounted() {
      this.getEquipos("http://localhost:3000/clubs");
    }
}
</script>

<style>

</style>