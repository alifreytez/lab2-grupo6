const routes = {

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