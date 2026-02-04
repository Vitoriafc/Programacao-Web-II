// Crie um objeto que represente uma conta bancária, com as propriedades saldo e número da
// conta. O objeto deve ter métodos para depositar, sacar e informar saldo. O método
// depositar, deve receber o valor a ser adicionado ao saldo; o método sacar deve receber o
// valor a ser debitado do saldo (caso haja saldo disponível); o método informar saldo deve
// exibir uma mensagem informando ao usuário o seu saldo atual.

const contaBancaria = {
    saldo: 0,
    numeroConta: "12345",

    depositar: function (valor) {
        if (valor > 0) {
            this.saldo += valor
            alert("Depósito de  R$ " + valor.toFixed(2) + " realizado com sucesso.")
            this.informarSaldo()
        } else {
            alert("Valor de depósito inválido.")
        }
    },

    sacar: function(valor) {
        if(valor > 0 && valor <= this.saldo) {
            this.saldo -= valor 
            alert ("Saque de R$ " + valor.toFixed(2) + " realizado com sucesso.")
            this.informarSaldo()
        } else if (valor > this.saldo) {
            alert("Saldo insuficiente para este saque.")
        } else {
            alert("valor de saque inválido.")
        }
    },

    informarSaldo: function() {
        alert("Conta: " + this.numeroConta + "\nSaldo atual R$: " + this.saldo.toFixed(2))
    }
}

contaBancaria.informarSaldo()
contaBancaria.depositar(100) 
contaBancaria.sacar(30)