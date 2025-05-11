import { writable } from 'svelte/store';

const times = {};
export const notification = writable({});

export const addNotification = ({ type, msg, time = 4000 } = {}) => {
    const id = `${Date.now()}${crypto.randomUUID()}`.replace('-','_');

    notification.update((e) => ({ ...e, [id]: { type, msg } }));

    times[id] = setTimeout(() => {
        let _notification;

        notification.subscribe((e) => _notification = e);

        delete _notification[id];

        notification.update((e) => _notification);
    }, parseFloat(time));
}

export const removeNotification = (id) => {
    let _notification;

    clearTimeout(times[id]);
    notification.subscribe((e) => _notification = e);
    delete _notification[id];
    notification.update((e) => _notification);
}