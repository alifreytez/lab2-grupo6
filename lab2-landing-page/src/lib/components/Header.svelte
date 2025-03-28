<script>
    import { navbar } from '@stores/navbar.js';

    export let routes;
</script>

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
			{#each Object.values(routes) as { type, desc, path } }
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
				color: #00233B;
				font-size: 35px;
				font-weight: bold;
				text-transform: uppercase;
			}

			& button.btn-nav {
				background-color: transparent;
				border: none;
				cursor: pointer;
				display: block;
				height: 26px;
				padding: 0;
				width: 40px;

				& div {
					background-color: var(--primary-color);
					border-radius: var(--border-radius);
					height: 4px;
					left: 50%;
					position: absolute;
					width: 100%;

					&:first-child,
					&:last-child {
						transform: translateX(-50%);
						width: 50%;
					}

					&:first-child {
						top: 0;
					}
					&:nth-child(2) {
						top: 50%;
						transform: translate(-50%, -50%);
						width: 100%;
					}
					&:last-child {
						bottom: 0;
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
</style>