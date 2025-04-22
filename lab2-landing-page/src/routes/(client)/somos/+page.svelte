
<!-- 
  Página: Página Somos
  Descripción:
  Esta página organiza y muestra información institucional clave acerca del Banco Universitario. Está compuesta por diversos componentes que destacan la misión, visión y objetivos de la institución, ofreciendo un recorrido informativo y visualmente atractivo.

-->

<script>    
    // Importación de componentes necesarios para construir la página
    import BarraSomos from "./fragments/BarraSomos.svelte";
    import IntroSomos from "./fragments/IntroSomos.svelte";
    import MisionSomos from "./fragments/MisionSomos.svelte";
    import VisionSomos from "./fragments/VisionSomos.svelte";
    import ObjetivosSomos from "./fragments/ObjetivosSomos.svelte";
    import Contactos from "@components/Contactos.svelte"

    export let data;
</script>

<svelte:head>
    <title>{data.title}</title>
</svelte:head>

<!-- Componentes-->
<BarraSomos />
<IntroSomos />
<MisionSomos />
<VisionSomos />
<ObjetivosSomos />
<Contactos />


