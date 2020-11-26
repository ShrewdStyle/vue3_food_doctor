import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Intro from "./components/Intro";
import Questions from "./components/Questions/Questions";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Intro },
    { path: "/questions", component: Questions },
  ],
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

const app = createApp(App);
app.use(router);
app.mount("#app");
