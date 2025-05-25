<!--  
Componente: Contactos
Este módulo permite gestionar contactos favoritos en una aplicación bancaria.
Incluye funciones para agregar, editar, eliminar, buscar contacto por alias y listar contactos.--> 

<script>
    // Importar las dependencias necesarias
    import { onMount } from "svelte"; 
    import { getContactsAPI, addContactAPI, updateContactAPI, deleteContactAPI } from "$lib/api/modules/contacts";
    import PanelHeader from "@components/PanelHeader.svelte";
    import PanelSection from "@components/PanelSection.svelte";
    import { writable } from "svelte/store";
    import { notification, addNotification } from '@stores/notification';

    // Variables para almacenar los datos del formulario y otros parámetros
    export let data;
    let alias = "", account_number = "", description = "";
    let editingContact = null;
    let contacts = writable([]);

    // Para filtrar contactos por alias:
    let searchTerm = "";
    $: filteredContacts = $contacts.filter(contact =>
      contact.alias.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Estados para la confirmación personalizada:
    let showConfirmDialog = false;
    let contactToDelete = null;

    // Paginación dinámica (valor inicial: 10 contactos por página)
    let page = 1;
    let pageSize = 10; // Variable para modificar el tamaño de página

    // ✅ Cargar contactos con paginación
    async function loadContacts() {
        const response = await getContactsAPI(page, pageSize);
        contacts.set(response);
    }

    // ✅ Cargar contactos al montar el componente
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
                addNotification({ type: 'error', msg: response.message });
                return;
            }
            addNotification({ type: 'success', msg: "Contacto actualizado correctamente!" });
        } else {
            const response = await addContactAPI(contactData);
            if (!response.success) {
                addNotification({ type: 'error', msg: response.message });
                return;
            }
            addNotification({ type: 'success', msg: "Contacto agregado con éxito!" });
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

    // ✅ Cancelar edición y limpiar formulario (limpia los campos y desactiva el modo edición)
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
            addNotification({ type: 'success', msg: "Contacto eliminado!" });
            loadContacts();
        } else {
            addNotification({ type: 'error', msg: "Error al eliminar el contacto." });
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
        <!-- Formulario para agregar/editar contacto -->
        <form on:submit={saveContact} class="form-container">
            <input type="text" bind:value={alias} placeholder="Alias del contacto" required />
            <input type="text" bind:value={account_number} placeholder="Número de cuenta" required disabled={editingContact} />
            <input type="text" bind:value={description} placeholder="Descripción (Opcional)" />
            
            <div class="form-buttons">
                <button type="submit" class="btn-add">
                    {editingContact ? "Guardar Cambios" : "➕ Agregar Contacto"}
                </button>
                <!-- Botón para limpiar todos los campos del formulario -->
                <button type="button" class="btn-clear" on:click={resetForm}>Limpiar</button>
                {#if editingContact}
                    <!-- Si se está en modo edición, se muestra también un botón para cancelar (puede coexistir junto al limpiar) -->
                    <button type="button" class="btn-cancel" on:click={resetForm}>Cancelar</button>
                {/if}
            </div>
        </form>

        <!-- Sección de búsqueda por alias -->
        <div class="search-section">
            <h3 class="subtitulo-buscar">
                <i class="fa-solid fa-magnifying-glass"></i> Buscar por alias
            </h3>
            <div class="search-container">
                <input type="text" bind:value={searchTerm} placeholder="Buscar por alias..." />
            </div>
        </div>

        <!-- Subtítulo para el listado con separación extra -->
        <h2 class="subtitulo lista-titulo">Lista de Contactos Favoritos</h2>

        <!-- Selector para elegir la cantidad de contactos por página -->
        <div class="page-size-selector">
            <label>Mostrar: </label>
            <select on:change={updatePageSize}>
                <option value="10" selected={pageSize === 10}>10 contactos</option>
                <option value="15" selected={pageSize === 15}>15 contactos</option>
                <option value="20" selected={pageSize === 20}>20 contactos</option>
            </select>
        </div>

        <!-- Tabla de contactos -->
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
                    {#each filteredContacts as contact}
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

<!-- Cuadro de diálogo de confirmación de eliminación -->
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
        background-color: var(--bg-white-color);
        border-radius: var(--border-radius);
        box-shadow: none;
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
    
    .form-buttons {
        display: flex;
        gap: 10px;
        margin-top: 10px;
    }
    
    .btn-add {
        background-color: var(--primary-color);
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: var(--border-radius);
        cursor: pointer;
        font-size: var(--font-size-base);
    }
    
    .btn-add:hover {
        background-color: var(--secondary-color);
    }
    
    .btn-clear {
        background-color: #ccc;
        color: #333;
        padding: 10px 20px;
        border: none;
        border-radius: var(--border-radius);
        cursor: pointer;
        font-size: var(--font-size-base);
    }
    
    .btn-clear:hover {
        background-color: #bbb;
    }
    
    .btn-cancel {
        background-color: #5196c0;
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

    .search-section {
        margin-top: var(--section-padding);
    }

    .subtitulo-buscar {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        display: flex;
        align-items: center;
    }

    .subtitulo-buscar i {
        margin-right: 0.5rem;
    }

    .search-container {
        display: flex;
        align-items: center;
    }

    .search-container input {
        width: 100%;
        padding: 10px;
        border: 1px solid var(--border-gray-color);
        border-radius: var(--border-radius);
        font-size: var(--font-size-base);
    }

    h2.subtitulo {
        font-size: var(--font-size-base);
        font-weight: 600;
    }

    .lista-titulo {
        margin-top: 2rem;
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

    .btn-cancel:hover {
        background-color: #7ec0ee;
    }
</style>
