const pTeste = document.getElementById("teste") //document = chamar o DOM


pTeste.textContent = "Vitória linda" //aparecer paragrafo colocado no html
pTeste.style.color = "#261121ff" //mudar cor da frase 
pTeste.style.backgroundColor = "#ff25ffff"

// Gerenciamento de eventos
const botao = document.getSelection("#btn") //conectar botão
botao.addEventListener ("click", function(){ //quando clicar no botao
    pTeste.style.color = "#ffb5c5"
    pTeste.style.backgroundColor = "#671123"
})

// formulario
const formCadastro = document.querySelector("#form-cadastro")

formCadastro.addEventListener("submit", function(evento) {
    evento.preventDefault()
const nome = document.querySelector("#input-nome").value
const email = document.querySelector("#input-email").value

const resultado = document.createElement("p")
resultado.innerHTML = `Cadastro realizado com sucesso!
                        <br>Nome: ${nome}
                        <br>Email: ${email}`
                
document.body.appendChild(resultado)
})





