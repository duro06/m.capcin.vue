import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Bulma from 'bulma'
import axios from 'axios'
import Vuex from 'vuex'

import 'bulma/bulma.sass'
import 'bulma/css/bulma.css'

Vue.config.productionTip = false
Vue.use(Vuex, axios)
Vue.use(Bulma)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')