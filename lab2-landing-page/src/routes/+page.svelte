<!-- 
  Página: Principal Home
  Descripción:
  Esta página está diseñada para ser la página principal del sitio web del Banco Universitario, sirviendo como la primera impresión para los usuarios y brindándoles una visión general de lo que el banco tiene para ofrecer.
  Como página principal organiza y presenta los elementos clave del Banco Universitario para ofrecer una experiencia de usuario fluida e intuitiva. Cada componente se combina para brindar información relevante, destacando los beneficios y servicios que el banco ofrece a los estudiantes.


  
-->

<script>
    // Importación de estilos globales
    import '../lib/styles/app.css';
    
    // Importación de componentes 
    import BienvenidoHome from "./fragments/BienvenidoHome.svelte";
    import PromoHome from "./fragments/PromoHome.svelte";
    import CarruselPromocional from './fragments/CarruselPromocional.svelte';
    import Servicios from "./fragments/Servicios.svelte";
    import PromoFin from "./fragments/PromoFin.svelte";
    import Contactos from "../lib/components/Contactos.svelte";

    let { data } = $props();
</script>

<svelte:head>
    <title>{data.title}</title>
</svelte:head>

<!-- Componentes principales de la página -->
<BienvenidoHome />
<PromoHome />
<CarruselPromocional />
<Servicios />
<PromoFin />
<Contactos />
