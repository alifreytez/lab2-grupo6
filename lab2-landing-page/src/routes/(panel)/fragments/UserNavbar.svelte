<script>
	import { enhance } from '$app/forms';
    import { fade } from 'svelte/transition';
    import { userbar, hide, toggle } from '@stores/userNavbar';
	import { addNotification } from '@stores/notification';
    import clickOutside from '@utils/clickOutside';
    
	const submitForm = ({ formElement, formData, action, cancel, submitter }) => {
		return async ({ result, update }) => {
			switch (result.type) {
				case 'redirect':
                    update();
                    hide();
				break;
				case 'failure':
                    addNotification({ msg: 'Asegúrese de que formulario envíe el ID de la publicación.', type: 'error' });
				break;
				case 'error':
                    addNotification({ msg: 'Ocurrió algo inesperado. Intenta en un rato o contacta con el administrador', type: 'error' });
				break;
			}
		}
	}
</script>

<form action="/?/logout" method="POST" class="logout" use:enhance={submitForm}>
    <button aria-label="Log out"><i class="fa-solid fa-power-off"></i></button>
</form>

<style>
    .logout {
        display: block;
        height: 40px;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        & button {
            background: transparent;
            border: none;
            color: var(--primary-color);
            display: block;

            & i {
                background-color: transparent;
                cursor: pointer;
                display: block;
                font-size: var(--font-size-header-icons);
                transition: all var(--trans-time) ease;
            }

            &:hover {
                color: var(--secondary-color);
            }
        }
    }
</style>