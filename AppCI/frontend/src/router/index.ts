import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    // component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/calculator",
    name: "IsolationCalculator",
    component: () => import("@/views/CalculatorView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
