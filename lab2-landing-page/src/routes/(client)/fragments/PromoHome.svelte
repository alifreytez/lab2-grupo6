<div class="promo-home">
    <div class="barra decorativa superior"></div>
    <div class="contenido">
      <h1 class="titulo">
        <span class="linea-larga">¿No tienes cuenta en el Banco Universitario?</span>
        <br />
        <span class="linea-corta">¡Tranquilo!</span>
      </h1>
      <p class="descripcion">
        Abre tu Cuenta y conoce los beneficios que tiene el primer Banco Universitario del país para ti.
      </p>
      <p class="requisitos">
        Solo debes tener a la mano tu RIF y cédula de identidad vigente.
      </p>
      <button class="boton">
        <span class="boton-texto">Regístrate aquí</span> <span class="boton-icono">📝</span>
      </button>
    </div>
    <div class="barra decorativa inferior"></div>
  </div>
  
  <style>
    /* Contenedor principal */
    .promo-home {
      width: 100%;
      height: 100vh; /* Ocupa toda la pantalla */
      background-color: #D9D9D9; /* Fondo gris claro */
      display: flex;
      flex-direction: column; /* Ordena verticalmente las barras y contenido */
      justify-content: space-between; /* Espacia las barras y contenido */
      align-items: center; /* Centra horizontalmente todo el contenido */
      box-sizing: border-box;
      position: relative; /* Posicionamiento relativo para incluir las barras */
    }
  
    /* Barras decorativas */
    .barra.decorativa {
      width: 100%; /* Abarca todo el ancho del componente */
      height: 30px; /* Triple del tamaño original */
      background-color: #FFFFFF; /* Color blanco */
    }
  
    /* Contenido interno */
    .contenido {
      text-align: center; /* Centra horizontalmente el texto */
      max-width: 900px; /* Ancho máximo para el texto */
      padding: 40px; /* Espaciado interno */
      background-color: #D9D9D9; /* Fondo gris claro */
      box-sizing: border-box; /* Asegura que el padding no desborde */
      display: flex; /* Usamos flex para controlar contenido */
      flex-direction: column; /* Alineación vertical del contenido */
      align-items: center; /* Centra horizontalmente el contenido */
    }
  
    .titulo {
      font-size: clamp(2rem, 3.5vw, 2.8rem); /* Ajuste dinámico del tamaño del texto */
      color: #085f63; /* Azul para el título */
      margin-bottom: 20px;
      line-height: 1.2; /* Espaciado entre líneas */
      text-align: center; /* Asegura que el texto esté centrado */
    }
  
    .linea-larga {
      white-space: nowrap; /* Evita que el texto se divida en varias líneas */
      text-align: center; /* Centra el texto si hay espacio */
    }
  
    .linea-corta {
      display: block; /* Garantiza que ¡Tranquilo! aparezca en una nueva línea */
      margin-top: 10px; /* Espaciado entre las líneas */
      text-align: center; /* Centra esta línea */
    }
  
    .descripcion {
      font-size: clamp(1.2rem, 3vw, 1.6rem); /* Tamaño dinámico para descripción */
      color: #333333; /* Gris oscuro */
      margin-bottom: 15px;
      text-align: center; /* Centra el texto */
    }
  
    .requisitos {
      font-size: clamp(1rem, 2.5vw, 1.4rem); /* Tamaño dinámico para requisitos */
      color: #555555; /* Gris medio */
      margin-bottom: 30px;
      text-align: center; /* Centra el texto */
    }
  
    /* Botón centrado con ícono */
    .boton {
      display: inline-flex; /* Coloca texto e ícono en línea */
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      font-weight: bold; /* Texto en negritas */
      text-decoration: underline; /* Subraya el texto */
      color: #000000; /* Texto negro */
      background-color: #49beb7; /* Fondo del botón */
      border: none;
      padding: 12px 24px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    .boton:hover {
      background-color: #37a3a1; /* Efecto hover */
    }
  
    .boton-texto {
      text-decoration: underline; /* Asegura que el texto del botón esté subrayado */
    }
  
    .boton-icono {
      margin-left: 8px; /* Espacio entre el texto y el ícono */
      font-size: 1.2rem; /* Tamaño del ícono */
    }
  
    /* Ajuste dinámico para pantallas pequeñas */
    @media (max-width: 768px) {
      .linea-larga {
        white-space: normal; /* Permite dividir el texto en varias líneas en pantallas más pequeñas */
      }
  
      .contenido {
        padding: 30px; /* Ajusta el espacio interno */
      }
  
      .barra.decorativa {
        height: 25px; /* Tamaño ajustado para pantallas medianas */
      }
  
      .boton {
        font-size: 0.9rem;
        padding: 10px 20px;
      }
    }
  
    /* Responsividad para pantallas pequeñas */
    @media (max-width: 480px) {
      .contenido {
        padding: 20px; /* Ajusta el espacio interno */
      }
  
      .titulo {
        font-size: 1.8rem; /* Reduce el tamaño del texto */
      }
  
      .descripcion {
        font-size: 1.2rem;
      }
  
      .requisitos {
        font-size: 1rem;
      }
  
      .boton {
        font-size: 0.8rem;
        padding: 8px 16px;
      }
  
      .boton-icono {
        font-size: 1rem;
      }
  
      .barra.decorativa {
        height: 20px; /* Tamaño reducido para pantallas pequeñas */
      }
    }
  </style>
  
  
  
  
  
  
  
  
  
  