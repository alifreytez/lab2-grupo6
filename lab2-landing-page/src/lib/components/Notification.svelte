<script>
    import { fade } from 'svelte/transition';
    import { notification, removeNotification } from '@stores/notification';

    let show = false;
    $: show = Object.keys($notification).length != 0;
</script>

<div class="notification-wrapper" class:show={show}>
    {#if Object.keys($notification).length}
        {#key $notification}
            {#each Object.entries($notification) as [ key, noti ]}
                <div class="sep"></div>
                <div class="notification-message" transition:fade={{ duration: 400 }}>
                    <button type="button" onclick={() => removeNotification(key)}><i class="fa-solid fa-xmark"></i></button>
                    {#if (noti.type == 'error')}
                        <i class="fa-solid fa-circle-xmark error"></i>
                    {:else if (noti.type == 'success')}
                        <i class="fa-solid fa-circle-check success"></i>
                    {:else if (noti.type == null)}
                        <i class="fa-solid fa-circle-exclamation notice"></i>
                    {/if}
                    <p>{noti.msg}</p>
                </div>
            {/each}
        {/key}
    {/if}
</div>

<style>
    .sep {
        width: 100%;
        height: 1px;

        &:not(:first-child) {
            height: 10px;
        }
    }
    .notification-wrapper {
        left: 50%;
        margin: 0 auto;
        max-width: calc(100% - var(--content-padding) * 2);
        position: fixed;
        top: calc(var(--content-padding) / 2);
        transform: translateX(-50%);
        width: max-content;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        z-index: 100;

        & .notification-message {
            align-items: center;
            background: var(--white-color);
            border-radius: var(--border-radius);
            box-shadow: var(--bordershadow-c), var(--bordershadow-c), 0 10px 20px -10px rgba(0,0,0,.5);
            display: none;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: calc(var(--content-padding) / 2);
            width: max-content;

            & button {
                align-items: center;
                background: var(--primary-color);
                border: none;
                border-radius: 50%;
                color: var(--white-color);
                cursor: pointer;
                display: flex;
                font-size: .7rem;
                flex-wrap: wrap;
                height: 25px;
                justify-content: center;
                position: absolute;
                right: -10px;
                top: -10px;
                width: 25px;

                &:hover {
                    background-color: var(--secondary-color);
                }
            }

            & > i {
                display: block;
                font-size: var(--font-size-big);
                margin-right: calc(var(--content-padding) / 2);
                width: 21px;

                &.notice {
                    color: var(--primary-color);
                }
                &.success {
                    color: var(--well-color);
                }
                &.error {
                    color: var(--wrong-color);
                }
            }

            & p {
                width: calc(100% - 21px - calc(var(--content-padding) / 2));
            }
        }

        &.show {
            & .notification-message {
                display: flex;
            }
        }

        @media (max-width: 600px) {            
            top: calc(var(--header-height) + var(--content-padding) / 2);
        }
    }
</style>
