import { Axios } from "./Axios";

function getProfile(payload) {
  const url = "api/user/profile";
  return Axios.get(url, payload);
}

function getSmsCode(payload) {
  const url = "api/user/get-sms-code";
  return Axios.get(url, payload);
}

function editProfile(payload) {
  const url = "api/user/profile";
  return Axios.put(url, payload, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

export const userService = {
  getProfile, editProfile, getSmsCode
};