import { Axios } from "./Axios";

function sendCodeRegister(payload) {
    const url = "public/api/user/send-code-register";
    return Axios.post(url, payload);
}

function verifyCodeRegister(payload) {
    const url = "public/api/user/verify-code-register";
    return Axios.post(url, payload);
}

function register(payload) {
    const url = "public/api/user/register";
    return Axios.post(url, payload, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

function login(payload) {
    const url = "auth/signin";
    return Axios.post(url, payload);
}

function sendCodeFindAccount(payload) {
    const url = "public/api/user/send-code-find-account";
    return Axios.post(url, payload);
}

function verifyCodeFindAccount(payload) {
    const url = "public/api/user/verify-code-find-account";
    return Axios.post(url, payload);
}

function sendMailForgotPass(payload) {
    const url = "public/api/user/send-mail-forgot-password";
    return Axios.post(url, payload);
}

function changePassword(payload, token) {
    const url = "public/api/user/change-password";
    return Axios.post(url, payload, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const authService = {
    sendCodeRegister, verifyCodeRegister, register, login, sendCodeFindAccount, verifyCodeFindAccount, sendMailForgotPass, changePassword
};