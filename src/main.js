import { createApp } from "vue";
import * as VueRouter from "vue-router";
import "./sass/app.scss";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(fas, far, fab);

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

createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
