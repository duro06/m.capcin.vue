import Vue from "vue";
import VueRouter from "vue-router";
// import Login from '../views/Login.vue'

Vue.use(VueRouter);

const routes = [{
    path: "/login",
    name: "login",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/Login.vue"),
    meta: {
      requiresVisitor: true,
    }
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import( /* webpackChunkName: "about" */ '../views/Login.vue')
  // },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../components/auth/SignUp.vue"),
    meta: {
      requiresVisitor: true
    }
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/Test.vue"),

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
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/logout",
    name: "logout",
    component: () => import("../components/auth/Logout.vue")
  },
  {
    path: "/",
    name: "login2",
    component: () =>
      import( /* webpackChunkName: "about" */ "../components/LoginTemplate.vue"),
    meta: {
      requiresVisitor: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;