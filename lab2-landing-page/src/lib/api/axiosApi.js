import axios from "axios";
import { getJWT } from "$lib/utils/localStorage";

export const API_URL_BACKEND = import.meta.env.PUBLIC_API_URL_BACKEND || "http://localhost:3000";
const AXIOS_TIMEOUT_MS = import.meta.env.PUBLIC_API_TIMEOUT_MS || 10000;

const defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
};

export const apiHttp = async (method, endpoint, data = null, params = null, options = {}) => {
    let jwt = getJWT();

    options.headers = {
        ...defaultHeaders,
        ...options.headers,
        ...(jwt ? { Authorization: `Bearer ${jwt}` } : {}),
    };

    const url = `${API_URL_BACKEND}${endpoint}`;
    console.log(`Intentando conexión con: ${url}`);

    try {
        const response = await axios({
            method: method.toLowerCase(),
            url,
            params,
            data,
            timeout: AXIOS_TIMEOUT_MS,
            ...options,
        });

        return response.data;
    } catch (error) {
        console.error("Error en la solicitud API:", error);

        if (error.code === "ECONNABORTED") {
            return { error: true, message: "Tiempo de espera agotado. La API no respondió.", status: 504 };
        }

        if (!error.response) {
            return { error: true, message: "No se pudo conectar con el servidor. Verifica la API.", status: 503 };
        }

        return {
            error: true,
            message: error.response?.data?.message || error.message || "Error desconocido",
            status: error.response?.status || 500,
        };
    }
};
