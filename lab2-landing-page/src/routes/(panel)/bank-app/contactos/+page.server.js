export const load = async ({ locals, setTitle }) => {
    let response = {
        ...locals,
        pageTitle: setTitle("Libreta de Contactos"),
        title: "Mis Contactos",
    };

    return response;
};
