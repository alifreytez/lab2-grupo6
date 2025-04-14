<script>
  import ServicioP1 from './fragments/ServicioP1.svelte';
  import ServicioP2 from './fragments/ServicioP2.svelte';
  import ServicioP3 from './fragments/ServicioP3.svelte';
  import ServicioP4 from './fragments/ServicioP4.svelte';
  import ServicioP5 from './fragments/ServicioP5.svelte';
  import ServicioP6 from './fragments/ServicioP6.svelte';

  export let data;
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<div class="header-container">
<h1>Servicios que Ofrecemos</h1>
<h2>Podrás disfrutar al máximo</h2>
</div>

<div class="services-container">
<ServicioP1 />
<ServicioP2 />
<ServicioP3 />
<ServicioP4 />
<ServicioP5 />
<ServicioP6 />
</div>

<style>
/* Contenedor de los servicios en formato Grid */
.services-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Dos columnas por defecto */
  gap: 20px; /* Espacio entre los elementos */
  padding: 20px;
}

/* Encabezado */
.header-container {
  text-align: center;
  background-color: #0e5f76;
  color: white;
  padding: 10px;
}

/* Media Query para dispositivos más pequeños (Tablets y Móviles) */
@media (max-width: 768px) {
  .services-container {
    grid-template-columns: 1fr; /* Cambia a una sola columna */
    gap: 15px; /* Ajusta el espacio entre servicios */
    padding: 15px;
  }

  .header-container h1 {
    font-size: 1.8em; /* Ajusta el tamaño del texto */
  }

  .header-container h2 {
    font-size: 1.2em; /* Ajusta el tamaño del subtítulo */
  }
}

/* Media Query para móviles aún más pequeños */
@media (max-width: 480px) {
  .services-container {
    grid-template-columns: 1fr; /* Mantén una sola columna */
    gap: 10px; /* Menor espacio entre los elementos */
    padding: 10px; /* Reduce el padding */
  }

  .header-container h1 {
    font-size: 1.5em; /* Reduce más el título */
  }

  .header-container h2 {
    font-size: 1em; /* Reduce más el subtítulo */
  }
}
</style>
