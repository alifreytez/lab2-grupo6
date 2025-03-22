<script>
    import '@fortawesome/fontawesome-free/css/all.min.css';
    import '@styles/normalize.css';
    import '@styles/app.css';
	import Footer from '@components/Footer.svelte';
    import Header from '@components/Header.svelte';
    
    let { data: pageData } = $props();
</script>

<svelte:head>
    <meta name="description" content="{pageData.web_description}">
    <meta name="keywords" content="{pageData.web_keywords}">
    <meta name="author" content="{pageData.web_author}">
</svelte:head>

<Header routes={pageData.routes} />
<main>
    <slot />
</main>
<Footer {pageData} />

<style>
    main {
        padding-top: var(--header-height);
        min-height: calc(100dvh - var(--footer-height));
    }
</style>