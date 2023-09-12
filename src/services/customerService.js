import { Axios } from "./Axios";

function getALlQuestion(payload) {
  const url = "admin/api/question";
  return Axios.get(url, payload);
}

function getDetailQuestion(id) {
  const url = `api/question/${id}`;
  return Axios.get(url);
}

function getNotify(payload) {
  const url = `api/notify`;
  return Axios.get(url, payload);
}

function getDetailNotification(id) {
  const url = `api/notify/${id}`;
  return Axios.get(url);
}

function getDetailRules(id) {
  const url = `api/notify/${id}`;
  return Axios.get(url);
}

export const customerService = {
  getALlQuestion, getDetailQuestion, getNotify, getDetailNotification, getDetailRules
};