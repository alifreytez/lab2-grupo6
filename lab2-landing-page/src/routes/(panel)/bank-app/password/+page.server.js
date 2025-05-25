import { changePasswordAPI } from "$lib/api/modules/user"; // ✅ Importamos la función desde `user.js`

async function handleSubmit() {
    // 🔹 Verificar si el usuario está autenticado
    const userToken = localStorage.getItem("userToken");
    if (!userToken) {
        successMessage.set("⚠️ Debes iniciar sesión para cambiar tu contraseña.");
        setTimeout(() => window.location.href = '/login', 3000);
        return;
    }

    if (!validateForm()) return; // ✅ Eliminamos el `await` innecesario

    loading.set(true);
    successMessage.set("");

const passwordData = { 
    
    Password: $form.currentPassword, // 🔹 Cambiar `current_password` a `Password`
    NewPassword: $form.newPassword // 🔹 Cambiar `new_password` a `NewPassword`
};


    try {
        // ✅ Ahora llamamos a `changePasswordAPI()` en lugar de `axios.patch`
        const response = await changePasswordAPI(passwordData);

        if (response?.status === 200) {
            successMessage.set("✅ ¡Contraseña actualizada correctamente!");
        } else {
            successMessage.set(response?.message || "❌ Hubo un error. Intenta de nuevo.");
        }
    } catch (error) {
        console.error("❌ Error al cambiar contraseña:", error);
        successMessage.set("❌ Hubo un error inesperado.");
    } finally {
        loading.set(false);
    }
}
