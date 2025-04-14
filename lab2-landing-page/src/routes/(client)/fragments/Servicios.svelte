<!-- 
  Componente: Servicios
  Descripción:
  Este componente organiza y muestra los servicios destacados del Banco Universitario. Se utiliza una cuadrícula para disponer visualmente los servicios, con un diseño limpio y organizado que mejora la experiencia del usuario.

-->

<script>
  import BarraLogo from "./BarraLogo.svelte";
  import Servicio1 from "./Servicio1.svelte";
  import Servicio2 from "./Servicio2.svelte";
  import Servicio3 from "./Servicio3.svelte";
  import Servicio4 from "./Servicio4.svelte";
  import Servicio5 from "./Servicio5.svelte";
  import Servicio6 from "./Servicio6.svelte";
</script>

<!-- Barra decorativa con titulo Nuestros Servicios en la parte superior -->
<BarraLogo />

<!-- Cuadrícula de servicios -->
<div class="services-grid">
<Servicio1 />
<Servicio2 />
<Servicio3 />
<Servicio4 />
<Servicio5 />
<Servicio6 />
</div>

<!-- Rectángulo de fondo debajo de los servicios -->
<div class="footer-rectangle"></div>

<style>
.services-grid {
  display: grid; /* Grid para la cuadrícula */
  column-gap: 1rem; /* Espacio entre columnas */
  row-gap: 0.5rem; /* Espacio entre filas */
  grid-template-columns: 1fr; /* Una columna para móviles */
  background: #0E5F76; /* Fondo transparente revisen a ver cual se ve mejor transparent */
  margin: 10px 0; /* Espacio superior e inferior */
  padding: 0; /* Sin relleno */
  font-family: var(--font-family-primary); /* Usa la fuente global definida en app.css */
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr 1fr; /* Dos columnas en desktop */
  }
}

/* Estilo para el rectángulo de fondo */
.footer-rectangle {
  width: 100%; /* Ancho completo */
  height: 20px; /* Ajusta la altura */
  background-color: #0E5F76; /* Color de fondo */
}
</style>
