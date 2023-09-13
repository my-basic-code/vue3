import { Axios } from "./Axios";

function getAllStory(payload) {
  const url = "public/api/post";
  return Axios.get(url, payload);
}

function getDetailStory(id) {
  const url = `public/api/post/${id}`;
  return Axios.get(url);
}

export const storyService = {
  getAllStory, getDetailStory
};