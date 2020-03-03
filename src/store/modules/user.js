// import axios from "axios";
import { http, httpNot } from "../../services/service";
import store from "..";
import { setToken } from "../../services/auth_service";
// import axios from "@/backend/vue-axios";

export default {
  state: {
    server: "http://localhost:8000/home",
    token: localStorage.getItem("access_token") || null,
    adminVerified: localStorage.getItem("waiting_verivication") || null,
    // level: localStorage.getItem("access_level") || null,
    // userProfile: {},
    profile: {}
  },
  getters: {
    serverUrl(state) {
      return state.server;
    },
    loggedIn(state) {
      return state.token !== null;
    },
    levelAccess(state) {
      console.log("Returning Role access");
      return state.profile.role;
    },
    waitingVerified(state) {
      return state.adminVerified !== null;
    },
    myProfile(state) {
      console.log("Returning profile state");
      return state.profile;
    }
    // akunProfile(state) {
    //   return state.userProfile;
    // }
  },
  mutations: {
    // setUserProfile(state, payload) {
    //   state.userProfile = payload;
    // },
    // delUserProfile(state) {
    //   state.userProfile = {};
    // },
    setAuthenticate(state, payload) {
      state.profile = payload;
      console.log("Profile written");
    },
    delAuthenticate(state) {
      state.profile = {};
    },
    // setAccessLevel(state, level) {
    //   state.level = level;
    // },
    // setDestroyLevel(state) {
    //   state.level = null;
    // },
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
    aunthenticate(context, payload) {
      context.commit("setAuthenticate", payload, { root: true });
      // localStorage.setItem("role", payload.role);
    },
    actToken(context, payload) {
      context.commit("setRetrieveToken", payload, { root: true });
    },
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
          .get("auth/profile")
          .then(response => {
            console.log(response);
            resolve(response);
          })
          .catch(error => {
            console.log(error);
            reject(error);
          });
      });
    },
    register(context, data) {
      return new Promise((resolve, reject) => {
        httpNot()
          .post("client/register", data)
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    destroyToken(context) {
      if (store.getters.loggedIn) {
        http()
          .get("auth/logout")
          .then(response => {
            this.flashMessage.success({
              message: response.data.message,
              time: 2000
            });
            console.log(response);
          })
          .catch(error => {
            console.log(error.response);
          });

        localStorage.removeItem("access_token"),
          localStorage.removeItem("level"),
          context.commit("setDestroyToken", {
            root: true
          });
        // context.commit("setDestroyLevel", {
        //   root: true
        // });
        context.commit("delAuthenticate", {
          root: true
        });
      } else {
        localStorage.removeItem("role");
      }
    },
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        console.log(credentials);
        http()
          .post("auth/login", credentials)
          .then(response => {
            console.log(response);
            setToken(response.data);
            this.flashMessage.success({
              message: "Login success",
              time: 2000
            });
            resolve(response);
          })
          .catch(error => {
            // console.log(error)
            if (error.response != undefined) {
              reject(error);
            }
          });
      });
    }
  }
};
