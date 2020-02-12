import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../views/Login.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Login',
    component: () => import( /* webpackChunkName: "about" */ '../views/Login.vue')
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
    path: '/signup',
    name: 'Signup',
    component: () => import('../components/auth/SignUp.vue')
  }, {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue')
  }, {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  }, {
    path: '/logged',
    name: 'Logged',
    component: () => import('../views/Logged.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router