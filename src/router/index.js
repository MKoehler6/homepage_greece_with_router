import { createWebHistory, createRouter } from "vue-router";
import Home from "./../components/Home.vue";
import About from "./../components/Malediven.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/malediven",
    name: "Malediven",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;