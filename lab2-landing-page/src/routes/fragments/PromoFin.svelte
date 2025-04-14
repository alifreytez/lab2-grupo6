<!-- 
  Componente: Promo Fin
  Descripción:
  Este componente muestra una sección promocional visualmente atractiva que combina una imagen representativa y un texto destacado. Está diseñado para captar la atención del usuario y reforzar el mensaje promocional de forma clara y directa.

-->

<div class="promo-component">
  <img src="/images/image-promo-fin.webp" alt="Graduado frente a estructura metálica con billetes enrollados alrededor" class="promo-image" />
  <div class="promo-content">
    <p class="promo-text">TODO LO QUE NECESITAS EN UN SOLO LUGAR</p>
  </div>
</div>

<style>
  /* Contenedor principal */
  .promo-component {
    width: 100%;
    text-align: center;
    margin: 20px 0; /* Espaciado alrededor del componente */
    font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
  }

  /* Imagen promocional */
  .promo-image {
    width: 100%; /* Ancho completo del contenedor */
    height: auto; /* Mantiene la proporción de la imagen */
    border-radius: 8px; /* Bordes suaves */
  }

  /* Contenedor del texto promocional */
  .promo-content {
    width: 100%;
    background-color: #D9D9D9; /* Fondo gris claro */
    padding: 50px 0;          /* Espaciado interno mayor para aumentar la altura */
    text-align: center;       /* Centrar el texto */
    border-radius: 0 0 8px 8px; /* Bordes suaves en la parte inferior */
    font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
  }

  /* Texto promocional */
  .promo-text {
    font-size: 3rem;         /* Tamaño mayor del texto */
    font-style: italic;      /* Texto en cursiva */
    color: #0E5F76;         /* Color del texto */
    margin: 0;              /* Sin márgenes extra */
    font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
  }

  /* Ajustes para pantallas medianas */
  @media (max-width: 768px) {
    .promo-text {
      font-size: 2rem;    /* Ajuste para tabletas */
    }
    .promo-content {
      padding: 40px 0;     /* Reduce ligeramente el padding interno */
    }
  }

  /* Ajustes para pantallas pequeñas */
  @media (max-width: 480px) {
    .promo-text {
      font-size: 1.5rem;      /* Ajuste para móviles */
    }
    .promo-content {
      padding: 30px 0;     /* Reduce aún más el padding para pantallas pequeñas */
    }
  }
</style>

