import { Axios } from "./Axios";

function paymentSuccess(code) {
  const url = `admin/api/order/paymentSuccess?code=${code}`;
  return Axios.put(url);
}
function getOrderStatistics() {
  const url = `api/order`;
  return Axios.get(url);
}

function getOrderDetail(payload) {
  const url = `api/orderDetail`;
  return Axios.get(url, payload);
}

function getListOrderByUser(payload) {
  const url = `api/question/list_order_by_user`;
  return Axios.get(url, payload);
}

export const orderService = {
  paymentSuccess, getOrderStatistics, getOrderDetail, getListOrderByUser
};