const formLanhouse = document.getElementById('form-lanhouse');
const inValor15min = document.getElementById('valor-15min');
const inTempoUso = document.getElementById('tempo-uso');
const outValorPagar = document.getElementById('out-valor-pagar');

formLanhouse.addEventListener('submit', (e) => {
    
    e.preventDefault(); 
    
    const valor15min = parseFloat(inValor15min.value);
    const tempoUso = parseInt(inTempoUso.value);
    
    if (isNaN(valor15min) || valor15min <= 0 || isNaN(tempoUso) || tempoUso <= 0) {
        alert("Por favor, preencha os campos corretamente.");
        return;
    }
    
    const intervalosCobrados = Math.ceil(tempoUso / 15); 
    const valorTotal = intervalosCobrados * valor15min;
    
    outValorPagar.textContent = `Valor a pagar: R$ ${valorTotal.toFixed(2)}`;
});