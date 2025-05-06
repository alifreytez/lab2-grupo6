<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
  
    // Función para realizar el logout: elimina el token.
    function performLogout() {
      localStorage.removeItem('jwt');
      
    }
  
    // Al montar el componente se ejecuta el logout y se redirige al login.
    onMount(() => {
      performLogout();
      goto('/login');
    });
  </script>
  