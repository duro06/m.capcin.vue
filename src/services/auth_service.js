import jwt from "jsonwebtoken";
import store from "../store";
export function setToken(user) {
  const token = jwt.sign({ user: user }, "secretkeynyajwtpluginokee2020");
  const level = user.user.role;
  localStorage.setItem("access_token", token);
  localStorage.setItem("access_level", level);
  store.commit("setRetrieveToken", token, { root: true });
  store.commit("setAccessLevel", level, { root: true });
}
