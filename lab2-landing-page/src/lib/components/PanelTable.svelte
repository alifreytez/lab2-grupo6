<script>
	import { onMount } from 'svelte';

	export let id;
	export let title;
	export let enableRowCounter = false;
	export let columns;
	export let data;
	export let positionOptions;
	export let options;
	export let currentPage;

	const tableRowOptions = {
		delete: {
			icon: "fa-solid fa-trash",
			title: "Eliminar",
		},
		modify: {
			icon: "fa-solid fa-pen-to-square",
			title:"Modificar",
		},
		hidden: {
			icon: "fa-solid fa-eye-slash",
			title:"Ocultar",
		},
		show: {
			icon: "fa-solid fa-eye",
			title:"Mostrar",
		},
		more:{
			icon: "fa-solid fa-circle-info",
			title:"Ver más",
		},
	}
</script>

{#snippet rowOptions(index)}
	<td class="opt.-td">
		<div class="container-opt">
			{#each options as option}
				<button aria-label="table-option" title={tableRowOptions[option].title}><i class={tableRowOptions[option].icon}></i></button>
			{/each}
		</div>
	</td>
{/snippet}

{#snippet row(DataRow)}
    <td>{DataRow}</td>
{/snippet}

<div class="table-container table-{id}">
	{#if title != null}
		<h5>{title}</h5>
	{/if}
	<table>
		<thead>
			<tr>
				{#if enableRowCounter}
					<th style="width: 42px;">#</th>
				{/if}
				{#if tableRowOptions != null && positionOptions == 'before'}
					<th>Opc.</th>
				{/if}
				{#each columns as { name, desc }}
					<th>{desc ?? ''}</th>
				{/each}
				{#if tableRowOptions != null && positionOptions == 'after'}
					<th>Opc.</th>
				{/if}
			</tr>
		</thead>
		<tbody>
			{#if Array.isArray(data)}
				{#each data as rowData, index}
					<tr>
						{#if enableRowCounter}
							{#if currentPage === 1}
								<td>{index + 1}</td>
							{/if}
							{#if currentPage > 1 }
								<td>{index + ((currentPage * (10))-10)  + 1}</td>
							{/if}
						{/if}
						{#if tableRowOptions != null &&  positionOptions == 'before'}
							{@render rowOptions(index)}
						{/if}
						{#each columns as { name }}
                            {@render row(rowData[name])}
                        {/each}
						{#if tableRowOptions != null &&  positionOptions == 'after'}
							{@render rowOptions(index)}
						{/if}
					</tr>
				{/each}
			{/if}	
		</tbody>
	</table>
</div>

<style>
	.table-container {
        border-radius: var(--border-radius);
        max-height: 540px;
        overflow: auto;
        width: 100%;
	}

	table {
        border-collapse: collapse;
        table-layout: fixed;
        min-width: 100%;
        width: max-content;
		
		& thead {

            & th {
                color: var(--gray-color);
                border-bottom: 2px solid var(--border-gray-color); 
                font-weight: bold;
                padding: calc(var(--content-padding) / 2);
                text-align: center;
            }			
		}

		tbody {

			& tr {
            
                & td {
                    align-items: center;
                    border-bottom: 1px solid var(--border-gray-color);
                    padding: calc(var(--content-padding) / 2);
                    text-align: center;
                }

                &:last-child td {
                    border-bottom: none;
                }
			}
			
			& button {
                background: transparent;
                border: none;
                color: var(--bg-gray-color-5);
                display: inline-block;

                & i {
                    background-color: transparent;
                    cursor: pointer;
                    display: block;
                    font-size: var(--font-size-header-icons);
                    transition: all var(--trans-time) ease;
                }

                &:hover {
                    color: var(--primary-color);
                }
            }			
		}
	}

	.container-opt{
		display: flex;
		justify-content: center;
	}
  </style>

