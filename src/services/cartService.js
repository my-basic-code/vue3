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

function editStatusProd(payload) {
  const url = `api/cart/choice_product_ids`;
  return Axios.post(url, payload);
}

function getListProdPayment(payload) {
  const url = `api/cart/get_carts_by_current_user`;
  return Axios.get(url, payload);
}

export const cartService = {
  getCart, getDetailProd, addProd, delProd, editProfileProd, editStatusProd, getListProdPayment
};