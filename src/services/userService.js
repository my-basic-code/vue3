import { Axios } from "./Axios";

function login(payload) {
  const url = "auth/login";
  return Axios.post(url, payload);
}
function logout(payload) {
  const url = "auth/logout";
  return Axios.post(url, payload);
}

function getInfo(payload) {
  const url = "auth/profile";
  return Axios.get(url, payload);
}

export const userService = {
  login, logout, getInfo
};