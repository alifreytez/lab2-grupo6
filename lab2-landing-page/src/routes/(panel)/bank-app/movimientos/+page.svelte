<script>
	import { getMovementsAPI } from '$lib/api/modules/movement.js';
    import PanelHeader from '@components/PanelHeader.svelte';
	import PanelSection from '@components/PanelSection.svelte';
	import { onMount } from 'svelte';

    export let data;
    let movements = null;

    const getMovements = async () => {
        try {
            const res = await getMovementsAPI();

            console.log("res", res);
            
            movements = res.data;
        } catch (err) {
            console.log({ err });
            return null;
        }
    }

    onMount(() => getMovements());

    $:console.log(movements);
</script>

<svelte:head>
    <title>{data.pageTitle}</title>
</svelte:head>

<slot />
<PanelHeader title={data.title} />
<div class="content-container">
    <PanelSection>
        {#if movements != null}
            <table>
                <thead>
                    <tr>
                        <th>A</th>
                    </tr>                    
                </thead>
                <tbody>
                    {#each movements as { account_number }}
                        <tr>
                            <td>{account_number}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        {/if}
    </PanelSection>
</div>

<style>

</style>