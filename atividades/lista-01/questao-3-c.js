// Implemente uma função que receba um número e retorne seu fatorial. Use recursividade.

function fatorial(n){
    if (n == 0 || n == 1) {
        return 1
    }
    else {
        return n * fatorial(n - 1)
    }
}

// fatorial(5)