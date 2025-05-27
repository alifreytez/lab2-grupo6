<!-- 
  Componente: Objetivos
  Descripción:
  Este componente presenta los objetivos estratégicos del Banco Universitario. Está diseñado para resaltar de manera clara y profesional las metas principales de la institución, enfatizando su compromiso con los estudiantes universitarios.
-->

<div class="contenedor-objetivos">
  <!-- Contenedor de imagen y título -->
  <div class="titulo-objetivos-container">
    <img src="/images/image-objetivos.webp" alt="Icono de objetivos" class="imagen-objetivos">
    <h1 class="titulo-objetivos">Objetivos:</h1>
  </div>

  <!-- Lista de objetivos -->
  <ul class="lista-objetivos">
    <li>Brindar a los estudiantes universitarios un servicio eficiente y de calidad en la gestión de sus recursos financieros, a través de nuestros canales digitales y puntos de atención presencial.</li>
    <li>Fomentar el uso de nuestras plataformas digitales para transferencias entre estudiantes sin comisión, depósitos y retiros en efectivo, ofreciendo herramientas tecnológicas fáciles y seguras.</li>
    <li>Promover la educación financiera de los estudiantes universitarios mediante charlas, talleres y capacitaciones sobre ahorro, inversión y uso responsable del crédito.</li>
    <li>Establecer alianzas estratégicas con universidades y empresas para ofrecer beneficios exclusivos a nuestros clientes, tales como descuentos en matrículas, becas, prácticas laborales, entre otros.</li>
    <li>Mantener una cultura de innovación y mejora continua en nuestros procesos, productos y servicios, para estar siempre a la vanguardia de las necesidades de nuestros clientes y del mercado.</li>
  </ul>
</div>

<style>
  /* Contenedor principal */
  .contenedor-objetivos {
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
  .titulo-objetivos-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
  }

  /* Imagen alineada con la palabra "Objetivos" */
  .imagen-objetivos {
    width: 90px; /* Tamaño ajustado para desktop */
    height: auto;
    max-width: 100%;
  }

  /* Título */
  .titulo-objetivos {
    color: var(--primary-color);
    font-size: 2.5rem;
    font-weight: 700;
    text-align: left;
  }

  /* Lista alineada con la "O" de Objetivos */
  .lista-objetivos {
    list-style-type: disc;
    color: #333;
    font-size: 1rem;
    line-height: 1.8;
    max-width: 100%;
    padding: 0 5%;
    text-align: justify;
    margin-left: 115px; /* Asegura alineación con la "O" */
  }

  /* Elementos de la lista */
  .lista-objetivos li {
    margin-bottom: 15px;
  }

  /* Responsividad */
  @media (max-width: 768px) {
    .titulo-objetivos-container {
      justify-content: flex-start;
    }

    .imagen-objetivos {
      width: 80px; /* Reducción de tamaño en tablets */
    }

    .lista-objetivos {
      margin-left: 100px; /* Ajuste menor para tablets */
    }
  }

  @media (max-width: 480px) {
    .titulo-objetivos-container {
      justify-content: flex-start;
    }

    .imagen-objetivos {
      width: 70px; /* Imagen más pequeña en móviles */
    }

    .titulo-objetivos {
      font-size: 2rem;
    }

    .lista-objetivos {
      margin-left: 90px; /* Ajusta la alineación con la "O" en móviles */
      text-align: left;
    }
  }
</style>
