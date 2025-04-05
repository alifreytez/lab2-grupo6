<script>
	import { slide } from 'svelte/transition';
	import { onMount } from 'svelte';
    import { navbar } from '@stores/navbar.js';
	import clickOutside from '@utils/click-outside';

    let { routes } = $props();

    const submenus = $state({ mobile: {}, desktop: {}});
	const iniControlVars = () => {
		$navbar = false;
		Object.entries(routes).forEach(([key, value]) => {
			if (value.group != null) {
				submenus.mobile[key] = false;
				submenus.desktop[key] = false;
			}
		});
	}
	let lowerControl = false;
	let upperControl = false;
	let resizeTimer = null;
	
    onMount(() => {
		iniControlVars();

		lowerControl = window.innerWidth <= 850;
		upperControl = window.innerWidth > 850;

		window.addEventListener('resize', () => {
			if (window.innerWidth <= 850) {
				if (lowerControl)
					return;

				lowerControl = true;
				upperControl = false;
			} else {
				if (upperControl)
					return;

				upperControl = true;
				lowerControl = false;
			}

			clearTimeout(resizeTimer);

			resizeTimer = setTimeout(() => iniControlVars(), 500);
		});
	});
</script>

<header>
	<div class="container general-margin">
		<a href="/" class="logo"><img src="/images/logo.png" alt="banco universitario logo" /></a>
		<div class="desktop-nav">
			<nav>
				<ul class="menu">
					{#each Object.entries(routes) as [name, { type, desc, path = null, group = null }] }
						{#if type == 'navbar'}
							{#if group != null}
								<li
									class="submenu"
									class:showed={submenus.desktop[name]}
									use:clickOutside={() => submenus.desktop[name] = false}
								>
									<button
										type="button"
										class="desc"
										onclick={() => submenus.desktop[name] = !submenus.desktop[name]}
									>
										{desc}
										<i class="fa-solid {submenus.desktop[name] ? 'fa-angle-down' : 'fa-angle-up'}"></i>
									</button>
									{#if submenus.desktop[name]}
										<ul transition:slide>
											{#each group as { desc: _desc, path: _path }}
												<li>
													<a href={_path} onclick={() => $navbar = false}><span>{_desc}</span></a>
												</li>
											{/each}								
										</ul>
									{/if}
								</li>
							{:else}
								<li><a href={path} onclick={() => $navbar = false}><span>{desc}</span></a></li>
							{/if}		            
						{/if}
					{/each}
				</ul>
			</nav>
			<a href="#">Banca En Línea<i class="fa-solid fa-angles-right"></i></a>
		</div>
		<div class="navbtn-container">
			<a href="#">Banca En Línea<i class="fa-solid fa-angles-right"></i></a>
			<button type="button" class="btn-nav" class:active={$navbar} onclick={() => $navbar = !$navbar}>
				<div class="bar-one"></div>
				<div class="bar-two"></div>
				<div class="bar-three"></div>
			</button>
		</div>
	</div>
	<nav class="mobile-nav" class:show={$navbar}>
		<div class="closebtn-container">
			<button
				type="button"
				class="btn-close-nav"
				onclick={() => $navbar = false}
			>
				<i class="fa-solid fa-xmark"></i>
			</button>
		</div>
		<ul class="menu general-margin">
			{#each Object.entries(routes) as [name, { type, desc, path = null, group = null }] }
				{#if type == 'navbar'}
					{#if group != null}
		            	<li class="submenu" class:showed={submenus.mobile[name]}>
							<button
								type="button"
								class="desc"
								onclick={() => submenus.mobile[name] = !submenus.mobile[name]}
							>
								{desc}
								<i class="fa-solid {submenus.mobile[name] ? 'fa-angle-down' : 'fa-angle-up'}"></i>
							</button>
							{#if submenus.mobile[name]}
								<ul transition:slide>
									{#each group as { desc: _desc, path: _path }}
										<li>
											<a href={_path} onclick={() => $navbar = false}><span>{_desc}</span></a>
										</li>
									{/each}								
								</ul>
							{/if}
						</li>
					{:else}
						<li><a href={path} onclick={() => $navbar = false}><span>{desc}</span></a></li>
					{/if}		            
		        {/if}
		    {/each}
		</ul>
	</nav>
</header>

<style>
    
    header {
		background-color: var(--bg-white-color);
		left: 0;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 100;

		& .container {
			align-content: center;
			display: flex;
			flex-wrap: wrap;
			height: var(--header-height);
			justify-content: space-between;

			& .logo {
				display: block;

				img {
					width: 170px;
				}
			}

			& .navbtn-container {
				display: none;
			}

			& .desktop-nav {
				align-items: center;
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				width: calc(100% - 170px);

				& nav {
					width: calc(100% - 150px);

					& .menu {
						align-items: center;
						display: flex;
						flex-wrap: wrap;
						gap: 4rem;
						justify-content: center;
						width: 100%;

						& li {
							list-style: none;

							& a {
								color: var(--black-color);
								display: inline-block;
								text-decoration: none;
								font-weight: 600;
								transition: all .1s ease;

								&:hover {
									color: var(--secondary-color) !important;
								}
							}
						}

						& > li {
							
							&.submenu {

								& > .desc {
									align-items: center;
									background-color: transparent;
									border: none;
									color: var(--black-color);
									cursor: pointer;
									display: flex;
									font-weight: 600;
									flex-wrap: wrap;
									width: 100%;

									& i {
										display: inline-block;
										margin-left: 10px;
									}

									&:hover i {
										color: var(--secondary-color);
									}
								}

								& ul {
									background-color: #fff;
									padding: calc(var(--content-padding) / 2);
									border: 2px solid var(--border-gray-color);
									border-radius: var(--border-radius);
									left: 50%;
									min-width: 150px;
									position: absolute;
									top: 30px;
									transform: translateX(-50%);

									& li {
										list-style: none;

										& a {
											color: var(--black-color);
											padding: calc(var(--content-padding) / 2);
										}
									}
								}

								&.showed {

									& > .desc {

										& i {
											color: var(--secondary-color);
										}
									}
								}
							}
						}
					}
				}

				& > a {
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
			}
		}

		& nav.mobile-nav {
			display: none;
		}
	}
    
	@media (max-width: 850px) {
		:root {
			--header-height: 6rem;
		}

		header {
			& .container {

				& .logo {

					img {
						height: 1.4rem;
					}
				}

				& .desktop-nav {
					display: none;
				}

				& .navbtn-container {
					align-items: center;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					width: 100%;
					margin-top: .6rem;

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

			& nav.mobile-nav {
				background: var(--primary-color);
				display: block;
				height: calc(100dvh - var(--header-height));
				left: -300px;
				opacity: 0;
				position: absolute;
				width: 300px;

				& .closebtn-container {
					padding: var(--content-padding);
					text-align: right;

					& button {
						align-items: center;
						background: var(--bg-gray-color);
						border-radius: var(--border-radius);
						border: none;
						color: var(--black-color);
						cursor: pointer;
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

					& li {
						
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

						& a {
							color: var(--white-color);
							display: inline-block;
							text-decoration: none;
							font-weight: 600;
							transition: all .1s ease;

							&:hover {
								color: var(--secondary-color);
							}
						}
					}

					& > li {
						list-style: none;
						padding: var(--content-padding) calc(var(--content-padding) / 2);
						width: 100%;

						&.submenu {

							& > .desc {
								align-items: center;
								background-color: transparent;
								border: none;
								color: var(--white-color);
								cursor: pointer;
								display: flex;
								font-weight: 600;
								flex-wrap: wrap;
								justify-content: space-between;
								width: 100%;

								& i {
									display: inline-block;
								}

								&:hover i {
									color: var(--secondary-color);
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

							&.showed {

								& > .desc {

									& i {
										color: var(--secondary-color);
									}
								}
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
	}
</style>