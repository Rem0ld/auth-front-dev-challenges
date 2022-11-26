import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from "virtual:generated-pages";
import App from "./App.vue";

import "@unocss/reset/tailwind.css";
import "./styles/main.css";
import "uno.css";

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
router.beforeEach(async (to, from) => {
  const token = localStorage.getItem("access_token");
  if (!token && to.path !== "/") {
    return { path: "/" };
  }
});
app.use(router);
app.mount("#app");
