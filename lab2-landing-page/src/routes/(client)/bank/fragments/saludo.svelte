<!-- Componente: saludo.svelte 
    Descripcion: Este componente muestra un saludo al usuario autenticado y su saldo actual. Utiliza la función onMount para obtener los datos del usuario y el saldo desde la API. Si el usuario no está autenticado, no se mostrará nada. -->
 -->
<script>
    import { onMount } from "svelte";
    import { whoAmIAPI, getBalanceAPI } from "$lib/api/modules/user";

    let user = null;
    let balance = "Cargando..."; // Mensaje inicial para evitar valores vacíos

    onMount(async () => {
        try {
            // Obtener datos del usuario autenticado
            const userResponse = await whoAmIAPI();
            console.log("Respuesta de whoAmIAPI:", userResponse);

            if (userResponse) {
                user = userResponse; // Asigna directamente los datos del usuario
            } else {
                console.error("Error: No se recibieron datos del usuario.");
            }

            // Obtener saldo del usuario con autenticación JWT
            const balanceResponse = await getBalanceAPI();
            console.log("Respuesta de getBalanceAPI:", balanceResponse);

            balance = balanceResponse !== null ? `Bs.${balanceResponse}` : "Error obteniendo saldo";
        } catch (error) {
            console.error("Error al obtener información:", error);
        }
    });
</script>

{#if user}
    <div class="saludo-container">
        <h1>¡Hola, {user.first_name} {user.last_name}! 👋</h1>
        <p>Tu saldo actual es: <strong>{balance}</strong></p>
    </div>
{/if}

<style>
    .saludo-container {
        text-align: center;
        margin-top: 20px;
        padding: 20px;
        background-color: #f5f5f5;
        border-radius: 10px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }
    h1 {
        font-size: 24px;
        color: #00796b;
    }
    p {
        font-size: 18px;
        color: #333;
    }
</style>
