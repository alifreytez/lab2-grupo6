import { writable } from 'svelte/store';

export const modalStatus = writable(false);
export const modalComponent = writable(null);
export const modalProps = writable(null);
export const show = (_modalComponent, _modalProps) => {
    modalComponent.set(_modalComponent);
    modalProps.set(_modalProps);
    modalStatus.set(true)
};
export const hide = () => {
    modalStatus.set(false);
    modalComponent.set(null);
    modalProps.set(null);
};