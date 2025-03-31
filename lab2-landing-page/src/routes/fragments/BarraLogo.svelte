<div class="barra-logo">
    <div class="logo-wrapper">
      <img src="/images/logo/logo.webp" alt="Logo de Banco Universitario" class="logo" />
    </div>
    <h1 class="titulo-barra">NUESTROS SERVICIOS</h1>
    <div class="spacer"></div>
  </div>
  
  <style>
    /* Contenedor principal de la barra */
    .barra-logo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      background-color: #0E5F76;
      padding: 10px 0;
      position: relative;
    }
  
    /* Contenedor del logo con recuadro blanco */
    .logo-wrapper {
      background-color: #ffffff;
      padding: 8px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      /* Para pantallas grandes aumentamos el tamaño */
      width: 150px;
      flex-shrink: 0;
    }
  
    /* El logo en sí */
    .logo {
      max-height: 150px;
      width: auto;
      background-color: transparent;
    }
  
    /* Título centrado */
    .titulo-barra {
      flex-grow: 1;
      text-align: center;
      margin: 0;
      padding: 0 10px;
      /* Disminuimos ligeramente el tamaño para destacar el logo */
      font-size: 1.8rem;
      color: #ffffff;
    }
  
    /* Spacer para equilibrar la distribución */
    .spacer {
      width: 150px;
      flex-shrink: 0;
    }
  
    /* Ajustes para pantallas medianas */
    @media (max-width: 768px) {
      .logo-wrapper,
      .spacer {
        width: 120px;
        padding: 6px;
      }
      .logo {
        max-height: 150px;
      }
      .titulo-barra {
        font-size: 1rem;
      }
    }
    
    /* Ajustes para pantallas pequeñas */
    @media (max-width: 480px) {
      .logo-wrapper,
      .spacer {
        width: 100px;
        padding: 4px;
      }
      .logo {
        max-height: 150px;
      }
      .titulo-barra {
        font-size: 0.8 rem;
      }
    }
  </style>
  
  
  
  