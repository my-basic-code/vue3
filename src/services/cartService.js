import { Axios } from "./Axios";

function getCart(payload) {
  const url = "api/cart";
  return Axios.get(url, payload);
}

function getDetailProd(id) {
  const url = `api/cart/${id}`;
  return Axios.get(url,);
}
function addProd(payload) {
  const url = "api/cart";
  return Axios.post(url, payload);
}
function delProd(id) {
  const url = `api/cart/${id}`;
  return Axios.del(url);
}
function editProfileProd(id, payload) {
  const url = `api/cart/${id}`;
  return Axios.put(url, payload);
}

export const cartService = {
  getCart, getDetailProd, addProd, delProd, editProfileProd
};