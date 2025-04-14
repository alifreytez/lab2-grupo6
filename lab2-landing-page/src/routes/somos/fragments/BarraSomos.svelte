<!-- 
  Componente: Barra Somos
  Descripción:
  Este componente muestra un encabezado titulado "Somos BU", acompañado de un ícono de cerrar que permite redirigir al inicio. Está diseñado para destacar una sección del Banco Universitario con un diseño responsivo y limpio.

-->

<div class="rectangulo">
  <!-- Título principal de la barra -->
  <span class="texto">Somos BU</span>
  
  <!-- Ícono de cerrar que redirige al inicio -->
  <a href="/" class="icono-cerrar">
    <img 
      src="/images/iconos/icono-cerrar.webp"  
      alt="icono-cerrar" 
    />
  </a>
</div>

<style>
  /* Contenedor principal de la barra */
  .rectangulo {
    display: flex; /* Usa flexbox */
    align-items: center; /* Alinea los elementos verticalmente */
    position: relative; /* Posiciona elementos dentro */
    justify-content: space-between; /* Espacio entre el texto y el ícono */
    background-color: var(--primary-color); /* Usa color global */
    border-radius: 8px; /* Bordes redondeados */
    padding: 10px; /* Espaciado interno */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    font-family: var(--font-primary); /* Usa fuente global */
    margin-bottom: 0; /* Elimina cualquier margen inferior */
    font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
  }

  /* Estilo del texto del título */
  .texto {
    font-size: 2vw; /* Tamaño responsive basado en el ancho de la pantalla */
    font-weight: 700; /* Bold */
    color: var(--background-color); /* Usa color global blanco */
    text-align: center; /* Centra el texto horizontalmente */
    width: 100%; /* Asegura que ocupe el ancho completo */
    font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
  }

  /* Contenedor y estilo del ícono de cerrar */
  .icono-cerrar {
    margin-left: auto; /* Empuja el ícono completamente hacia la derecha */
  }

  .icono-cerrar img {
    width: 32px; /* Tamaño de la imagen */
    height: 32px; /* Tamaño de la imagen */
    cursor: pointer; /* Cursor cambia al pasar por encima */
  }

  .icono-cerrar img:hover { /* Efecto de hover */
    filter: brightness(0.8); /* Oscurece la imagen al pasar el mouse */
    transform: scale(1.1); /* Efecto de hover */
  }

  /* Responsividad adicional */
  @media (max-width: 768px) {
    .texto {
      font-size: 4vw; /* Aumenta el tamaño del texto en pantallas pequeñas */
    }
    .rectangulo {
      padding: 15px; /* Ajusta el espaciado en móviles */
    }
  }
</style>

