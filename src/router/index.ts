import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Welcome.vue";
import Ex1 from "../views/Ex1.vue";
import Ex2 from "../views/Ex2.vue";
import Ex3 from "../views/Ex3.vue";
import Ex4 from "../views/Ex4.vue";
import Ex5 from "../views/Ex5.vue";
import Ex6 from "../views/Ex6.vue";
import Ex7 from "../views/Ex7.vue";
import Result from "../views/Result.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/ex1", name: "Ex1", component: Ex1 },
  { path: "/ex2", name: "Ex2", component: Ex2 },
  // { path: "/ex2/:value", component: Ex2, props: true },
  { path: "/ex3", name: "Ex3", component: Ex3 },
  { path: "/ex4", name: "Ex4", component: Ex4 },
  { path: "/ex5", name: "Ex5", component: Ex5 },
  { path: "/ex6", name: "Ex6", component: Ex6 },
  { path: "/ex7", name: "Ex7", component: Ex7 },
  { path: "/result", name: "Result", component: Result },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
