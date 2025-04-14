<!-- 
  Componente: Página en Construcción
  Descripción: Este componente muestra una pantalla que indica que la página está en desarrollo. Indicando de forma visual que temporalmente secciones o funcionalidades que aún no están listas dentro del sitio web. ofreciendo una experiencia visual agradable mientras informa al usuario.
-->

<div class="pagina-en-construccion">
  <!-- Imagen representativa de la página en construcción -->
  <img src="/images/image-construccion2.webp" alt="Página en construcción" class="imagen-construccion" />
  
  <!-- Mensaje principal que informa al usuario -->
  <h1 class="mensaje">Actualmente en desarrollo</h1>
</div>

<style>
  /* Contenedor principal del componente */
  .pagina-en-construccion {
    display: flex; /* Utiliza flexbox para centrar el contenido */
    flex-direction: column; /* Coloca los elementos en columna */
    align-items: center; /* Centra los elementos horizontalmente */
    justify-content: center; /* Centra los elementos verticalmente */
    width: 100%; /* Abarca todo el ancho de la página */
    height: 100vh; /* Abarca toda la altura de la ventana */
    background-color: #f4f4f4; /* Fondo claro */
    font-family: 'Montserrat', sans-serif; /* Fuente moderna */
    text-align: center; /* Centra el texto */
    box-sizing: border-box; /* Incluye padding y border en el tamaño total del elemento */
    overflow: hidden; /* Evita desbordamientos */
  }

  /* Imagen de construcción */
  .imagen-construccion {
    width: 100%; /* La imagen abarca todo el ancho de la página */
    height: auto; /* Mantiene las proporciones */
    object-fit: cover; /* Recorta las partes sobrantes si es necesario */
    max-height: 80vh; /* Asegura que no sea excesivamente alta */
  }

  /* Mensaje principal */
  .mensaje {
    font-size: 2rem; /* Incrementa el tamaño del texto */
    color: #333; /* Texto en gris oscuro */
    margin-top: 20px; /* Espaciado entre la imagen y el mensaje */
  }

  /* Ajustes para pantallas medianas */
  @media (max-width: 768px) {
    .mensaje {
      font-size: 1.5rem; /* Reduce el tamaño del texto en pantallas medianas */
    }
  }

  /* Ajustes para pantallas pequeñas */
  @media (max-width: 480px) {
    .mensaje {
      font-size: 1.2rem; /* Reduce el tamaño del texto en pantallas pequeñas */
    }
  }
</style>
