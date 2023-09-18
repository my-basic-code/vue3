import { Axios } from "./Axios";

function getDeliveryAddress(payload) {
  const url = `api/deliveryAddressDefault`;
  return Axios.get(url, payload);
}

function postPayment(payload) {
  const url = `api/payment`;
  return Axios.post(url, payload);
}

function postPaymentNow(payload) {
  const url = `api/payment/now`;
  return Axios.post(url, payload);
}

export const paymentService = {
  getDeliveryAddress, postPayment, postPaymentNow
};