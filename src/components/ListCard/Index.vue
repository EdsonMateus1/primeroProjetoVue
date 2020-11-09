<template>
  <div>
    <inputCuston @entradaDados="recebendoEvento($event)" />
    <ul>
      <card :filtro="filtro" />
    </ul>
  </div>
</template>

<script>
import card from "./Card";
import inputCuston from "../shared/Input/Index";

export default {
  name: "lista",
  components: {
    card,
    inputCuston,
  },
  data() {
    return {
      filtro: "",
    };
  },
  methods: {
    recebendoEvento($event) {
      console.log($event); // $event retorna um obj com todos as chaves que voce passou no obj de evento
      this.filtro = $event.filtro;
    },
  },
  computed: {},
};
</script>

<style scope></style>
