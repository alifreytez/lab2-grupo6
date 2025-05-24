<script>
    import { writable } from 'svelte/store';
    import axios from 'axios';
    import { changePasswordAPI } from "$lib/api/modules/user";



    let form = writable({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    let formErrors = writable({});
    let successMessage = writable("");
    let loading = writable(false);

    function validateForm() {
        let errors = {};
        let formData = $form;

        if (!formData.currentPassword.trim()) {
            errors.currentPassword = "⚠️ Ingresa tu contraseña actual.";
        }

        if (!formData.newPassword.trim() || formData.newPassword.length < 8 || 
    !/[A-Z]/.test(formData.newPassword) || !/\d/.test(formData.newPassword) || 
    !/[!@#$%^&*]/.test(formData.newPassword)) {
    errors.newPassword = "⚠️ La nueva contraseña debe tener al menos 8 caracteres, incluir una mayúscula, un número y un carácter especial.";
}


        if (formData.newPassword !== formData.confirmPassword) {
            errors.confirmPassword = "⚠️ Las contraseñas no coinciden.";
        }

        formErrors.set(errors);
        return Object.keys(errors).length === 0;
    }

async function handleSubmit() {
    if (!validateForm()) return;

    loading.set(true);
    successMessage.set("");


    const passwordData = { 
        current_password: $form.currentPassword, 
        new_password: $form.newPassword 
    };

    try {
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

</script>

<style>
    .error-message {
        color: red;
        font-size: 14px;
    }
    .success-message {
        background-color: white;
        border-left: 5px solid green;
        padding: 10px;
        font-weight: bold;
        color: black;
        margin-top: 10px;
        border-radius: 5px;
        display: inline-block;
    }
    .form-container {
        max-width: 400px;
        margin: auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        text-align: center;
    }
    input, button {
        width: 100%;
        margin: 10px 0;
        padding: 10px;
    }
</style>

<div class="form-container">
    <h1>Cambiar Contraseña</h1>

    <input type="password" name="currentPassword" placeholder="Contraseña actual" bind:value={$form.currentPassword} />
    {#if $formErrors.currentPassword}
        <p class="error-message">{$formErrors.currentPassword}</p>
    {/if}

    <input type="password" name="newPassword" placeholder="Nueva contraseña" bind:value={$form.newPassword} />
    {#if $formErrors.newPassword}
        <p class="error-message">{$formErrors.newPassword}</p>
    {/if}

    <input type="password" name="confirmPassword" placeholder="Confirmar nueva contraseña" bind:value={$form.confirmPassword} />
    {#if $formErrors.confirmPassword}
        <p class="error-message">{$formErrors.confirmPassword}</p>
    {/if}

    <button on:click={handleSubmit}>Actualizar contraseña</button>

    {#if $successMessage}
        <p class="success-message">{$successMessage}</p>
    {/if}
</div>
