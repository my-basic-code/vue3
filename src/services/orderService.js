import { Axios } from "./Axios";

function paymentSuccess(code) {
  const url = `admin/api/order/paymentSuccess?code=${code}`;
  return Axios.put(url);
}
function getOrderStatistics() {
  const url = `api/order`;
  return Axios.get(url);
}


export const orderService = {
  paymentSuccess, getOrderStatistics
};