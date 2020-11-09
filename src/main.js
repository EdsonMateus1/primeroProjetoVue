import Vue from "vue";
import App from "./App.vue";
import VueResourcer from "vue-resource";
import vuetify from "./plugins/vuetify";
Vue.use(VueResourcer);
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  vuetify,
  render: (h) => h(App),
})
