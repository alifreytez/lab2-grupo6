<div class="servicio2">
    <img src="/images/image-servicio2.webp" alt="Depósitos en efectivo las 24 horas del día" class="imagen-fondo-servicio2" />
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
      margin: 30px 0; /* Espaciado entre componentes */
    }
  
    .imagen-fondo-servicio2 {
      width: 100%;
      height: auto;
      border-radius: 8px; /* Bordes suaves */
    }
  
    .contenido-servicio2 {
      position: absolute;
      top: 1%; /* Sube el cuadro más hacia arriba */
      left: 70%; /* Mueve el cuadro más hacia la derecha */
      transform: translate(-50%, 0); /* Ajusta centrado horizontal */
      background-color: transparent; /* Fondo transparente */
      text-align: left; /* Texto alineado a la izquierda */
      padding: 12px; /* Espaciado interno */
      max-width: 90%; /* Amplía al máximo el cuadro hacia la derecha */
      word-wrap: break-word; /* Ajusta palabras largas */
      overflow-wrap: break-word; /* Evita desbordamientos */
      overflow: hidden; /* Oculta cualquier exceso de texto */
    }
  
    .titulo-servicio2 {
      font-size: 2rem; /* Tamaño ajustado para pantallas grandes */
      color: #ffffff; /* Texto blanco */
      font-weight: bold; /* Negrita */
      margin-bottom: 10px; /* Espaciado entre título y descripción */
      line-height: 1.5; /* Mejora interlineado */
    }
  
    .descripcion-servicio2 {
      font-size: 1.4rem; /* Tamaño ajustado */
      color: #ffffff;
      margin-top: 8px; /* Espaciado entre líneas */
      line-height: 1.3; /* Mejora interlineado */
    }
  
    /* Ajustes para pantallas medianas */
    @media (max-width: 768px) {
      .contenido-servicio2 {
        top: 1%; /* Sube el cuadro más hacia arriba */
        left: 70%; /* Ajusta posición hacia la derecha */
        max-width: 100%; /* Amplía el cuadro al máximo para medianas */
        padding: 10px; /* Espaciado interno ajustado */
      }
  
      .titulo-servicio2 {
        font-size: 1rem; /* Tamaño reducido para títulos */
      }
  
      .descripcion-servicio2 {
        font-size: 0.8rem; /* Tamaño ajustado para la descripción */
        line-height: 1.2;
      }
    }
  
    /* Ajustes para pantallas pequeñas */
    @media (max-width: 480px) {
      .contenido-servicio2 {
        top: 1%; /* Sube el cuadro más hacia arriba */
        left: 70%; /* Maximiza el desplazamiento hacia la derecha */
        max-width: 100%; /* Aprovecha todo el espacio hacia la derecha */
        padding: 8px; /* Espaciado interno ajustado */
      }
  
      .titulo-servicio2 {
        font-size: 0.8rem; /* Tamaño reducido para pantallas pequeñas */
      }
  
      .descripcion-servicio2 {
        font-size: 0.5rem; /* Reduce el tamaño de la descripción */
        line-height: 1.2; /* Mejora interlineado */
      }
    }
  </style>
  
  
  
  