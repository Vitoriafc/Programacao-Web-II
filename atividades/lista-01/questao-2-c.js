// Escreva um programa para calcular a nota final de um aluno de curso de graduação do IFCE,
// sabendo que o semestre letivo é dividido em 2 etapas (N1 e N2) e a nota final é obtida a partir
// de uma média ponderada das notas obtidas nas 2 etapas. Os pesos para cada etapa são os
// seguintes: N1, peso 2; N2, peso 3. O programa deve solicitar ao aluno as notas de cada etapa
// e, ao final, o programa deve exibir uma mensagem informando qual a sua nota final e se ele
// está aprovado ou reprovado, sabendo que a nota mínima para aprovação é 7,0.

const nota1 = parseFloat(prompt("Digite a nota na etapa 1:"))  
const nota2 = parseFloat(prompt("Digite a nota na etapa 2:"))  

const notaFinal = (nota1 * 2 + nota2 * 3) / (2 + 3)

if (notaFinal >= 7){
    alert("Sua nota final é: " + notaFinal.toFixed(1) + "\nVocê está aprovado !!")
}
else {alert("Sua nota final é: " + notaFinal.toFixed(1) + "\nVocê está reprovado :(")
}       