import { apiHttp } from "$lib/api/axiosApi";
import { getJWT } from "@utils/localStorage";

const verifySession = () => getJWT() != null;

export const getContactsAPI = async ({ currentPage = 1, pageSize = 20 } = {}) => {
    if (!verifySession())
        return console.error("Error: No hay JWT disponible.");

    const bearer = `Bearer ${getJWT()}`;
    const params = new URLSearchParams();

    params.append('page', currentPage);
    params.append('page_size', pageSize);
    

    try {
        const res = await apiHttp("GET", "/v1/client/contact", null, params, { Authentication: bearer });
        
        return res.data ?? null;
    } catch (error) {
        console.error("Error obteniendo los contactos:", error);
        return;
    }
}