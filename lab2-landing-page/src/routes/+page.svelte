<script>
    import '../lib/styles/app.css';
    import BienvenidoHome from "./fragments/BienvenidoHome.svelte";
    import PromoHome from "./fragments/PromoHome.svelte";
    import Servicio1 from "./fragments/Servicio1.svelte";
    import Servicio2 from "./fragments/Servicio2.svelte";
    import Contactos from "../lib/components/Contactos.svelte"
   
	

</script>

<h1>Bienvenido a la página de inicio AQUI VA CABECERA </h1>

<slot /> 
<BienvenidoHome />
<PromoHome />
<Servicio1 />
<Servicio2 />
<Contactos />