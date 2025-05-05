import { apiHttp } from "$lib/api/axiosApi";

export const loginAPI = (loginValues) => 
    apiHttp("POST", "/v1/public/client/user/login", loginValues);

export const whoAmIAPI = () => 
    apiHttp("GET", "/v1/client/user/whoami");

export const registerAPI = (registerValues) => 
    apiHttp("POST", "/v1/public/client/user/register", registerValues);
