<template>
  <v-text-field
    type="search"
    v-model="filtro"
    @input="entrada"
    class="filtro"
    label="filtre pelo título da foto"
  />
</template>

<script>
export default {
  name: "inputCuston",
  props: ["Vmodel"],
  data() {
    return {
      filtro: "",
    };
  },

  methods: {
    entrada() {
      this.$emit("entradaDados", {
        filtro: this.filtro,
      });
    },
  },
};
</script>

<style scope></style>
