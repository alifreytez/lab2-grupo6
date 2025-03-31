<div class="servicio5">
  <!-- Barra decorativa superior (opcional) -->
  <div class="barra-decorativa superior"></div>
  
  <img src="/images/image-servicio5.webp" alt="Cobro de dinero efectivo billetes en un pantal\u00F3n blue jean" class="imagen-fondo-servicio5" />
  
  <div class="contenido-servicio5">
    <h3 class="titulo-servicio5">Cobro de Becas Estudiantiles</h3>
    <p class="descripcion-servicio5">
      Cobra tu beca estudiantil registr\u00E1ndote en Banco Universitario.
    </p>
  </div>
  
  <!-- Barra decorativa inferior (opcional) -->
  <div class="barra-decorativa inferior"></div>
</div>

<style>
  /* Estilo de contenedor general */
  .servicio5 {
    width: 100%;
    text-align: center;
    position: relative;
    margin: 30px 0;
  }



  /* Imagen de fondo */
  .imagen-fondo-servicio5 {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  /* Cuadro de texto centrado */
  .contenido-servicio5 {
    position: absolute;
    top: 40%;         /* Inicialmente casi centrado verticalmente */
    left: 50%;        /* Centrado horizontalmente */
    transform: translate(-50%, -50%);
    background-color: transparent; /* Fondo transparente */
    text-align: center;            /* Texto centrado */
    max-width: 40%;                /* Ancho del cuadro (puedes ajustar este valor) */
    word-wrap: break-word;
    overflow: hidden;
    z-index: 1;
    display: flex;                 /* Usamos Flexbox para centrar el contenido */
    flex-direction: column;
    align-items: center;
    padding: 5; /* Espaciado interno */
    margin: 0; /* Espaciado entre servicios */          /* Espaciado entre servicios */
  }

  .titulo-servicio5 {
    font-size: 1.5rem;               /* Tamaño de fuente para pantallas grandes */
    color: #ffffff;
    font-weight: bold;
    margin-bottom: 10px;
    line-height: 1.5;
  }

  .descripcion-servicio5 {
    font-size: 1.2rem;             /* Tamaño de fuente para pantallas grandes */
    color: #ffffff;
    margin-top: 15px;
    line-height: 1.4;
  }

  /* Media query para pantallas medianas */
  @media (max-width: 768px) {
    .contenido-servicio5 {
      top: 40%;                   /* Sube ligeramente el cuadro para adaptarse */
      max-width: 50%;             /* Amplía el cuadro para aprovechar espacio */
      padding: 8px;
    }
    .titulo-servicio5 {
      font-size: 1rem;          /* Puede mantenerse o ajustarse según convenga */
      margin-bottom: 10px;
      line-height: 1;
    }
    .descripcion-servicio5 {
      font-size: 1rem;
      line-height: 1.3;
    }
  }

  /* Media query para pantallas pequeñas */
  @media (max-width: 480px) {
    .contenido-servicio5 {
      top: 40%;                   /* Sube el cuadro para que no se monte en la imagen */
      max-width: 50%;             /* Aprovecha el espacio adecuado sin desbordar */
      padding: 8px;
    }
    .titulo-servicio5 {
      font-size: 1rem;            /* Texto más pequeño para mejor visual en móviles */
      margin-bottom: 8px;
      line-height: 1.2;
    }
    .descripcion-servicio5 {
      font-size: 0.8rem;
      line-height: 1.2;
    }
  }
</style>
