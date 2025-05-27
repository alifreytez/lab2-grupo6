<!-- 
  Componente: Servicio 4
  Descripción:
  Este componente está diseñado para resaltar el servicio de pago de matrícula estudiantil, mostrando una imagen visualmente atractiva y texto informativo. Destaca la accesibilidad y simplicidad del proceso de pago, disponible en todo momento para estudiantes.

-->

<script>
    export let titulo = "Pago de matrícula universitaria";
    export let descripcion = "El Banco Universitario también ofrece un servicio de pago de matrícula estudiantil, que permite a los estudiantes universitarios pagar sus matrículas de manera rápida y sencilla. Este servicio se realiza en línea y está disponible las 24 horas del día, lo que permite a los estudiantes realizar sus pagos en cualquier momento que lo necesiten.";
    export let imagen = "/images/image-serviciop4.webp"; // Ruta de la imagen
  </script>
  
  <style>
    .servicio {
      background: white;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      margin: 15px;
      padding: 20px;
      text-align: center; /* Centrar contenido */
      width: 90%;
    }
  
    img {
      max-width: 100%; /* La imagen se ajusta al tamaño del contenedor */
      height: auto;
      margin-bottom: 15px;
      margin-left: auto;
      margin-right: auto;
      border-radius: 20px;
    }
  
    h2 {
      margin: 0;
      color: black;
    }
  
    p {
      margin: 10px 0 0 0;
      color: #666;
    }

    /* Media Query para pantallas más pequeñas */
  @media (max-width: 768px) {
    .servicio {
      padding: 15px;
    }

    img {
      max-width: 80%; /* Reduce el tamaño proporcionalmente */
    }

    h2 {
      font-size: 1.5em; /* Ajusta el tamaño del texto */
    }

    p {
      font-size: 1em; /* Ajusta el tamaño de la descripción */
    }
  }

  @media (max-width: 480px) {
    .servicio {
      padding: 10px;
    }

    img {
      max-width: 70%; /* Tamaño aún más pequeño para móviles */
    }

    h2 {
      font-size: 1.2em; /* Ajusta el tamaño del encabezado */
    }

    p {
      font-size: 0.9em; /* Ajusta el tamaño de la descripción */
    }
  }
  </style>
  
  <div class="servicio">
    <img src="{imagen}" alt="{titulo}" />
    <div>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
    </div>
  </div>
  