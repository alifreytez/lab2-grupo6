<script>
	import { hide, modalStatus, modalComponent, modalProps } from '$lib/stores/modal.js';

    export let closable = true;
	let modal = null;

	function handleOutsideClick(event) {
		if (event.target === modal) {
			hide();
		}
	}

	function closeModal() {
		hide();
	}

</script>

{#if $modalStatus}
	<div
		aria-modal="true"
		bind:this={modal}
		class="modal-overlay"
		onclick={() => closable && handleOutsideClick(event)}
		onkeydown={(e) => e.key === 'Escape' && closeModal()}
		role="dialog"
		tabindex="0"
	>
		<div class="modal-content">
			{#if closable}
				<button class="button-close" onclick={hide}><i class="fa-solid fa-xmark"></i></button>
			{/if}
			<div class="container-content">
                {#if $modalComponent}
                    <svelte:component this={$modalComponent} {...$modalProps} />
                {/if}
			</div>
		</div>
	</div>
{/if}

<style>
	.modal-overlay {
		align-items: center;
		background-color: var(--text-black-color);
		display: flex;
		height: 100%;
		justify-content: center;
		left: 0;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 1000;
	}

	.modal-content {
		align-items: center;
		background-color: white;
		border-radius: var(--border-radius);
		display: flex;
		flex-direction: column;
		padding: var(--section-padding);
		position: relative;

		& .button-close {
			background-color: transparent;
			border: none;
			cursor: pointer;
			font-size: 20px;
			position: absolute;
			margin-right: 10px;
			right: 10px;
			top: 10px;

			& :hover {
				color: var(--primary-color);
			}
		}

		& h1 {
			color: var(--primary-color);
			font-size: var(--font-size-big);
			margin-top: 0;
			text-align: center;
		}

		& .container-icon {
			align-items: center;
			border: 3px solid;
			border-radius: 50%;
			display: flex;
			height: 50px;
			justify-content: center;
			margin-bottom: 1rem;
			padding: 10px;
			width: 50px;
			& i {
				font-size: 30px;
			}
		}

		& .container-btn {
			display: flex;
		}

		& .container-content {
			margin-bottom: 1rem;
			margin-top: 1rem;
			width: 100%;
		}

		@media (max-width: 500px) {
			width: calc(100% - var(--section-padding) * 2);
		}
	}
</style>
