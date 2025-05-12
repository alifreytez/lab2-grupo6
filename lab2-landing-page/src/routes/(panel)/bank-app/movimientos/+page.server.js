export const load = async ({ params, locals, fetch, setTitle }) => {
    let response = {
        ...locals,
        pageTitle: setTitle("Movimientos"),
        title: "Movimientos",
    };

    return response;
}