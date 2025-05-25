const routes = {
    home: {
        iconClass: 'fa-solid fa-house',
        desc: 'Inicio',
        type: 'navbar',
        path: '/bank-app',
    },
    transfers: {
        iconClass: 'fa-solid fa-money-bill-transfer',
        desc: 'Transferencias',
        type: 'navbar',
        path: '/bank-app/transferencias',
    },
    movements: {
        iconClass: 'fa-solid fa-square-poll-horizontal',
        desc: 'Movimientos',
        type: 'navbar',
        path: '/bank-app/movimientos',
    },
    contacts: {
        iconClass: 'fa-solid fa-address-book',
        desc: 'Contactos',
        type: 'navbar',
        path: '/bank-app/contactos',
    },
    accountSettings: {
        iconClass: 'fa-solid fa-gear',
        desc: 'Cambiar contraseña',
        type: 'userbar',
        path: '/bank-app/password',
    },
}

export const load = async ({ params, locals, fetch, setTitle }) => {
    let response = {
        ...locals,
        routes,
        description: 'Sistema integrado para la gestión de información del banco.',
        web_description: 'Web',
        web_author: 'grupo-6',
        web_keywords: ['bank', 'app'],
    };

    return response;
}