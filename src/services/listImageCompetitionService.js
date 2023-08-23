import {Axios} from "./Axios";

export function listAllImage(page) {
    const url = `post/find-all/0?page=${page}&size=2`;
    return Axios.get(url);
}

export const listImageCompetitionService = {
    listAllImage
};