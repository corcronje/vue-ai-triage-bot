import { createApp } from "vue";
import * as VueRouter from "vue-router";
import "./sass/app.scss";

import {
  Introduction,
  Otp,
  Patient,
  Symptoms,
  Regions,
  Interview,
  Results,
} from "./views";

import App from "./App.vue";

const routes = [
  { path: "/", component: Introduction },
  { path: "/otp", component: Otp },
  { path: "/patient", component: Patient },
  { path: "/symptoms", component: Symptoms },
  { path: "/regions", component: Regions },
  { path: "/interview", component: Interview },
  { path: "/results", component: Results },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
