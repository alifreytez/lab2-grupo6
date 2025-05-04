// src/lib/api/axiosApi.js
import axios from "axios";
import { getJWT } from "$lib/utils/localStorage";

export const API_URL_BACKEND = import.meta.env.PUBLIC_API_URL_BACKEND || "http://localhost:8080";
const API_TIMEOUT_MS = import.meta.env.PUBLIC_API_TIMEOUT_MS || 10000;

// Configuración global de Axios
const apiClient = axios.create({
    baseURL: API_URL_BACKEND,
    timeout: API_TIMEOUT_MS,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

/**
 * Realiza peticiones HTTP a la API del banco
 * @param {string} method - Método HTTP (GET, POST, PUT, DELETE)
 * @param {string} endpoint - URL de la API (sin la base)
 * @param {Object} data - Datos opcionales para la petición
 * @param {Object} params - Parámetros opcionales en la URL
 * @returns {Promise<Object>} - Respuesta JSON de la API
 */
export const apiHttp = async (method, endpoint, data = null, params = {}) => {
    let jwt = getJWT();
    const headers = jwt ? { Authorization: `Bearer ${jwt}` } : {};

    try {
        const response = await apiClient({
            method,
            url: endpoint,
            params,
            data,
            headers,
        });

        return response.data;
    } catch (error) {
        console.error("API Request Failed:", error);
        return {
            error: true,
            message: error?.response?.data?.message || "Error desconocido",
            status: error?.response?.status || 500,
        };
    }
};
