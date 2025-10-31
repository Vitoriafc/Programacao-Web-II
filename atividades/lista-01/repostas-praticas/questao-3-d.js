// Implemente uma função que receba um array de números e retorne um outro array contendo
// somente os números ímpares encontrados.

function impar(n) {
    return n.filter((num) => num % 2 !== 0)
}

// numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// impar(numeros)