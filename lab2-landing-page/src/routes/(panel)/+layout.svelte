<script>
	import '@fortawesome/fontawesome-free/css/all.min.css';
    import '@styles/normalize.css';
    import '@styles/app.css';
    
    let { data: pageData } = $props();
</script>

<svelte:head>
    <meta name="description" content="{pageData.web_description}">
    <meta name="keywords" content="{pageData.web_keywords}">
    <meta name="author" content="{pageData.web_author}">
</svelte:head>

<main>
    <slot />
</main>
