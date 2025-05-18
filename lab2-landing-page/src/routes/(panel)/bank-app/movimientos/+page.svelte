<script>
	import { getMovementsAPI } from '$lib/api/modules/movement.js';
	import PanelFilter from '@components/PanelFilter.svelte';
    import PanelHeader from '@components/PanelHeader.svelte';
	import PanelSection from '@components/PanelSection.svelte';
    import PanelTable from '@components/PanelTable.svelte';
	import { onMount } from 'svelte';

    export let data;
    let currentPage = 1, pageSize = 10, multiplier = null;
    let movements = [];

    $: if (pageSize || multiplier) {
        currentPage = 1;
    }

    $: if (currentPage || pageSize || multiplier) {
        getMovements();
    }

    const getMovements = async () => {
        try {
            const res = await getMovementsAPI({ currentPage, pageSize, multiplier });
            
            movements = res.map(row => ({ ...row, amount: `$ ${row.amount}`, balance: `$ ${row.balance}`, created_at: new Date(row.created_at).toLocaleDateString() }));
        } catch (err) {
            console.log({ err });
            return null;
        }
    }
    const tableColumns = [
        {
            name: 'id',
            desc: 'Ref.',
            rowAlignment: 'center',
        },
        {
            name: 'account_number',
            desc: 'Cuenta',
            rowAlignment: 'center',
        },
        {
            name: 'amount',
            valueType: 'currency',
            desc: 'Monto',
            rowAlignment: 'center',
            width: 'max-content',
        },
        {
            name: 'balance',
            valueType: 'currency',
            desc: 'Balance',
            rowAlignment: 'center',
        },
        {
            name: 'description',
            desc: 'Descripción'
        },
        {
            name: 'created_at',
            desc: 'Fecha',
            rowAlignment: 'center',
        },
    ]

    onMount(() => getMovements());
</script>

<svelte:head>
    <title>{data.pageTitle}</title>
</svelte:head>

<PanelHeader title={data.title} />
<div class="content-container">
    <PanelSection>
        <div class="filters-container">
            <PanelFilter
                label="Tipo Transf."
                name="tranfs-type"
                type="select"
                bind:value={multiplier}
                data={[
                    { text: 'Todas', value: null, selected: true},
                    { text: 'Crédito', value: 1 },
                    { text: 'Débito', value: -1 },
                ]}
            />
            <PanelFilter
                label="Mostrar"
                name="page-size"
                type="select"
                bind:value={pageSize}
                data={[
                    { text: '10 movs.', value: 10, selected: true },
                    { text: '15 movs.', value: 15 },
                    { text: '20 movs.', value: 20 },
                ]}
            />
        </div>
        <PanelTable 
            id="prueba"
            enableRowCounter={true}
            columns={tableColumns}
            data={movements}
            bind:currentPage={currentPage}
            limitPerPage={pageSize}
            pagination={true}
            rowClassControl={({ rowData, column }) => {
                if (column == 'amount') {
                    if (rowData.multiplier == 1)
                        return 'credit-row';
                    else if (rowData.multiplier == -1)
                        return 'debit-row';
                }
            }}
        />
    </PanelSection>
</div>

<style>
    :global(.credit-row) {
        font-weight: 500;
        color: var(--well-color);
    }

    :global(.debit-row) {
        font-weight: 500;
        color: var(--wrong-color);
    }
    
    .filters-container {
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: calc(var(--content-padding) / 2);

        @media (max-width: 370px) {
            :global(.filter-box) {
                width: 100%;
            }
        }
    }
</style>