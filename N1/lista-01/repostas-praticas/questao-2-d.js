// Dados n números inteiros positivos, calcule e exiba a soma dos que são primos.

function primo(n){
    if(n <= 1){
        return false
    }
    if(n <= 3){
        return true
    }
    if(n % 2 === 0 || n % 3 === 0) {
        return false
    }
    

    for (let i = 5; i * i <= n; i = i + 6){
        if(n % i === 0 || n % (i + 2) === 0)
            return false
    }
    return true 

}
    const quantidade = parseInt(prompt("Quantos números você deseja digitar?"))
    let somaPrimo = 0

    for (let i = 0; i < quantidade; i++) {
        const numeroDigitado = parseInt(prompt("Digite o " + (i + 1) + "° número:"))
        
        if  (numeroDigitado > 0 && primo(numeroDigitado)){
            somaPrimo += numeroDigitado
        }
    }

    alert("A soma dos número primos digitados é " + somaPrimo)