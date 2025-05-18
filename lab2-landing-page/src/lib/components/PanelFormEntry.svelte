<script>
	import Input from "./Input.svelte";
	import Select from "./Select.svelte";

    export let label;
    export let name;
    export let type;
    export let value;
    export let sideElement;
    export let isError;
    
    // Input props
    export let placeholder;
    export let onInput = () => {};

    // Select props
    export let data;
    export let menuShowed;
    export let required;
    export let addNoneOption = false;
    export let selectOption = () => {};
</script>

<div class="box box-{name.replace('_', '-')}">
    <label for={name}>{label}</label>
    {#if type == 'input'}
        <Input
            {name}
            {placeholder}
            {sideElement}
            {isError}
            bind:value={value}
            oninput={onInput}
        />
    {:else if type == "only-display"}
        <p class="only-display" title={value}>{value}</p>
    {:else if type == 'select'}
        <Select
            {name}
            {menuShowed}
            {required}
            {isError}
            {addNoneOption}
            on:selectOption={selectOption}
            bind:data={data}
            bind:value={value}
        />
    {/if}
</div>

<style>
    label {
        color: var(--text-black-color);
        display: block;
        font-weight: 600;
        margin-bottom: 5px;
    }
</style>