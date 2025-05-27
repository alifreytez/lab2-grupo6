<script>
    export let originAccount;
    export let destinyAccount;
    export let amount;
    export let description;
    export let reference;
</script>

<div class="container">
    <div class="icon"><i class="fa-solid fa-circle-check"></i></div>
    <h5>¡Transferencia exitosa!</h5>
    <p class="origin-account"><span class="title">Cuenta Origen:</span><span class="content">{originAccount}</span></p>
    <p class="destiny-account"><span class="title">Cuenta Destino:</span><span class="content">{destinyAccount}</span></p>
    <p class="amount"><span class="title">Monto:</span><span class="content">{amount}</span></p>
    <p class="description"><span class="title">Concepto:</span><span class="content">{description}</span></p>
    <p class="reference"><span class="title">Nro. de Referencia:</span><span class="content">{reference}</span></p>
    <p class="date"><span class="title">Fecha Emisión:</span><span class="content">{new Date().toLocaleDateString()}</span></p>
</div>

<style>
    .container {
        width: 400px;

        & .icon {
            border: 2px solid var(--border-gray-color);
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            margin: 0 auto;

            & i {
                display: block;
                font-size: 3rem;
                color: var(--well-color);
            }
        }

        & h5 {
            font-weight: bold;
            padding: 15px 0;
            font-size: 1.5rem;
            text-align: center;
        }

        & p {
            

            & span {
                display: block;
                
                &.title {
                    font-weight: bold;

                }
            }

            &:not(:first-child) {
                margin-top: 10px;
            }
        }

        @media (max-width: 550px) {
            width: 100%;
        }
    }
</style>