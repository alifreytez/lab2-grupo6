<!-- 
  Componente: Carrusel Promocional
  Descripción:
  Este componente crea un carrusel dinámico para mostrar imágenes promocionales del Banco Universitario. Permite desplazarse manualmente entre imágenes o hacerlo de forma automática, ofreciendo una experiencia visual interactiva y fluida.
-->

<script>
  // Array constante de imágenes promocionales
  export const imagenes = [
    { src: '/images/image-promocional1.webp', alt: 'Promoción 1 del Banco Universitario' },
    { src: '/images/image-promocional2.webp', alt: 'Promoción 2 del Banco Universitario' },
    { src: '/images/image-promocional3.webp', alt: 'Promoción 3 del Banco Universitario' },
    { src: '/images/image-promocional4.webp', alt: 'Promoción 4 del Banco Universitario' }
  ];
  
  let indiceActual = 0;

  // Función para mover al siguiente slide
  const siguienteSlide = () => {
    indiceActual = (indiceActual + 1) % imagenes.length;
  };

  // Función para mover al slide anterior
  const anteriorSlide = () => {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
  };

  // Configuración de auto-desplazamiento
  setInterval(() => {
    siguienteSlide(); // Avanza al siguiente slide automáticamente
  }, 5000); // Cambia de slide cada 5 segundos
</script>

<div class="carrusel">
  <!-- Contenedor de la imagen del carrusel -->
  <div class="imagen-contenedor">
    <img
      src={imagenes[indiceActual].src}
      alt={imagenes[indiceActual].alt}
      class="imagen-carrusel"
    />
  </div>
  <!-- Botones de control del carrusel -->
  <div class="controles">
    <button class="btn" on:click={anteriorSlide}>❮</button>
    <button class="btn" on:click={siguienteSlide}>❯</button>
  </div>
</div>

<style>
  /* Estilos para el carrusel */
  .carrusel {
    width: 100%; /* Ancho completo del carrusel */
    max-width: 1200px; /* Ancho máximo del carrusel */
    margin: 0 auto; /* Centra el carrusel en la página */
    position: relative; /* Posición relativa para el contenido */
    display: flex; /* Usamos flexbox para alinear los elementos */
    flex-direction: column; */ Colocamos los elementos en columna */
    align-items: center; /* Centra horizontalmente los elementos */
    background-color: #ffffff; /* Color de fondo blanco */
    border-radius: 0.6rem; /* Bordes redondeados */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /*  Sombra suave */
    overflow: hidden; /* Evita desbordamientos */
  }

  /* Contenedor de la imagen */
  .imagen-contenedor {
    width: 100%; /* Ancho completo del contenedor de la imagen */
    text-align: center; /* Centra horizontalmente */
  }

  /* Estilos para la imagen del carrusel */
  .imagen-carrusel {
    width: 100%; /* La imagen abarca todo el ancho del contenedor */
    height: auto; /* Mantiene las proporciones originales */
    border-radius: 0.6rem; /* Bordes redondeados */
    max-height: 500px; /* Limita la altura máxima */
    object-fit: contain; /* Asegura que toda la imagen sea visible dentro del contenedor */
  }

  /* Controles del carrusel */
  .controles {
    display: flex; /* Usamos flexbox para alinear los botones */
    justify-content: space-between; /* Espaciamos los botones de control */
    width: 100%; /* Ancho completo del contenedor de controles */
    padding: 1rem; /* Espaciado interno */
  }

  .btn {
    background-color: var(--primary-color); /* Color de fondo del botón */
    color: var(--white-color); /* Color del texto blanco */
    border: none; /* Sin borde */
    padding: 0.5rem 1rem; /*  Espaciado interno */
    border-radius: 0.4rem; /* Bordes redondeados */
    cursor: pointer; /* Cambia el cursor al pasar sobre el botón */
    font-size: 1.2rem; /* Tamaño de fuente */
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Sombra suave */
  }

  .btn:hover {
    background-color: var(--secondary-color); /* Cambia el color de fondo al pasar el mouse */
  }

  /* Responsividad para pantallas medianas */
  @media (max-width: 768px) {
    .carrusel {
      max-width: 100%; /* Ancho completo en pantallas más pequeñas */
    }

    .btn {
      font-size: 1rem; /* Tamaño de fuente reducido */
      padding: 0.4rem 0.8rem; /*  Espaciado interno reducido */
    }
  }

  /* Responsividad para pantallas pequeñas */
  @media (max-width: 480px) {
    .btn {
      font-size: 0.9rem; /* Tamaño de fuente aún más reducido */
      padding: 0.3rem 0.6rem; /*  Espaciado interno aún más reducido */
    }
  }
</style>
