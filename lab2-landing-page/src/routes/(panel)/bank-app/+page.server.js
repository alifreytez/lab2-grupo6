export const load = async ({ params, locals, fetch, setTitle }) => {
    let response = {
        ...locals,
        title: setTitle("Banco Online en Construcción..."),
    };

    return response;
}