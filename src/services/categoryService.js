import { Axios } from "./Axios";

function getAllCategory(payload) {
  const url = "public/api/category";
  return Axios.get(url, payload);
}

export const categoryService = {
  getAllCategory
};