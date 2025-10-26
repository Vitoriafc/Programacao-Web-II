// Escreva uma função que receba dois números e um caractere como argumentos. O
// caractere recebido informa que tipo de operação deve ser realizada. Por exemplo, ao receber
// o caractere “+”, a função deve calcular a soma dos números passados como argumento e
// retornar o resultado. Use “+” para soma, “-” para subtração, “/” para divisão e “*” para
// multiplicação.

function calcular(n1, n2, operacao) {
    switch (operacao) {
        case "+":
            return n1 + n2
        case "-":
            return n1 - n2
        case "/":
            return n1 / n2
        case "*":
            return n1 * n2
        
    }
}

// calcular(10, 5, "+")
// calcular(10, 5, "-")
// calcular(10, 5, "/")
// calcular(10, 5, "*")