import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);


const routes = [
  {
    path: "/",

    component: About,
  },
  {
    path: "/about",

    component: About,
  },
  {
    path: "/login",

    component: Home,
  },

];

export const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
