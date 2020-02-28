/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Vuex from "vuex";
import axios from "axios";
import vWow from "v-wow";
import FlashMessage from '@smartweb/vue-flash-message';
import VueCarousel from "vue-carousel"
// import BulmaCarousel from "bulma-carousel"
import "bulma-carousel"

// import 'https://js.pusher.com/5.1/pusher.min.js'

Vue.use(Vuex, axios);
// Vue.use(Bulma);
Vue.use(vWow);
Vue.use(FlashMessage);
Vue.use(VueCarousel);
// Vue.use(BulmaCarousel)
// Vue.use(Pusher);

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  // const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});

// const _urlOriginApi = "http://192.168.43.231/capcin/";
const _LurlApi = "http://localhost:8000/api/";
// const _LurlApi = "http://localhost/capcin/";
// const _LurlApi = "http://192.168.1.100/capcin/";
// const _LurlApi = "http://localhost/capcin-copy/";
// const _newUrlApp = _LurlApi + "app";
// const _newUrlUser = _LurlApi + "user/login";
// const _newUrlApiLogin = _LurlApi + "apilogin";

axios.defaults.baseURL = _LurlApi;

Vue.config.productionTip = false;
new Vue({
  store,
  router,
  axios,
  // Pusher,
  render: h => h(App)
}).$mount("#app");
