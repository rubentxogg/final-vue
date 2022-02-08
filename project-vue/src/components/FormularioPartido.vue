<template>
  <form class="formulario-partido mb-auto">
    <fieldset class="border border-4 rounded p-5 pt-0">
      <legend class="text-muted text-center fs-4 mb-4">Añadir partido</legend>

    <desplegable-nueva-jornada :jornadas="jornadas"/>
    </fieldset>
  </form>
</template>

<script>
import DesplegableNuevaJornada from "@/components/DesplegableNuevaJornada";
import axios from 'axios';

export default {
  name: "FormularioPartido",
  components: {
    DesplegableNuevaJornada
  },
  data() {
    return {
        jornadas: []
    }
  },
  methods: {
    getJornadas(URL) {
    axios
     .get(URL)
     .then((response) => (this.jornadas = response.data))
     .then(() => (this.jornadas = [...new Map(this.jornadas.map(jornada => [jornada.round, jornada])).values()]))
     .catch((error) => console.error(error));
    },
  },
  mounted() {
    this.getJornadas('http://localhost:3000/matches');
  }
};
</script>

<style scoped>
li {
  cursor: pointer;
}
</style>