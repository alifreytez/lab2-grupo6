<script>
    import Login from "./fragments/Login.svelte";

    export let data;
</script>
<svelte:head>
    <title>{data.title}</title>
</svelte:head>

<!-- Componente que muestra el formulario de inicio de sesión -->
<slot /> 
<Login />
