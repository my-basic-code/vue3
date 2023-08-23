import {Axios} from "./Axios";


export function getDetailSportSchedule(payload) {
    const url = 'schedule/find-by-date'
    return Axios.post(url, payload);
}

export const scheduleService = {
    getDetailSportSchedule,
};
