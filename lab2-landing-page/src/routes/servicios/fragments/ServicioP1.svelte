<script>
  export let titulo = "Transferencias entre estudiantes sin comisión";
  export let descripcion = "El Banco Universitario ofrece un servicio de transferencias entre estudiantes sin costo alguno, con el objetivo de facilitar el intercambio de dinero entre los estudiantes universitarios. Este servicio permite transferir dinero de manera rápida, segura y eficiente, lo que permite a los estudiantes contar con una alternativa más para realizar sus pagos y transacciones.";
  export let imagen = "/images/image-serviciop1.webp"; // Ruta de la imagen
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
    height: auto; /* Mantiene proporciones */
    margin-bottom: 15px; /* Espacio entre imagen y texto */
    margin-left: auto; /* Centra horizontalmente */
    margin-right: auto; /* Centra horizontalmente */
    border-radius: 20px; /* Estiliza los bordes */
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
