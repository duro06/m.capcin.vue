/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
// import Login from '../views/Login.vue'

Vue.use(VueRouter);
const role = localStorage.getItem("role");
const routes = [{
    path: "/",
    redirect: {
      name: "home",
    }
  },
  {
    path: "/login",
    name: "login",
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
    
    beforeEnter: (to, from, next) => {
      // if(from=={path:"/login"}){
      //   console.log("I'am come from login")
      //   console.log("from ",from)
      // }else{
      //   console.log("From ",from)
      //   console.log("to ",to)
      // }
      console.log('logged get ', store.getters.loggedIn);
      if (store.getters.loggedIn) {
      console.log('Entering Home ');
        next();
      } else if (store.getters.waitingVerified) {
        next('/test');
      } else {
        next("/login");
      }
    }
  },
  
  {
    path: "/profile",
    name: "profile",
    component: () => import("../components/Profile.vue"),
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
    path: "/produksi",
    name: "produksi",
    component: () =>
      import(
        "../views/Produksi.vue"),
            children: [{
      path: 'produk',
      component: () => import("../components/produksi/ProduksiCard.vue")
    },   
    ],

    beforeEnter: (to, from, next) => {
      // console.log("to ",to)
      // console.log("from ",from)
      // console.log(store.getters.levelAccess);
      // console.log("router get Profile ",store.getters.myProfile.role);
      console.log("router get access Profile ",store.getters.levelAccess);
      console.log("router Get storage ",role);
      if (role === "Produksi" || store.getters.levelAccess === "Produksi") {
        next();
        console.log("Produksi confirm")
      } else if (store.getters.waitingVerified) {
        console.log("Produksi look for verified")
        next('/test');
      } else {
        console.log("Produksi none are true")
        next("/home");
      }
    }
  },
  {
    path: "/packing",
    name: "packing",
    component: () =>
      import(
        "../views/Packing.vue"),
    beforeEnter: (to, from, next) => {
      console.log("router get Profile ",store.getters.myProfile.role);
      console.log("router get Profile ",store.getters.levelAccess);
      if (store.getters.myProfile.role == "Packing") {
        next();
      } else if (store.getters.waitingVerified) {
        next('/test');
      } else {
        next("/home");
      }
    }
  }, {
    path: "/supplier",
    name: "supplier",
    component: () =>
      import(
        "../views/Supplier.vue"),
    beforeEnter: (to, from, next) => {
      console.log(store.getters.levelAccess);
      if (store.getters.levelAccess == "Supplier") {
        next();
      } else if (store.getters.waitingVerified) {
        next('/test');
      } else {
        next("/home");
      }
    }
  }, {
    path: "/mitra",
    name: "mitra",
    component: () =>
      import(
        "../views/Mitra.vue"),
    beforeEnter: (to, from, next) => {
      console.log('get level ', store.getters.levelAccess);
      if (store.getters.levelAccess == "Mitra") {
        next();
      } else if (store.getters.waitingVerified) {
        next('/test');
      } else {
        next("/home");
      }
    }
  },
  {
    path: "/card",
    name: "card",
    component: () =>
      import(
        "../components/element/Card.vue"),
    // beforeEnter: (to, from, next) => {
    //   console.log('get level ', store.getters.levelAccess);
    //   if (store.getters.levelAccess == 6) {
    //     next();
    //   } else if (store.getters.waitingVerified) {
    //     next('/test');
    //   } else {
    //     next("/home");
    //   }
    // }
  },
  {
    path: "/logout",
    name: "logout",
    component: () => import("../components/auth/Logout.vue")
  },{
    path: "/tabel",
    name: "tabel",
    component: () => import("../components/element/Tabel.vue")
  }
  // {
  //   path: "/produksi",
  //   name: "produksi",
  //   component: () =>
  //     import(
  //       "../components/produksi/ProduksiCard.vue"),
  //   // beforeEnter: (to, from, next) => {
  //   //   console.log('get level ', store.getters.levelAccess);
  //   //   if (store.getters.levelAccess == 6) {
  //   //     next();
  //   //   } else if (store.getters.waitingVerified) {
  //   //     next('/test');
  //   //   } else {
  //   //     next("/home");
  //   //   }
  //   // }
  // }
  // {
  //   path: "/login",
  //   name: "login",
  //   component: () =>
  //     import(
  //       "../components/LoginTemplate.vue"),
  //   beforeEnter: (to, from, next) => {
  //     console.log('login get ', store.getters.loggedIn);
  //     if (store.getters.loggedIn) {
  //       next("/home");
  //     } else if (store.getters.waitingVerified) {
  //       next('/test');
  //     } else {
  //       next();
  //     }
  //   }
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
