import jwt from "jsonwebtoken";
import store from "../store";
import * as set from "./service";

export function register(user) {
  return set.http().post("auth/register", user);
}

export function login(user) {
  return set
    .http()
    .post("auth/login", user)
    .then(response => {
      console.log("Scope ", response.data.token_scope);
      if (response.status === 200) {
        if (
          response.data.token_scope == "Admin" ||
          response.data.token_scope == "Root"
        ) {
          serverToken(response.data);
        } else {
          setToken(response.data);
        }
      }

      return response.data;
    });
}

export function setToken(user) {
  console.log("client");
  const token = jwt.sign({ user: user }, "secretkeynyajwtpluginokee2020");
  localStorage.setItem("access_token", token);
  store.commit("setRetrieveToken", token, { root: true });
  store.dispatch("aunthenticate", user.user);
  return;
}
function serverToken(user) {
  console.log("server");
  window.location = store.getters.serverUrl + "/login";
  console.log("server ", window.location);
  const token = jwt.sign({ user: user }, "secretkeynyajwtpluginokee2020");
  localStorage.setItem("access_token", token);
  store.commit("setRetrieveToken", token, { root: true });
  store.dispatch("aunthenticate", user.user);
  return;
}

export function getAccessToken() {
  const token = localStorage.getItem("access_token");
  if (!token) {
    return null;
  }

  const tokenData = jwt.decode(token);
  return tokenData.user.access_token;
}

export function getProfile() {
  return set.http().get("auth/profile");
}
