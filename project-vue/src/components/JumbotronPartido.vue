<template>
  <div class="jumbotron-partido mt-3 border border-5 p-5 text-center">
    <h1 class="display-5 fw-bold">{{ jornada }} <i class="bi bi-caret-right"></i> {{ fecha }}</h1>
    <p v-if="jugado" class="col-md-8 fs-4 w-100">{{ equipo1 }} {{ goles1 }} - {{ goles2 }} {{ equipo2 }}</p>

    <p v-else class="col-md-8 fs-4 w-100 d-flex flex-wrap gap-2">
      {{ equipo1 }} 
      <input type="number" name="cont1" min="0" v-model="contEquipo1"> 
      <input type="number" name="cont2" min="0" v-model="contEquipo2"> 
      {{ equipo2 }}
      <button type="button" class="btn btn-outline-success ms-2" :class="desactivarBoton" @click="testeo">Guardar</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "JumbotronPartido",
  props: [
    "jornada", 
    "fecha", 
    "equipo1", 
    "goles1", 
    "goles2", 
    "equipo2", 
    "jugado"
  ],
  data() {
    return {
      contEquipo1: "",
      contEquipo2: ""
    }
  },
  methods: {
    testeo() {
      // TODO
      console.log(`${this.contEquipo1} ${this.contEquipo2}`)
    }
  },
  computed: {
    desactivarBoton() {
      let reg = /^\w+$/;
      if(this.contEquipo1 < 0 || this.contEquipo2 < 0 || !reg.test(this.contEquipo1) || !reg.test(this.contEquipo2)) return "btn btn-outline-danger disabled";
      return "btn btn-outline-success";
    }
  }
  
};
</script>

<style></style>
