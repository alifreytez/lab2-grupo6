<!-- 
  Componente: Servicio 3
  Descripción:
  Este componente destaca el servicio de retiros en efectivo, mostrando una imagen de fondo y texto informativo. Está diseñado para enfatizar la rapidez y seguridad de este servicio, dirigido a estudiantes y clientes del Banco Universitario.

-->

<div class="servicio3">
  <img src="/images/image-servicio3.webp" alt="Recibiendo dinero en efectivo" class="imagen-fondo-servicio3" />
  <div class="contenido-servicio3">
    <h3 class="titulo-servicio3">Retiros en efectivo</h3>
    <p class="descripcion-servicio3">
      Realiza retiros de efectivo de manera rápida y segura.
    </p>
  </div>
</div>

<style>
.servicio3 {
  width: 100%; /* Ancho completo */
  text-align: center; /* Centrado de texto */
  position: relative; /* Posicionamiento relativo */
  margin: 30px 0; /* Espaciado entre servicios */
  font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

.imagen-fondo-servicio3 {
  width: 100%; /* Imagen ocupa todo el ancho */
  height: auto; /* Mantiene la proporción de la imagen */
  border-radius: 8px; /* Bordes suaves */
}

.contenido-servicio3 {
  position: absolute; /* Posiciona el contenido sobre la imagen */
  top: 30%; /* Posición inicial estándar */
  left: 5%; /* Margen izquierdo estándar */
  transform: translateY(-50%); /* Centrado verticalmente */
  background-color: transparent; /* Fondo transparente */
  text-align: left; /* Texto alineado a la izquierda */
  padding: 10px; /* Espaciado interno */
  max-width: 40%; /* Limita el ancho */
  overflow: hidden; /* Evita desbordamiento del contenido */
  word-wrap: break-word; /* Ajusta palabras largas */
  z-index: 1; /* Prioridad sobre la imagen */
  margin: 0; /* Espaciado entre servicios */
  font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

.titulo-servicio3 {
  font-size: 1.5rem; /* Tamaño del título */
  color: #ffffff; /* Texto blanco */
  font-weight: bold; /* Texto en negritas */
  margin-bottom: 15px; /* Espaciado entre el título y descripción */
  line-height: 1.5; /* Interlineado */
  font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

.descripcion-servicio3 {
  font-size: 1.2rem; /* Tamaño del texto */
  color: #ffffff; /* Texto blanco */
  margin-top: 15px; /* Espaciado entre el título y descripción */
  line-height: 1.4; /* Interlineado */
  white-space: normal; /* Permite texto en varias líneas */
  font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

/* Ajustes para pantallas medianas */
@media (max-width: 768px) {
  .contenido-servicio3 {
    top: 30%; /* Baja más el cuadro para evitar superposición */
    left: 3%; /* Ajusta margen izquierdo */
    max-width: 55%; /* Ancho ajustado */
    padding: 8px; /* Reduce el padding interno */
  }

  .titulo-servicio3 {
    font-size: 1.5rem; /* Tamaño del título ajustado */
    margin-bottom: 12px; /* Espaciado ajustado */
    line-height: 1.4; /* Interlineado */
  }

  .descripcion-servicio3 {
    font-size: 1rem; /* Tamaño del texto ajustado */
    margin-top: 8px; /* Espaciado ajustado */
    line-height: 1.3; /* Interlineado ajustado */
  }
}

/* Ajustes para pantallas pequeñas */
@media (max-width: 480px) {
  .contenido-servicio3 {
    top: 30%; /* Baja el cuadro */
    left: 2%; /* Ajusta margen izquierdo */
    max-width: 80%; /* Incrementa el ancho en pequeñas pantallas */
    padding: 6px; /* Reduce el padding interno */
  }

  .titulo-servicio3 {
    font-size: 1rem; /* Ajusta el tamaño del título */
    margin-bottom: 8px; /* Espaciado entre título y descripción */
    line-height: 1.2; /* Interlineado ajustado */
  }

  .descripcion-servicio3 {
    font-size: 0.8rem; /* Tamaño del texto reducido */
    margin-top: 10px; /* Ajusta espaciado */
    line-height: 1.3; /* Ajusta interlineado */
    overflow-wrap: break-word; /* Corta palabras largas para ajustar al ancho */
  }
}
</style>
