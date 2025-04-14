<!-- 
  Componente: Barra Logo
  Descripción:
  Este componente muestra una barra en la parte superior de la página con el logotipo del Banco Universitario, un título destacado, y un espacio adicional para equilibrar la distribución visual. Está diseñado para proporcionar una identidad clara y profesional al sitio web.

-->

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
  display: flex; /* Usamos flexbox para alinear los elementos */
  align-items: center; /* Centramos verticalmente los elementos */
  justify-content: space-between; /* Espaciamos los elementos de manera uniforme */
  width: 100%; /* Ancho completo de la barra */
  background-color: #0E5F76; /* Color de fondo de la barra */
  padding: 10px 0; /* Espaciado superior e inferior */
  position: relative; /* Posición relativa para el logo */
  font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

/* Contenedor del logo con recuadro blanco */
.logo-wrapper {
  background-color: #ffffff; /* Color de fondo blanco */
  padding: 8px; /* Espaciado interno */
  border-radius: 4px; /* Bordes redondeados */
  display: flex; /* Usamos flexbox para centrar el logo */
  align-items: center; /* Centramos verticalmente el logo */
  justify-content: center; /* Centramos horizontalmente el logo */
  width: 150px; /* Ancho fijo para el logo */
  flex-shrink: 0; /* Evitamos que el logo se reduzca en pantallas pequeñas */
}

/* El logo en sí */
.logo {
  max-height: 150px; /* Altura máxima del logo */
  width: auto; /* Ancho automático para mantener la proporción */
  background-color: transparent; /* Fondo transparente para el logo */
}

/* Título centrado */
.titulo-barra {
  flex-grow: 1; /* Permite que el título ocupe el espacio restante */
  text-align: center; /* Centramos el texto */
  margin: 0; /* Sin margen */
  padding: 0 10px; /* Disminuimos ligeramente el tamaño para destacar el logo */
  font-size: 1.8rem; /* Tamaño de fuente grande */
  color: #ffffff; /* Color del texto blanco */
  font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

/* Spacer para equilibrar la distribución */
.spacer {
  width: 150px; /* Ancho fijo para el espacio adicional */
  flex-shrink: 0; /* Evitamos que el espacio se reduzca en pantallas pequeñas */
}

/* Ajustes para pantallas medianas */
@media (max-width: 768px) {
  .logo-wrapper,
  .spacer {
    width: 120px; /* Ancho reducido para pantallas medianas */
    padding: 6px; /* Espaciado interno reducido */
  }
  .logo {
    max-height: 150px; /* Altura máxima del logo */
  }
  .titulo-barra {
    font-size: 1rem; /* Tamaño de fuente reducido */
  }
}

/* Ajustes para pantallas pequeñas */
@media (max-width: 480px) {
  .logo-wrapper,
  .spacer {
    width: 100px; /* Ancho reducido para pantallas pequeñas */
    padding: 4px; /* Espaciado interno reducido */
  }
  .logo {
    max-height: 150px; /* Altura máxima del logo */
  }
  .titulo-barra {
    font-size: 0.8 rem; /* Tamaño de fuente reducido */
  }
}
</style>
