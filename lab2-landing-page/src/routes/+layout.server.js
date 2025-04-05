const routes = {
    about: {
        desc: 'Somos BU',
        type: 'navbar',
        group: [
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
        ],
    },
    foryou: {
        desc: 'Para ti',
        type: 'navbar',
        group: [
            {
                desc: 'Servicos',
                path: '/',
            },
            {
                desc: 'Contacto',
                path: '/'
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