import { Axios } from "./Axios";

export function getSport() {
  const url = "spc/find-all";
  return Axios.get(url);
}

export function getPlayerSport(payload) {
  const url = `player/fab-spc/${payload.id}?page=${payload.page}&size=${payload.size}`
  return Axios.get(url);
}

export const sportService = {
  getSport,
  getPlayerSport
};
