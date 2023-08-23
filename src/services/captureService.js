import { Axios } from "./Axios";

export function getFrame(payload) {
  const url = "frame/client";
  return Axios.get(url, payload);
}


export const captureService = {
  getFrame
};