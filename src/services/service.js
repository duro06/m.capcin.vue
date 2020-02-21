// import store from "../store";
import axios from "axios";
import * as auth from "./auth_service";

export function http() {
  return axios.create({
    headers: {
      Autorization: "Bearer " + auth.getAccessToken()
    }
  });
}
export function httpTry() {
  return axios.create({
    headers: {
      Accept: "aplication/json",
      Autorization: "Bearer " + auth.getAccessToken()
    }
  });
}
export function httpNot() {
  return axios.create({
    headers: {
      "Content-Type": "aplication/json"
    }
  });
}
