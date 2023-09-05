import { Axios } from "./Axios";

function checkEmail(payload) {
    const url = "signup/check-email";
    return Axios.post(url, payload);
}

function register(payload) {
    const url = "signup";
    return Axios.post(url, payload);
}

function login(payload) {
    const url = "auth/signin";
    return Axios.post(url, payload);
}


function findEmail(payload) {
    const url = "find-email";
    return Axios.post(url, payload);
}

function resetPassword(payload) {
    const url = "reset-password";
    return Axios.post(url, payload)
}


function getUser() {
    const url = "user/info";
    return Axios.get(url)
}

export const authService = {
    checkEmail, register, resetPassword, login, findEmail, getUser
};