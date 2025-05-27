<!-- 
  Componente: Servicio 3
  Descripción:
  Este componente destaca el servicio de retiros en efectivo, mostrando una imagen de fondo y texto informativo. Está diseñado para enfatizar la rapidez y seguridad de este servicio, dirigido a estudiantes y clientes del Banco Universitario.

-->

<div class="servicio3">
  <img src="/images/image-servicio3.webp" alt="Recibiendo dinero en efectivo" class="imagen-fondo-servicio3" />
  <div class="contenido-servicio3">
    <h3 class="titulo-servicio3">Retiros en efectivo</h3>
    <p class="descripcion-servicio3">
      Realiza retiros de efectivo de manera rápida y segura.
    </p>
  </div>
</div>

<style>
  .servicio3 {
    width: 100%;
    text-align: center;
    position: relative;
    margin: 30px 0;
    font-family: var(--font-family-primary);
  }

  .imagen-fondo-servicio3 {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .contenido-servicio3 {
    position: absolute;
    top: 25%;
    left: 3%;
    transform: translateY(-50%);
    background-color: transparent; /* Ahora completamente transparente */
    padding: 12px;
    max-width: 50%;
    overflow: hidden;
    word-wrap: break-word;
    z-index: 1;
    border-radius: 8px;
    text-align: left;
  }

  .titulo-servicio3 {
    font-size: 1.5rem;
    color: #ffffff;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .descripcion-servicio3 {
    font-size: 1.2rem;
    color: #ffffff;
    margin-top: 15px;
  }

  /* Ajustes para tablets */
  @media (max-width: 1024px) {
    .contenido-servicio3 {
      top: 30%; /* Bajé el cuadro en tablets */
      left: 2%;
      max-width: 55%;
      padding: 10px;
    }
    .titulo-servicio3 {
      font-size: 1.2rem; /* Reducción de tamaño */
      margin-bottom: 3px;
    }

    .descripcion-servicio3 {
      font-size: 1.1rem; /* Reducción de tamaño */
      margin-top: 3px;
    }
  }

  

  /* Ajustes para móviles */
  @media (max-width: 480px) {
    .contenido-servicio3 {
      top: 35%; /* Bajé más en móviles */
      left: 2%;
      max-width: 55%;
      padding: 8px;
    }

    .titulo-servicio3 {
      font-size: 0.9rem;
      margin-bottom: 8px;
    }

    .descripcion-servicio3 {
      font-size: 0.8rem;
      margin-top: 8px;
    }
  }
</style>
