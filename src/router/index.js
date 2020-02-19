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
      console.log('login 2 get ', store.getters.loggedIn);
      if (store.getters.loggedIn) {
        next("/home");
      } else if (store.getters.waitingVerified) {
        next('/test');
      } else {
        next();
      }
    }
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../components/auth/SignUp.vue"),
    beforeEnter: (to, from, next) => {
      console.log('signup get ', store.getters.loggedIn);
      if (store.getters.loggedIn) {
        next("/home");
      } else if (store.getters.waitingVerified) {
        next('/test');
      } else {
        next();
      }
    }
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../views/Test.vue"),
    beforeEnter: (to, from, next) => {
      console.log('tetst get ', store.getters.waitingVerified);
      if (store.getters.waitingVerified) {
        next();
      } else {
        next("/login");
      }
    }
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
    children: [{
        path: 'navbar',
        component: () => import("../components/Navbar.vue")
      },
      {
        path: 'footer',
        component: () => import("../components/Footer.vue")
      },
      {
        path: 'level3',
        component: () => import("../components/Level3.vue")
      }
    ]
  },
  {
    path: "*",
    name: "hello",
    component: () => import("../components/HelloWorld.vue"),
    children: [{
        path: 'navbar',
        component: () => import("../components/Navbar.vue")
      },
      {
        path: 'footer',
        component: () => import("../components/Footer.vue")
      }
    ],
    beforeEnter: (to, from, next) => {
      console.log('logged get ', store.getters.loggedIn);
      if (store.getters.loggedIn) {
        next();
      } else if (store.getters.waitingVerified) {
        next('/test');
      } else {
        next("/login");
      }
    }
  },
  {
    path: "/logged",
    name: "logged",
    component: () => import("../views/Logged.vue"),
    beforeEnter: (to, from, next) => {
      console.log('logged get ', store.getters.loggedIn);
      if (store.getters.loggedIn) {
        next();
      } else if (store.getters.waitingVerified) {
        next('/test');
      } else {
        next("/login");
      }
    }
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
    beforeEnter: (to, from, next) => {
      console.log('login get ', store.getters.loggedIn);
      if (store.getters.loggedIn) {
        next("/home");
      } else if (store.getters.waitingVerified) {
        next('/test');
      } else {
        next();
      }
    }
  },
  {
    path: "/level3",
    name: "level3",
    component: () =>
      import(
        "../components/Level3.vue"),
    beforeEnter: (to, from, next) => {
      console.log(store.getters.levelAccess);
      if (store.getters.levelAccess == 3) {
        next();
      } else if (store.getters.waitingVerified) {
        next('/test');
      } else {
        next("/home");
      }
    }
  },
  {
    path: "/level4",
    name: "level4",
    component: () =>
      import(
        "../components/Level4.vue"),
    beforeEnter: (to, from, next) => {
      console.log(store.getters.levelAccess);
      if (store.getters.levelAccess == 4) {
        next();
      } else if (store.getters.waitingVerified) {
        next('/test');
      } else {
        next("/home");
      }
    }
  }, {
    path: "/level5",
    name: "level5",
    component: () =>
      import(
        "../components/Level5.vue"),
    beforeEnter: (to, from, next) => {
      console.log(store.getters.levelAccess);
      if (store.getters.levelAccess == 5) {
        next();
      } else if (store.getters.waitingVerified) {
        next('/test');
      } else {
        next("/home");
      }
    }
  }, {
    path: "/level6",
    name: "level6",
    component: () =>
      import(
        "../components/Level6.vue"),
    beforeEnter: (to, from, next) => {
      console.log('get level ', store.getters.levelAccess);
      if (store.getters.levelAccess == 6) {
        next();
      } else if (store.getters.waitingVerified) {
        next('/test');
      } else {
        next("/home");
      }
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
