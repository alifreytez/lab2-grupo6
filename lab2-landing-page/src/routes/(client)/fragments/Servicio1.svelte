<!-- 
  Componente: Servicio 1
  Descripción:
  Este componente destaca la funcionalidad de transferencias sin comisión entre estudiantes universitarios, mostrando una imagen de fondo y texto informativo. Está diseñado para enfatizar la facilidad y beneficio del servicio de manera visual y textual.
-->
<div class="servicio1">
  <img src="/images/image-servicio1-2.webp" alt="Transferencia entre estudiantes sin comisión" class="imagen-fondo-servicio1" />
  <div class="contenido-servicio1">
    <h3 class="titulo-servicio1">Transferencia entre estudiantes sin comisión</h3>
    <p class="descripcion-servicio1">
      Realiza transferencias entre estudiantes sin costo alguno, de manera rápida, segura y eficiente.
    </p>
  </div>
</div>

<style>
  .servicio1 {
    width: 100%;
    text-align: center;
    position: relative;
    margin: 30px 0;
    font-family: var(--font-family-primary);
  }

  .imagen-fondo-servicio1 {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .contenido-servicio1 {
    position: absolute;
    top: 45%; /* Bajé más el cuadro */
    left: 2%; /* Moví ligeramente a la izquierda */
    transform: translateY(-50%);
    background-color: transparent; /* Completamente transparente */
    padding: 12px;
    max-width: 50%;
    overflow: hidden;
    word-wrap: break-word;
    z-index: 1;
    border-radius: 8px;
    text-align: left;
  }

  .titulo-servicio1 {
    font-size: 1.1rem; /* tamaño de la fuente */
    color: #ffffff;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .descripcion-servicio1 {
    font-size: 1rem; /* Reducción para evitar desbordamiento */
    color: #ffffff;
    margin-top: 10px;
  }

  /* Ajuste general para tablets */
  @media (max-width: 900px) {
    .contenido-servicio1 {
      top: 50%; /* Bajé más el cuadro en tablets */
      left: 2%;
      max-width: 55%;
      padding: 10px;
    }
  }

  /* Ajuste para pantallas medianas */
  @media (max-width: 1024px) {
    .contenido-servicio1 {
      top: 53%; /* Bajé más en tablets medianas */
      left: 2%;
      max-width: 55%;
      padding: 8px;
    }

    .titulo-servicio1 {
      font-size: 1.5rem;
      margin-bottom: 8px;
    }

    .descripcion-servicio1 {
      font-size: 1rem;
      margin-top: 6px;
    }
  }

  /* Ajuste para móviles */
  @media (max-width: 480px) {
    .contenido-servicio1 {
      top: 50%; /* Bajé más en móviles */
      left: 2%;
      max-width: 55%;
      padding: 6px;
    }

    .titulo-servicio1 {
      font-size: 0.9rem;
      margin-bottom: 6px;
    }

    .descripcion-servicio1 {
      font-size: 0.8rem;
      margin-top: 5px;
    }
  }
</style>


