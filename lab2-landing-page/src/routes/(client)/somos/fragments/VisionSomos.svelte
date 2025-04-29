<!-- 
  Componente: Visión
  Descripción:
  Este componente está diseñado para presentar la visión del Banco Universitario de manera clara y profesional. Resalta los objetivos aspiracionales de la institución, destacando su compromiso con los estudiantes universitarios y la excelencia en sus servicios.
-->

<div class="contenedor-vision">
  <!-- Contenedor de imagen y título -->
  <div class="titulo-vision-container">
    <img src="/images/image-vision.webp" alt="Icono de visión" class="imagen-vision">
    <h1 class="titulo-vision">Visión:</h1>
  </div>

  <!-- Descripción de la visión -->
  <p class="descripcion-vision">
    Queremos ser la principal opción financiera para estudiantes universitarios en el país. Deseamos ser reconocidos por nuestros servicios innovadores, la calidad de atención al cliente y nuestro compromiso con la educación y el desarrollo social.
  </p>
</div>

<style>
  /* Contenedor principal */
  .contenedor-vision {
    width: 100%;
    min-height: 40vh;
    margin: 0 auto;
    padding: 0 5%;
    background-color: var(--background-color);
    font-family: var(--font-family-primary);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  /* Contenedor del título y la imagen */
  .titulo-vision-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
  }

  /* Imagen alineada con la palabra "Visión" */
  .imagen-vision {
    width: 90px; /* Tamaño ajustado para desktop */
    height: auto;
    max-width: 100%;
  }

  /* Título */
  .titulo-vision {
    color: var(--primary-color);
    font-size: 2.5rem;
    font-weight: 700;
    text-align: left;
  }

  /* Descripción alineada con la "V" de Visión */
  .descripcion-vision {
    color: #333;
    font-size: 1rem;
    line-height: 1.8;
    text-align: justify;
    max-width: 100%;
    margin-left: 115px; /* Asegura alineación con la "V" */
  }

  /* Responsividad */
  @media (max-width: 768px) {
    .titulo-vision-container {
      justify-content: flex-start;
    }

    .imagen-vision {
      width: 80px; /* Reducción de tamaño en tablets */
    }

    .descripcion-vision {
      margin-left: 100px; /* Ajuste menor para tablets */
    }
  }

  @media (max-width: 480px) {
    .titulo-vision-container {
      justify-content: flex-start;
    }

    .imagen-vision {
      width: 70px; /* Imagen más pequeña en móviles */
    }

    .titulo-vision {
      font-size: 2rem;
    }

    .descripcion-vision {
      margin-left: 90px; /* Ajusta la alineación con la "V" en móviles */
      text-align: left;
    }
  }
</style>
