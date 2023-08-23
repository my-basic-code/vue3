import { Axios } from "./Axios";

function getVideo(payload) {
  const url = "file/fab-type";
  return Axios.post(url, payload);
}

export const videoService = {
  getVideo,
};
