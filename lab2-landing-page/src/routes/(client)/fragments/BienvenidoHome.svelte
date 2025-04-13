<script>
  export let titulo = "BIENVENIDO";
  export let subtitulo = "Construyendo tu Futuro";
</script>

<div class="contenedor-bienvenido">
  <div class="barra-superior"></div>
  <div class="contenido">
    <img src="/images/image-planta.webp" alt="Crecimiento financiero simbolizado por una planta en monedas" class="imagen" />
    <div class="texto">
      <h1 class="titulo">{titulo}</h1>
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
    position: relative;
    width: 100%;
    height: auto; /* Ajusta dinámicamente según el contenido */
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  /* Barras superior e inferior */
  .barra-superior,
  .barra-inferior {
    width: 100%;
    height: 10px; /* Altura de las barras */
    background-color: var(--secondary-color); /* Usa el color secundario del proyecto */
  }

  /* Contenido principal */
  .contenido {
    position: relative;
    width: 100%;
    height: auto; /* Ajusta dinámicamente según la imagen */
    overflow: hidden; /* Evita desbordamientos */
  }

  .imagen {
    width: 100%;
    height: auto; /* Ajusta la altura según la proporción */
    object-fit: cover; /* Asegura que la imagen se ajuste sin deformarse */
  }

  /* Texto superpuesto sobre la imagen */
  .texto {
    position: absolute;
    top: 50%; /* Centra verticalmente */
    right: 10%; /* Alineación hacia la derecha */
    transform: translateY(-50%);
    color: var(--primary-color); /* Usa el color principal del proyecto */
    text-align: right; /* Alinea el texto hacia la derecha */
    font-family: var(--font-primary); /* Fuente global */
    z-index: 10; /* Asegura que el texto esté sobre la imagen */
    max-width: 40%; /* Limita el ancho del texto */
  }

  .titulo {
    font-size: 3rem; /* Tamaño destacado */
    font-weight: bold;
    margin-bottom: 10px; /* Separación entre título y subtítulo */
    color: var(--secondary-color); /* Azul para el título */
  }

  .subtitulo {
    font-size: 1.5rem; /* Tamaño moderado */
    color: #000; /* Negro */
  }

  .futuro {
    font-weight: bold; /* Resalta "Futuro" */
  }

  /* Responsividad */
  @media (max-width: 768px) {
    .texto {
      right: 5%; /* Reduce margen derecho en móviles */
      max-width: 70%; /* Permite más espacio para texto */
    }

    .titulo {
      font-size: 1.8rem; /* Ajusta tamaño del título */
    }

    .subtitulo {
      font-size: 1rem; /* Ajusta tamaño del subtítulo */
    }
  }

  @media (max-width: 480px) {
    .texto {
      right: 5%; /* Mantiene el texto alineado correctamente */
      max-width: 80%; /* Usa más espacio horizontal */
      text-align: center; /* Centra el texto */
    }

    .titulo {
      font-size: 1.8rem; /* Reduce tamaño del título */
    }

    .subtitulo {
      font-size: 1rem; /* Ajusta tamaño del subtítulo */
    }
  }
</style>





