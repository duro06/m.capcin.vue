import jwt from "jsonwebtoken";
import store from "../store";
import * as set from "./service";

export function setToken(user) {
  const token = jwt.sign({ user: user }, "secretkeynyajwtpluginokee2020");
  localStorage.setItem("access_token", token);
  store.commit("setRetrieveToken", token, { root: true });
  this.$store.dispatch("aunthenticate", user.user);
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
  return set.http().get("api/auth/profile");
}
