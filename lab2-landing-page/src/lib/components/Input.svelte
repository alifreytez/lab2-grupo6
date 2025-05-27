<script>
    export let name;
    export let placeholder;
    export let value;
    export let sideElement;
    export let isError;
    export let regex = null;
    export let onInput = () => {};

    const handleInput = (event) => {
        if (regex != null) {
            let _value = event.target.value;
            
            if (_value != null && _value != '')
                if (!new RegExp(regex).test(_value))
                    value = _value.replace(/[^0-9]/g, '');
            
            isError = false;
        }

        onInput(event);
    };

    let focused = false;
</script>

{#if sideElement != null}
    <div class="complex-input-container" class:focused={focused} class:error={isError}>
        <div class="side-element">
            {#if sideElement.type == 'text'}
                <span>{sideElement.content}</span>
            {/if}
        </div>
        <input type="text"
            id={name.replaceAll("_", "-")}
            {name}
            oninput={handleInput}
            placeholder="{placeholder ? `E.j.: ${placeholder}` : ''}"
            onfocus={() => focused = true}
            onblur={() => focused = false}
            bind:value={value}
            autocomplete="off"
        />
    </div>
{:else}
    <input type="text"
        id={name.replaceAll("_", "-")}
        {name}
        oninput={handleInput}
        placeholder="{placeholder ? `E.j.: ${placeholder}` : ''}"
        bind:value={value}
        class:error={isError}
        autocomplete="off"
    />
{/if}

<style>
    .complex-input-container {
        align-items: center;
        border: 2px solid var(--border-gray-color);
        border-radius: var(--border-radius);
        display: grid;
        gap: 2px;
        grid-template-columns: 50px 1fr;
        height: var(--input-height);

        & .side-element {
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            font-weight: 600;
            justify-content: center;
            height: 100%;

            &::after {
                content: "";
                position: absolute;
                height: 100%;
                width: 2px;
                background-color: var(--border-gray-color);
                right: -2px;
            }
        }

        & input {
            height: calc(var(--input-height) - 4px);
        }

        &.focused {
            border-color: var(--text-color);

            & .side-element {

                &::after {
                    background-color: var(--text-color);
                }
            }
        }

        &.error {
            border-color: var(--wrong-color);

            & .side-element {

                &::after {
                    background-color: var(--wrong-color);
                }
            }

            & input {
                color: var(--wrong-color);
            }
        }
    }

    input {

        &::placeholder {
            color: rgba(118, 122, 125, .8);
        }

        &:focus {
            border-color: var(--text-black-color);
        }
        
        &.error {
            border-color: var(--wrong-color);
            color: var(--wrong-color);
        }
    }
</style>
