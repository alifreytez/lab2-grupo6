<script>
    export let title = null;
</script>

{#if title != null}
    <section>
        <h2>{title}</h2>
        <div class="section-container">
            <slot />
        </div>
    </section>
{:else}
    <div class="section-container">
        <slot />
    </div>
{/if}

<style>
    h2 {
        color: var(--text-black-color);
        font-family: var(--font-family-secondary);
        font-weight: 600;
        margin-bottom: calc(var(--content-padding) / 2);
    }

    .section-container {
        background-color: var(--white-color);
        border-radius: var(--border-radius);
        padding: var(--section-padding);
    }
</style>