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