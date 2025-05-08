// Este archivo contiene las funciones para interactuar con la API de usuario
// y se encarga de realizar las peticiones HTTP necesarias para el registro, inicio de sesión, quien soy, balance y verificación del usuario.
// Se utiliza la función apiHttp para realizar las peticiones, que se encuentra en el archivo axiosApi.js.
// Las funciones devuelven una solicitud que se resuelve con la respuesta de la API o se rechaza con un error.

import { apiHttp } from "$lib/api/axiosApi";
import { getJWT } from "$lib/utils/localStorage"; 

export const loginAPI = (loginValues) => 
    apiHttp("POST", "/v1/public/client/user/login", loginValues);

export const whoAmIAPI = async () => {
    const token = getJWT(); 
    if (!token) {
        console.error("Error: No hay JWT disponible.");
        return null;
    }

    const headers = {
        Authorization: `Bearer ${token}`
    };

    try {
        const response = await apiHttp("GET", "/v1/client/user/whoami", {}, headers);
        console.log("Respuesta completa de whoAmIAPI:", response);
        return response.data ?? null;  // Asegurar que retornamos solo "data"
    } catch (error) {
        console.error("Error obteniendo datos del usuario:", error);
        return null;
    }
};



export const getBalanceAPI = async () => {
    const token = getJWT(); // Obtener el JWT almacenado en localStorage
    if (!token) {
        console.error("Error: No hay JWT disponible.");
        return null;
    }

    const headers = {
        Authorization: `Bearer ${token}` // Enviar el JWT en la cabecera correctamente
    };

    try {
        const response = await apiHttp("GET", "/v1/client/user/balance", {}, headers);
        console.log("Respuesta completa de getBalanceAPI:", response); // Depuración
        return response.data?.balance ?? null; // Devuelve el saldo o null si no existe
    } catch (error) {
        console.error("Error obteniendo el saldo:", error);
        return null;
    }
};




