import Vue from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import IdleVue from "idle-vue";


const eventsHub = new Vue();

Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  store,
  idleTime: 60000, // 1 dakika
  startAtIdle: false
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,

  render: (h) => h(App),
}).$mount("#app");
