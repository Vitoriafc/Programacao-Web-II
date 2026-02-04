// Escreva uma função que receba uma quantidade não específica (aleatória) de números
// como argumentos e retorne o produtório dos números passados.

function produtorio(...n) {
    if(n.length === 0) {
        return 1
    }

    return n.reduce((acumulador, valorAtual) => acumulador * valorAtual, 1)
}

// produtorio(2, 3, 4)