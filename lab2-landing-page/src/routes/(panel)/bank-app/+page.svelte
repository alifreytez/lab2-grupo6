<script>
    import { onMount } from "svelte";
    import { whoAmIAPI, getBalanceAPI } from "$lib/api/modules/user";
    import PanelHeader from '@components/PanelHeader.svelte';
	import PanelSection from "@components/PanelSection.svelte";

    export let data;
    let user = null;
    let balance = "Cargando..."; // Mensaje inicial para evitar valores vacíos

    onMount(async () => {
        try {
            // Obtener datos del usuario autenticado
            const userResponse = await whoAmIAPI();

            if (userResponse) {
                user = userResponse; // Asigna directamente los datos del usuario
            } else {
                console.error("Error: No se recibieron datos del usuario.");
            }

            // Obtener saldo del usuario con autenticación JWT
            const balanceResponse = await getBalanceAPI();

            balance = balanceResponse !== null ? `${new Intl.NumberFormat("de-DE").format(balanceResponse)} Bs.` : "Error obteniendo saldo";
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
                <p>Tu saldo actual es: <strong>{balance}</strong></p>
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

</style>