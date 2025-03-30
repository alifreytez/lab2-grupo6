<script>
    import '@fortawesome/fontawesome-free/css/all.min.css';
    import '@styles/normalize.css';
    import '@styles/app.css';
	import { onMount } from 'svelte';
    import { navbar } from '@stores/navbar.js';
    
    let { data: pageData } = $props();
	
    onMount(() => { if (window.screen.availWidth <= 600) $navbar = false; });
	$effect(() => document.body.style.overflow = $navbar ? 'hidden' : 'visible');
</script>

<svelte:head>
    <meta name="description" content="{pageData.web_description}">
    <meta name="keywords" content="{pageData.web_keywords}">
    <meta name="author" content="{pageData.web_author}">
</svelte:head>

<header>
	<div class="container general-margin">
		<a href="/" class="logo"><img src="/images/logo.png" alt="banco universitario logo" /></a>
		<div class="navbtn-container">
			<a href="#">Banca En Línea<i class="fa-solid fa-angles-right"></i></a>
			<button type="button" class="btn-nav" class:active={$navbar} onclick={() => $navbar = !$navbar}>
				<div class="bar-one"></div>
				<div class="bar-two"></div>
				<div class="bar-three"></div>
			</button>
		</div>
	</div>
	<nav class:show={$navbar}>
		<div class="closebtn-container">
			<button type="button" class="btn-close-nav"><i class="fa-solid fa-xmark"></i></button>
		</div>
		<ul class="menu general-margin">
			{#each Object.values(pageData.routes) as { type, desc, path = null, group = null } }
				{#if type == 'navbar'}
					{#if group != null}
		            	<li class="submenu">
							<span>{desc}<i class="fa-solid fa-angle-down"></i></span>
							<ul>
								{#each group as { desc: _desc, path: _path }}
									<li>
										<a href={_path} onclick={() => $navbar = false}><span>{_desc}</span></a>
									</li>
								{/each}								
							</ul>
						</li>
					{:else}
						<li><a href={path} onclick={() => $navbar = false}><span>{desc}</span></a></li>
					{/if}		            
		        {/if}
		    {/each}
		</ul>
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
		z-index: 100;

		& .container {
			display: flex;
			flex-wrap: wrap;
			height: var(--header-height);
			justify-content: space-between;
			align-content: center;

			& .logo {
				display: block;

				img {
					height: 1.6rem;
				}
			}

			& .navbtn-container {
				align-items: center;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				width: 100%;

				& a {
					background-color: var(--secondary-color);
					border-radius: var(--border-radius);
					color: var(--black-color);
					display: block;
					font-size: var(--font-size-small);
					font-weight: 600;
					padding: .6rem;
					text-decoration: none;
					width: max-content;
					box-shadow: 0 .2rem .2rem 0 rgba(0,0,0,.1);

					& i {
						display: inline-block;
						margin-left: .5rem;
					}

					&:hover {
						box-shadow: 0 .2rem .3rem 0 rgba(0,0,0,.2);
					}
				}

				& .btn-nav {
					background-color: var(--bg-gray-color);
					border: none;
					border-radius: var(--border-radius);
					cursor: pointer;
					display: block;
					height: 26px;
					outline: none;
					padding: 1rem;
					width: 40px;

					& div {
						background-color: var(--primary-color);
						border-radius: var(--border-radius);
						height: 3px;
						left: 50%;
						position: absolute;
						width: calc(100% - 1rem);

						&:first-child,
						&:last-child {
							transform: translateX(-50%);
						}

						&:first-child {
							top: .5rem;
						}
						&:nth-child(2) {
							top: 50%;
							transform: translate(-50%, -50%);
						}
						&:last-child {
							bottom: .5rem;
						}
					}

					&:hover {

						& div {

							&:nth-child(2) {
								background-color: var(--secondary-color);
							}
						}
					}
					
					&.active {

						& div {

							&:nth-child(2) {
								background-color: var(--secondary-color);
								width: 40%;
							}
						}
					}
				}
			}
		}

		& nav {
			background: var(--primary-color);
			height: calc(100dvh - var(--header-height));
			left: -300px;
			opacity: 0;
			position: absolute;
			width: 300px;

			& .closebtn-container {
				text-align: right;
				padding: var(--content-padding);

				& button {
					align-items: center;
					background: var(--bg-gray-color);
					border-radius: var(--border-radius);
					border: none;
					color: var(--black-color);
					display: inline-flex;
					flex-wrap: wrap;
					justify-content: center;
					width: 32px;
					height: 32px;

					& i {
						display: block;
						font-size: 1.4rem;
					}
				}
			}

			& .menu {
				display: flex;
				flex-wrap: wrap;
				align-content: flex-start;
				height: calc(100dvh - var(--header-height) - 50px);
				overflow-y: auto;
				padding: var(--content-padding);

				& li a {
					color: var(--white-color);
					display: inline-block;
					text-decoration: none;
					font-weight: 600;
					transition: all .1s ease;

					&:hover {
						color: var(--secondary-color);
					}
				}

				& > li {
					list-style: none;
					padding: var(--content-padding) calc(var(--content-padding) / 2);
					width: 100%;

					&.submenu {

						& > span {
							color: var(--white-color);
							display: flex;
							font-weight: 600;
							flex-wrap: wrap;
							justify-content: space-between;
							width: 100%;

							& i {
								display: inline-block;
							}
						}

						& ul {
							padding-left: calc(var(--content-padding) / 2);
							padding-top: calc(var(--content-padding) / 2);

							& li {
								padding: calc(var(--content-padding) / 2);
								list-style: none;
							}
						}
					}
					
					&:not(:last-child) {

						&::after {
							background-color: var(--border-gray-color);
							bottom: 0;
							left: 0;
							content: "";
							height: 1px;
							position: absolute;
							width: 100%;
						}
					}
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