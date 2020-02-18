import axios from "axios";
// import axios from "@/backend/vue-axios";

// const _urlOriginApi = "http://192.168.43.231/capcin/";
const _LurlApi = "http://localhost/capcin/";
// const _LurlApi = "http://localhost/capcin-copy/";
// const _newUrlApp = _LurlApi + "app";
// const _newUrlUser = _LurlApi + "user/login";
// const _newUrlApiLogin = _LurlApi + "apilogin";

axios.defaults.baseURL = _LurlApi;
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
      context.commit("setDestroyverifie", { root: true });
    },
    retrieveVerifie(contex) {
      localStorage.setItem("waiting_verivication", contex);
      contex.commit("setRetrieveVerifie", { root: true });
    },
    retrieveName(context) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + context.state.token;

      return new Promise((resolve, reject) => {
        axios
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
        const params = new URLSearchParams();
        params.append("nama", data.nama);
        params.append("username", data.username);
        params.append("email", data.email);
        params.append("id_level", data.id_level);
        params.append("password", data.password);

        axios
          .post("api/user/register", params)
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    destroyToken(context) {
      // axios.defaults.headers.common["Authorization"] =
      //   "Bearer " + context.state.token;

      if (context.getters.loggedIn) {
        // return new Promise((resolve, reject) =>
        // {
        // axios
        //   .post("api/user/logout")
        //   .then(
        // response => {
        localStorage.removeItem("access_token"),
          localStorage.removeItem("access_level"),
          context.commit("setDestroyToken", { root: true });
        context.commit("setDestroyLevel", { root: true });
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
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        console.log(credentials);
        axios
          .post("api/user/login", credentials)
          .then(response => {
            // console.log(response.data.data)
            const token = response.data.data.token;
            const level = response.data.data.level;
            localStorage.setItem("access_token", token);
            localStorage.setItem("access_level", level);
            context.commit("setRetrieveToken", token, { root: true });
            context.commit("setAccessLevel", level, { root: true });
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
