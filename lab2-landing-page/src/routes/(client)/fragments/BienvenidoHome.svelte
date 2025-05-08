<!-- 
  Componente: Bienvenido Home
  Descripción:
  Este componente está diseñado como una sección de bienvenida para la página principal, ofreciendo un mensaje inspirador acompañado de una imagen representativa. Su diseño equilibra visualmente el contenido textual y gráfico, asegurando que el mensaje sea claro y atractivo.

-->

<div class="contenedor-bienvenido">
  <div class="barra-superior"></div>
  <div class="contenido">
    <img src="/images/image-planta.webp" alt="Crecimiento financiero simbolizado por una planta en monedas" class="imagen" />
    <div class="texto">
      <h1 class="titulo">BIENVENIDO</h1>
      <h2 class="subtitulo">
        Construyendo tu <span class="futuro">Futuro</span>
      </h2>
    </div>
  </div>
  <div class="barra-inferior"></div>
</div>

<style>
  /* Contenedor principal */
  .contenedor-bienvenido {
    font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
    position: relative; /* Posición relativa para el contenido */
    width: 100%; /* Ancho completo del contenedor */
    height: auto; /* Ajusta dinámicamente según el contenido */
    display: flex; /* Usamos flexbox para alinear los elementos */
    flex-direction: column; /* Colocamos los elementos en columna */
    box-sizing: border-box; /* Incluye padding y border en el ancho y alto total */
  }

  /* Barras superior e inferior */
  .barra-superior,
  .barra-inferior {
    width: 100%; /* Ancho completo de la barra */
    height: 10px; /* Altura de las barras */
    background-color: var(--secondary-color); /* Usa el color secundario del proyecto */
  }

  /* Contenido principal */
  .contenido {
    position: relative; /* Posición relativa para el contenido */
    width: 100%; /* Ancho completo del contenedor */
    height: auto; /* Ajusta dinámicamente según la imagen */
    overflow: hidden; /* Evita desbordamientos */
  }
/* Imagen de fondo */
  .imagen {
    width: 100%; /* La imagen abarca el ancho completo del contenedor */
    height: auto; /* Ajusta la altura según la proporción */
    object-fit: cover; /* Asegura que la imagen se ajuste sin deformarse */
    max-height: 720px; /* Limita la altura máxima en desktop */    
  }

  /* Texto superpuesto sobre la imagen */
  .texto {
    position: absolute;
    top: 50%; /* Centra verticalmente */
    right: 10%; /* Alineación hacia la derecha */
    transform: translateY(-50%);
    color: var(--primary-color); /* Usa el color principal del proyecto */
    text-align: right; /* Alinea el texto hacia la derecha */
    font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
    z-index: 10; /* Asegura que el texto esté sobre la imagen */
    max-width: 40%; /* Limita el ancho del texto */
  }

  /* Título */
.titulo {
  font-size: 3rem; /* Tamaño destacado */
  font-weight: 900; /* Grosor máximo para resaltar */
  margin-bottom: 10px; /* Separación entre título y subtítulo */
  color: var(--primary-color); /* Usa el color principal del proyecto */
  font-family: var(--font-family-primary); /* Usa la fuente global */
}


  .subtitulo {
    font-size: 1.5rem; /* Tamaño moderado */
    color: #000; /* Negro */
    font-family: 'Montserrat', sans-serif; /* Usa la fuente Montserrat*/
  }

  .futuro {
    font-weight: bold; /* Resalta "Futuro" letra mas gruesa*/
  }

  /* Responsividad */
  @media (max-width: 768px) {
    .texto {
      right: 5%; /* Reduce margen derecho en móviles */
      max-width: 70%; /* Permite más espacio para texto */
      font-family: 'Montserrat', sans-serif; /* Usa la fuente con prioridad */
    }

    .titulo {
      font-size: 1.8rem; /* Ajusta tamaño del título */
      font-family: 'Montserrat', sans-serif; /* Usa la fuente con prioridad */
    }

    .subtitulo {
      font-size: 1rem; /* Ajusta tamaño del subtítulo */
      font-family: 'Montserrat', sans-serif; /* Usa la fuente con prioridad */
    }
  }

  @media (max-width: 480px) {
    .texto {
      right: 5%; /* Mantiene el texto alineado correctamente */
      max-width: 80%; /* Usa más espacio horizontal */
      text-align: center; /* Centra el texto */
      font-family: 'Montserrat', sans-serif; /* Usa la fuente con prioridad */
    }

    .titulo {
      font-size: 1.8rem; /* Reduce tamaño del título */
      font-family: 'Montserrat', sans-serif; /* Usa la fuente con prioridad */
    }

    .subtitulo {
      font-size: 1rem; /* Ajusta tamaño del subtítulo */
      font-family: 'Montserrat', sans-serif; /* Usa la fuente con prioridad */
    }
  }
</style>
