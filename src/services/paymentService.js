import { Axios } from "./Axios";

function getDeliveryAddress(payload) {
  const url = `api/deliveryAddressDefault`;
  return Axios.get(url, payload);
}

export const paymentService = {
  getDeliveryAddress
};