import { calcularMedia, VALOR_PI } from './utils/calculadora.js';
import buscarDados from './services/dados.js';

console.log("Módulos ES6");

async function main() {
    console.log("Iniciando aplicação...");
    console.log("Valor de PI utilizado:", VALOR_PI);

    const dados = await buscarDados();
    console.log("Dados recebidos:", dados);

    const media = calcularMedia(dados);
    console.log("Média calculada:", media);
}

main();

//Explicação:
//Para funcionar no navegador, a tag script no HTML deve ter type="module".
//As exportações nomeadas (export const...) exigem chaves {} na importação e o mesmo nome.
//A exportação padrão (export default...) permite importar sem chaves e com qualquer nome.