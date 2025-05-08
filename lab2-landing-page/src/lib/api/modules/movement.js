// Este archivo es el que se encarga de hacer las peticiones a la API para los movimientos
// y se encarga de realizar las peticiones HTTP necesarias para obtener los movimientos del usuario.
// Se utiliza la función apiHttp para realizar las peticiones, que se encuentra en el archivo axiosApi.js.
// Las funciones devuelven una solicitud que se resuelve con la respuesta de la API o se rechaza con un error.

import { apiHttp } from "$lib/api/axiosApi";

export const getMovementsAPI = (pagination) => 
    apiHttp("GET", "/v1/client/movement", null, pagination);
