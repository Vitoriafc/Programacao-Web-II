console.log("Sistema de Cadastros");

class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }

    exibirInfo() {
        console.log(`Usuário: ${this.nome} | Email: ${this.email}`);
    }
}

class Administrador extends Usuario {
    constructor(nome, email, nivelAcesso) {
        super(nome, email); // Chama o construtor do Pai
        this.nivelAcesso = nivelAcesso;
    }

    exibirInfo() {
        super.exibirInfo(); // Reutiliza lógica do Pai
        console.log(`Nível de Acesso: ${this.nivelAcesso}`);
    }
}

const user = new Usuario("Vitória", "vitoria@email.com");
const admin = new Administrador("Carlos", "admin@email.com", "SuperAdmin");

user.exibirInfo();
console.log("---");
admin.exibirInfo();

console.log("\nConta Bancária Segura");

class ContaBancaria {
    #saldo; // Campo Privado

    constructor() {
        this.#saldo = 0;
    }

    depositar(valor) {
        this.#saldo += valor;
        console.log(`Depositado: R$${valor}`);
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`Sacado: R$${valor}`);
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    consultarSaldo() {
        return this.#saldo;
    }
}

const minhaConta = new ContaBancaria();
minhaConta.depositar(100);
minhaConta.sacar(30);
console.log("Saldo atual:", minhaConta.consultarSaldo());

//Explicação:
//O uso de extends permite herdar propriedades. O super() garante que a classe base seja iniciada.
//Na conta bancária, o uso da hashtag (#saldo) torna o atributo privado. 
//Se tentarmos acessar minhaConta.#saldo fora da classe, o código dará erro de sintaxe, garantindo a segurança.