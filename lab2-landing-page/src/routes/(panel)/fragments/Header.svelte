<script>
    import { panelNavbar } from '@stores/panelNavbar.js';
</script>

<header class:show={$panelNavbar}>
    <button type="button" class="navbar-toggler" on:click={() => $panelNavbar = !$panelNavbar}>
        <div class="line-1"></div>
        <div class="line-2"></div>
        <div class="line-3"></div>
    </button>
    <img src="/images/logo/logo.webp" alt="logo" class="logo">
</header>

<style>
    @keyframes navAnimation{
        0% {
            opacity: 0;
        } 
        100% {
            opacity: 1;
        }
    }

    header {
        align-items: center;
        background-color: var(--white-color);
        display: flex;
        flex-wrap: wrap;
        height: var(--header-height);
        padding: calc(var(--content-padding) + 5px);
        width: calc(25px + (var(--content-padding) + 5px) * 2);

        & .navbar-toggler {
            background-color: transparent;
            border: none;
            cursor: pointer;
            display: block;
            height: 20px;
            outline: none;
            padding: 0;
            width: 25px;
            
            & div {
                background-color: var(--text-black-color);
                border-radius: var(--border-radius);
                height: 3px;
                left: 0;
                position: absolute;
                width: 100%;
    
                &.line-1{
                    top: 0;
                }
                &.line-2 {
                    top: 50%;
                    transform: translateY(-50%);
                }
                &.line-3 {
                    bottom: 0;
                }
            }
        }

        & .logo {
            display: none;
            height: 23px;
            margin-left: calc(var(--content-padding) + 5px);
            opacity: 0;
            width: auto;
        }
        
        @media (min-width: 601px) {
            &.show {
                width: 270px;

                & .logo {
                    animation-name: navAnimation;
                    animation-duration: 0.2s;
                    animation-timing-function: ease;
                    animation-delay: 0.13s;
                    animation-fill-mode: forwards;
                    display: block;
                }
            }
        }

        @media (max-width: 600px) {
            height: var(--header-height);
            left: 0;
            padding: var(--content-padding);
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 6;

            & .logo {
                display: block;
                margin-left: calc(var(--content-padding));
                opacity: 1;
            }
        }
    }
</style>