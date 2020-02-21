// import axios from "axios";
import { httpd, http } from "../../services/service";
import store from "..";
import { setToken } from "../../services/auth_service";
// import axios from "@/backend/vue-axios";

export default {
  state: {
    token: localStorage.getItem("access_token") || null,
    adminVerified: localStorage.getItem("waiting_verivication") || null,
    level: localStorage.getItem("access_level") || null,
    profile: {}
  },
  getters: {
    loggedIn(state) {
      return state.token !== null;
    },
    levelAccess(state) {
      return state.level;
    },
    waitingVerified(state) {
      return state.adminVerified !== null;
    }
  },
  mutations: {
    setAccessLevel(state, level) {
      state.level = level;
    },
    setDestroyLevel(state) {
      state.level = null;
    },
    setRetrieveVerifie(state, msg) {
      state.adminVerified = msg;
    },
    setDestroyverifie(state) {
      state.adminVerified = null;
    },

    setRetrieveToken(state, token) {
      state.token = token;
    },
    setDestroyToken(state) {
      state.token = null;
    }
  },
  actions: {
    destroyVerifie(context) {
      localStorage.removeItem("waiting_verivication");
      context.commit("setDestroyverifie", {
        root: true
      });
    },
    retrieveVerifie(contex) {
      localStorage.setItem("waiting_verivication", contex);
      contex.commit("setRetrieveVerifie", {
        root: true
      });
    },
    retrieveName() {
      return new Promise((resolve, reject) => {
        http()
          .get("api/user")
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    register(context, data) {
      return new Promise((resolve, reject) => {
        httpd()
          .post("api/auth/register", data)
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    destroyToken({ commit }) {
      if (store.getters.loggedIn) {
        http("api/auth/logout");

        localStorage.removeItem("access_token"),
          localStorage.removeItem("access_level"),
          commit("setDestroyToken", {
            root: true
          });
        commit("setDestroyLevel", {
          root: true
        });
      }
    },
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        console.log(credentials);
        http()
          .post("api/auth/login", credentials)
          .then(response => {
            console.log(response);
            // const token = response.data.access_token;
            // const level = response.data.token_scope;
            // localStorage.setItem("access_token", token);
            // localStorage.setItem("access_level", level);
            // commit("setRetrieveToken", token, {
            //   root: true
            // });
            // commit("setAccessLevel", level, {
            //   root: true
            // });
            setToken(response.data);
            resolve(response);
          })
          .catch(error => {
            // console.log(error)
            reject(error);
          });
      });
    }
  }
};
