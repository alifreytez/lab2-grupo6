<script>
	import { enhance, applyAction } from "$app/forms";

    export let action = "";
    export let handleSubmit = ({ formElement, formData, action, cancel, submitter, applyAction }) => cancel();

    const handleForm = (args) => handleSubmit({ ...args, applyAction });
</script>

<form method="POST" {action} use:enhance={handleForm}>
    <slot/>
</form>