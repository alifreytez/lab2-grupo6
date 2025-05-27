<!-- 
  Componente: Servicio 5
  Descripción:
  Este componente resalta el servicio de cobro de becas estudiantiles, combinando elementos visuales y textuales. Diseñado para transmitir de manera clara cómo los estudiantes pueden recibir sus becas a través del Banco Universitario.

-->

<div class="servicio5">
  <!-- Barra decorativa superior (opcional) -->
  <div class="barra-decorativa superior"></div>
  
  <img src="/images/image-servicio5.webp" alt="Cobro de dinero efectivo billetes en un pantalón blue jean" class="imagen-fondo-servicio5" />
  
  <div class="contenido-servicio5">
    <h3 class="titulo-servicio5">Cobro de Becas Estudiantiles</h3>
    <p class="descripcion-servicio5">
      Cobra tu beca estudiantil registrándote en Banco Universitario.
    </p>
  </div>
  
  <!-- Barra decorativa inferior (opcional) -->
  <div class="barra-decorativa inferior"></div>
</div>

<style>
  /* Estilo de contenedor general */
  .servicio5 {
    width: 100%; /* Abarca todo el ancho de la pantalla */
    text-align: center; /* Centrado de texto */
    position: relative; /* Permite posicionar elementos */
    margin: 30px 0; /* Espaciado entre servicios */
    font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
  }

  /* Imagen de fondo */
  .imagen-fondo-servicio5 {
    width: 100%; /* Imagen ocupa todo el ancho */
    height: auto; /* Mantiene la proporción de la imagen */
    border-radius: 8px; /* Bordes suaves */
  }

  /* Cuadro de texto centrado */
  .contenido-servicio5 {
    position: absolute; /* Posiciona el contenido sobre la imagen */
    top: 40%;         /* Inicialmente casi centrado verticalmente */
    left: 50%;        /* Centrado horizontalmente */
    transform: translate(-50%, -50%); /* Centrado exacto */
    background-color: transparent; /* Fondo transparente */
    text-align: center;  /* Texto centrado */
    max-width: 40%;  /* Ancho del cuadro (puedes ajustar este valor) */
    word-wrap: break-word; /* Ajusta palabras largas */
    overflow: hidden; /* Evita desbordamiento del contenido */
    z-index: 1; /* Prioridad sobre la imagen */
    display: flex;                 /* Usamos Flexbox para centrar el contenido */
    flex-direction: column; /* Coloca los elementos en columna */
    align-items: center; /* Centra horizontalmente los elementos dentro del cuadro */
    padding: 5px; /* Espaciado interno */
    margin: 0; /* Espaciado entre servicios */
    font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
  }

  .titulo-servicio5 {
    font-size: 1.5rem; /* Tamaño de fuente para pantallas grandes */
    color: #ffffff; /* Texto blanco */
    font-weight: bold; /* Texto en negritas */
    margin-bottom: 10px; /* Espaciado entre el título y descripción */
    line-height: 1.5; /* Interlineado */
    font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
  }

  .descripcion-servicio5 {
    font-size: 1.2rem; /* Tamaño de fuente para pantallas grandes */
    color: #ffffff; /* Texto blanco */
    margin-top: 15px; /* Espaciado entre el título y descripción */
    line-height: 1.4; /* Interlineado */
    font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
  }

  /* Media query para pantallas medianas */
  @media (max-width: 1024px) {
    .contenido-servicio5 {
      top: 40%;       /* Sube ligeramente el cuadro para adaptarse */
      max-width: 50%; /* Amplía el cuadro para aprovechar espacio */
      padding: 8px; /* Espaciado interno ajustado */
    }
    .titulo-servicio5 {
      font-size: 1rem;     /* Puede mantenerse o ajustarse según convenga */
      margin-bottom: 10px; /* Espaciado entre el título y descripción */
      line-height: 1; /* Interlineado */
    }
    .descripcion-servicio5 {
      font-size: 1rem; /* Tamaño de texto ajustado para pantallas medianas */
      line-height: 1.3; /* Interlineado ajustado */
    }
  }

  /* Media query para pantallas pequeñas */
  @media (max-width: 480px) {
    .contenido-servicio5 {
      top: 40%;       /* Sube el cuadro para que no se monte en la imagen */
      max-width: 50%; /* Aprovecha el espacio adecuado sin desbordar */
      padding: 8px; /* Espaciado interno ajustado */
    }
    .titulo-servicio5 {
      font-size: 1rem; /* Texto más pequeño para mejor visual en móviles */
      margin-bottom: 8px; /* Espaciado entre el título y descripción */
      line-height: 1.2; /* Interlineado ajustado */
    }
    .descripcion-servicio5 {
      font-size: 0.8rem; /* Texto más pequeño para mejor visual en móviles */
      line-height: 1.2; /* Interlineado ajustado */
    }
  }
</style>
