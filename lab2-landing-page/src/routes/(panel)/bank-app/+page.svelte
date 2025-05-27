  
<!-- Componente: Home del Banco
Este componente muestra un saludo al usuario, su número de cuenta y saldo actual.  -->         
<script>
    // Importar las dependencias necesarias
    import { onMount } from "svelte"; // Importar onMount para ejecutar código al montar el componente
    import { whoAmIAPI, getBalanceAPI } from "$lib/api/modules/user"; // Importar las funciones de la API para obtener datos del usuario y saldo
    import PanelHeader from '@components/PanelHeader.svelte'; // Importar el componente de encabezado del panel
    import PanelSection from "@components/PanelSection.svelte"; // Importar el componente de sección del panel
    import { addNotification } from "@stores/notification"; // Importar la función para agregar notificaciones

    // Importar el tipo de dato para la página
    export let data;
    let user = null;
    let balance = "Cargando...";
    let accountNumber = "Cargando...";

    // Función para copiar al portapapeles el número de cuenta
    function copyToClipboard() {
        navigator.clipboard.writeText(accountNumber)
            .then(() => {
                addNotification({ type: 'success', msg: "Número de cuenta copiado al portapapeles! ✅" });
            })
            .catch(err => {
                console.error("Error al copiar:", err);
                addNotification({ type: 'error', msg: "Error al copiar el número de cuenta." });
            });
    }

    // Cargar datos del usuario y saldo al montar el componente
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
            balance = balanceResponse !== null 
                ? `${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(balanceResponse)}` 
                : "Error obteniendo saldo";
        } catch (error) {
            console.error("Error al obtener información:", error);
        }
    });
</script>

<svelte:head>
    <title>{data.pageTitle}</title>
</svelte:head>

<PanelHeader title={data.title} />
<div class="content-container">
    <PanelSection>
        {#if user}
            <div class="saludo-container">
                <h2>¡Hola, {user.first_name} {user.last_name}! 👋</h2>
                <p>
                    <strong>Número de cuenta:</strong> {accountNumber}
                    <button class="copy-button" on:click={copyToClipboard}>📋</button>
                </p>
                <p><strong>Saldo actual:</strong> {balance}</p>
            </div>
        {/if}
    </PanelSection>
</div>

<style>
    .content-container {
        & p {
            margin-top: 10px;
        }
    }

    .saludo-container {
        text-align: center;
        margin-top: 20px;
        padding: 20px;
        background-color: #f5f5f5;
        border-radius: 10px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }
    
    h2 {
        font-size: 24px;
        color: #00796b;
    }
    
    p {
        font-size: 18px;
        color: #333;
    }

    .copy-button {
        margin-left: 10px;
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
    }

    .copy-button:hover {
        color: #00796b;
    }
</style>
