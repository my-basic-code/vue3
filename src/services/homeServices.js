import { Axios } from "./Axios";


export function getAxios() {
   const url = "api/v1/notification";
   return Axios.post(url);
}

const homeService = {
   getAxios,
};

export default homeService;