const formSupermercado = document.getElementById('form-supermercado');
const inProduto = document.getElementById('produto');
const inPreco = document.getElementById('preco-unitario');
const outPromoMsg = document.getElementById('out-promo-msg');
const outPromoTotal = document.getElementById('out-promo-total');

formSupermercado.addEventListener('submit', (e) => {

    e.preventDefault();
    
    const produto = inProduto.value;
    const preco = parseFloat(inPreco.value);
    
    if (!produto || isNaN(preco) || preco <= 0) {
        alert("Por favor, preencha os campos corretamente.");
        return;
    }
    
    const precoTerceiraUnidade = preco / 2;
    const total = (preco * 2) + precoTerceiraUnidade; 
    
    outPromoMsg.textContent = `Promoção: Leve 3 ${produto}. 2 por R$ ${preco.toFixed(2)} cada + 1 por R$ ${precoTerceiraUnidade.toFixed(2)}`;
    outPromoTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
});