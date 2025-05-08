// Este archivo contiene funciones de utilidad para formatear números y manejar errores de API
// y mensajes de error. Estas funciones son útiles para formatear datos y manejar errores

export function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

export const getAPIError = (errors = []) => errors[0]?.error