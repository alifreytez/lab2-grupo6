<script>
    import '../../lib/styles/app.css';
    
    import BarraSomos from "../../lib/components/somos/BarraSomos.svelte";
	import IntroSomos from "../../lib/components/somos/IntroSomos.svelte";
    import MisionSomos from "../../lib/components/somos/MisionSomos.svelte";
    import VisionSomos from "../../lib/components/somos/VisionSomos.svelte";
    import ObjetivosSomos from "../../lib/components/somos/ObjetivosSomos.svelte";
    import Contactos from "../../lib/components/Contactos.svelte"

</script>

<slot /> 
<BarraSomos />
<IntroSomos />
<MisionSomos />
<VisionSomos />
<ObjetivosSomos />
<Contactos />

