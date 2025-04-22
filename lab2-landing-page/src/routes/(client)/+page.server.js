export const load = async ({ params, locals, fetch, setTitle }) => {
    let response = {
        ...locals,
        title: setTitle("Inicio"),
    };

    return response;
}