<!-- 
  Componente: Misión
  Descripción:
  Este componente está diseñado para mostrar la misión del Banco Universitario de manera clara y atractiva. Proporciona un encabezado destacado seguido de una descripción detallada que refleja los valores y el compromiso de la institución.

-->

<div class="contenedor-mision">
  <!-- Contenedor de imagen y título -->
  <div class="titulo-mision-container">
    <img src="/images/image-mision.webp" alt="Icono de misión" class="imagen-mision">
    <h1 class="titulo-mision">Misión:</h1>
  </div>

  <!-- Descripción de la misión -->
  <p class="descripcion-mision">
    Somos una confiable institución financiera comprometida con los estudiantes universitarios, brindando soluciones financieras ágiles y eficientes. Nuestra misión es facilitar la gestión de sus recursos y contribuir al crecimiento económico y personal de nuestros clientes.
  </p>
</div>

<style>
  /* Contenedor principal */
  .contenedor-mision {
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
  .titulo-mision-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
  }

  /* Imagen alineada con la palabra "Misión" */
  .imagen-mision {
    width: 90px; /* Tamaño ajustado para desktop (antes 100px) */
    height: auto;
    max-width: 100%;
  }

  /* Título */
  .titulo-mision {
    color: var(--primary-color);
    font-size: 2.5rem;
    font-weight: 700;
    text-align: left;
  }

  /* Descripción alineada con la "M" de Misión */
  .descripcion-mision {
    color: #333;
    font-size: 1rem;
    line-height: 1.8;
    text-align: justify;
    max-width: 100%;
    margin-left: 115px; /* Ajuste para mantener alineación con la "M" */
  }

  /* Responsividad */
  @media (max-width: 768px) {
    .titulo-mision-container {
      justify-content: flex-start;
    }

    .imagen-mision {
      width: 80px; /* Reducción de tamaño en tablets (antes 90px) */
    }

    .descripcion-mision {
      margin-left: 100px; /* Ajuste menor para tablets */
    }
  }

  @media (max-width: 480px) {
    .titulo-mision-container {
      justify-content: flex-start;
    }

    .imagen-mision {
      width: 70px; /* Imagen más pequeña en móviles (antes 80px) */
    }

    .titulo-mision {
      font-size: 2rem;
    }

    .descripcion-mision {
      margin-left: 90px; /* Ajusta la alineación con la "M" en móviles */
      text-align: left;
    }
  }
</style>


