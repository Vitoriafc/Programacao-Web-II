// a) Escreva um programa que leia um valor em R$ (reais) e a cotação atual do dólar americano,
// após isso, converta o valor de entrada para US$ (dólar americano) e exiba o resultado.

const valorReais = parseFloat(prompt("Digite o valor em reais:"))
const cotacaoDolar = 5.39

const valorDolar = valorReais / cotacaoDolar

alert("O valor convertido é US$" + valorDolar.toFixed(2))
