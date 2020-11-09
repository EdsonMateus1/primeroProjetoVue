<template>
  <div>
    <v-card-actions>
      <v-btn color="orange lighten-2" text>
        Saiba Mais
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        {{ descricao }}
        <v-divider></v-divider>
      </div>
    </v-expand-transition>
  </div>
</template>

<script>
export default {
  name: "saibaMais",
  props: ["descricao"],
  data() {
    return {
      show: false
    };
  }
};
</script>
