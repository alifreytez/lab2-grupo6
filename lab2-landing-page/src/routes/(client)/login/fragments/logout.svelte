<!-- Componente: logout.svelte -->
<!-- Descripción: El componente se utiliza para manejar el cierre de sesión del usuario en la aplicación. Al usarlo, elimina el token de autenticación JWT del localStorage y redirige al usuario a la página de inicio de sesión. Esto asegura que el usuario no tenga acceso a áreas protegidas después de cerrar sesión. -->

<script>
  import { onMount } from 'svelte'; // Importa la función onMount de Svelte para ejecutar código al montar el componente
  import { goto } from '$app/navigation'; // Importa la función goto para redirigir al usuario a otra página
  import { removeJWT } from '$lib/utils/localStorage'; // Importa la función removeJWT para eliminar el token de autenticación del localStorage

  // Al usar este componente, elimina el JWT y redirige al usuario al login.
  onMount(() => {
      removeJWT(); // Elimina el token de autenticación del localStorage
      goto('/login'); // Redirige al usuario a la página de login
  });
</script>

  