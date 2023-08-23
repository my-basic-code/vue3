import { Axios } from "./Axios";

export function shareTikTok(payload) {
  const lang = localStorage.getItem('user-locale')
  const url = `tiktok/${lang}`;
  return Axios.post(url,payload);
}


export const tiktokService = {
  shareTikTok
};
