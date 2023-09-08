import { Axios } from "./Axios";

function getAllBanner(payload) {
  const url = "public/api/banner";
  return Axios.get(url, payload);
}

export const bannerService = {
  getAllBanner
};