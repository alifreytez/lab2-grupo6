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
    let select, isEmpty = null;
    
    value = value == '' ? 'none' : value;

    if (Array.isArray(data) && addNoneOption && (data.length == 0 || (data[0] != null && data[0].value != 'none')))
        data.unshift({ text: 'Seleccionar', value: 'none' });
    
    isEmpty = (data.length == 0 || (data.find(dat => dat.value == value) == null && !addNoneOption));
</script>

<div class="alidev-select-wrapper" class:filter-type={filterType} class:little={fze == 'little'} class:normal={fze == 'normal'} use:clickOutside={() => menuShowed = false}>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        id="{name}"
        class="alidev-select-text-wrapper"
        class:focused={menuShowed}
        class:wrong={isError && isError != null}
        class:blocked={isEmpty}
        on:click={() => !isEmpty ? menuShowed = !menuShowed : null}
    >
        <span class="alidev-select-text">
            {data.find(dat => dat.value == value)?.text
            || data.find(dat => dat.value == value)?.value
            || (data.length > 0 && data[0].text)
            || ''
            }
        </span>
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
            border: 2px solid var(--border-gray-color);
            border-radius: var(--border-radius);
            color: var(--text-color);
            cursor: pointer;
            display: flex;
            flex-wrap: wrap;
            height: var(--input-height);
            justify-content: space-between;
            line-height: 1.5;
            padding: 10px 33px 10px 10px;
            position: relative;
            width: 100%;
            z-index: 1;

            &.focused {
                border-color: var(--text-color);
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

            &.blocked {
                /*background-color: var(--bg-gray-color);

                & .alidev-select-menu-btn {
                    background-color: var(--bg-gray-color);
                }*/

                &::after {
                    background-color: var(--blocked-color-8);
                    border-radius: var(--border-radius);
                    content: "";
                    cursor: default;
                    height: 100%;
                    left: 0;
                    position: absolute;
                    width: 100%;
                    z-index: 2;
                }
            }

            /* texto seleccionado */
            
            & .alidev-select-text {
                display: block;
                line-height: inherit;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            /* flecha del boton */

            & .alidev-select-menu-btn {
                align-items: center;
                background-color: var(--bg-white-color);
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
                display: flex;
                flex-wrap: wrap;
                height: calc(var(--input-height) - 4px);
                position: absolute;
                top: 50%;
                right: 0;
                padding: 0 10px;
                transform: translateY(-50%);
                z-index: 1;

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
                    background-color: var(--blocked-color-8);
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