<!-- 
  Componente: Objetivos
  Descripción:
  Este componente presenta los objetivos estratégicos del Banco Universitario. Está diseñado para resaltar de manera clara y profesional las metas principales de la institución, enfatizando su compromiso con los estudiantes universitarios.
-->

<div class="contenedor-objetivos">
  <!-- Título del componente -->
  <h1 class="titulo-objetivos">Nuestros Objetivos:</h1>

  <!-- Lista de objetivos -->
  <ul class="lista-objetivos">
    <li>Brindar a los estudiantes universitarios un servicio eficiente y de calidad en la gestión de sus recursos financieros, a través de nuestros canales digitales y puntos de atención presencial.</li>
    <li>Fomentar el uso de nuestras plataformas digitales para transferencias entre estudiantes sin comisión, depósitos y retiros en efectivo, ofreciendo herramientas tecnológicas fáciles y seguras.</li>
    <li>Promover la educación financiera de los estudiantes universitarios mediante charlas, talleres y capacitaciones sobre ahorro, inversión y uso responsable del crédito.</li>
    <li>Establecer alianzas estratégicas con universidades y empresas para ofrecer beneficios exclusivos a nuestros clientes, tales como descuentos en matrículas, becas, prácticas laborales, entre otros.</li>
    <li>Mantener una cultura de innovación y mejora continua en nuestros procesos, productos y servicios, para estar siempre a la vanguardia de las necesidades de nuestros clientes y del mercado.</li>
  </ul>
</div>

<style>
/* Contenedor principal */
.contenedor-objetivos {
    width: 100%; /* Ancho consistente con el resto de la página */
    min-height: 40vh; /* Altura mínima */
    margin: 0 auto; /* Centra el contenedor horizontalmente */
    padding: 0 5%; /* Espaciado interno a la izquierda y derecha para alineación */
    background-color: var(--background-color); /* Fondo global */
    font-family: var(--font-primary); /* Fuente global */
    display: flex; /* Flexbox para alineación */
    flex-direction: column; /* Distribución vertical */
    box-sizing: border-box; /* Evita desbordamientos */
    font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

/* Título */
.titulo-objetivos {
    color: var(--primary-color); /* Color del texto */
    font-size: 2.5rem; /* Tamaño consistente */
    font-weight: 700; /* Bold */
    margin: 10px 0; /* Espaciado superior e inferior */
    text-align: left; /* Alinea el texto a la izquierda */
    padding: 0; /* Elimina espaciado adicional */
    font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

/* Lista de objetivos */
.lista-objetivos {
    list-style-type: disc; /* Puntos para la lista */
    color: #333; /* Texto gris oscuro */
    font-size: 1rem; /* Igual a la descripción en misión y visión */
    line-height: 1.8; /* Espaciado similar */
    max-width: 100%; /* Igual al ancho de descripción */
    padding: 0 5%; /* Añade espacio interno para móviles */
    text-align: justify; /* Alineación consistente */
    font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

/* Elementos de la lista */
.lista-objetivos li {
    margin-bottom: 15px; /* Espaciado entre objetivos */
    font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

/* Responsividad */
@media (max-width: 768px) {
  .titulo-objetivos {
    font-size: 2rem; /* Mismo tamaño reducido que misión y visión */
  }
  .lista-objetivos {
    font-size: 0.9rem; /* Ajustado para pantallas pequeñas */
    padding-left: 15px; /* Reduce el espaciado en móviles */
  }
}
.lista-objetivos li {
    margin-bottom: 10px; /* Espaciado reducido en móviles */
}
</style>
