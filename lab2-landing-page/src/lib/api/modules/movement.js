import { apiHttp } from "$lib/api/axiosApi";
import { getJWT } from "@utils/localStorage";

const verifySession = () => getJWT() != null;

export const getMovementsAPI = async ({ currentPage = 1, pageSize = 20, multiplier = null }) => {
    if (!verifySession())
        return console.error("Error: No hay JWT disponible.");

    const bearer = `Bearer ${getJWT()}`;
    const params = new URLSearchParams();

    params.append('page', currentPage);
    params.append('page_size', pageSize);
    if (multiplier != null)
        params.append('multiplier', multiplier);

    try {
        const res = await apiHttp("GET", "/v1/client/movement", null, params, { Authentication: bearer });
        
        return res.data ?? null;
    } catch (error) {
        console.error("Error obteniendo los movimientos:", error);
        return;
    }
}

export const createMovementAPI = async (data) => {
    if (!verifySession())
        return console.error("Error: No hay JWT disponible.");

    const bearer = `Bearer ${getJWT()}`;
    
    console.log("estoy enviando", data);
    try {
        const res = await apiHttp("POST", "/v1/client/movement", data, null, { Authentication: bearer });
        
        return res;
    } catch (error) {
        console.error("Error obteniendo los movimientos:", error);
        return { success: false, message: "La transferencia no pudo ser realizada, verifique el estado de su cuenta o los datos de la transferencia."};
    }
}