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

<!-- Barra decorativa con título "Nuestros Servicios" -->
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

<!-- Rectángulo de fondo -->
<div class="footer-rectangle"></div>

<style>
  .services-grid {
    display: grid; /* Activa la cuadrícula */
    grid-template-columns: repeat(2, 1fr); /* Dos columnas en desktop */
    gap: 1rem; /* Espacio entre servicios */
    background: #0E5F76;
    margin: 10px 0;
    padding: 0;
    font-family: var(--font-family-primary);
  }

  /* Ajuste para tablets y móviles: una sola columna */
  @media (max-width: 1024px) {
    .services-grid {
      grid-template-columns: 1fr; /* Una columna en tablets */
    }
  }

  /* Rectángulo de fondo */
  .footer-rectangle {
    width: 100%;
    height: 20px;
    background-color: #0E5F76;
  }
</style>
