import { Axios } from "./Axios";

export function checkEmail(payload) {
    const url = "signup/check-email";
    return Axios.post(url, payload);
}

export function register(payload) {
    const url = "signup";
    return Axios.post(url, payload);
}

export function login(payload) {
    const url = "login";
    return Axios.post(url, payload);
}

export function loginFromNaver(payload) {
    const url = "login/naver/callback";
    return Axios.get(url, payload);
}

export function findEmail(payload) {
    const url = "find-email";
    return Axios.post(url, payload);
}

export function resetPassword(payload) {
    const url = "reset-password";
    return Axios.post(url, payload)
}

export function resetPasswordReset(payload) {
    const url = "reset-password/reset";
    return Axios.post(url, payload)
}

export function getUser() {
    const url = "user/info";
    return Axios.get(url)
}

export const authService = {
    checkEmail, register, resetPassword, resetPasswordReset, login, findEmail, loginFromNaver, getUser
};