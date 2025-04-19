<!-- 
  Componente: ServicioP3
  Descripción:
  Este componente destaca el servicio de retiros en efectivo, mostrando una imagen de fondo y texto informativo. Está diseñado para enfatizar la rapidez y seguridad de este servicio, dirigido a estudiantes y clientes del Banco Universitario.

-->

<script>
    export let titulo = "Retiros en efectivo";
    export let descripcion = "El Banco Universitario también permite a los estudiantes realizar retiros en efectivo de manera rápida y segura. Los estudiantes pueden realizar retiros en cualquiera de las sucursales del banco, con la tranquilidad de que sus fondos están seguros y protegidos.";
    export let imagen = "/images/image-serviciop3.webp"; // Ruta de la imagen
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
  
  