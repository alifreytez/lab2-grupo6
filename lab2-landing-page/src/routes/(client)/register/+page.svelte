<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import axios from 'axios';
    import { writable } from 'svelte/store'; // Para manejar el estado del mensaje

    let form = {
        document_number: '',
        first_name: '',
        last_name: '',
        birth_date: '',
        phone_number: '',
        email: '',
        password: '',
        repeatPassword: ''
    };

    let formErrors = { ...form };
    let loading = false;
    let successMessage = writable(""); // Estado para mostrar el mensaje de éxito

    function handleChange(event) {
        form[event.target.name] = event.target.value;
        formErrors[event.target.name] = null;
    }

    async function handleSubmit() {
        try {
            loading = true;
            successMessage.set(""); // Reiniciar el mensaje

            console.log("Intentando registrar usuario...");
            console.log("Datos a enviar:", form);

            form.birth_date = new Date(form.birth_date).toISOString(); // Ajustar formato de fecha

            const response = await axios.post("http://localhost:3000/v1/public/client/user/register", form);

            console.log("Respuesta de la API:", response.data);

            if (response.data.message && response.data.message.toLowerCase().includes("successfully")) {
                successMessage.set("¡Registrado exitosamente!"); // Muestra el mensaje de éxito
                setTimeout(() => goto('/login'), 2000); // Redirige tras 2 segundos
                return;
            }

            throw new Error(response.data.message || "Error en el registro.");
        } catch (error) {
            console.error("Error en el registro:", error.response?.data || error.message);
        } finally {
            loading = false;
        }
        setTimeout(() => goto('/login'), 5000); //  Espera 5 segundos antes de redirigir

    }
</script>

<style>
    .form-container {
        max-width: 400px;
        margin: auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        text-align: center;
    }

    .success-message {
        background-color: white;
        border-left: 5px solid green; /* Línea verde en el lado izquierdo */
        padding: 10px;
        font-size: 16px;
        font-weight: bold;
        color: black;
        margin-top: 10px;
        border-radius: 5px;
        display: inline-block;
    }

    input, button {
        display: block;
        width: 100%;
        margin: 10px 0;
        padding: 10px;
    }

    .logo {
        width: 180px;
        height: auto;
        margin-bottom: 20px;
    }

    button {
        background-color: #00796b;
        color: white;
        padding: 10px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
    }
</style>

<div class="form-container">
    <img src="/images/logo.png" alt="Banco Universitario" class="logo" />
    <h1>Registro</h1>
    <input type="text" name="document_number" placeholder="Número de documento" on:input={handleChange} />
    <input type="text" name="first_name" placeholder="Nombres" on:input={handleChange} />
    <input type="text" name="last_name" placeholder="Apellidos" on:input={handleChange} />
    <input type="date" name="birth_date" placeholder="Fecha de nacimiento" on:input={handleChange} />
    <input type="tel" name="phone_number" placeholder="Número de teléfono" on:input={handleChange} />
    <input type="email" name="email" placeholder="Correo electrónico" on:input={handleChange} />
    <input type="password" name="password" placeholder="Contraseña" on:input={handleChange} />
    <input type="password" name="repeatPassword" placeholder="Repetir contraseña" on:input={handleChange} />
    
    <button on:click={handleSubmit} disabled={loading}>Registrarme</button>

    {#if loading}
        <p>Registrando usuario...</p>
    {/if}

    {#if $successMessage}
        <p class="success-message">{$successMessage}</p>
    {/if}

    <p><a href="/login">¿Ya tienes una cuenta? Ingresa</a></p>
</div>