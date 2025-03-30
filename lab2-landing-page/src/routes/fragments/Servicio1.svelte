<div class="servicio">
  <img src="/images/image-servicio1.webp" alt="Transferencia entre estudiantes sin comisión" class="imagen-fondo" />
  <div class="contenido">
    <h3 class="titulo">Transferencia entre estudiantes sin comisión</h3>
    <p class="descripcion">
      Realiza transferencias entre estudiantes sin costo alguno, de manera rápida, segura y eficiente.
    </p>
  </div>
</div>

<style>
  .servicio {
    width: 100%;
    text-align: center;
    position: relative;
    margin: 30px 0; /* Espaciado entre servicios */
  }

  .imagen-fondo {
    width: 100%;
    height: auto;
    border-radius: 8px; /* Bordes suaves */
  }

  .contenido {
    position: absolute;
    top: 35%; /* Posición inicial estándar */
    left: 5%; /* Margen izquierdo estándar */
    transform: translateY(-50%); /* Centrado verticalmente */
    background-color: transparent; /* Fondo transparente */
    text-align: left; /* Texto alineado a la izquierda */
    padding: 10px; /* Espaciado interno */
    max-width: 40%; /* Limita el ancho */
    overflow: hidden; /* Evita desbordamiento del contenido */
    word-wrap: break-word; /* Ajusta palabras largas */
    z-index: 1; /* Prioridad sobre la imagen */
  }

  .titulo {
    font-size: 2rem; /* Tamaño del título */
    color: #ffffff; /* Texto blanco */
    font-weight: bold;
    margin-bottom: 15px; /* Espaciado entre el título y descripción */
    line-height: 1.5; /* Interlineado */
  }

  .descripcion {
    font-size: 1.5rem; /* Tamaño del texto */
    color: #ffffff; /* Texto blanco */
    margin-top: 15px; /* Espaciado entre el título y descripción */
    line-height: 1.4; /* Interlineado */
    white-space: normal; /* Permite texto en varias líneas */
  }

  /* Ajustes para pantallas medianas */
  @media (max-width: 768px) {
    .contenido {
      top: 40%; /* Baja más el cuadro para evitar superposición */
      left: 3%; /* Ajusta margen izquierdo */
      max-width: 55%; /* Ancho ajustado */
      padding: 8px; /* Reduce el padding interno */
    }

    .titulo {
      font-size: 1.5rem; /* Tamaño del título ajustado */
      margin-bottom: 12px; /* Espaciado ajustado */
      line-height: 1.4; /* Interlineado */
    }

    .descripcion {
      font-size: 1rem; /* Tamaño del texto ajustado */
      margin-top: 8px; /* Espaciado ajustado */
      line-height: 1.3; /* Interlineado ajustado */
    }
  }

  /* Ajustes para pantallas pequeñas */
  @media (max-width: 480px) {
    .contenido {
      top: 50%; /* Baja el cuadro */
      left: 2%; /* Ajusta margen izquierdo */
      max-width: 80%; /* Incrementa el ancho en pequeñas pantallas */
      padding: 6px; /* Reduce el padding interno */
    }

    .titulo {
      font-size: 1rem; /* Ajusta el tamaño del título */
      margin-bottom: 8px; /* Espaciado entre título y descripción */
      line-height: 1.2; /* Interlineado ajustado */
    }

    .descripcion {
      font-size: 0.8rem; /* Tamaño del texto reducido */
      margin-top: 10px; /* Ajusta espaciado */
      line-height: 1.3; /* Ajusta interlineado */
      overflow-wrap: break-word; /* Corta palabras largas para ajustar al ancho */
    }
  }
</style>
  
  
  
  
  
  
  
  
  
  
  
  
  