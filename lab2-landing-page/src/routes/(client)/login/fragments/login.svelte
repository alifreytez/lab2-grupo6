<!-- Componente: login.svelte -->
<!-- Descripción: Este componente maneja el inicio de sesión del usuario en la aplicación. Permite al usuario ingresar su correo electrónico y contraseña, valida los datos ingresados y realiza una solicitud a la API para autenticar al usuario. Si la autenticación es exitosa, guarda el token JWT en el localStorage y redirige al usuario a la página de movimientos. Si hay errores, muestra un mensaje de error. -->   

<script>
    import { writable } from "svelte/store"; // Importa la función writable de Svelte para crear una tienda reactiva
    import { apiHttp } from "$lib/api/axiosApi"; // Importa la función apiHttp para realizar solicitudes HTTP a la API
    import { setJWT } from "$lib/utils/localStorage"; // Importa la función setJWT para guardar el token JWT en el localStorage
    import { goto } from "$app/navigation"; // Importa la función goto para redirigir al usuario a otra página
    import { hasFieldsErrors, isObjNotEmpty } from "$lib/utils/formValidation"; // Importa funciones para validar formularios

    let email = ""; // Variable que almacena el correo electrónico ingresado por el usuario
    let password = ""; // Variable que almacena la contraseña ingresada por el usuario
    let errorMessage = ""; // Variable que almacena el mensaje de error en caso de que ocurra un problema durante el inicio de sesión
    let isLoading = writable(false); // Crea una tienda reactiva para manejar el estado de carga (loading) del inicio de sesión

    // Define los validadores para los campos del formulario
    const FORM_VALIDATORS = {
        email: ["required", "email"], // Define los validadores para el campo de correo electrónico
        password: ["required", { maxLength: 16 }], // Define los validadores para el campo de contraseña
    }; 

    // Función que maneja el inicio de sesión del usuario
    // Se ejecuta cuando el usuario envía el formulario de inicio de sesión
    async function login() {
        errorMessage = ""; // Inicializa el mensaje de error
        isLoading.set(true); // inicializa el estado de carga a verdadero

        const errors = hasFieldsErrors({ email, password }, FORM_VALIDATORS); // Valida los campos del formulario utilizando la función hasFieldsErrors
        if (isObjNotEmpty(errors)) {
            errorMessage = errors.email || errors.password; // Si hay errores, asigna el mensaje de error correspondiente
            isLoading.set(false); // Cambia el estado de carga a falso
            return;
        }

        console.log("Intentando login en API..."); // Mensaje de depuración para indicar que se está intentando iniciar sesión en la API
        console.log("Datos enviados:", { email, password }); // Muestra los datos enviados a la API en la consola

        const response = await apiHttp("POST", "/v1/public/client/user/login", { email, password }); // Realiza una solicitud POST a la API para autenticar al usuario con el correo electrónico y la contraseña ingresados

        console.log("Respuesta API:", response); // Muestra la respuesta de la API en la consola

        // Verificamos si la respuesta contiene un error
        if (response.error) {
            errorMessage = response.message || "Error en el inicio de sesión";
            isLoading.set(false);
            return;
        }

        // Verificamos que el token se encuentre en response.data.jwt
        if (response.data && response.data.jwt) {
            console.log("JWT recibido:", response.data.jwt); // Muestra el token JWT recibido en la consola
            setJWT(response.data.jwt); // Guarda el token JWT en el localStorage
            goto("/movements"); // Redirige al usuario a la página de movimientos
        } else {
            errorMessage = "Error: La API no devolvió un token de autenticación."; // Mensaje de error si no se recibió un token JWT
        }

        isLoading.set(false); // Cambia el estado de carga a falso
    } // fin de Función que maneja el inicio de sesión del usuario


</script>

<div class="login-container">
    <img src="/images/logo.png" alt="Banco Universitario" class="logo" /> 
    <h2 class="login-title">Autenticación</h2> 
    <p class="login-text"> 
        Bienvenido a la <strong>Banca En Línea</strong>. Por favor, ingresa con tus <strong>credenciales</strong>.
    </p>
    <form class="login-form" on:submit|preventDefault={login}> 
        <input type="email" bind:value={email} placeholder="Ej: usuario@email.com" required /> 
        <input type="password" bind:value={password} placeholder="Ej: Abc1234!" required /> 
        <button type="submit" disabled={$isLoading}> 
            {#if $isLoading} 
                <span class="loader"></span> 
            {/if}
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
    .login-container {
        display: flex; /* Cambia a flexbox para centrar el contenido */
        flex-direction: column; /* Cambia la dirección del eje principal a columna */
        align-items: center; /* Centra los elementos en el eje transversal */
        justify-content: center; /* Centra los elementos en el eje principal */
        height: 100vh; /* Ocupa toda la altura de la ventana del navegador */
        padding: 20px; /* Agrega un poco de espacio alrededor del contenido */
        background-color: #f5f5f5; /* Color de fondo claro */
    }
    
    .logo {
        width: 180px; /* Cambia el ancho del logo */
        height: auto; /* Mantiene la proporción del logo */
        margin-bottom: 20px; /* Espacio entre el logo y el título */
    }

    .login-title {
        font-size: 24px; /* Tamaño de fuente del título */
        font-weight: bold; /* grosor de la fuente */
        color: black; /* Color del título */
        text-align: center; /* Centra el texto del título */
    }

    .login-text {
        text-align: center; /* Centra el texto */
        font-size: 18px; /* Tamaño de fuente del texto */
        color: #004d40; /* Color del texto */
        margin-bottom: 20px; /* Espacio entre el texto y el formulario */
        max-width: 400px; /* Ancho máximo del texto */
    }

    .login-form {
        width: 100%; /* Ancho del formulario */
        max-width: 400px; /* Ancho máximo del formulario */
        display: flex; /* Cambia a flexbox para organizar los elementos dentro del formulario */
        flex-direction: column; /* Cambia la dirección del eje principal a columna */
        background: white; /* Color de fondo blanco */
        padding: 25px; /* Espacio interno del formulario */
        border-radius: 8px; /* Bordes redondeados del formulario */
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Sombra del formulario */
    }

    .login-form input {
        margin: 10px 0; /* Espacio entre los campos de entrada */
        padding: 12px; /* Espacio interno de los campos de entrada */
        width: 100%; /* Ancho del campo de entrada */
        border: 1px solid #ccc; /* Borde del campo de entrada */
        border-radius: 5px; /* Bordes redondeados del campo de entrada */
        font-size: 16px; /* Tamaño de fuente del campo de entrada */
    }

    .login-form button {
        margin: 15px 0; /* Espacio entre el botón y los campos de entrada */
        padding: 12px; /* Espacio interno del botón */
        background-color: #00796b; /* Color de fondo del botón */
        color: white; /* Color del texto del botón */
        border: none; /* Sin borde */
        border-radius: 5px; /* Bordes redondeados del botón */
        cursor: pointer; /* Cambia el cursor al pasar sobre el botón */
        font-size: 16px; /* Tamaño de fuente del botón */
        font-weight: bold; /* Grosor de la fuente del botón */
        width: 100%; /* Ancho del botón */
    }

    .login-form button:disabled {
        background-color: #ccc; /* Color de fondo del botón deshabilitado */
    }

    .login-form p {
        color: red; /* Color del mensaje de error */
        text-align: center; /* Centra el mensaje de error */
    }

    .register-link {
        text-align: center;/* Centra el enlace de registro */
        margin-top: 15px; /* Espacio superior del enlace de registro */
        color: #00796b; /* Color del enlace de registro */
    }
</style>
