<template>
  <div class="lista-fotos">
    <li class="painel-list" v-for="foto in fotoComFiltro" :key="foto._id">
      <v-card max-width="344" elevation="4">
        <v-container>
          <v-img class="img-shadow" :src="foto.url" height="280px"></v-img>

          <v-card-title id="card-title">
            {{ foto.titulo }}
          </v-card-title>
          <saiba-mais :descricao="foto.descricao" />
        </v-container>
      </v-card>
    </li>
  </div>
</template>

<script>
import saibaMais from "./SaibaMais";
export default {
  name: "card",
  props: ["filtro"],
  components: {
    "saiba-mais": saibaMais,
  },
  data() {
    return {
      fotos: [],
      show: true,
    };
  },
  /* Vue permite que você defina filtros que podem ser utilizados para aplicação de formatações de texto corriqueiras.
                Filtros são permitidos em interpolações mustache e expressões v-bind (sendo a última suportada em 2.1.0+).
                Filtros podem ser acrescidos ao final de uma expressão JavaScript, sendo denotados pelo símbolo “pipe”:
                */
  filters: {
    processerTitle: (value) => {
      return value.toUpperCase();
    },
  },
  /*
                Expressões dentro de templates são muito convenientes, mas são destinadas a operações simples.
                Colocar muita lógica neles pode fazer com que fiquem inchados e que a sua manutenção fique mais complicada.
                 Por exemplo:
                <div id="example">
                  {{ message.split('').reverse().join('') }}
                </div>
                Neste ponto, o template não é mais tão simples e declarativo. Você tem que olhá-lo por alguns segundos antes de entender que ele exibe
                o valor de message na ordem reversa. O problema é agravado quando se deseja incluir uma mensagem na ordem reversa em mais algum lugar do
                template, gerando-se repetições de código.
                Por isso que, para qualquer lógica mais complexa, usamos dados computados (computed properties no inglês, traduzidos como “dados” pois,
                durante a utilização em templates, se parecem efetivamente com propriedades definidas em data).
                */
  computed: {
    fotoComFiltro() {
      if (this.filtro) {
        console.log(this.filtro)
        let rexFilter = new RegExp(this.filtro.trim(), "i");
        const fotoFiltradas = this.fotos.filter((foto) =>
          rexFilter.test(foto.titulo)
        );
        //return foto.titulo.toLowerCase().includes(this.filtro.toLowerCase())
        return fotoFiltradas;
      } else {
        return this.fotos;
      }
    },
  },
  methods: {
    showVisivel() {
      this.visivel = !this.visivel;
    },
    getFoto() {
      this.$http
        .get("http://localhost:3000/v1/fotos")
        .then((res) => res.json())
        .then((foto) => (this.fotos = foto));
    },
  },
  mounted() {
    this.getFoto();
  },
};
</script>

<style>
.painel-list .painel-titulo {
  display: block;
  width: 100%;
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0 0 15px 0;
  padding: 10px;
}

.img-shadow {
  box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.82);
}

.lista-fotos {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 50px;
}

@media screen and (min-width: 1000px) {
  .lista-fotos .lista-fotos-item {
    width: auto;
  }
}
</style>
