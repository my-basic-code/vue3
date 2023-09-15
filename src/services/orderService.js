import { Axios } from "./Axios";

function paymentSuccess(code) {
  const url = `admin/api/order/paymentSuccess?code=${code}`;
  return Axios.put(url);
}
function getOrderStatistics(code) {
  const url = `admin/api/order/paymentSuccess?code=${code}`;
  return Axios.put(url);
}


export const orderService = {
  paymentSuccess,
};