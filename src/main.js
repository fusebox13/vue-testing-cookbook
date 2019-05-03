import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import DogService from "./services/DogService";
import Chart from "chart.js";


Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  provide: { DogService, Chart },
  render: h => h(App)
}).$mount("#app");
