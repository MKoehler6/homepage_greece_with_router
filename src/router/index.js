import { createWebHistory, createRouter } from "vue-router";
import Home from "./../components/Home.vue";
import Malediven from "./../components/Malediven.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/malediven",
    name: "Malediven",
    component: Malediven,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;