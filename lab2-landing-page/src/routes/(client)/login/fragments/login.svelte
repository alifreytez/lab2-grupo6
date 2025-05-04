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

<h2>Iniciar sesión</h2>
<form on:submit|preventDefault={login}>
    <input type="email" bind:value={email} placeholder="Correo electrónico" required />
    <input type="password" bind:value={password} placeholder="Contraseña" required />
    <button type="submit" disabled={$isLoading}>
        {#if $isLoading} Cargando... {/if}
        {#if !$isLoading} Iniciar sesión {/if}
    </button>
    {#if errorMessage}
        <p style="color: red;">{errorMessage}</p>
    {/if}
</form>

<p>¿No estás registrado? <a href="/register">Regístrate aquí</a></p>

