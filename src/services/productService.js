import { Axios } from "./Axios";

function searchProduct(payload) {
  const url = "public/api/product";
  return Axios.get(url, payload);
}

function getDetail(id) {
  const url = `public/api/product/${id}`;
  return Axios.get(url);
}

export const productService = {
  searchProduct, getDetail
};