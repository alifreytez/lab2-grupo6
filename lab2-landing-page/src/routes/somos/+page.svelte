<script>
    import '../../lib/styles/app.css';
    
    import BarraSomos from "./fragments/BarraSomos.svelte";
	import IntroSomos from "./fragments/IntroSomos.svelte";
    import MisionSomos from "./fragments/MisionSomos.svelte";
    import VisionSomos from "./fragments/VisionSomos.svelte";
    import ObjetivosSomos from "./fragments/ObjetivosSomos.svelte";
    import Contactos from "../../lib/components/Contactos.svelte"

</script>

<slot /> 
<BarraSomos />
<IntroSomos />
<MisionSomos />
<VisionSomos />
<ObjetivosSomos />
<Contactos />

