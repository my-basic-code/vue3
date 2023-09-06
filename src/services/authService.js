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

export const authService = {
    sendCodeRegister, verifyCodeRegister, register, login
};