// Este archivo contiene una función para detectar clics fuera de un nodo específico en el DOM.
// Esta función es útil para cerrar menús o modales cuando el usuario hace clic fuera de ellos.

export default (triggerNode, callback) => {
    const handleClick = event => {
        var path = event.composedPath();

        if (!path.includes(triggerNode))
            callback();
    }

    document.addEventListener("click", handleClick);

    return {
        destroy() {
            document.removeEventListener("click", handleClick);
        }
    }
}