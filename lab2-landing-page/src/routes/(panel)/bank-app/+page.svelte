<script>
    export let data;
</script>

<svelte:head>
    <title>{data.title}</title>
</svelte:head>

<div class="container">
    <div class="content">
        <img class="logo" src="/images/logo.png" alt="logo">
        <img src="/images/error_page.svg" alt="en construccion"/>
        <h1>Estamos construyendo el sitio.</h1>
        <a href="/">¡Quiero regresar al Inicio!</a>
    </div>
</div>

<style>

    .container {
        align-items: center;
        display: flex;
        justify-content: center;
        height: 100dvh;

        & .content {
            text-align: center;

            & h1 {
                color: var(--primary-color);
                font-size: 2rem;
                margin: 0 auto;
                text-align: center;
                text-transform: initial;
                width: 90%;
            }

            & a {
                border-bottom: 2px solid var(--primary-color);
                color: var(--primary-color);
                display: inline-block;
                font-weight: 600;
                padding-bottom: 3px;
                text-decoration: none;
            }

            & img {
                display: block;
                height: auto;

                &.logo {
                    margin: 0 auto 10rem auto;
                    width: clamp(250px, 50%, 400px)
                }

                &:not(.logo) {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    opacity: .3;
                    width: clamp(250px, 80%, 900px);
                }
            }
        }

        @media (max-width: 650px) {
            & .content h1 {
                font-size: 1.8rem;
            }
        }
    }
    
</style>