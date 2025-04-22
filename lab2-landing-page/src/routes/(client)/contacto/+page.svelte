<!-- 
Pagina: Pagina de Contactos
Descripción:  Esta página está diseñada para mostrar dos componentes principales relacionados con la información de contacto del Banco Universitario:
  - BarraContactos: Presenta un título general para la sección.
  - Contactos: Incluye detalles completos de contacto, como redes sociales, números de teléfono, correos electrónicos y dirección.
-->

<script>    
     // Importación de componentes necesarios para construir la página
    import BarraContactos from "./fragments/BarraContactos.svelte";
    import Contactos from "@components/Contactos.svelte"

    export let data;
</script>

<svelte:head>
    <title>{data.title}</title>
</svelte:head>

<slot /> 
<!-- Componente que muestra Título de la pagina y el icono d cerrar-->
<BarraContactos />
<!-- Componente que muestra la información de contacto del Banco Universitario -->
<Contactos /> 

