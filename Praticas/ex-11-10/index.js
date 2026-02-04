/**
 *Higer-Order Functions - map, filter e reduce (métodos de interação)
 */

const nums = [1, 2, 3, 4, 5];

// map() - realiza um mapeamento em cima dos elementos de um array, gerando um novo array tranformado
const dobro = nums.map(num => num * 2);
console.log(dobro);

// filter() - intera em cima de um array, realizando uma operação de filtragem dos elementos. Retorna um novo array.
const pares = nums.filter(num => num % 2 === 0);
console.log(pares);

// reduce() - itera um array, realizando uma operação de redução e retornando um único valor ao final.
const soma = nums.reduce((acc, num) => acc + num);
console.log(soma);