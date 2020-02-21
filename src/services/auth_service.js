import jwt from "jsonwebtoken";
import store from "../store";
import * as set from "./service";

export function setToken(user) {
  const token = jwt.sign({ user: user }, "secretkeynyajwtpluginokee2020");
  const level = user.user.role;
  localStorage.setItem("access_token", token);
  localStorage.setItem("access_level", level);
  store.commit("setRetrieveToken", token, { root: true });
  store.commit("setAccessLevel", level, { root: true });
}

export function getAccessToken() {
  const token = localStorage.getItem("access_token");
  if (!token) {
    return null;
  }

  const tokenData = jwt.decode(token);
  console.log(tokenData.user.access_token);
  return tokenData.user.access_token;
}

export function getProfile() {
  return set.http().get("api/auth/profile");
}
