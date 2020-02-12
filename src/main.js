import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Bulma from 'bulma'
// import axios from 'axios'
import Vuex from 'vuex'
import axios from './backend/vue-axios'

import 'bulma/bulma.sass'
import 'bulma/css/bulma.css'
// import '/js/bulma.js'

// const _urlOriginApi = 'http://192.168.43.231/capcin/api/'
// const _LurlApi = 'http://localhost/capcin/api/'
// const _newUrlApp = _LurlApi + 'app'
// const _newUrlUser = _LurlApi + 'user/login'
// const _newUrlApiLogin = _LurlApi + 'apilogin'
// const axios = require('axios').default
// axios.defaults.baseURL = "http: //localhost/capcin/api/"
// axios.defaults.withCredentials = true

Vue.config.productionTip = false
Vue.use(Vuex, axios)
Vue.use(Bulma)

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')