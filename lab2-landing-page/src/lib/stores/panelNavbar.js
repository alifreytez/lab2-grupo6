import { writable } from 'svelte/store';

export const panelNavbar = writable(true);
export const show = () => panelNavbar.set(true);
export const hide = () => panelNavbar.set(false);
export const toggle = () => panelNavbar.update(val => !val);