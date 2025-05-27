<!-- 
  Componente: Contactos 
  Descripción: Este componente muestra la información de contacto y las redes sociales del Banco Universitario.Presenta enlaces interactivos a redes sociales.
  Redes soportadas:
  - Facebook
  - Instagram
  - X (Twitter)

  También incluye información como teléfono, fax, correo electrónico y dirección.
--> 
<script>
    // Lista de redes sociales
    const redesSociales = [
      { nombre: 'Facebook', enlace: 'https://www.facebook.com', icono: "/images/iconos/icono-facebook.webp" },
      { nombre: 'Instagram', enlace: 'https://www.instagram.com', icono: "/images/iconos/icono_instagram.webp" },
      { nombre: 'X', enlace: 'https://www.twitter.com', icono: "/images/iconos/icono-x.webp" }
    ];
  </script>
  
  <div class="contenedor-contactos">
    <h1 class="titulo">Información de contacto</h1>

    <!-- Sección de redes sociales -->
    <div class="redes-sociales">
      <strong>Redes Sociales:</strong>
      <ul>
        {#each redesSociales as red}
          <li>
            <a href={red.enlace} target="_blank">
              <img src={red.icono} alt={`Icono de ${red.nombre}`} class="icono-red" />
            </a>
          </li>
        {/each}
      </ul>
    </div>
  <!-- Detalles de contacto -->
    <div class="info-contacto">
      <p><strong>Teléfono:</strong> +58 212-555-5555</p>
      <p><strong>Fax:</strong> +58 212-555-5556</p>
      <p><strong>Correo electrónico:</strong> info@bancouniversitario.com.ve</p>
      <p><strong>Dirección:</strong> Av. Universidad, Edificio Banco Universitario, piso 12, Caracas, Venezuela</p>
    </div>
  </div>
  
  <style>
    /* Contenedor principal */
    .contenedor-contactos {
      width: 100%; /* Ancho completo */
      margin: 0 auto; /* Centrado automático */
      padding: 20px; /* Espacio interno */
      font-family: var(--font-primary); /* Fuente principal */
      background-color: #D9D9D9; /* Fondo gris claro */
      border-radius: 8px; /* Bordes redondeados */
      box-sizing: border-box; /* Incluye padding y border en el ancho total */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra suave */
      font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
    }
  
    .titulo {
      font-size: 1.8rem; /* Tamaño de fuente grande */
      color: black; /* Color del texto */
      text-align: center; /* Centra el texto */
      margin-bottom: 20px; /* Espacio inferior */
      font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
    }
  
    /* Redes sociales */
    .redes-sociales {
      text-align: center; /* Centra la palabra "Redes Sociales" */
      margin-bottom: 20px; /* Añade un margen para separar del resto del contenido */
    }
  
    .redes-sociales strong {
      font-size: 1.1rem; /* Tamaño más grande para destacar el texto */
      display: block; /* Asegura que el texto ocupe toda la línea */
      margin-bottom: 10px; /* Separación adicional entre el texto y los íconos */
    }
  
    .redes-sociales ul {
      display: flex; /* Flexbox para alinear los íconos */
      justify-content: center; /* Centra los íconos horizontalmente */
      list-style-type: none; /* Elimina los puntos de la lista */
      padding: 0; /* Elimina el padding por defecto */
      margin: 0; /* Elimina el margen por defecto */
      gap: 25px; /* Incrementa el espacio entre los íconos */
    }
  
    .redes-sociales li {
      display: flex; /* Flexbox para centrar los íconos */
      align-items: center; /* Centra verticalmente los íconos */
      font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
    }
  
    .icono-red {
      width: 32px; /* Ancho del ícono */
      height: 32px; /* Alto del ícono */
      transition: transform 0.3s ease; /* Transición suave al escalar */
    }
  
    .icono-red:hover {
      transform: scale(1.2); /* Escala el ícono al pasar el mouse */
    }
  
    /* Información de contacto */
    .info-contacto p {
      font-size: 1rem; /* Tamaño de fuente normal */
      margin: 10px 0; /* Espacio entre párrafos */
      text-align: center; /* Centra el texto */
    }
  
    .info-contacto strong {
      color: black; /* Color del texto a destacar */
    }
  
    /* Responsividad */
    @media (max-width: 768px) {
      .contenedor-contactos {
        padding: 15px; /* Reduce el padding en pantallas pequeñas */
      }
  
      .titulo {
        font-size: 1.5rem; /* Tamaño de fuente más pequeño */
      }
  
      .icono-red {
        width: 28px; /* Ancho del ícono más pequeño */
        height: 28px; /* Alto del ícono más pequeño */
      }
  
      .info-contacto p {
        font-size: 0.9rem; /* Tamaño de fuente más pequeño */
      }
    }
  </style>
  