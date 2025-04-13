<div class="contenedor">
    <h1 class="titulo">Construyendo tu Futuro</h1>
    <h2 class="subtitulo">¡Bienvenidos a nuestra plataforma financiera dedicada a estudiantes universitarios!</h2>
    <p class="descripcion">
      Somos una institución comprometida en ofrecer soluciones ágiles y eficientes para la gestión de tus recursos financieros. Nuestro objetivo es apoyar tu crecimiento económico y personal a través de servicios innovadores y de calidad. Nos enorgullece contribuir a la comunidad estudiantil, brindando herramientas tecnológicas que faciliten tus transacciones y promoviendo la educación financiera para un futuro próspero. ¡Descubre todo lo que tenemos para ofrecerte y únete a nuestra misión de transformar la manera en que los estudiantes manejan sus finanzas!
    </p>
  </div>
  
<style>
  /* Contenedor */
  .contenedor {
      width: 100%; /* Ocupa todo el ancho de la ventana */
      min-height: 60vh; /* Altura mínima para asegurar que el contenido no se vea apretado */
      margin: 0; /* Elimina márgenes para un diseño limpio */
      padding: 20px 0; /* Espaciado interno superior e inferior */
      box-sizing: border-box; /* Asegura que el padding no afecte el tamaño total */
      background-color: var(--background-color); /* Color de fondo global */
      font-family: var(--font-primary);/* Fuente global */
      display: flex; /* Utiliza flexbox para centrar el contenido */
      flex-direction: column; /* Distribuye los elementos en columna */
      justify-content: center; /* Centra verticalmente el contenido */
      align-items: center; /* Centra horizontalmente el contenido */
      text-align: center; /* Alinea el texto al centro */
  }

  /* Título */
  .titulo {
      color: var(--primary-color); /* Color primario global */
      font-size: 2.5rem; /* Tamaño grande para destacar */
      font-weight: 700; /* Negrita para mayor énfasis */
      margin: 10px 0; /* Espaciado superior e inferior */
      padding: 0 5%; /* Añade espacio interno para móviles */
      text-align: center; /* Alinea el texto al centro */
  }

  /* Subtítulo */
  .subtitulo {
      color: var(--secondary-color);
      font-size: 1.8rem; /* Tamaño más pequeño que el título */
      padding: 0 5%; /* Añade espacio interno para móviles */
      margin: 8px 0; /* Espaciado superior e inferior */
      font-weight: 600; /* Semi-negrita para destacar */
      text-align: center; /* Alinea el texto al centro */
    }

  /* Descripción */
  .descripcion {
      color: #333; /* Color gris oscuro para el texto */
      font-size: 1rem; /* Tamaño estándar para la legibilidad */
      line-height: 1.8; /* Espaciado entre líneas para mejorar la lectura */
      text-align: justify; /* Alineación justificada para un aspecto limpio */
      max-width: 100%; /* Elimina restricciones de ancho */
      margin: 10px auto; /* Centra el texto con margen automático */
      padding: 0 5%; /* Añade espacio interno para móviles */
      overflow-wrap: break-word; /* Evita que las palabras largas se corten */
      box-sizing: border-box; /* Asegura que los paddings no afecten el tamaño */
    }

  /* Responsividad */
  @media (max-width: 768px) { /* Pantallas pequeñas */
    .titulo { 
      font-size: 2rem; /* Reduce el tamaño del título en móviles */
    }
    .subtitulo {
      font-size: 1.5rem; /* Reduce el tamaño del subtítulo en móviles */
    }
    .descripcion {
      font-size: 0.9rem; /* Reduce el tamaño del texto en móviles */
      max-width: 90%; /* Ajusta el ancho en pantallas pequeñas */
      padding: 0 5%; /* Espacio interno para evitar que el texto toque los bordes */
    }
  }

</style>

