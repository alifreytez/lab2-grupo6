<!-- 
  Componente: Barra de Contactos
  Descripción: Este componente muestra una barra con el título "Contactos BU" y un ícono que permite al usuario cerrar que redirige al inicio o Home.  
-->

<div class="rectangulo">
  <!-- Título de la barra -->
  <span class="texto">Contactos BU</span>
  
  <!-- Ícono de cerrar que redirige a la página principal -->
  <a href="/" class="icono-cerrar">
    <img 
      src="/images/iconos/icono-cerrar.webp"  
      alt="icono-cerrar" 
    />
  </a>
</div>

<style>
/* 
  Contenedor principal: Rectángulo de fondo que contiene el título y el ícono 
*/
.rectangulo {
    display: flex; /* Usa flexbox para alinear elementos */
    align-items: center; /* Alinea los elementos verticalmente */
    position: relative; /* Establece un contexto de posición */
    justify-content: space-between; /* Coloca el texto a la izquierda y el ícono a la derecha */
    background-color: var(--primary-color); /* Usa el color primario definido globalmente */
    border-radius: 8px; /* Bordes redondeados para un diseño moderno */
    padding: 10px; /* Espaciado interno */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Añade una sombra suave */
    font-family: var(--font-primary); /* Fuente principal global */
    margin-bottom: 0; /* Elimina márgenes inferiores */
}

/* Estilo del texto del título */
.texto {
    font-size: 2vw; /* Tamaño responsive basado en el ancho de la pantalla */
    font-weight: 700; /* Texto en negrita */
    color: var(--background-color); /* Usa el color de fondo global (generalmente blanco) */
    text-align: center; /* Centra el texto horizontalmente */
    width: 100%; /* Asegura que ocupe el ancho completo */
}

/* Contenedor del ícono de cerrar */
.icono-cerrar {
    margin-left: auto; /* Empuja el ícono completamente hacia la derecha */
}

/* Estilo del ícono de cerrar */
.icono-cerrar img {
    width: 32px; /* Ancho del ícono */
    height: 32px; /* Alto del ícono */
    cursor: pointer; /* Cambia el cursor al pasar por encima */
}

/* Efecto hover para el ícono */
.icono-cerrar img:hover {
    filter: brightness(0.8); /* Oscurece el ícono al pasar el mouse */
    transform: scale(1.1); /* Aumenta el tamaño del ícono al pasar el mouse */
}

/* Responsividad para pantallas pequeñas */
@media (max-width: 768px) {
    .texto {
        font-size: 4vw; /* Aumenta el tamaño del texto en pantallas más pequeñas */
    }
    .rectangulo {
        padding: 15px; /* Aumenta el espaciado interno en pantallas pequeñas */
    }
}
</style>
