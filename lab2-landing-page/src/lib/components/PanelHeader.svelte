<script>

    export let title;
</script>

<h1>{title}</h1>

<style>
    h1 {
        align-items: center;
        color: var(--text-black-color);
        display: inline-flex;
        font-size: calc(var(--font-size-h1) * 0.6);
        font-family: "Montserrat";
        height: var(--header-height);
        line-height: 1.15;
        padding: 0 var(--section-padding);
        width: 100%;

        @media (max-width: 600px) {
            justify-content: center;
            height: auto;
            padding: var(--section-padding);
            text-align: center;
        }
    }
</style>