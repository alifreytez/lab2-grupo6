<!-- 
  Componente: Servicio 2
  Descripción:
  Este componente destaca el servicio de depósitos en efectivo disponibles las 24 horas del día, mostrando una imagen de fondo y un texto informativo. Está diseñado para enfatizar la conveniencia y accesibilidad de este servicio, dirigido a estudiantes y clientes del Banco Universitario.

-->
<div class="servicio2">
  <img src="/images/image-servicio2-2.webp" alt="Depósitos en efectivo las 24 horas del día" class="imagen-fondo-servicio2" />
  <div class="contenido-servicio2">
    <h3 class="titulo-servicio2">Depósitos en efectivo disponible las 24 horas del día</h3>
    <p class="descripcion-servicio2">
      Realiza depósitos en efectivo de manera sencilla y cómoda en cualquiera de nuestras sucursales.
    </p>
  </div>
</div>

<style>
  .servicio2 {
    width: 100%;
    text-align: center;
    position: relative;
    margin: 30px 0;
    font-family: var(--font-family-primary);
  }

  .imagen-fondo-servicio2 {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .contenido-servicio2 {
    position: absolute;
    top: 10%;
    left: 70%;
    transform: translate(-50%, 0);
    background-color: transparent;
    padding: 12px;
    max-width: 50%;
    overflow: hidden;
    word-wrap: break-word;
    border-radius: 8px;
    text-align: left;
  }

  .titulo-servicio2 {
    font-size: 1.2rem;
    color: #ffffff;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .descripcion-servicio2 {
    font-size: 1rem;
    color: #ffffff;
    margin-top: 15px;
  }

  /* Ajustes para tablets */
  @media (max-width: 1024px) {
    .contenido-servicio2 {
      top: 8%;
      left: 70%;
      max-width: 100%; /* Ampliado */
      padding: 1px;
    }
    .titulo-servicio2 {
      font-size: 1rem; /* Reducción de tamaño */
      margin-bottom: 3px;
    }

    .descripcion-servicio2 {
      font-size: 0.8rem; /* Reducción de tamaño */
      margin-top: 3px;
    }
  }

  /* Ajustes para móviles */
  @media (max-width: 480px) {
    .contenido-servicio2 {
      top: 5%;
      left: 70%;
      max-width: 100%; /* Más ancho */
      padding: 5px;
    }

    .titulo-servicio2 {
      font-size: 0.7rem; /* Reducción de tamaño */
      margin-bottom: 6px;
    }

    .descripcion-servicio2 {
      font-size: 0.5rem; /* Reducción de tamaño */
      margin-top: 5px;
    }
  }
</style>
