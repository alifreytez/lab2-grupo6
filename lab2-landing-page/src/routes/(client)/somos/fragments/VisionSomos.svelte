<!-- 
  Componente: Visión
  Descripción:
  Este componente está diseñado para presentar la visión del Banco Universitario de manera clara y profesional. Resalta los objetivos aspiracionales de la institución, destacando su compromiso con los estudiantes universitarios y la excelencia en sus servicios.
-->

<div class="contenedor-vision">
  <!-- Título principal de la visión -->
  <h1 class="titulo-vision">Visión:</h1>
  
  <!-- Descripción de la visión -->
  <p class="descripcion-vision">
    Queremos ser la principal opción financiera para estudiantes universitarios en el país. Deseamos ser reconocidos por nuestros servicios innovadores, la calidad de atención al cliente y nuestro compromiso con la educación y el desarrollo social.
  </p>
</div>

<style>
/* Contenedor principal */
.contenedor-vision {
  width: 100%; /* Ancho consistente con el resto de la página */
  min-height: 40vh; /* Altura mínima */
  margin: 0 auto; /* Centra el contenedor horizontalmente */
  padding: 0 5%; /* Espaciado interno a la izquierda y derecha para alineación */
  background-color: var(--background-color); /* Fondo global */
  font-family: var(--font-primary); /* Fuente global */
  display: flex; /* Utiliza flexbox para centrar el contenido */
  flex-direction: column; /* Distribución vertical */
  box-sizing: border-box; /* Evita desbordamientos */
  font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

/* Título */
.titulo-vision {
  color: var(--primary-color);
  font-size: 2.5rem; /* Tamaño consistente */
  font-weight: 700; /* Bold */
  margin: 10px 0; /* Espaciado superior e inferior */
  text-align: left; /* Alinea el texto a la izquierda */
  padding: 0; /* Elimina espaciado adicional */
  font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

/* Descripción */
.descripcion-vision {
  color: #333; /* Color del texto */
  font-size: 1rem; /* Tamaño estándar */
  line-height: 1.8; /* Mejora la legibilidad */
  text-align: justify; /* Alineación justificada */
  max-width: 100%; /* Ancho completo dentro del contenedor */
  margin: 10px 0; /* Espaciado superior e inferior */
  padding: 0; /* Elimina espaciado adicional */
  font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

/* Responsividad */
@media (max-width: 768px) {
.contenedor-vision {
    padding: 15px; /* Reduce el espaciado interno en móviles */
}
.titulo-vision {
    font-size: 2rem; /* Reduce el tamaño del título */
    margin-left: 5%; /* Mantén alineación en móviles */
}
.descripcion-vision {
    font-size: 0.9rem; /* Reduce el tamaño del texto */
    max-width: 95%; /* Ajusta el ancho en móviles */
    padding: 0 5%; /* Ajusta el espaciado */
}
}

</style>
