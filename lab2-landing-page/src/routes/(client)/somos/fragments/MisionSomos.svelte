<!-- 
  Componente: Misión
  Descripción:
  Este componente está diseñado para mostrar la misión del Banco Universitario de manera clara y atractiva. Proporciona un encabezado destacado seguido de una descripción detallada que refleja los valores y el compromiso de la institución.

-->

<div class="contenedor-mision">
  <!-- Encabezado principal -->
  <h1 class="titulo-mision">Misión:</h1>
  
  <!-- Descripción de la misión -->
  <p class="descripcion-mision">
      Somos una confiable institución financiera comprometida con los estudiantes universitarios, brindando soluciones financieras ágiles y eficientes. Nuestra misión es facilitar la gestión de sus recursos y contribuir al crecimiento económico y personal de nuestros clientes.
  </p>
</div>

<style>
/* Contenedor principal */
.contenedor-mision {
  width: 100%; /* Ancho consistente con el resto de la página */
  min-height: 40vh; /* Altura mínima */
  margin: 0 auto; /* Centra el contenedor horizontalmente */
  padding: 0 5%; /* Espaciado interno a la izquierda y derecha para alineación */
  background-color: var(--background-color); /* Fondo global */
  font-family: var(--font-primary); /* Fuente global */
  display: flex; /* Usa flexbox para diseño */
  flex-direction: column; /* Distribución vertical */
  box-sizing: border-box; /* Evita desbordamientos */
  font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

/* Título */
.titulo-mision {
  color: var(--primary-color);
  font-size: 2.5rem; /* Tamaño consistente */
  font-weight: 700; /* Bold */
  margin: 10px 0; /* Espaciado superior e inferior */
  text-align: left; /* Alinea el texto a la izquierda */
  padding: 0; /* Elimina espaciado adicional */
  font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

/* Descripción */
.descripcion-mision {
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
  .contenedor-mision {
      padding: 15px; /* Reduce el espaciado interno en móviles */
  }
  .titulo-mision {
      font-size: 2rem; /* Reduce el tamaño del título */
      margin-left: 5%; /* Mantén alineación en móviles */
  }
  .descripcion-mision {
      font-size: 0.9rem; /* Reduce el tamaño del texto */
      max-width: 95%; /* Ajusta el ancho en móviles */
      padding: 0 5%; /* Ajusta el espaciado */
  }
}

</style>
