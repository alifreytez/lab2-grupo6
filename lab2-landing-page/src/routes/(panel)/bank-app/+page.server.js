export const load = async ({ params, locals, fetch, setTitle }) => {
    let response = {
        ...locals,
        pageTitle: setTitle("Inicio"),
        title: "Inicio",
    };

    return response;
}