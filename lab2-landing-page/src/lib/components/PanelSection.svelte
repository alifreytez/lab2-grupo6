<script>
    export let title = null;
</script>

<svelte:element this={title != null ? 'section' : 'div'} class="section-container">
    <slot />
</svelte:element>

<style>
    .section-container {
        background-color: var(--white-color);
        border-radius: var(--border-radius);
        padding: var(--section-padding);
    }
</style>