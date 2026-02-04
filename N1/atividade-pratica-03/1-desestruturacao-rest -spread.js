console.log("Processamento de API");

const respostaApi = { id: 101, username: "user_a", email: "a@ex.com", status: "ativo" };
const { username, email } = respostaApi;
console.log("Username:", username, "| Email:", email);

const { id, ...dadosComplementares } = respostaApi;
console.log("ID:", id);
console.log("Dados Complementares:", dadosComplementares);

const configPadrao = { tema: 'dark', notificacoes: true };
const configUsuario = { notificacoes: false };

const configFinal = { ...configPadrao, ...configUsuario };
console.log("Configuração Final:", configFinal);

console.log("\nManipulação de Argumentos");

function registrarEvento(tipo, ...metadados) {
    console.log(`Evento Tipo: ${tipo}`);
    console.log("Metadados:", metadados);
}

registrarEvento("Click", "botão-salvar", "timestamp: 12:00");
registrarEvento("Erro", "404", "Página não encontrada", "usuario: admin");

console.log("\nConfiguração Dinâmica de UI");

const props = {
    id: "btn-submit",
    className: "btn-primary",
    onClick: () => console.log("Clicado"),
    "data-acao": "enviar",
    disabled: true,
    title: "Enviar formulário"
};

function prepararPropsBotao(propriedades) {
    const { id, className, onClick, ...atributosNativos } = propriedades;
    const configuracaoPadrao = { id: 'default-id', type: 'button', disabled: false };
    const propsFinais = {
        ...configuracaoPadrao,    
        ...atributosNativos,      
        disabled: false           
    };

    return propsFinais;
}

const resultadoProps = prepararPropsBotao(props);
console.log("Props Finais do Botão:", resultadoProps);

//Explicação:
//O REST operator (...) permitiu limpar o objeto, retirando as props que estava na lógica (id, className)
//e agrupando todo o resto em atributosNativos para ser repassado ao HTML.
//O SPREAD operator (...) garantiu a prioridade porque, no JavaScript, se você espalha objetos com chaves iguais,
//o último objeto declarado vence.