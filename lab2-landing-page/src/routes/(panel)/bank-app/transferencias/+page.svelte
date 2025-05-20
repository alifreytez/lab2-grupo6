<script>
	import { getContactsAPI } from "$lib/api/modules/contacts.js";
	import { createMovementAPI } from "$lib/api/modules/movement.js";
    import { whoAmIAPI, getBalanceAPI } from "$lib/api/modules/user";
	import PanelForm from '@components/PanelForm.svelte';
	import PanelFormEntry from '@components/PanelFormEntry.svelte';
    import PanelHeader from '@components/PanelHeader.svelte';
	import PanelSection from '@components/PanelSection.svelte';
	import { addNotification } from "@stores/notification.js";
	import { onMount } from 'svelte';

    export let data;
    
    const form = {
        account_number: data?.form?.account_number ?? null,
        amount: data?.form?.amount ?? null,
        description: data?.form?.description ?? null,
    }
    const formValidation = {
        account_number: {
            check: (value, nullable = true) => ((nullable && (value == null || value == 'none')) || (value != null && /^\d+$/.test(value))),
            status: null,
        },
        amount: {
            check: (value, nullable = true) => ((nullable && (value == null || value == '')) || (value != null && /^\d+(\.\d+)?$/.test(value))),
            status: null,
        },
        description: {
            check: (value, nullable = true) => ((nullable && (value == null || value == '')) || (value != null && value != '')),
            status: null,
        },
    }
    let user, parsedUserBalance, registeredAccounts;

    const handleSubmit = async ({ formData, cancel }) => {
        formValidation.account_number.status = formValidation.account_number.check(formData.get('account_number'), false);
        formValidation.amount.status = formValidation.amount.check(formData.get('amount'), false);
        formValidation.description.status = formValidation.description.check(formData.get('description'), false);

        if (Object.values(formValidation).some(val => val.status == false))
            return cancel();

        const data = Object.fromEntries(formData);
        data.amount = parseFloat(data.amount);

        const res = await createMovementAPI(data);
        addNotification({ msg: res.message, type: res.success ?? 'succes' });
        
        cancel();
    }
    const clearFields = () => {
        form.account_number = null;
        form.amount = null;
        form.description = null;

        Object.entries(formValidation).forEach(([ name, _ ]) => formValidation[name].status = null);
    }

    onMount(async () => {
        try {
            let _registeredAccounts;
            
            user = await whoAmIAPI();
            user.balance = await getBalanceAPI();
            _registeredAccounts = await getContactsAPI();
            registeredAccounts = _registeredAccounts.map(acc => ({
                text: `${acc.alias} - ${acc.description}`,
                value: acc.account_number,
            }));

            parsedUserBalance = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(user.balance);
        } catch (error) {
            console.error("Error al obtener información del usuario:", error);
        }
    });
</script>

<svelte:head>
    <title>{data.pageTitle}</title>
</svelte:head>

<PanelHeader title={data.title} />
<div class="content-container">
    <PanelSection title="Transferencias entre Cuentas">
        {#if user != null && user.balance != null}
            <PanelForm action="/transfer" {handleSubmit}>
                <div class="box-container">
                    <div class="double-box">
                        <PanelFormEntry
                            label="Cuenta a debitar"
                            name="me_account"
                            type="only-display"
                            value="({"01298319273126387343".slice(0,4)}**${"01298319273126387343".slice(-2)}) - {parsedUserBalance} Disp"
                        />
                        {#if registeredAccounts != null}
                            <PanelFormEntry
                                label="Cuenta a abonar"
                                name="account_number"
                                type="select"
                                data={registeredAccounts}
                                addNoneOption={true}
                                bind:value={form.account_number}
                                isError={formValidation.account_number.status === false}
                                selectOption={(event) =>  formValidation.account_number.status = formValidation.account_number.check(event.detail.value, true)}
                            />
                        {/if}
                    </div>
                    <div class="double-box">
                        <PanelFormEntry
                            label="Monto a transferir"
                            name="amount"
                            type="input"
                            placeholder="0.0"
                            sideElement={{ type: "text", content: "USD"}}
                            bind:value={form.amount}
                            isError={formValidation.amount.status === false}
                            onInput={(event) => formValidation.amount.status = formValidation.amount.check(event.target.value, true)}
                        />
                        <PanelFormEntry
                            label="Descripción"
                            name="description"
                            type="input"
                            placeholder="Pago por honorarios."
                            bind:value={form.description}
                            isError={formValidation.description.status === false}
                            onInput={(event) => formValidation.description.status = formValidation.description.check(event.target.value, true)}
                        />
                    </div>
                </div>
                <div class="notes-container">
                    <p class="note-title">Comisión por transacción</p>
                    <ul>
                        <li>Comisión Variable <b>(0.1%)</b></li>
                    </ul>
                </div>
                <div class="buttons-container">
                    <div class="buttons-container-in">
                        <button type="submit" aria-label="submit form" class="primary-btn">Continuar</button>
                        <button type="button" aria-label="clear form inputs" class="secondary-btn" onclick={clearFields}>Limpiarr</button>
                    </div>
                </div>
            </PanelForm>
        {/if}
    </PanelSection>
</div>

<style>
    .box-container {
        display: flex;
        flex-wrap: wrap;
        gap: var(--section-padding);
    }

    .double-box {
        gap: var(--section-padding);
    }

    .notes-container {
        background-color: var(--blocked-color);
        border-left: 5px solid var(--primary-color);
        border-radius: var(--border-radius);
        margin-top: var(--section-padding);
        padding: calc(var(--content-padding) - 5px) calc(var(--content-padding) / 2);
        width: 100%;

        & p.note-title {
            font-weight: 600;
        }

        & ul {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            list-style: none;
            margin-top: 5px;

            & li {
                width: 100%;
            }
        }
    }

    .buttons-container {
        border-top: 2px solid var(--border-gray-color);
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        margin-top: var(--section-padding);
        padding-top: var(--section-padding);
        width: 100%;

        & .buttons-container-in {

        }
    }
</style>