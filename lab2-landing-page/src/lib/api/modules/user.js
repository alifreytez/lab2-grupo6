// Este archivo contiene las funciones para interactuar con la API de usuario
// y se encarga de realizar las peticiones HTTP necesarias para el registro, inicio de sesión y verificación del usuario.
// Se utiliza la función apiHttp para realizar las peticiones, que se encuentra en el archivo axiosApi.js.
// Las funciones devuelven una solicitud que se resuelve con la respuesta de la API o se rechaza con un error.

import { apiHttp } from "$lib/api/axiosApi";

export const loginAPI = (loginValues) => 
    apiHttp("POST", "/v1/public/client/user/login", loginValues);

export const whoAmIAPI = () => 
    apiHttp("GET", "/v1/client/user/whoami");

export const registerAPI = (registerValues) => 
    apiHttp("POST", "/v1/public/client/user/register", registerValues);
