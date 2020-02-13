import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Bulma from 'bulma'
import Vuex from 'vuex'
import axios from 'axios'
import Pusher from 'pusher-js'

import 'bulma/bulma.sass'
import 'bulma/css/bulma.css'
// import 'bulma/css/bulma.css.map'
import 'bulma/css/bulma.min.css'
import 'bulma-badge/dist/css/bulma-badge.min.css'
// import 'bulma-badge/dist/css/bulma-badge.sass'


// import 'https://js.pusher.com/5.1/pusher.min.js'


Vue.config.productionTip = false
Vue.use(Vuex, axios)
Vue.use(Bulma)
// Vue.use(Pusher)

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.loggedIn) {
      next({
        path: '/',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (store.getters.loggedIn) {
      next({
        path: '/logged',
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})


new Vue({
  router,
  store,
  axios,
  Pusher,
  render: h => h(App)
}).$mount('#app')