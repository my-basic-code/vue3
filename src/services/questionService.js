import { Axios } from "./Axios";

function postQuestion(payload) {
  const url = "api/question";
  return Axios.post(url, payload, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}


export const questionService = {
  postQuestion
};