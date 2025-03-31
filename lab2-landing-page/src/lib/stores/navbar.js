import { writable } from 'svelte/store';

export const navbar = writable(false);
export const show = () => navbar.set(true);
export const hide = () => navbar.set(false);
export const toggle = () => navbar.update(val => !val);