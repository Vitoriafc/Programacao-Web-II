// Crie uma função chamada range que gere um intervalo de números com base em
// parâmetros fornecidos. A função deve aceitar até três parâmetros: início (start),
// fim (end) e passo (step).
// Se apenas um parâmetro for fornecido, ele deve ser tratado como o valor final, considerando o
// início como 1.
// O parâmetro passo (step) é opcional e padronizado como 1. Ele deve ser positivo.
// Caso seja passado um valor para o parâmetro início (start) maior que o valor do parâmetro fim
// (end), a função deve gerar um array com uma sequência descedente.
// A função deve retornar um array de números representando o intervalo.
// Exemplos:

// range(4) // deve retornar [1, 2, 3, 4]
// range(3, 7) // deve retornar [3, 4, 5, 6, 7]
// range(2, 10, 2) // deve retornar [2, 4, 6, 8, 10]
// range(10, 5) // deve retornar [10, 9, 8, 7, 6, 5]
// range(12, -3, 3) // deve retornar [12, 9, 6, 3, 0, -3]

function range(arg1, arg2, step = 1) {
  let start, end;

  if (arg2 === undefined) {
    start = 1;
    end = arg1;
  