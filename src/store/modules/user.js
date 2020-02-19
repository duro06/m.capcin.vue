// import axios from "axios";
import { httpd } from "../../services/service";
import { http } from "../../services/service";
import store from "..";
// import axios from "@/backend/vue-axios";

export default {
  state: {
    token: localStorage.getItem("access_token") || null,
    adminVerified: localStorage.getItem("waiting_verivication") || null,
    level: localStorage.getItem("access_level") || null
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
          .post("api/user/register", data)
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
        // return new Promise((resolve, reject) =>
        // {
        // http()
        //   .post("api/user/logout")
        //   .then(
        // response => {
        localStorage.removeItem("access_token"),
          localStorage.removeItem("access_level"),
          commit("setDestroyToken", {
            root: true
          });
        commit("setDestroyLevel", {
          root: true
        });
        // resolve(response);
        // console.log(response);
        // context.commit('addTodo', response.data)
        // }
        // )
        // .catch(
        //   localStorage.removeItem("access_token"),
        //   context.commit("destroyToken")
        //   // reject(error);
        // );
        // });
      }
    },
    retrieveToken({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        console.log(credentials);
        httpd()
          .post("api/user/login", credentials)
          .then(response => {
            // console.log(response.data.data)
            const token = response.data.data.token;
            const level = response.data.data.level;
            localStorage.setItem("access_token", token);
            localStorage.setItem("access_level", level);
            commit("setRetrieveToken", token, {
              root: true
            });
            commit("setAccessLevel", level, {
              root: true
            });
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
