import { Axios } from "./Axios";

function getALlQuestion(payload) {
  const url = "admin/api/question";
  return Axios.get(url, payload);
}

function getDetailQuestion(id) {
  const url = `api/question/${id}`;
  return Axios.get(url);
}

export const customerService = {
  getALlQuestion, getDetailQuestion
};