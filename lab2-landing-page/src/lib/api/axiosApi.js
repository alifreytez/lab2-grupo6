// Este archivo contiene la configuración de Axios para realizar peticiones a la API backend.
// Se definen las funciones para realizar peticiones GET, POST, PUT y DELETE, así como la configuración de los headers y el manejo de errores.

import axios from "axios"; // Importa la librería Axios para realizar peticiones HTTP
import { getJWT } from "$lib/utils/localStorage"; // Importa la función para obtener el JWT del almacenamiento local

export const API_URL_BACKEND = import.meta.env.PUBLIC_API_URL_BACKEND || "http://192.168.31.92:3000"; // URL base de la API backend
const AXIOS_TIMEOUT_MS = import.meta.env.PUBLIC_API_TIMEOUT_MS || 10000; // Tiempo de espera para las peticiones Axios (10 segundos por defecto)

// inicializa los headers por defecto para las peticiones Axios
const defaultHeaders = {
    Accept: "application/json",
    "Content-Type": "application/json",
}; 

export const apiHttp = async (method, endpoint, data = null, params = null, options = {}) => {
    let jwt = getJWT(); // Obtiene el JWT del almacenamiento local para autenticar las peticiones

    // Configura los headers de la petición, incluyendo el JWT si está disponible
    options.headers = {
        ...defaultHeaders,
        ...options.headers,
        ...(jwt ? { Authorization: `Bearer ${jwt}` } : {}),
    };

    // Configura la URL de la API a la que se va a realizar la petición
    const url = `${API_URL_BACKEND}${endpoint}`;
    console.log(`Intentando conexión con: ${url}`);

    // Realiza la petición HTTP utilizando Axios y maneja los errores
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
