<script>
    export let name;
    export let placeholder;
    export let value;
    export let oninput = () => {};
</script>

<input type="text"
    id={name}
    name={name.replaceAll("-", "_")}
    bind:value={value}
    {oninput}
    placeholder="E.j.: {placeholder}"
/>

<style>
    input {
        align-content: center;
        border: 1px solid var(--border-gray-color);
        border-radius: var(--border-input-radius);
        display: block;
        height: var(--input-height);
        outline: none;
        padding: 10px;
        width: 100%;
        z-index: 1;

        &::placeholder {
            color: rgba(118, 122, 125, .8);
        }

        &:focus {
            border-color: var(--primary-color);
        }
    }
</style>
