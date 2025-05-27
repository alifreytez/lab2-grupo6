// Este módulo maneja la API de contactos y se encarga de realizar las peticiones, incluyendo la creación, actualización, eliminación y obtención de contactos.

// Importaciones necesarias
import { apiHttp } from "$lib/api/axiosApi";
import { getJWT } from "$lib/utils/localStorage"; 

// ✅ Verificar sesión antes de realizar una solicitud
const verifySession = () => {
    const token = getJWT();
    if (!token) {
        console.error("❌ Error: No hay JWT disponible.");
        return null;
    }
    return { Authorization: `Bearer ${token}` };
};

// ✅ Obtener la lista de contactos con paginación
export const getContactsAPI = async (page = 1, pageSize = 20) => {
    const headers = verifySession();
    if (!headers) return [];

    try {
        const response = await apiHttp("GET", `/v1/client/contact?page=${page}&page_size=${pageSize}`, {}, headers);
        console.log("📜 Lista de contactos obtenida:", response);
        return response.data ?? [];
    } catch (error) {
        console.error("⚠️ Error obteniendo contactos:", error);
        return [];
    }
};

// ✅ Registrar un nuevo contacto solo si el alias y el número de cuenta no están en uso
export const addContactAPI = async (contactData) => {
    const headers = verifySession();
    if (!headers) return { success: false, message: "No hay sesión activa." };

    // 🔍 Obtener lista de contactos y verificar duplicados
    const existingContacts = await getContactsAPI();
    const isAliasDuplicate = existingContacts.some(contact => contact.alias.toLowerCase() === contactData.alias.toLowerCase());
    const isAccountDuplicate = existingContacts.some(contact => contact.account_number === contactData.account_number);

    if (isAliasDuplicate) {
        return { success: false, message: "❌ Este alias ya está en uso por otro contacto." };
    }
    
    if (isAccountDuplicate) {
        return { success: false, message: "❌ Ya tienes un contacto registrado con este número de cuenta." };
    }

    try {
        const response = await apiHttp("POST", "/v1/client/contact", contactData, headers);
        console.log("✅ Contacto registrado:", response);
        return { success: true, contact: response.data, message: response.message };
    } catch (error) {
        console.error("⚠️ Error registrando contacto:", error);
        return { success: false, message: error.response?.data?.message || "Error al registrar el contacto." };
    }
};

// ✅ Actualizar un contacto existente
export const updateContactAPI = async (contactId, updateData) => {
    if (!contactId) return { success: false, message: "ID de contacto inválido." };

    const headers = verifySession();
    if (!headers) return { success: false, message: "No hay sesión activa." };

    try {
        const response = await apiHttp("PATCH", `/v1/client/contact/${contactId}`, updateData, headers);
        console.log("✏️ Contacto actualizado:", response);
        return { success: true, contact: response.data, message: response.message };
    } catch (error) {
        console.error("⚠️ Error actualizando contacto:", error);
        return { success: false, message: "Error al actualizar el contacto." };
    }
};

// ✅ Eliminar un contacto por ID
export const deleteContactAPI = async (contactId) => {
    if (!contactId) return { success: false, message: "ID de contacto inválido." };

    const headers = verifySession();
    if (!headers) return { success: false, message: "No hay sesión activa." };

    try {
        await apiHttp("DELETE", `/v1/client/contact/${contactId}`, {}, headers);
        console.log("🗑️ Contacto eliminado:", contactId);
        return { success: true, message: "Contacto eliminado correctamente." };
    } catch (error) {
        console.error("⚠️ Error eliminando contacto:", error);
        return { success: false, message: "Error al eliminar contacto." };
    }
};

