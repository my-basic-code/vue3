import { Axios } from "./Axios";

function searchProduct(payload) {
  const url = "public/api/product";
  return Axios.get(url, payload);
}

export const productService = {
  searchProduct
};