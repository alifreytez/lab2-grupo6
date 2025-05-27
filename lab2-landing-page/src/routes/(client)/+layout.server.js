const routes = {
    about: {
        desc: 'Somos BU',
        type: 'navbar',
        path: '/somos',
        /*group: [
            {
                desc: 'Misión',
                path: '/somos#mision',
            },
            {
                desc: 'Visión',
                path: '/somos#vision',
            },
            {
                desc: 'Objetivos',
                path: '/somos#objetivos',
            },
        ],*/
    },
    foryou: {
        desc: 'Para ti',
        type: 'navbar',
        group: [
            {
                desc: 'Servicios',
                path: '/servicios',
            },
            {
                desc: 'Contacto',
                path: '/contacto'
            }
        ],
    }
}

export const load = async ({ params, locals, fetch, setTitle }) => {
    let response = {
        ...locals,
        routes,
        description: 'desc...',
        web_description: 'Web',
        web_author: 'grupo-6',
        web_keywords: ['a', 'b'],
    };

    return response;
}