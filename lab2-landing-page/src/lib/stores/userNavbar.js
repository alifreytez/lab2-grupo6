import { writable } from 'svelte/store';

export const userbar = writable(false);
export const hide = () => userbar.set(false);
export const show = () => userbar.set(true);
export const toggle = () => userbar.update(val => !val);