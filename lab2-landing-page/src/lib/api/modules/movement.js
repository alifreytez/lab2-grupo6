import { apiHttp } from "$lib/api/axiosApi";
import { getJWT } from "@utils/localStorage";

const verifySession = () => getJWT() != null;

export const getMovementsAPI = (curPage = 1, pageSize = 20, multiplier = 1) => {
    if (!verifySession())
        return console.error("Error: No hay JWT disponible.");

    const bearer = `Bearer ${getJWT()}`;
    const params = new URLSearchParams();

    params.append('page', curPage);
    params.append('page_size', pageSize);
    params.append('multiplier', multiplier);

    return apiHttp("GET", "/v1/client/movement", null, params, { Authentication: bearer });
}
