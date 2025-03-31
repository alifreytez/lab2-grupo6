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
    margin: 30px 0; /* Espaciado entre servicios */
  }

  .imagen-fondo-servicio1 {
    width: 100%;
    height: auto;
    border-radius: 8px; /* Bordes suaves */
  }

  .contenido-servicio1 {
    position: absolute;
    top: 35%; /* Posición inicial estándar */
    left: 5%; /* Margen izquierdo estándar */
    transform: translateY(-50%); /* Centrado verticalmente */
    background-color: transparent; /* Fondo transparente */
    text-align: left; /* Texto alineado a la izquierda */
    padding: 5px; /* Espaciado interno */
    max-width: 50%; /* Limita el ancho */
    overflow: hidden; /* Evita desbordamiento del contenido */
    word-wrap: break-word; /* Ajusta palabras largas */
    z-index: 1; /* Prioridad sobre la imagen */
    margin: 0; /* Espaciado entre servicios */
  }

  .titulo-servicio1 {
    font-size: 1.3rem; /* Tamaño del título */
    color: #ffffff; /* Texto blanco */
    font-weight: bold;
    margin-bottom: 15px; /* Espaciado entre el título y descripción */
    line-height: 1.5; /* Interlineado */
  }

  .descripcion-servicio1 {
    font-size: 1.3 rem; /* Tamaño del texto */
    color: #ffffff; /* Texto blanco */
    margin-top: 15px; /* Espaciado entre el título y descripción */
    line-height: 1.2; /* Interlineado */
    white-space: normal; /* Permite texto en varias líneas */
  }

  /* Ajustes para pantallas medianas */
  @media (max-width: 768px) {
    .contenido-servicio1 {
      top: 40%; /* Baja más el cuadro para evitar superposición */
      left: 1%; /* Ajusta margen izquierdo */
      max-width: 60%; /* Ancho ajustado */
      padding: 8px; /* Reduce el padding interno */
      margin: 0; /* Espaciado entre servicios */
    }

    .titulo-servicio1 {
      font-size: 0.9rem; /* Tamaño del título ajustado */
      margin-bottom: 12px; /* Espaciado ajustado */
      line-height: 1.4; /* Interlineado */
    }

    .descripcion-servicio1 {
      font-size: 0.8rem; /* Tamaño del texto ajustado */
      margin-top: 8px; /* Espaciado ajustado */
      line-height: 1.3; /* Interlineado ajustado */
    }
  }

  /* Ajustes para pantallas pequeñas */
  @media (max-width: 480px) {
    .contenido-servicio1 {
      top: 50%; /* Baja el cuadro */
      left: 1%; /* Ajusta margen izquierdo */
      max-width: 100%; /* Incrementa el ancho en pequeñas pantallas */
      padding: 6px; /* Reduce el padding interno */
      margin: 0; /* Espaciado entre servicios */
    }

    .titulo-servicio1 {
      font-size: 0.8rem; /* Ajusta el tamaño del título */
      margin-bottom: 6px; /* Espaciado entre título y descripción */
      line-height: 1.2; /* Interlineado ajustado */
    }

    .descripcion-servicio1 {
      font-size: 0.8rem; /* Tamaño del texto reducido */
      margin-top: 5px; /* Ajusta espaciado */
      line-height: 1; /* Ajusta interlineado */
      overflow-wrap: break-word; /* Corta palabras largas para ajustar al ancho */
    }
  }
</style>
  
  
  
  
  
  
  
  
  
  
  
  
  