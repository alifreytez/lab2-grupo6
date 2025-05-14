<script>
    import { writable } from 'svelte/store';
    import { goto } from '$app/navigation';
    import axios from 'axios';

    let form = writable({
        document_number: '',
        first_name: '',
        last_name: '',
        birth_date: '',
        phone_number: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    let formErrors = writable({});
    let loading = writable(false);
    let successMessage = writable("");

    const FORM_VALIDATORS = {
        document_number: ["required", { maxLength: 20 }],
        first_name: ["required", { maxLength: 40 }],
        last_name: ["required", { maxLength: 40 }],
        birth_date: ["required"],
        phone_number: ["required", { maxLength: 20 }],
        email: ["required", "email"],
        password: ["required", { maxLength: 16 }, { minLength: 8 }],
        repeatPassword: ["required", { sameAs: "password" }]
    };

    function validateForm() {
        let errors = {};
        let formData = $form;

        for (let field in FORM_VALIDATORS) {
            let rules = FORM_VALIDATORS[field];

            if (rules.includes("required") && !formData[field].trim()) {
                errors[field] = "Este campo es obligatorio.";
            }

            if (rules.some(r => r.maxLength) && formData[field]?.length > rules.find(r => r.maxLength).maxLength) {
                errors[field] = `Máximo ${rules.find(r => r.maxLength).maxLength} caracteres.`;
            }

            if (rules.some(r => r.minLength) && formData[field]?.length < rules.find(r => r.minLength).minLength) {
                errors[field] = `Mínimo ${rules.find(r => r.minLength).minLength} caracteres.`;
            }

            if (field === "email" && rules.includes("email") && formData[field] && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData[field])) {
                errors[field] = "Correo electrónico inválido.";
            }

            if (field === "repeatPassword" && rules.some(r => r.sameAs) && formData[field] !== formData["password"]) {
                errors[field] = "Las contraseñas no coinciden.";
            }
        }

        formErrors.set(errors);
        return Object.keys(errors).length === 0;
    }

    import { tick } from 'svelte';
    async function handleSubmit() {
    if (!await validateForm()) return;

    loading.set(true);
    successMessage.set("");

    try {
        console.log("Intentando registrar usuario...", $form);
        let formattedData = { ...$form, birth_date: new Date($form.birth_date).toISOString() };

        const response = await axios.post("http://localhost:3000/v1/public/client/user/register", formattedData);

        console.log("✅ Respuesta de la API:", response.data);

        successMessage.set("✅ ¡Registrado exitosamente! Serás redirigido en 5 segundos...");
        setTimeout(() => goto('/login'), 5000);

    } catch (error) {
        console.error("❌ Error en el registro:", error.response?.data || error.message);
        console.log("🔍 Respuesta exacta de la API:", error.response?.data); // ✅ Verificación

        // 🔹 Extraer el mensaje del body de la respuesta si el error es 409
        if (error.response?.status === 409) {
            const errorMessage = error.response?.data?.message || "⚠️ El usuario ya se encuentra registrado.";
            successMessage.set("⚠️ Este usuario ya está registrado. Por favor, utiliza otro documento o correo."); // ✅ Mostramos el mensaje exacto de la API
            console.log("⚠️ Mensaje asignado en catch:", errorMessage);
        } else {
            successMessage.set("❌ Ocurrió un error desconocido. Intenta de nuevo.");
        }
    } finally {
        loading.set(false);
    }
}



</script>

<style>
    .error-message {
        color: red;
        font-size: 14px;
        margin-top: 5px;
    }

    .form-container {
        max-width: 400px;
        margin: auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        text-align: center;
        background-color: white;
        position: relative;
    }

    .success-message {
        background-color: white;
        border-left: 5px solid green;
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

    <input type="text" name="document_number" placeholder="Número de documento" bind:value={$form.document_number} />
    {#if $formErrors.document_number}
        <p class="error-message">{$formErrors.document_number}</p>
    {/if}

    <input type="text" name="first_name" placeholder="Nombres" bind:value={$form.first_name} />
    {#if $formErrors.first_name}
        <p class="error-message">{$formErrors.first_name}</p>
    {/if}

    <input type="text" name="last_name" placeholder="Apellidos" bind:value={$form.last_name} />
    {#if $formErrors.last_name}
        <p class="error-message">{$formErrors.last_name}</p>
    {/if}

    <input type="date" name="birth_date" placeholder="Fecha de nacimiento" bind:value={$form.birth_date} />
    {#if $formErrors.birth_date}
        <p class="error-message">{$formErrors.birth_date}</p>
    {/if}

    <input type="tel" name="phone_number" placeholder="Número de teléfono" bind:value={$form.phone_number} />
    {#if $formErrors.phone_number}
        <p class="error-message">{$formErrors.phone_number}</p>
    {/if}

    <input type="email" name="email" placeholder="Correo electrónico" bind:value={$form.email} />
    {#if $formErrors.email}
        <p class="error-message">{$formErrors.email}</p>
    {/if}

    <input type="password" name="password" placeholder="Contraseña" bind:value={$form.password} />
    {#if $formErrors.password}
        <p class="error-message">{$formErrors.password}</p>
    {/if}

    <input type="password" name="repeatPassword" placeholder="Repetir contraseña" bind:value={$form.repeatPassword} />
    {#if $formErrors.repeatPassword}
        <p class="error-message">{$formErrors.repeatPassword}</p>
    {/if}

    <button on:click={handleSubmit}>Registrarme</button>

    {#if $successMessage}
        <p class="success-message">{$successMessage}</p>
    {/if}
</div>