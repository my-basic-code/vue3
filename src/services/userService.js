import { Axios } from "./Axios";

function login(payload) {
  const url = "auth/signin";
  return Axios.post(url, payload);
}

function getInfo(payload) {
  const url = "api/user/profile";
  return Axios.get(url, payload);
}

export const userService = {
  login, getInfo
};