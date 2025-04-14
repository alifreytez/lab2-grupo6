<!-- 
  Componente: Servicio 2
  Descripción:
  Este componente destaca el servicio de depósitos en efectivo disponibles las 24 horas del día, mostrando una imagen de fondo y un texto informativo. Está diseñado para enfatizar la conveniencia y accesibilidad de este servicio, dirigido a estudiantes y clientes del Banco Universitario.

-->

<div class="servicio2">
  <img src="/images/image-servicio2-2.webp" alt="Depósitos en efectivo las 24 horas del día" class="imagen-fondo-servicio2" />
  <div class="contenido-servicio2">
    <h3 class="titulo-servicio2">Depósitos en efectivo disponible las 24 horas del día</h3>
    <p class="descripcion-servicio2">
      Realiza depósitos en efectivo de manera sencilla y cómoda en cualquiera de nuestras sucursales.
    </p>
  </div>
</div>

<style>
.servicio2 {
  width: 100%; /* Ancho completo */
  text-align: center; /* Centrado de texto */
  position: relative; /* Posicionamiento relativo */
  margin: 30px 0; /* Espaciado entre componentes */
  font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

.imagen-fondo-servicio2 {
  width: 100%; /* Imagen ocupa todo el ancho */
  height: auto; /* Mantiene la proporción de la imagen */
  border-radius: 8px; /* Bordes suaves */
}

.contenido-servicio2 {
  position: absolute; /* Posiciona el contenido sobre la imagen */
  top: 5%; /* Sube el cuadro más hacia arriba */
  left: 70%; /* Mueve el cuadro más hacia la derecha */
  transform: translate(-50%, 0); /* Ajusta centrado horizontal */
  background-color: transparent; /* Fondo transparente */
  text-align: left; /* Texto alineado a la izquierda */
  padding: 5px; /* Espaciado interno */
  max-width: 90%; /* Amplía al máximo el cuadro hacia la derecha */
  word-wrap: break-word; /* Ajusta palabras largas */
  overflow-wrap: break-word; /* Evita desbordamientos */
  overflow: hidden; /* Oculta cualquier exceso de texto */
  margin: 0; /* Espaciado entre servicios */
  font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

.titulo-servicio2 {
  font-size: 1.2rem; /* Tamaño ajustado para pantallas grandes */
  color: #ffffff; /* Texto blanco */
  font-weight: bold; /* Negrita */
  margin-bottom: 10px; /* Espaciado entre título y descripción */
  line-height: 1.5; /* Mejora interlineado */
  font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

.descripcion-servicio2 {
  font-size: 1.1rem; /* Tamaño ajustado */
  color: #ffffff; /* Texto blanco */
  margin-top: 8px; /* Espaciado entre líneas */
  line-height: 1.3; /* Mejora interlineado */
  font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

/* Ajustes para pantallas medianas */
@media (max-width: 768px) {
  .contenido-servicio2 {
    top: 1%; /* Sube el cuadro más hacia arriba */
    left: 69%; /* Ajusta posición hacia la derecha */
    max-width: 100%; /* Amplía el cuadro al máximo para medianas */
    padding: 10px; /* Espaciado interno ajustado */
    margin: 0; /* Espaciado entre servicios */
  }

  .titulo-servicio2 {
    font-size: 0.9rem; /* Tamaño reducido para títulos */
  }

  .descripcion-servicio2 {
    font-size: 0.8rem; /* Tamaño ajustado para la descripción */
    line-height: 1.2; /* Mejora interlineado */
  }
}

/* Ajustes para pantallas pequeñas */
@media (max-width: 480px) {
  .contenido-servicio2 {
    top: 1%; /* Sube el cuadro más hacia arriba */
    left: 70%; /* Maximiza el desplazamiento hacia la derecha */
    max-width: 100%; /* Aprovecha todo el espacio hacia la derecha */
    padding: 8px; /* Espaciado interno ajustado */
    margin: 0; /* Espaciado entre servicios */
  }

  .titulo-servicio2 {
    font-size: 0.8rem; /* Tamaño reducido para pantallas pequeñas */
  }

  .descripcion-servicio2 {
    font-size: 0.5rem; /* Reduce el tamaño de la descripción */
    line-height: 1.2; /* Mejora interlineado */
  }
}
</style>
