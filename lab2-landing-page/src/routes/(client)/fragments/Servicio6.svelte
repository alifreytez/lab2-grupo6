<!-- 
  Componente: Servicio 6
  Descripción:
  Este componente está diseñado para destacar el mensaje de apoyo del Banco Universitario en la construcción de un futuro sólido para los estudiantes. Combina una imagen significativa con texto motivador para transmitir confianza y compromiso.


-->

<div class="servicio6">
  <img src="/images/image-servicio6-1.webp" alt="Billetes y Gesto de OK: mano con pulgar hacia arriba" class="imagen-fondo-servicio6" />
  <div class="contenido-servicio6">
    <h3 class="titulo-servicio6">Somos tus aliados en la construcción de tu Futuro</h3>
  </div>
</div>

<style>
.servicio6 {
  width: 100%; /* Abarca todo el ancho de la pantalla */
  text-align: center; /* Centrado de texto */
  position: relative; /* Permite posicionar elementos */
  margin: 30px 0; /* Espaciado entre servicios */
  font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

.imagen-fondo-servicio6 {
  width: 100%; /* Imagen ocupa todo el ancho */
  height: auto; /* Mantiene la proporción de la imagen */
  border-radius: 8px; /* Bordes suaves */
}

.contenido-servicio6 {
  position: absolute; /* Posiciona el contenido sobre la imagen */
  top: 40%; /* Posición inicial estándar */
  left: 10%; /* Margen izquierdo estándar */
  transform: translateY(-50%); /* Centrado verticalmente */
  background-color: transparent; /* Fondo transparente */
  text-align: center; /* Texto alineado al centro */
  padding: 5px; /* Espaciado interno */
  max-width: 40%; /* Limita el ancho */
  overflow: hidden; /* Evita desbordamiento del contenido */
  word-wrap: break-word; /* Ajusta palabras largas */
  z-index: 1; /* Prioridad sobre la imagen */
  margin: 0; /* Espaciado entre servicios */
  font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

.titulo-servicio6 {
  font-size: 1.5rem; /* Tamaño del título */
  color: #ffffff; /* Texto blanco */
  font-weight: bold; /* Texto en negritas */
  margin-bottom: 15px; /* Espaciado entre el título y descripción */
  line-height: 1.5; /* Interlineado */
  font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

/* Ajustes para pantallas medianas */
@media (max-width: 768px) {
  .contenido-servicio6 {
    top: 30%; /* Baja más el cuadro para evitar superposición */
    left: 5%; /* Ajusta margen izquierdo */
    max-width: 50%; /* Ancho ajustado */
    padding: 8px; /* Reduce el padding interno */
  }

  .titulo-servicio6 {
    font-size: 1rem; /* Tamaño del título ajustado */
    margin-bottom: 12px; /* Espaciado ajustado */
    line-height: 1.4; /* Interlineado */
  }
}

/* Ajustes para pantallas pequeñas */
@media (max-width: 480px) {
  .contenido-servicio6 {
    top: 30%; /* Baja el cuadro */
    left: 5%; /* Ajusta margen izquierdo */
    max-width: 50%; /* Incrementa el ancho en pequeñas pantallas */
    padding: 6px; /* Reduce el padding interno */
  }

  .titulo-servicio6 {
    font-size: 1rem; /* Ajusta el tamaño del título */
    margin-bottom: 8px; /* Espaciado entre título y descripción */
    line-height: 1.2; /* Interlineado ajustado */
  }
}
</style>
