<script>
  import { writable } from 'svelte/store';
  import { changePasswordAPI } from "$lib/api/modules/user";

  // Store para los datos del formulario
  let form = writable({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Stores para errores, mensaje de éxito y estado de carga
  let formErrors = writable({});
  let successMessage = writable("");
  let loading = writable(false);

// Stores para visualizar la contraseña
  let showPassword = writable({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false
});

function toggleVisibility(field) {
    showPassword.update(state => ({
        ...state,
        [field]: !state[field]
    }));
}


  // Función de validación mínima:
  // - Verifica que los campos "Contraseña actual" y "Nueva contraseña" no estén vacíos.
  // - Verifica que "Nueva contraseña" y "Confirmar nueva contraseña" sean iguales.
  //   Si no coinciden, se limpia solo esa parte y se asigna un error.
  function validateForm() {
    let errors = {};
    let formData = $form;

 

    if (!formData.currentPassword.trim()) {
      errors.currentPassword = "⚠️ Ingresa tu contraseña actual.";
    }

    if (!formData.newPassword.trim() || formData.newPassword.length < 8) {
      errors.newPassword = "⚠️ La nueva contraseña debe tener al menos 8 caracteres.";
    }

    if (formData.newPassword !== formData.confirmPassword) {
      console.error("Error: Las contraseñas no coinciden. Nueva contraseña enviada:", formData.newPassword);
      errors.confirmPassword = "⚠️ Las contraseñas no coinciden.";
      // Limpiar solamente los campos 'newPassword' y 'confirmPassword'
      form.update(current => ({
        ...current,
        newPassword: '',
        confirmPassword: ''
      }));
    }

    formErrors.set(errors);
    return Object.keys(errors).length === 0;
  }

  // Función que se ejecuta al hacer clic en "Actualizar contraseña"
  async function handleSubmit() {
    if (!validateForm()) return;

    let formData = $form;
    console.log("Nueva contraseña enviada a la API:", formData.newPassword);

    loading.set(true);
    successMessage.set("");

    // Se arma el objeto que envía la solicitud.
    // Ajusta las claves para que coincidan exactamente con lo que la API espera.
    // Por ejemplo, aquí usamos "password" para la contraseña actual y "new_password" para la nueva.
    const passwordData = { 
      password: formData.currentPassword, 
      new_password: formData.newPassword 
    };

    try {
      const response = await changePasswordAPI(passwordData);
      console.log("Respuesta en handleSubmit:", response);
      // Se asume que si la respuesta contiene 'success' o no tiene 'error' la operación es exitosa.
      if (response && (response.success || !response.error)) {
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

<div class="form-container">
  <h1>Cambiar Contraseña</h1>

  <!-- Campo de Contraseña Actual -->
<div class="password-container">
    <input type={$showPassword.currentPassword ? "text" : "password"} 
           placeholder="Contraseña actual" 
           bind:value={$form.currentPassword} />
    <buttonvisibilidad type="button" class="toggle-password" on:click={() => toggleVisibility('currentPassword')}>
        <img src={$showPassword.currentPassword ? "/images/eye-open.svg" : "/images/eye-closed.svg"} alt="Ver/Ocultar contraseña">
    </buttonvisibilidad>
</div>

  
  {#if $formErrors.currentPassword}
    <p class="error-message">{$formErrors.currentPassword}</p>
  {/if}

  <!-- Campo de Nueva Contraseña -->
 <div class="password-container">
    <input type={$showPassword.newPassword ? "text" : "password"} 
           placeholder="Nueva contraseña" 
           bind:value={$form.newPassword} />
    <buttonvisibilidad type="button" class="toggle-password" on:click={() => toggleVisibility('newPassword')}>
        <img src={$showPassword.newPassword ? "/images/eye-open.svg" : "/images/eye-closed.svg"} alt="Ver/Ocultar contraseña">
    </buttonvisibilidad>
</div>
  {#if $formErrors.newPassword}
    <p class="error-message">{$formErrors.newPassword}</p>
  {/if}

  <!-- Campo de Confirmar Nueva Contraseña -->
 <div class="password-container">
    <input type={$showPassword.confirmPassword ? "text" : "password"} 
           placeholder="Confirmar nueva contraseña" 
           bind:value={$form.confirmPassword} />
    <buttonvisibilidad type="button" class="toggle-password" on:click={() => toggleVisibility('confirmPassword')}>
       <img src={$showPassword.confirmPassword ? "/images/eye-open.svg" : "/images/eye-closed.svg"} alt="Ver/Ocultar contraseña">
    </buttonvisibilidad>
</div>
  {#if $formErrors.confirmPassword}
    <p class="error-message">{$formErrors.confirmPassword}</p>
  {/if}

  <button on:click={handleSubmit} disabled={$loading}>
    Actualizar contraseña
  </button>

  {#if $successMessage}
    <p class="success-message">{$successMessage}</p>
  {/if}
</div>

<style>
  .form-container {
    max-width: 400px;
    margin: 40px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    background: #f9f9f9;
  }
  /* tamaño del título */
  .form-container h1 {
    font-size: 24px;  /* Puedes ajustar este valor según prefieras */
    margin-bottom: 20px;
  }

  input, button {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
  }
  input {
    border: 1px solid #ccc;
  }
  button {
    border: none;
    background-color: #00796b;
    color: #fff;
    cursor: pointer;
  }
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  .error-message {
    color: red;
    font-size: 14px;
  }
  .success-message {
    background-color: #fff;
    border-left: 5px solid green;
    padding: 10px;
    font-weight: bold;
    color: black;
    margin-top: 10px;
    border-radius: 5px;
    display: inline-block;
  }

buttonvisibilidad {
    border: none;
    color: #fff;
    cursor: pointer;
    padding: 5px; /*  Ajuste para mantener tamaño uniforme */
    position: absolute;
    right: 10px; /*  Mueve el ícono a la derecha */
    top: 50%; /*  Asegura que el botón esté centrado verticalmente */
    transform: translateY(-50%); /* Lo baja ligeramente para mejor alineación */
  }

.password-container .toggle-password img {
    width: 18px;
    height: 18px;
    opacity: 0.7; /* Suavizamos la apariencia */
}

</style>