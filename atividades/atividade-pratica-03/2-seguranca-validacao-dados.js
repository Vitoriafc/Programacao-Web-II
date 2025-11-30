console.log("Acesso Seguro e Cache");

const configuracoes = { cache: undefined };

// Optional Chaining (?.) impede erro se cache não existir
const tempoExpiracaoSeguro = configuracoes.cache?.tempoExpiracao;
console.log("Tempo de expiração (seguro):", tempoExpiracaoSeguro);

const retornoApi = 0; 

// Nullish Coalescing (??) usa o padrão 600 apenas se for null/undefined (0 é mantido)
const valorFinal = retornoApi ?? 600;
console.log("Valor Final (com Nullish):", valorFinal);

console.log("\nTelemetria IoT");

const dispositivo1 = { info: { bateria: { nivel: 85 } } };
const dispositivo2 = { info: null };
const dispositivo3 = { info: { bateria: { nivel: 0 } } };

function verificarBateria(dispositivo, nome) {
    // Combinação de ?. com ?? para segurança total
    const nivelBateria = dispositivo?.info?.bateria?.nivel ?? -1;
    console.log(`${nome}: Nível ${nivelBateria}`);
}

verificarBateria(dispositivo1, "Dispositivo 1");
verificarBateria(dispositivo2, "Dispositivo 2");
verificarBateria(dispositivo3, "Dispositivo 3");

//Explicação:
//O dispositivo 2 retorna -1 porque 'info' é null. O Optional Chaining (?.) retorna undefined,
//e o operador ?? percebe isso e aplica o valor padrão -1.
//O dispositivo 3 retorna 0 porque o operador Nullish Coalescing (??) considera o 0 um dado válido
//(diferente do operador ||, que trocaria o 0 pelo valor padrão).