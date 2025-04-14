<!-- 
Pagina: Pagina en Construccion
Descripción:  Esta pagina sirve para mostrar la barra de pagina en construccion y el componente de Pagina en Construccion con la imagen. 
  - BarraConstruccion: Muestra titulo y tiene un icono de cierre que redirige al inicio o Home.
  - PagConstruccion: Muestra una imagen de pagina en construccion.
-->
<script>
    // Importación de estilos globales
    import '../../lib/styles/app.css';
    // Importación de componentes necesarios para construir la página
    import BarraConstruccion from "./fragments/BarraConstruccion.svelte";
    import PagConstruccion from "./fragments/PagConstruccion.svelte";
   

</script>

<slot /> 
<!-- Componente que muestra Título de la página y el icono de cerrar-->
<BarraConstruccion />
<!-- Componente que muestra imagen de página en Construccion -->
<PagConstruccion />
