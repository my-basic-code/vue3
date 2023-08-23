import { Axios } from "./Axios";

export function searchPlayer(payload) {
  const url = "player/search";
  return Axios.post(url, payload);
}

export const playerService = {
  searchPlayer
};