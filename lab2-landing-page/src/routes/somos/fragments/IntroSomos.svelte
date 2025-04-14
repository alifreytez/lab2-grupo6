<!-- 
  Componente: Intro Somos
  Descripción:
  Este componente presenta una introducción sobre el Banco Universitario. Combina texto descriptivo con una imagen destacada para ofrecer una experiencia visual atractiva e informativa.

-->

<div class="contenedor">
  <!-- Sección de texto -->
  <div class="texto">
    <h1 class="titulo">Construyendo tu <span class="bold">Futuro</span></h1>
    <h2 class="subtitulo">¡Bienvenidos a nuestra plataforma financiera dedicada a estudiantes universitarios!</h2>
    <p class="descripcion">
      Somos una institución comprometida en ofrecer soluciones ágiles y eficientes para la gestión de tus recursos financieros. Nuestro objetivo es apoyar tu crecimiento económico y personal a través de servicios innovadores y de calidad. Nos enorgullece contribuir a la comunidad estudiantil, brindando herramientas tecnológicas que faciliten tus transacciones y promoviendo la educación financiera para un futuro próspero. ¡Descubre todo lo que tenemos para ofrecerte y únete a nuestra misión de transformar la manera en que los estudiantes manejan sus finanzas!
    </p>
  </div>

  <!-- Imagen al lado derecho -->
  <div class="imagen">
    <img src="/images/image-bancoBU.webp" alt="Banco Universitario" />
  </div>
</div>

<style>
  /* Contenedor principal */
  .contenedor {
    display: flex; /* Flexbox para diseño en fila */
    align-items: center; /* Centra verticalmente */
    justify-content: space-between; /* Espacio entre texto e imagen */
    width: 100%;
    min-height: 70vh; /* Altura mínima */
    padding: 20px; /* Espaciado interno */
    box-sizing: border-box; /* Incluye padding en el tamaño total */
    background-color: var(--background-color); /* Fondo global */
    font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
  }

  /* Sección de texto */
  .texto {
    width: 50%; /* Ocupa la mitad del contenedor */
    text-align: left; /* Alinea el texto a la izquierda */
    margin-left: 5%; /* Incrementa el margen izquierdo para alinearlo con el siguiente componente */
    font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
  }

  /* Imagen */
  .imagen {
    width: 50%; /* Ocupa la otra mitad */
    display: flex; /* Flexbox para centrar la imagen */
    justify-content: flex-end; /* Alinea la imagen a la derecha */
  }

  .imagen img {
    max-width: 100%; /* La imagen no excederá el ancho disponible */
    height: auto; /* Mantiene la proporción */
    border-radius: 8px; /* Bordes redondeados */
  }

  /* Título */
  .titulo {
    color: var(--primary-color); /* Color primario global */
    font-size: 2.5rem; /* Tamaño destacado */
    font-weight: 400; /* Normal para "Construyendo" */
    margin: 10px 0; /* Espaciado superior e inferior */
    text-transform: none; /* Asegura que no se transforme el texto a mayúsculas */
    font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
  }

  /* Negrita específica */
  .bold {
    font-weight: bold; /* Negrita solo para "Futuro" */
    font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
  }

  /* Subtítulo */
  .subtitulo {
    color: var(--secondary-color); /* Color secundario global */
    font-size: 1.8rem; /* Tamaño del subtítulo */
    margin: 8px 0; /* Espaciado superior e inferior */
    font-weight: 600; /* Semi-negrita */
    font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
  }

  /* Descripción */
  .descripcion {
    color: #333; /* Gris oscuro */
    font-size: 1rem; /* Tamaño estándar */
    line-height: 1.8; /* Espaciado entre líneas */
    text-align: justify; /* Justifica el texto */
    font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
  }

  /* Responsividad: Pantallas medianas */
  @media (max-width: 768px) {
    .contenedor {
      flex-direction: column; /* Cambia a columnas */
      text-align: center; /* Centra el texto */
    }

    .texto {
      width: 100%; /* Ocupa todo el ancho */
      margin-left: 0; /* Restablece el margen izquierdo en dispositivos pequeños */
    }

    .imagen {
      width: 100%; /* Imagen ocupa todo el ancho */
      margin-top: 20px; /* Espaciado superior */
      justify-content: center; /* Centra la imagen */
    }

    .titulo {
      font-size: 2rem; /* Tamaño ajustado */
    }

    .subtitulo {
      font-size: 1.5rem; /* Tamaño ajustado */
    }

    .descripcion {
      font-size: 0.9rem; /* Tamaño reducido */
    }
  }
</style>
