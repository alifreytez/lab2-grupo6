//export function getJWT() {
  //  return localStorage.getItem("bank_jwt")
//}

export function getJWT() {
    if (typeof window !== "undefined") {
        return localStorage.getItem("bank_jwt");
    }
    return null; // Evita errores en SSR
}

export function setJWT(value) {
    return localStorage.setItem("bank_jwt", value)
}

export function removeJWT() {
    return localStorage.removeItem("bank_jwt")
}