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
  const url = `api/orderDetail?statuses=1,2,3`;
  return Axios.get(url, payload);
}

export const orderService = {
  paymentSuccess, getOrderStatistics, getOrderDetail
};