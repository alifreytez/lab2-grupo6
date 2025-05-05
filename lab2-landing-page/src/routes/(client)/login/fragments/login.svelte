<script>
    import { writable } from "svelte/store";
    import { apiHttp } from "$lib/api/axiosApi";
    import { setJWT } from "$lib/utils/localStorage";
    import { goto } from "$app/navigation";
    import { hasFieldsErrors, isObjNotEmpty } from "$lib/utils/formValidation";

    let email = "";
    let password = "";
    let errorMessage = "";
    let isLoading = writable(false);

    const FORM_VALIDATORS = {
        email: ["required", "email"],
        password: ["required", { maxLength: 16 }],
    };

    async function login() {
        errorMessage = "";
        isLoading.set(true);

        const errors = hasFieldsErrors({ email, password }, FORM_VALIDATORS);
        if (isObjNotEmpty(errors)) {
            errorMessage = errors.email || errors.password;
            isLoading.set(false);
            return;
        }

        const response = await apiHttp("POST", "/auth/login", { email, password });
        if (response.error) {
            errorMessage = response.message || "Error en el inicio de sesión";
            isLoading.set(false);
            return;
        }

        setJWT(response.token); // Guarda el JWT en localStorage
        goto("/movements"); // Redirige al usuario
        isLoading.set(false);
    }
</script>

<div class="auth-container">
    <img src="/images/logo.png" alt="Banco Universitario" class="logo" />
    <h2 class="auth-title">Autenticación</h2>
    <p class="auth-text">
        Bienvenido a la <strong>Banca En Línea</strong>. Por favor, ingresa con tus <strong>credenciales</strong>.
    </p>
    <form class="auth-form" on:submit|preventDefault={login}>
        <input type="email" bind:value={email} placeholder="Ej: usuario@email.com" required />
        <input type="password" bind:value={password} placeholder="Ej: Abc1234!" required />
        <button type="submit" disabled={$isLoading}>
            {#if $isLoading} Cargando... {/if}
            {#if !$isLoading} INGRESAR {/if}
        </button>
        {#if errorMessage}
            <p>{errorMessage}</p>
        {/if}
    </form>
    <p class="register-link">¿No tienes cuenta? <a href="/register">Regístrate aquí</a></p>
</div>

<style>
    .auth-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        padding: 20px;
        background-color: #f5f5f5;
    }
    
    .logo {
        width: 180px; /* Logo más grande */
        height: auto;
        margin-bottom: 20px;
    }

    .auth-title {
        font-size: 24px;
        font-weight: bold;
        color: black;
        text-align: center;
    }

    .auth-text {
        text-align: center;
        font-size: 18px;
        color: #004d40;
        margin-bottom: 20px;
        max-width: 400px;
    }

    .auth-form {
        width: 100%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        background: white;
        padding: 25px;
        border-radius: 8px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }

    .auth-form input {
        margin: 10px 0;
        padding: 12px;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
    }

    .auth-form button {
        margin: 15px 0;
        padding: 12px;
        background-color: #00796b;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        width: 100%;
    }

    .auth-form button:disabled {
        background-color: #ccc;
    }

    .auth-form p {
        color: red;
        text-align: center;
    }

    .register-link {
        text-align: center;
        margin-top: 15px;
        color: #00796b;
    }

    /* Responsive */
    @media (max-width: 600px) {
        .auth-form {
            padding: 20px;
        }

        .logo {
            width: 140px; /* Ajuste en móviles */
        }
    }
</style>
