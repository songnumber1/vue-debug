import Vue from "vue";
import VueRouter from "vue-router";

import menuData from "../data/menu.js";

Vue.use(VueRouter);

const routes = [
  // menu.js으로만 routes를 생성하려면 아래 코드를 모두 주석처리하자
  // menu.js에 동일한 path가 존재한다면 아래 코드를 우선적으로 보여준다.
  // routes.unshift를 하여도 router폴더 index.js의 routes의 아이템이 우선순위가 높아 routes의 component를 화면을 출력한다.
  // 아래 링크 맨 아래 설명을 보면 아래와 같다.
  // 매칭 우선순위
  // 동일한 URL이 여러 라우트와 일치하는 경우가 있습니다. 이 경우 일치하는 우선 순위는 라우트 정의의 순서에 따라 결정됩니다. 즉, 경로가 더 먼저 정의 될수록 우선 순위가 높아집니다.
  /**
   * @see (@link https://v3.router.vuejs.org/kr/guide/essentials/dynamic-matching.html)
   */
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
  {
    path: "/props",
    name: "props",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PropsView.vue"),
  },
];

/**
 * @see (@link https://v3.router.vuejs.org/kr/guide/essentials/dynamic-matching.html)
 */
// 매칭 우선순위을 unshift하여 routes의 아이템보다 먼저 추가 되어 routes의 데이터와 동일한 path가 있을 경우 unshift된 화면이 출력된다.
// 현재 코드를 주석 처리 하면 아래 router.beforeEach 코드를 주석을 해제하고 반대일 경우는 router.beforeEach를 주석 처리하고 해당 코드를 주석 처리를 해제한다.
menuData.menuUnShiftData(routes);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

/**
 * @see (@link https://v3.router.vuejs.org/kr/guide/essentials/dynamic-matching.html)
 */
// routes에 push를 하기 때문에 routes의 데이터가 우선순위가 높아 routes를 추가하여도 routes의 데이터와 동일한 path가 있을 경우 routes의 화면이 출력된다.
// let init = false;

// router.beforeEach((to, from, next) => {
//   if (init === false) {
//     menuData.menuPushData(routes);

//     init = true;
//     return next(to);
//   }

//   return next();
// });

export default router;
