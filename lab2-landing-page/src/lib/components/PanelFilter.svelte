<script>
	import Input from "./Input.svelte";
	import Select from "./Select.svelte";

    export let name;
    export let label = '';
    export let value = null;
    export let type = null;
    export let data = [];
    export let placeholder = null;
    export let onInput = null;
    export let onSelectedOption = null;
    export let isError = false;
</script>

<div class="filter-box">
    <label for="{name.replaceAll('_', '-')}">{label}</label>
    {#if type == 'input'}
        <Input        
            {name}
            {placeholder}
            {isError}
            oninput={onInput}
            bind:value={value}
        />
    {:else if type == 'select'}
        <Select
            {data}
            {isError}
            {name}
            bind:value={value}
            on:selectOption={onSelectedOption}
            addNoneOption={false}
        />
    {/if}
</div>

<style>
    .filter-box {
        width: 130px;

        & label {
            background-color: var(--white-color);
            display: block;
            font-size: var(--font-size-small);
            font-weight: 700;
            margin-bottom: -10px;
            margin-left: 10px;
            margin-right: 10px;
            padding: 0 5px;
            text-transform: uppercase;
            max-width: max-content;
            z-index: 2;
        }
    }
</style>