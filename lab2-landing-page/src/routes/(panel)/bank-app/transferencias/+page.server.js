export const load = async ({ params, locals, fetch, setTitle }) => {
    let response = {
        ...locals,
        pageTitle: setTitle("Transferencias"),
        title: "Transferencias",
        form: {}
    };

    return response;
}