<script>
    import '../lib/styles/app.css';
    import BienvenidoHome from "../lib/components/home/BienvenidoHome.svelte";
    import Contactos from "../lib/components/Contactos.svelte"

    let { data } = $props();
</script>

<svelte:head>
    <title>{data.title}</title>
</svelte:head>

<h1>Bienvenido a la página de inicio AQUI VA CABECERA </h1>

<BienvenidoHome />
<Contactos />