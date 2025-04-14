<script>
    import ServicioP1 from './fragments/ServicioP1.svelte';
    import ServicioP2 from './fragments/ServicioP2.svelte';
    import ServicioP3 from './fragments/ServicioP3.svelte';
    import ServicioP4 from './fragments/ServicioP4.svelte';
    import ServicioP5 from './fragments/ServicioP5.svelte';
    import ServicioP6 from './fragments/ServicioP6.svelte';
  </script>
  
  <style>
    main {
      display: grid;
      grid-template-columns: repeat(2, 1fr); /* 2 columnas por fila */
      gap: 20px; /* Espacio entre servicios */
      padding: 20px;
    }
  
    header, footer {
      text-align: center;
      background-color: #0e5f76;
      color: white;
      padding: 10px;
    }
  </style>
  
  <header>
    <h1>Servicios que Ofrecemos</h1>
    <h2>Podrás disfrutar al máximo</h2>
  </header>
  
  <main>
    <ServicioP1 />
    <ServicioP2 />
    <ServicioP3 />
    <ServicioP4 />
    <ServicioP5 />
    <ServicioP6 />
  </main>
  
  <footer>
    <p>&copy; 2025 Banco Universitario</p>
  </footer>
  