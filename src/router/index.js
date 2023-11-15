import Vue from "vue";
import VueRouter from "vue-router";

import menuData from "../data/menu.js";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
});

menuData(router);

export default router;
