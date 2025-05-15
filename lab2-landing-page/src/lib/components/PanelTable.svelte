<script>
	export let id;
	export let title;
	export let enableRowCounter = false;
	export let columns;
	export let data = [];
	export let currentPage;
	export let limitPerPage;
	export let pagination = false;

	const btnPaginationPrev = (event) => {
		if (currentPage == 1)
			return;

		currentPage =  currentPage - 1;
	}
	const btnPaginationNext = (event) => {
		if (data.length < limitPerPage)
			return;
		
		currentPage = currentPage + 1;
	}
	console.log({ currentPage, limitPerPage })
</script>

<div class="table-container table-{id}">
	{#if title != null}
		<h5>{title}</h5>
	{/if}
	<div class="table-container-in">
		<table>
			<thead>
				<tr>
					{#if enableRowCounter}
						<th style="width: 42px;">#</th>
					{/if}
					{#each columns as { name, desc }}
						<th>{desc ?? ''}</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#if Array.isArray(data)}
					{#if data.length > 0}
						{#each data as rowData, index}
							<tr>
								{#if enableRowCounter && currentPage != null && limitPerPage != null}
									{@const offset = currentPage > 1 ? (currentPage - 1) * limitPerPage : 0}
									
									<td>{index + 1 + offset}</td>
								{/if}
								{#each columns as { name }}
									<td>{rowData[name]}</td>
								{/each}
							</tr>
						{/each}
					{:else}
						<tr>
							<td colspan="{columns.length + (enableRowCounter ? 1: 0)}">No hay registros para mostrar</td>
						</tr>
					{/if}
				{/if}
			</tbody>
		</table>
	</div>
	{#if pagination}
		<div class="pagination-container">
			<div class="pagination-container-in">
				<button
					aria-label="pagination-prev"
					onclick={btnPaginationPrev}
					class:blocked={currentPage == 1}
				>
					<i class="fa-solid fa-angle-left"></i>
				</button>
				<span>{currentPage}</span>
				<button
					aria-label="pagination-next"
					onclick={btnPaginationNext}
					class:blocked={data.length <= limitPerPage}
				>
					<i class="fa-solid fa-angle-right"></i>
				</button>
			</div>
		</div>
	{/if}
</div>

<style>
	.table-container {
		width: 100%;

		& .table-container-in {
			max-height: 540px;
			overflow: auto;
			width: 100%;

			& table {
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
							text-align: left;
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
		}

		& .pagination-container {
			display: flex;
			flex: wrap;
			flex-direction: row-reverse;
			margin-top: calc(var(--content-padding) / 2);

			& .pagination-container-in {
				display: flex;
				flex: wrap;
				gap: 5px;
				
				& button,
				& span {
					align-items: center;
					background-color: var(--bg-gray-color-5);
					border: 1px solid var(--border-gray-color);
					border-radius: 5px;
					display: flex;
					flex-wrap: wrap;
					font-size: var(--font-size-normal);
					height: 25px;
					justify-content: center;
					width: 20px;
				}

				& button {					
					cursor: pointer;

					&:hover {
						color: var(--primary-color);
					}

					&.blocked {
						background-color: var(--border-gray-color);
						cursor: not-allowed;
					}
				}

				& span {
					color: var(--primary-color);
					font-weight: bold;
				}
			}
		}
	}
  </style>

