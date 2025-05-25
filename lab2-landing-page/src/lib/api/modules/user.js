// Este modulo contiene las funciones para interactuar con la API de usuario
// y se encarga de realizar las peticiones HTTP necesarias para el registro, inicio de sesión, quien soy, balance y verificación del usuario.
// Se utiliza la función apiHttp para realizar las peticiones, que se encuentra en el archivo axiosApi.js.
// Las funciones devuelven una solicitud que se resuelve con la respuesta de la API o se rechaza con un error.

import { apiHttp } from "$lib/api/axiosApi";
import { getJWT } from "$lib/utils/localStorage"; 

export const loginAPI = (loginValues) => 
    apiHttp("POST", "/v1/public/client/user/login", loginValues);

// Función para saber quien soy
// Esta función se encarga de obtener los datos del usuario actual
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
        if (response.data) {
            console.log("Número de cuenta recibido:", response.data.account_number);
        } else {
            console.error("Error: No se encontró 'data' en la respuesta.");
        }
        return response.data ?? null;
    } catch (error) {
        console.error("Error obteniendo datos del usuario:", error);
        return null;
    }
};



// Función para registrar obtener el balance o saldo del usuario
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

// Función para cambiar contraseña 


export const changePasswordAPI = async (passwordData) => {
    // Obtiene el JWT desde localStorage
    const token = getJWT();
    console.log("Token obtenido en changePasswordAPI:", token);

    if (!token) {
        console.error("❌ Error: No hay JWT disponible.");
        return { error: true, message: "⚠️ Debes iniciar sesión.", status: 401 };
    }

    // Define el endpoint
    const endpoint = "/v1/client/user/password";
    console.log("Endpoint usado en changePasswordAPI:", endpoint);

    // Configuración de encabezados para la solicitud
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    };
    console.log("Password data a enviar:", passwordData);
    console.log("Configuración de request:", config);

    try {
        // Se realiza la solicitud PATCH
        const response = await apiHttp("PATCH", endpoint, passwordData, config);
        console.log("✅ Respuesta completa de changePasswordAPI:", response);
        // Si no hay datos en la respuesta, se retorna por defecto un objeto que indique éxito.
        return response.data || { success: true };
    } catch (error) {
        console.error("❌ Error al cambiar la contraseña:", error);
        return { error: true, message: "❌ Hubo un error. Intenta de nuevo.", status: 500 };
    }
};
