<script>
    import { onMount } from "svelte";
    import { whoAmIAPI, getBalanceAPI } from "$lib/api/modules/user";

    let user = null;
    let balance = "Cargando...";
    let accountNumber = "Cargando...";

    onMount(async () => {
        try {
            const userResponse = await whoAmIAPI();
            console.log("Respuesta de whoAmIAPI:", userResponse);

            if (userResponse && userResponse.account_number) {
                user = userResponse;
                accountNumber = user.account_number;
                console.log("Número de cuenta asignado:", accountNumber);
            } else {
                console.error("Error: No se recibió el número de cuenta.");
                accountNumber = "Número de cuenta no disponible";
            }

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
        <p><strong>Número de cuenta:</strong> {accountNumber}</p>
        <p><strong>Saldo actual:</strong> {balance}</p>
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

