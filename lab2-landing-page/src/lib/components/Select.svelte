<script>
    import { fade } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';
    import clickOutside from '@utils/clickOutside';

    export let name;
    export let value;
    export let data = [];
    export let menuShowed;
    export let required;
    export let isError;
    export let fze = 'normal';
    export let filterType = false;
    export let addNoneOption = true;
    
    const dispatchEvent = createEventDispatcher();
    let select;
    
    value = value == '' ? 'none' : value;

    if (Array.isArray(data) && data[0] != null && data[0].value != 'none' && addNoneOption)
        data.unshift({ text: 'Seleccionar', value: 'none' });
</script>

<div class="alidev-select-wrapper" class:filter-type={filterType} class:little={fze == 'little'} class:normal={fze == 'normal'} use:clickOutside={() => menuShowed = false}>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="alidev-select-text-wrapper" id="{name}" class:focused={menuShowed} class:wrong={isError && isError != null} on:click={() => menuShowed = !menuShowed}>
        <span class="alidev-select-text">{data.find(dat => dat.value == value)?.text || data.find(dat => dat.value == value)?.value}</span>
        <span class="alidev-select-menu-btn flex-wrap">
            <i class="fa-solid fa-angle-down"></i>
        </span>
    </div>
    {#if menuShowed}
    <ul class="alidev-select-menu bottom-position" transition:fade={{ duration: 300 }}>
        {#each data as info}
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <li on:click={() => {
                    value = info.value;
                    menuShowed = !menuShowed;
                    dispatchEvent('selectOption', { name, value: info.value, data });
                }}>
                {info.text != null ? info.text : info.value}
            </li>
        {/each}
    </ul>
    {/if}
</div>
<select {name} class="alidev-select" required={required} bind:this={select}>
    {#each data as info}
        <option selected={value != info.value ? null : true} value={info.value}>{info.text != null ? info.text : info.value}</option>
    {/each}
</select>

<style>
    select.alidev-select {
        display: none;
    }

    .alidev-select-wrapper {
        position: relative;
        width: 100%;

        & .alidev-select-text-wrapper {
            align-items: center;
            border: 1px solid var( --border-gray-color);
            border-radius: var(--border-radius);
            color: var(--text-black-color);
            cursor: pointer;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            line-height: 1.5;
            padding: 10px 33px 10px 10px;
            position: relative;
            width: 100%;
            z-index: 1;

            &.focused {
                border-color: var(--primary-color);
            }

            &.wrong {
                border-color: var(--wrong-color);

                & .alidev-select-text {
                    color: var(--wrong-color);
                }
                
                & .alidev-select-menu-btn {
                    color: var(--wrong-color);
                }
            }

            /* texto seleccionado */
            
            & .alidev-select-text {
                display: block;
                line-height: inherit;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            /* flecha del boton */

            & .alidev-select-menu-btn {
                align-items: center;
                background-color: rgba(255,255,255,.8);
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
                position: absolute;
                top: 50%;
                right: 0;
                padding: 0 10px;
                transform: translateY(-50%);

                & i {
                    transition: all var(--trans-time) ease;
                }

                &.opened i {
                    transform: rotate(180deg);
                }
            }
        }

        /* menu */

        & .alidev-select-menu {
            background-color: var(--white-color);
            border: 2px solid var(--border-gray-color);
            border-radius: var(--border-radius);
            max-height: 150px;
            overflow: hidden;
            position: absolute;
            transition: opacity .5s ease;
            overflow-y: auto;
            width: 100%;
            z-index: 3;

            /* li */

            & li {
                background-color: var(--gray-color);
                color: var(--text-color);
                cursor: pointer;
                list-style: none;
                padding: 10px;

                &:not(:last-child) {
                    border-bottom: 1px solid var(--border-gray-color);
                }

                &[data-selected=true],
                &:hover {
                    color: var(--text-black-color);
                    background-color: var(--border-gray-color);
                }
            }

            &.top-position {
                bottom: calc(100% + 3px);
            }

            &.bottom-position {
                top: calc(100% + 3px);
            }

            &.display {
                display: block;
            }

            &.show {
                opacity: 1;
            }
        }

        &.little,
        &.filter-type {
            font-size: var(--font-size-small);
        }

        &.normal {
            font-size: var(--font-size-normal);
        }

        &.filter-type {

            & .alidev-select-text-wrapper {

                & .alidev-select-menu-btn {
                    background-color: var(--bg-gray-color);
                }
            }
        }
    }
</style>