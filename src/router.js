import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Test from "@/pages/Test.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { path: "/test", name: "test", component: Test },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

export function routerPush(name, params) {
  if (params) return router.push({ name, params });
  return router.push({ name });
}
