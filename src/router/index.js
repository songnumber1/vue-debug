import Vue from "vue";
import VueRouter from "vue-router";

import menuData from "../data/menu.js";

Vue.use(VueRouter);

const routes = [
  // menu.js으로만 routes를 생성하려면 아래 코드를 모두 주석처리하자
  // menu.js에 동일한 path가 존재한다면 아래 코드를 우선적으로 보여준다.
  // 엄밀히 말하면 routes에 먼저 찾은 화면을 출력한다.
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(to, from);
  next();
});

menuData(router, routes);

export default router;
