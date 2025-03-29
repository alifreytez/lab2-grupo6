<script>
    import '@fortawesome/fontawesome-free/css/all.min.css';
    import '@styles/normalize.css';
    import '@styles/app.css';
    import { navbar } from '@stores/navbar.js';
    
    let { data: pageData } = $props();
</script>

<svelte:head>
    <meta name="description" content="{pageData.web_description}">
    <meta name="keywords" content="{pageData.web_keywords}">
    <meta name="author" content="{pageData.web_author}">
</svelte:head>

<header>
	<div class="container general-margin">
		<img src="/images/logo.png" class="logo" alt="banco universitario logo" />
		<button type="button" class="btn-nav" on:click={() => $navbar = !$navbar}>
			<div class="bar-one"></div>
			<div class="bar-two"></div>
			<div class="bar-three"></div>
		</button>
	</div>
	<nav class:show={$navbar}>
		<ul class="menu general-margin">
			{#each Object.values(pageData.routes) as { type, desc, path } }
				{#if type == 'navbar'}
		            <li>
		                <a href={path} on:click={() => $navbar = false}>
		                    <span>{desc}</span>
		                </a>
		            </li>
		        {/if}
		    {/each}
		</ul>
		<div class="rights">
			<p><b>2025</b> <span>&copy;</span> <b>Dirección de Informática</b></p>
		</div>
	</nav>
</header>
<main>
    <slot />
</main>
<footer></footer>

<style>
    header {
		background-color: var(--bg-white-color);
		left: 0;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 10;

		& .container {
			display: flex;
			flex-wrap: wrap;
			height: var(--header-height);
			justify-content: space-between;
			align-items: center;

			& .logo {
				height: 1.6rem;
			}

			& button.btn-nav {
				background-color: var(--bg-gray-color);
				border: none;
                border-radius: var(--border-radius);
				cursor: pointer;
				display: block;
				height: 26px;
				padding: 1rem;
				width: 40px;

				& div {
					background-color: var(--primary-color);
					border-radius: var(--border-radius);
					height: 4px;
					left: 50%;
					position: absolute;
					width: calc(100% - .7rem);

					&:first-child,
					&:last-child {
						transform: translateX(-50%);
					}

					&:first-child {
						top: .3rem;
					}
					&:nth-child(2) {
						top: 50%;
						transform: translate(-50%, -50%);
					}
					&:last-child {
						bottom: .3rem;
					}
				}

				&:hover,
				&.active {

					& div {
						&:first-child,
						&:last-child {
							transform: translateX(-50%);
							width: 100%;
						}

						&:nth-child(2) {
							background-color: var(--secondary-color);
							width: 60%;
						}
					}
				}
			}
		}

		& nav {
			background: var(--bg-white-color);
			height: calc(100dvh - var(--header-height));
			left: -100%;
			opacity: 0;
			position: absolute;
			width: 100%;

			& .menu {
				align-content: center;
				display: flex;
				flex-wrap: wrap;
				height: calc(100dvh - var(--header-height) - 50px);
				overflow-y: auto;
				padding: var(--content-padding) 0;

				& li {
					list-style: none;
					text-align: center;
					width: 100%;

					& a {
						color: var(--primary-color);
						display: inline-block;
						text-decoration: none;
						font-weight: 600;

						&:hover {
							color: var(--secondary-color);
						}
					}

					&:not(:first-child) {
						margin-top: calc(var(--content-padding) / 1.5);
					}
				}
			}

			& .rights {
				align-items: center;
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				height: 50px;
				
				& p {
					color: var(--primary-color);
					text-align: center;
				}
			}

			&.show {
				opacity: 1;
				left: 0;
			}
		}
	}

    main {
        padding-top: var(--header-height);
        min-height: calc(100dvh - var(--footer-height));
    }
</style>