import store from "../store";
import axios from "axios";

export function http() {
  return axios.create({
    headers: {
      Autorization: "Bearer" + store.getters.token
    }
  });
}
export function httpd() {
  return axios.create({
    headers: {
      "Content-Type": "aplication/json"
    }
  });
}
