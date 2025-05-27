<!-- 
  Componente: PromoSomos
  Descripción:
  Este componente muestra una imagen promocional con un recuadro transparente sobre ella, 
  resaltando el mensaje institucional "¡Somos BU tu Aliado Financiero comprometidos a apoyarte en la construcción de tu Futuro!" 
-->

<div class="promo-somos">
  <img src="/images/imagen-equipo.webp" alt="Personal del banco" class="promo-imagen" />

  <!-- Contenedor del texto promocional transparente -->
  <div class="promo-contenido">
    <p class="promo-texto">¡Somos BU tu Aliado Financiero comprometidos a apoyarte en la construcción de tu Futuro!</p>
  </div>
</div>

<style>
  /* Contenedor principal */
  .promo-somos {
    width: 100%;
    text-align: center;
    position: relative;
    margin: 20px 0;
    font-family: var(--font-family-primary);
  }

  /* Imagen promocional */
  .promo-imagen {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  /* Contenedor del texto con fondo transparente */
  .promo-contenido {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(217, 217, 217, 0.6);
    padding: 2vw 6vw;
    text-align: center;
    border-radius: 10px;
    font-family: var(--font-family-primary);
    width: 80%;
    max-width: 85%;
    min-height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    z-index: 100;
  }

  /* Ajustes específicos para móviles */
  @media (max-width: 480px) {
    .promo-contenido {
      bottom: 10%;
      width: 90%; /* Ajuste para evitar que se pegue a la izquierda */
      padding: 4vw 8vw;
    }

    .promo-texto {
      font-size: clamp(0.8rem, 1.8vw, 1.5rem);
      line-height: 1.1;
    }
  }

  /* Texto promocional */
  .promo-texto {
    font-size: clamp(1rem, 2.5vw, 2rem);
    font-style: italic;
    font-weight: bold;
    color: #0E5F76;
    margin: 0;
    line-height: 1.2;
    display: block;
  }
</style>
