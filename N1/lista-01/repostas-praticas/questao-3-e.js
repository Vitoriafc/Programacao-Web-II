// Suponha que você está implementando um sistema de e-commerce e precise calcular o
// valor total de um produto no carrinho do cliente, aplicando ou não um desconto. Nesse
// contexto, escreva uma função que receba o valor unitário do produto, a quantidade
// solicitada e o desconto a ser aplicado e retorne o valor total da compra. Ao chamar a função,
// podemos passar ou não o desconto a ser aplicado. Caso nenhum valor de desconto seja
// passado, o padrão deve ser 0 (sem desconto).

function total(valorUnitario, quantidade, desconto = 0) {
    const valorBruto = valorUnitario * quantidade
    const valorDesconto = valorBruto * desconto
    const valorFinal = valorBruto - desconto

    return valorFinal
}

// total(100, 2)