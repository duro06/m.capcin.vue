// import axios from "axios";
import { http } from "../../services/service";
export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    ambilToken(context, payload) {
      return new Promise((resolve, reject) => {
        console.log(payload);
        http()
          .post("api/user/login", payload)
          .then(response => {
            // console.log(response.data.data)
            const token = response.data.data.token;
            const level = response.data.data.level;
            localStorage.setItem("access_token", token);
            localStorage.setItem("access_level", level);
            context.commit("setRetrieveToken", token, {
              root: true
            });
            context.commit("setAccessLevel", level, {
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
