<script>
    import { onMount } from "svelte";
    import { getContactsAPI, addContactAPI, updateContactAPI, deleteContactAPI } from "$lib/api/modules/contacts";
    import PanelHeader from "@components/PanelHeader.svelte";
    import PanelSection from "@components/PanelSection.svelte";
    import { writable } from "svelte/store";

    export let data;
    let alias = "", account_number = "", description = "";
    let editingContact = null;
    let contacts = writable([]);

    // Estados para la confirmación personalizada:
    let showConfirmDialog = false;
    let contactToDelete = null;

    //  Paginación dinámica (valor inicial: 10 contactos por página)
    let page = 1;
    let pageSize = 10; // Variable para modificar el tamaño de página

    // ✅ Cargar contactos con paginación
    async function loadContacts() {
        const response = await getContactsAPI(page, pageSize);
        contacts.set(response);
    }

    onMount(() => {
        loadContacts();
    });

    // ✅ Cambiar página (Anterior / Siguiente)
    function changePage(direction) {
        if (direction === "next") page++;
        if (direction === "prev" && page > 1) page--;
        loadContacts();
    }

    // ✅ Actualizar cantidad de contactos por página según selección del usuario
    function updatePageSize(event) {
        pageSize = parseInt(event.target.value);
        page = 1;
        loadContacts();
    }

    // ✅ Agregar o actualizar contacto
    async function saveContact(event) {
        event.preventDefault();
        const contactData = { alias, account_number, description };

        if (editingContact) {
            const response = await updateContactAPI(editingContact.id, contactData);
            if (!response.success) {
                alert(response.message);
                return;
            }
            alert("✅ Contacto actualizado correctamente!");
        } else {
            const response = await addContactAPI(contactData);
            if (!response.success) {
                alert(response.message);
                return;
            }
            alert("✅ Contacto agregado con éxito!");
        }
        resetForm();
        loadContacts();
    }

    // ✅ Cargar contacto en el formulario para editar
    function editContact(contact) {
        alias = contact.alias;
        account_number = contact.account_number;
        description = contact.description;
        editingContact = contact;
    }

    // ✅ Cancelar edición y limpiar formulario
    function resetForm() {
        alias = "";
        account_number = "";
        description = "";
        editingContact = null;
    }

    // ✅ Mostrar cuadro de diálogo de confirmación personalizado con el alias del contacto
    function confirmDelete(contact) {
        contactToDelete = contact;
        showConfirmDialog = true;
    }

    // ✅ Eliminar contacto si el usuario confirma
    async function deleteContactConfirmed() {
        if (!contactToDelete) return;
        const response = await deleteContactAPI(contactToDelete.id);
        if (response.success) {
            alert("✅ Contacto eliminado!");
            loadContacts();
        } else {
            alert("❌ Error al eliminar el contacto.");
        }
        showConfirmDialog = false;
        contactToDelete = null;
    }

    // ✅ Cancelar la eliminación
    function cancelDelete() {
        showConfirmDialog = false;
        contactToDelete = null;
    }
</script>

<svelte:head>
    <title>{data.pageTitle}</title>
</svelte:head>

<PanelHeader title={data.title} />
<div class="content-container">
    <PanelSection>
        <h2 class="subtitulo">{editingContact ? "Editar Contacto" : "Agregar Nuevo Contacto"}</h2>
        <form on:submit={saveContact} class="form-container">
            <input type="text" bind:value={alias} placeholder="Alias del contacto" required />
            <input type="text" bind:value={account_number} placeholder="Número de cuenta" required disabled={editingContact} />
            <input type="text" bind:value={description} placeholder="Descripción (Opcional)" />
            
            <button type="submit" class="btn-add">
                {editingContact ? "Guardar Cambios" : "➕ Agregar Contacto"}
            </button>
            {#if editingContact}
                <button type="button" class="btn-cancel" on:click={resetForm}>Cancelar</button>
            {/if}
        </form>

        <h2 class="subtitulo">Lista de Contactos Favoritos</h2>

        <!-- Selector para elegir la cantidad de contactos por página -->
        <div class="page-size-selector">
            <label>Mostrar: </label>
            <select on:change={updatePageSize}>
                <option value="10" selected={pageSize === 10}>10 contactos</option>
                <option value="15" selected={pageSize === 15}>15 contactos</option>
                <option value="20" selected={pageSize === 20}>20 contactos</option>
            </select>
        </div>

        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Alias</th>
                        <th>Número de Cuenta</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {#each $contacts as contact}
                        <tr>
                            <td>{contact.alias}</td>
                            <td>{contact.account_number}</td>
                            <td>{contact.description}</td>
                            <td class="actions">
                                <button on:click={() => editContact(contact)} class="btn-edit">✏️ Editar</button>
                                <button on:click={() => confirmDelete(contact)} class="btn-delete">🗑️ Eliminar</button>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>

        <!-- Paginación -->
        <div class="pagination">
            <button on:click={() => changePage("prev")} class="btn-nav">⬅ Anterior</button>
            <span>Página {page}</span>
            <button on:click={() => changePage("next")} class="btn-nav">Siguiente ➡</button>
        </div>
    </PanelSection>
</div>

<!-- Cuadro de diálogo de confirmación personalizado -->
{#if showConfirmDialog}
    <div class="confirm-dialog">
        <div class="confirm-box">
            <p>🚨 ¿Seguro que deseas eliminar el contacto "<strong>{contactToDelete.alias}</strong>"?</p>
            <div class="dialog-buttons">
                <button class="btn-confirm" on:click={deleteContactConfirmed}>Aceptar</button>
                <button class="btn-cancel" on:click={cancelDelete}>Cancelar</button>
            </div>
        </div>
    </div>
{/if}

<style>
    @import "$lib/styles/app.css";

    .content-container {
        padding: var(--content-padding);
        background: var(--bg-gray-color);
        border-radius: var(--border-radius);
        box-shadow: 0px 4px 10px var(--border-gray-color);
    }

    .form-container {
        display: flex;
        flex-direction: column;
        gap: var(--content-padding);
        padding: var(--section-padding);
        background: var(--bg-white-color);
        border-radius: var(--border-radius);
        box-shadow: 0px 2px 5px var(--border-gray-color);
    }

    input {
        padding: 12px;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-gray-color);
        font-size: var(--font-size-base);
    }

    h2.subtitulo {
        font-size: var(--font-size-base);
        font-weight: 600;
    }

    .page-size-selector {
        margin: var(--section-padding) 0;
        font-size: var(--font-size-base);
    }

    .table-container {
        margin-top: var(--section-padding);
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        background: var(--bg-white-color);
        border-radius: var(--border-radius);
        box-shadow: 0px 2px 5px var(--border-gray-color);
    }

    th,
    td {
        padding: var(--section-padding);
        text-align: left;
    }

    th {
        background-color: var(--primary-color);
        color: var(--white-color);
        font-size: var(--font-size-small);
    }

    .actions {
        display: flex;
        gap: 10px;
    }

    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
        gap: 10px;
    }

    .btn-nav {
        background-color: var(--primary-color);
        color: var(--white-color);
        padding: 8px 15px;
        border-radius: var(--border-radius);
        cursor: pointer;
        font-size: var(--font-size-small);
    }

    .btn-nav:hover {
        background-color: var(--secondary-color);
    }

    /* Estilos para el cuadro de confirmación personalizado */
    .confirm-dialog {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .confirm-box {
        background: var(--bg-white-color);
        padding: 20px;
        border-radius: var(--border-radius);
        box-shadow: 0px 2px 5px var(--border-gray-color);
        text-align: center;
        max-width: 400px;
        width: 90%;
    }

    .dialog-buttons {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }

    .btn-confirm {
        background-color: var(--primary-color); 
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: var(--border-radius);
        cursor: pointer;
        font-size: var(--font-size-base);
    }

    .btn-confirm:hover {
        background-color: var(--primary-color);
    }

    .btn-cancel {
        background-color: #5196c0; /* Azul claro */
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: var(--border-radius);
        cursor: pointer;
        font-size: var(--font-size-base);
    }

    .btn-cancel:hover {
        background-color: #7ec0ee;
    }
</style>


