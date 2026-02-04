// Nullish Coalescing Operator (Coalescência Nula)
const nomeValido = nome ??
console.log(nome)
const pessoa = {
    nome: "João",
    idade: 30,
    endereco: null
}

console.log(pessoa.endereco?.logradouro ?? "Endereço não informado!");