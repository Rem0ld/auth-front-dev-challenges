import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import jwtDecode from "jwt-decode";

import "@unocss/reset/tailwind.css";
import "./styles/main.css";
import "uno.css";
import { KEY_ACCESS_TOKEN } from "./constants";

const routes = [
  { path: "/", name: "Home", component: () => import("./routes/index.vue") },
  {
    path: "/user/:id",
    name: "Profile",
    component: () => import("./routes/user/user.route.vue"),
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("./routes/notFound.vue"),
  },
];

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
router.beforeEach(async to => {
  const token = localStorage.getItem(KEY_ACCESS_TOKEN) || "";

  if (token && token.length && to.name !== "Profile") {
    const decoded: DecodedCredentials = jwtDecode(token);
    return { name: "Profile", params: { id: decoded.id } };
  }

  if ((!token || token.length === 0) && to.path !== "/") {
    return { path: "/", params: {} };
  }
});
app.use(router);
app.mount("#app");
