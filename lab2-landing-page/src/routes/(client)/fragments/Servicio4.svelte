<!-- 
  Componente: Servicio 4
  Descripción:
  Este componente está diseñado para resaltar el servicio de pago de matrícula estudiantil, mostrando una imagen visualmente atractiva y texto informativo. Destaca la accesibilidad y simplicidad del proceso de pago, disponible en todo momento para estudiantes.

-->

<div class="servicio4">
  <img src="/images/image-servicio4.webp" alt="Pago on line de matrícula estudiantil" class="imagen-fondo-servicio4" />
  <div class="contenido-servicio4">
    <h3 class="titulo-servicio4">Pago de matrícula estudiantil</h3>
    <p class="descripcion-servicio4">
      Paga la matrícula de manera rápida y sencilla, acceso disponible las 24 horas.
    </p>
  </div>
</div>

<style>
.servicio4 {
  width: 100%; /* Abarca todo el ancho de la pantalla */
  text-align: center; /* Centrado de texto */
  position: relative; /* Permite posicionar elementos */
  margin: 30px 0; /* Espaciado entre servicios */
  font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

.imagen-fondo-servicio4 {
  width: 100%; /* Imagen ocupa todo el ancho */
  height: auto; /* Mantiene la proporción de la imagen */
  border-radius: 8px; /* Bordes suaves */
}

.contenido-servicio4 {
  position: absolute; /* Posiciona el contenido sobre la imagen */
  top: 48%; /* Posición inicial estándar */
  left: 15%; /* Margen izquierdo estándar */
  transform: translateY(-50%); /* Centrado verticalmente */
  background-color: transparent; /* Fondo transparente */
  text-align: left; /* Texto alineado a la izquierda */
  padding: 5px; /* Espaciado interno */
  max-width: 40%; /* Limita el ancho */
  overflow: hidden; /* Evita desbordamiento del contenido */
  word-wrap: break-word; /* Ajusta palabras largas */
  z-index: 1; /* Prioridad sobre la imagen */
  margin: 0; /* Espaciado entre servicios */
  font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

.titulo-servicio4 {
  font-size: 1.5rem; /* Tamaño del título */
  color: #ffffff; /* Texto blanco */
  font-weight: bold; /* Texto en negritas */
  margin-bottom: 15px; /* Espaciado entre el título y descripción */
  line-height: 1.5; /* Interlineado */
  font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

.descripcion-servicio4 {
  font-size: 1.2rem; /* Tamaño del texto */
  color: #ffffff; /* Texto blanco */
  margin-top: 15px; /* Espaciado entre el título y descripción */
  line-height: 1.4; /* Interlineado */
  white-space: normal; /* Permite texto en varias líneas */
  font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

/* Ajustes para pantallas medianas */
@media (max-width: 1024px) {
  .contenido-servicio4 {
    top: 40%; /* Baja más el cuadro para evitar superposición */
    left: 15%; /* Ajusta margen izquierdo */
    max-width: 50%; /* Ancho ajustado */
    padding: 8px; /* Reduce el padding interno */
  }

  .titulo-servicio4 {
    font-size: 1.1rem; /* Tamaño del título ajustado */
    margin-bottom: 12px; /* Espaciado ajustado */
    line-height: 1.4; /* Interlineado */
  }

  .descripcion-servicio4 {
    font-size: 0.9rem; /* Tamaño del texto ajustado */
    margin-top: 8px; /* Espaciado ajustado */
    line-height: 1.3; /* Interlineado ajustado */
  }
}

/* Ajustes para pantallas pequeñas */
@media (max-width: 480px) {
  .contenido-servicio4 {
    top: 40%; /* Baja el cuadro */
    left: 15%; /* Ajusta margen izquierdo */
    max-width: 50%; /* Incrementa el ancho en pequeñas pantallas */
    padding: 6px; /* Reduce el padding interno */
  }

  .titulo-servicio4 {
    font-size: 1rem; /* Ajusta el tamaño del título */
    margin-bottom: 8px; /* Espaciado entre título y descripción */
    line-height: 1.2; /* Interlineado ajustado */
  }

  .descripcion-servicio4 {
    font-size: 0.8rem; /* Tamaño del texto reducido */
    margin-top: 10px; /* Ajusta espaciado */
    line-height: 1.3; /* Ajusta interlineado */
    overflow-wrap: break-word; /* Corta palabras largas para ajustar al ancho */
  }
}
</style>
