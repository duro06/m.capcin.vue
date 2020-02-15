import Vue from "vue";
import Vuex from "vuex";
import User from "./modules/user";
import Ginput from "./modules/ginput";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: User,
    ginput: Ginput
  }
});
