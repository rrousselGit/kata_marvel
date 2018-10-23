import Vue from "vue";
import Router from "vue-router";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(Router);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");