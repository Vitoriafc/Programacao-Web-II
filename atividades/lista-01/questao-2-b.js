// Escreva um programa que calcule o perímetro (circunferência) de um círculo a partir do valor
// do raio.

const raio = parseFloat(prompt("Digite o raio da circunferência:"))
const pi = 3.14

const perimetro = 2 * pi * raio

alert("O valor do perímetro é: " + perimetro.toFixed(2))
