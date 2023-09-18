import { createApp } from "vue";
import { createPinia } from "pinia";
import { useTriageStore } from "./store/triage";
import * as VueRouter from "vue-router";
import "./sass/app.scss";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

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
  { path: "/", name: "home", component: Introduction },
  { path: "/otp/:id?", name: "otp", component: Otp, props: true },
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

router.beforeEach((to, from, next) => {
  const store = useTriageStore();

  if (to.name !== "home" && !store.getOtp.id) {
    return next({ name: "home" });
  }

  next();
});

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
