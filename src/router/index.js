/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
// import Login from '../views/Login.vue'

Vue.use(VueRouter);

const routes = [{
    path: "/",
    redirect: {
      name: "login"
    }
  },
  {
    path: "/login2",
    name: "Login2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ "../views/Login.vue"),
    beforeEnter: (to, from, next) => {
      if (store.state.loggedIn == true) {
        next("/logged");
      } else {
        next();
      }
    }
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../components/auth/SignUp.vue"),
    // beforeEnter: (to, from, next) => {
    //   if (store.state.loggedIn == true) {
    //     next("/logged");
    //   } else {
    //     next();
    //   }
    // }
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/Test.vue"),
    // beforeEnter: (to, from, next) => {
    //   if (store.state.waitingVerified == true) {
    //     next("/login");
    //   } else {
    //     next();
    //   }
    // }
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/logged",
    name: "logged",
    component: () => import("../views/Logged.vue"),
    // beforeEnter: (to, from, next) => {
    //   if (!store.state.loggedIn) {
    //     next("/login");
    //   } else {
    //     next();
    //   }
    // }
  },
  {
    path: "/logout",
    name: "logout",
    component: () => import("../components/auth/Logout.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(
        "../components/LoginTemplate.vue"),
    // beforeEnter: (to, from, next) => {
    //   if (store.state.loggedIn) {
    //     next("/logged");
    //   } else {
    //     next();
    //   }
    // }
  },
  {
    path: "/level3",
    name: "level3",
    component: () =>
      import(
        "../components/Level3.vue"),
  },
  {
    path: "/level4",
    name: "level4",
    component: () =>
      import(
        "../components/Level4.vue"),
  }, {
    path: "/level5",
    name: "level5",
    component: () =>
      import(
        "../components/Level5.vue"),
  }, {
    path: "/level6",
    name: "level6",
    component: () =>
      import(
        "../components/Level6.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
