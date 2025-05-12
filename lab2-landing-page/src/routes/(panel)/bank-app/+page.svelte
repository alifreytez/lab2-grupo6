<script>
    import PanelHeader from '@components/PanelHeader.svelte';

    export let data;
</script>

<svelte:head>
    <title>{data.pageTitle}</title>
</svelte:head>

<PanelHeader title={data.title} />

<style>

</style>