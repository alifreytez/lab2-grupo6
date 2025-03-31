<script>
    import '../lib/styles/app.css';
    import BienvenidoHome from "./fragments/BienvenidoHome.svelte";
    import PromoHome from "./fragments/PromoHome.svelte";
    import Servicios from "./fragments/Servicios.svelte";
    import PromoFin from "./fragments/PromoFin.svelte";
    import Contactos from "../lib/components/Contactos.svelte"

    let { data } = $props();
</script>

<svelte:head>
    <title>{data.title}</title>
</svelte:head>



<BienvenidoHome />
<PromoHome />
<Servicios />
<PromoFin />
<Contactos />