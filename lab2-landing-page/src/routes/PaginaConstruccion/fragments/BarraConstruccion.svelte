<!-- 
  Componente: Barra En Construcción
  Descripción:
  Este componente muestra un mensaje "En construcción BU" para indicar que temporalmente una página o funcionalidad está en desarrollo., acompañado de un ícono de cerrar que redirige al inicio o Home ("/").
-->

<div class="rectangulo">
  <!-- Título principal -->
  <span class="texto">En construcción BU</span>
  
  <!-- Ícono de cerrar que redirige al inicio -->
  <a href="/" class="icono-cerrar">
    <img 
      src="/images/iconos/icono-cerrar.webp"  
      alt="icono-cerrar" 
    />
  </a>
</div>

<style>
/* Contenedor principal */
.rectangulo {
    display: flex; /* Alinea los elementos horizontalmente con flexbox */
    align-items: center; /* Alineación vertical centrada */
    position: relative; /* Posiciona los elementos con relación a este contenedor */
    justify-content: space-between; /* Separa el texto y el ícono */
    background-color: var(--primary-color); /* Usa el color principal global */
    border-radius: 8px; /* Bordes redondeados para suavizar el diseño */
    padding: 10px; /* Espaciado interno */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Añade una sombra suave */
    font-family: var(--font-primary); /* Usa la fuente global */
    margin-bottom: 0; /* Elimina cualquier margen inferior */
}

/* Estilo del texto: El título "En construcción BU".*/
.texto {
    font-size: 2vw; /* Tamaño proporcional al ancho de la pantalla */
    font-weight: 700; /* Texto en negrita */
    color: var(--background-color); /* Color definido globalmente (normalmente blanco) */
    text-align: center; /* Centra el texto horizontalmente */
    width: 100%; /* Asegura que el texto ocupe el ancho completo */
}

/* Contenedor del ícono de cerrar */
.icono-cerrar {
    margin-left: auto; /* Empuja el ícono hacia la derecha */
}

/* Estilo del ícono */
.icono-cerrar img {
    width: 32px; /* Ancho del ícono */
    height: 32px; /* Alto del ícono */
    cursor: pointer; /* Cambia el cursor a modo interactivo */
}

/* 
  Efecto hover para el ícono: 
  Cambia el brillo y escala ligeramente el ícono al pasar el mouse.
*/
.icono-cerrar img:hover {
    filter: brightness(0.8); /* Oscurece ligeramente la imagen */
    transform: scale(1.1); /* Escala el ícono al 110% */
}

/* 
  Responsividad adicional:
  Ajusta el tamaño del texto y el espaciado para pantallas pequeñas.
*/
@media (max-width: 768px) {
    .texto {
        font-size: 4vw; /* Tamaño más grande en pantallas pequeñas */
    }
    .rectangulo {
        padding: 15px; /* Incrementa el espaciado interno */
    }
}
</style>
