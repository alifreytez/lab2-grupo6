<script>
	import { getMovementsAPI } from '$lib/api/modules/movement.js';
    import PanelHeader from '@components/PanelHeader.svelte';
	import PanelSection from '@components/PanelSection.svelte';
    import PanelTable from '@components/PanelTable.svelte';
	import { onMount } from 'svelte';

    export let data;
    let movements = null;

    const getMovements = async () => {
        try {
            const res = await getMovementsAPI();
            
            movements = res.data.map(row => ({ ...row, amount: `$ ${row.amount}`, balance: `$ ${row.balance}`, created_at: new Date(row.created_at).toLocaleDateString() }));
            /*movements = [
                {
                    account_number: "83927623726321398231",
                    amount: 5000,
                    balance: 5000,
                    created_at: "2025-05-10T14:09:49.525281Z",
                    description: "Bono de bienvenida",
                    id: 1026,
                    multiplier: 1,
                    updated_at: "2025-05-10T14:09:49.525281Z",
                },
                {
                    account_number: "83927623726321398231",
                    amount: 5000,
                    balance: 5000,
                    created_at: "2025-05-10T14:09:49.525281Z",
                    description: "Bono de bienvenida",
                    id: 1026,
                    multiplier: 1,
                    updated_at: "2025-05-10T14:09:49.525281Z",
                },
                {
                    account_number: "83927623726321398231",
                    amount: 5000,
                    balance: 5000,
                    created_at: "2025-05-10T14:09:49.525281Z",
                    description: "Bono de bienvenida",
                    id: 1026,
                    multiplier: 1,
                    updated_at: "2025-05-10T14:09:49.525281Z",
                },
                {
                    account_number: "83927623726321398231",
                    amount: 5000,
                    balance: 5000,
                    created_at: "2025-05-10T14:09:49.525281Z",
                    description: "Bono de bienvenida",
                    id: 1026,
                    multiplier: 1,
                    updated_at: "2025-05-10T14:09:49.525281Z",
                },
                {
                    account_number: "83927623726321398231",
                    amount: 5000,
                    balance: 5000,
                    created_at: "2025-05-10T14:09:49.525281Z",
                    description: "Bono de bienvenida",
                    id: 1026,
                    multiplier: 1,
                    updated_at: "2025-05-10T14:09:49.525281Z",
                }
            ]*/
        } catch (err) {
            console.log({ err });
            return null;
        }
    }
    const columns = [
        {
            name: 'id',
            desc: 'Ref.'
        },
        {
            name: 'account_number',
            desc: 'Cuenta'
        },
        {
            name: 'amount',
            desc: 'Monto'
        },
        {
            name: 'balance',
            desc: 'Balance'
        },
        {
            name: 'description',
            desc: 'Descripción'
        },
        {
            name: 'created_at',
            desc: 'Fecha'
        },
    ]
    let currentPage = 1;

    onMount(() => getMovements());

    $:console.log(movements);
</script>

<svelte:head>
    <title>{data.pageTitle}</title>
</svelte:head>

<PanelHeader title={data.title} />
<div class="content-container">
    <PanelSection>
        <PanelTable 
            id="prueba"
            enableRowCounter={true}
            columns={columns}
            data={movements}
            currentPage={currentPage}
        />
    </PanelSection>
</div>

<style>

</style>