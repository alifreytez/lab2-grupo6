<script>
	import '@fortawesome/fontawesome-free/css/all.min.css';
    import '@styles/normalize.css';
    import '@styles/app.css';
    import { navbar } from '@stores/navbar.js';
	import Header from './fragments/Header.svelte';
	import Footer from './fragments/Footer.svelte';
	import { onMount } from 'svelte';
    
    export let data;

    onMount(() => {
        document.body.style.overflow = $navbar ? 'hidden' : 'visible'
    });
</script>

<svelte:head>
    <meta name="description" content="{data.web_description}">
    <meta name="keywords" content="{data.web_keywords}">
    <meta name="author" content="{data.web_author}">
</svelte:head>

<Header routes={data.routes} />
<main>
    <slot />
</main>
<Footer />

<style>
    main {
        padding-top: var(--header-height);
        min-height: calc(100dvh - var(--footer-height));

        @media (max-width: 768px) {
            padding: calc(var(--header-height) + 10px) 10px 10px 10px; /* Ajusta el espaciado del body en pantallas pequeñas */
        }
    }
    
</style>