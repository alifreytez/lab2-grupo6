<script>
	import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { removeJWT } from '$lib/utils/localStorage';
    import { panelNavbar } from '@stores/panelNavbar.js';
	import { onMount } from 'svelte';

    export let routes;
    let windowWidth = 0;

    const logout = () => {
        removeJWT();
        goto('/login');
    };
</script>

<nav class:show={$panelNavbar}>
    <ul class="navbar">
    {#each Object.values(routes) as { iconClass, type, desc, path } }
        {#if type == 'navbar'}
            {@const urlPath = $page.url.pathname.split('/').slice(2)}
            {@const routePath = path.split('/').slice(2)}
            <li>
                <a
                    href={path}
                    class:active={(urlPath[0] == '' && routePath[0] == 'home') || (urlPath[0] == routePath[0])}
                    onclick={() => $panelNavbar = false}
                >
                    <i class="{iconClass}" title="{desc}"></i>
                    <span>{desc}</span>
                </a>
            </li>
        {/if}
    {/each}
    </ul>
    <ul class="userbar">
        {#each Object.values(routes) as { iconClass, type, desc, path } }
            {#if type == 'userbar'}
                {@const urlPath = $page.url.pathname.split('/').slice(2)}
                {@const routePath = path.split('/').slice(2)}
                <li>
                    <a
                        href={path}
                        class:active={(urlPath[0] == '' && routePath[0] == 'home') || (urlPath[0] == routePath[0])}
                        onclick={() => $panelNavbar = false}
                    >
                        <i class="{iconClass}" title="{desc}"></i>
                        <span>{desc}</span>
                    </a>
                </li>
            {/if}
        {/each}
        <li>
            <button aria-label="logout" onclick={logout}>
                <i class="fa-solid fa-power-off"></i><span>Cerrar sesión</span>
            </button>
        </li>
    </ul>
</nav>

<style>
    @keyframes navAnimation{
        0% {
            opacity: 0;
        } 
        100% {
            opacity: 1;
        }
    }

    nav {
        background-color: var(--white-color);
        border-top: 2px solid var(--border-gray-color);
        height: calc(100dvh - var(--header-height));
        overflow-y: auto;
        width: calc(25px + (var(--section-padding)) * 2);

        & ul {
            overflow-x: hidden;

            & li a,
            & li button {
                align-items: center;
                color: var(--text-black-color);
                display: flex;
                flex-wrap: wrap;
                font-size: var(--font-size-small);
                height: calc(45px + (var(--section-padding)));
                justify-content: space-between;
                padding: calc(var(--content-padding) / 2) calc(var(--section-padding));
                text-decoration: none;
                transition: all .1s ease;
                width: 100%;

                & i {
                    display: block;
                    font-size: calc(var(--font-size-big) - 2px);
                    text-align: center;
                    width: 25px;
                }

                & span {
                    display: none;
                    font-size: calc(var(--font-size-base) - 2px);
                    height: 45px;
                    opacity: 0;
                    width: calc(100% - 25px - (var(--section-padding)));
                }

                &.active{
                    background-color: var(--bg-gray-color-7);
                    color: var(--primary-color);
                    font-weight: bold;

                }
                &:hover:not(.active) {
                    background-color: var(--bg-gray-color-5);

                    & i {
                        color: var(--secondary-color);
                    }
                }
            }
            
            & li button {
                background-color: transparent;
                border: none;
                cursor: pointer
            }
                    
            &.navbar {
                height: calc(100% - 72px);
                overflow-y: auto;
                width: 100%;
            }

            &.userbar {
                border-top: 2px solid var(--border-gray-color);
                height: 72px;
            }
        }

        @media (min-width: 601px) {
            &.show {
                width: 270px;

                & ul {

                    & li {

                        & span {
                            animation-name: navAnimation;
                            animation-duration: 0.2s;
                            animation-timing-function: ease;
                            animation-delay: 0.13s;
                            animation-fill-mode: forwards;
                            display: flex;
                            flex-wrap: wrap;
                            align-content: center;
                        }
                    }
                }
            }
        }
        
        @media (max-width: 600px) {
            position: absolute;
            width: 250px;
            z-index: 5;
            left: -100%;

            & ul {

                & li a,
                & li button {
                    height: calc(45px + (var(--content-padding)));
                    padding: calc(var(--content-padding) / 2) calc(var(--content-padding));

                    & span {
                        align-content: center;
                        display: flex;
                        flex-wrap: wrap;
                        opacity: 1;
                        width: calc(100% - 25px - (var(--content-padding)));
                    }
                }

                      
                &.navbar {
                    height: calc(100% - 140px);
                }

                &.userbar {
                    height: 140px;
                }
            }

            &.show {
                left: 0;
            }
        }

        @media (max-width: 400px) {
            width: 100%;
        }
        @media (max-width: 600px) {
            position: fixed;
            top: var(--header-height);
        }
    }
</style>