const formFarmacia = document.getElementById('form-farmacia');
const inMedicamento = document.getElementById('medicamento');
const inPreco = document.getElementById('preco');
const outMedicamento = document.getElementById('out-medicamento');
const outPromocao = document.getElementById('out-promocao');


formFarmacia.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    const medicamento = inMedicamento.value;
    const preco = parseFloat(inPreco.value);
    

    if (isNaN(preco) || preco <= 0) {
        alert("Por favor, informe um preço válido.");
        return;
    }
    
    const totalSemDesconto = preco * 2;
   
    const totalComDesconto = Math.floor(totalSemDesconto); 
    
    outMedicamento.textContent = `Promoção de ${medicamento}`;
    outPromocao.textContent = `Leve 2 por apenas R$ ${totalComDesconto.toFixed(2)}`;
});