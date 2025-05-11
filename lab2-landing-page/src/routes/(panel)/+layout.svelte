<script>
    import '@fortawesome/fontawesome-free/css/all.min.css';
    import '@styles/normalize.css';
    import '@styles/app.css';
    import Header from './fragments/Header.svelte';
    import Navbar from './fragments/PanelNavbar.svelte';
    import Footer from './fragments/Footer.svelte';
    import { panelNavbar } from '@stores/panelNavbar.js';
	import { onMount } from 'svelte';
	
    export let data;
    let windowWidth = 0;

    onMount(() => {
        if (window.screen.availWidth <= 600)
            $panelNavbar = false;

        window.addEventListener('resize', () => windowWidth = window.innerWidth);
        windowWidth = window.innerWidth;
    });
</script>

<svelte:head>
    <meta name="description" content="{data.web_description}">
    <meta name="keywords" content="{data.web_keywords}">
    <meta name="author" content="{data.web_author}">
    <title>{data.title_base + data.title}</title>
</svelte:head>

<div class="content-wrapper {!$panelNavbar ? 'navbar-hidden':''}">
    <div class="navbar">
        <Header />
        <Navbar routes={data.routes} />
    </div>
    <div class="main-content" style:width={windowWidth <= 600 ? '100%' : ($panelNavbar ? 'calc(100% - 270px)' : 'calc(100% - 75px)')}>
        <slot />
        <Footer />
    </div>
</div>

<style>
    :global(body) {
        background-color: var(--bg-gray-color);
    }
    .content-wrapper {
        display: flex;
        flex-wrap: wrap;
        height: 100dvh;
        justify-content: space-between;
        
        & .main-content {
            position: relative;
            padding: var(--intermediate-content-padding);

            @media (min-width: 601px) {
                overflow-y: auto;
                width: calc(100% - 270px);
            }
        }
        
        @media (max-width: 600px) {
            height: auto;
            min-height: calc(100dvh - var(--header-height));
            padding-top: var(--header-height);
            width: 100% !important;
        }
    }

    @media (max-width: 600px) {
        :root {
            --header-height: 65px;
        }
    }
</style>