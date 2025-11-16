**1) Sobre tipagem de dados em linguagens de programação e, especificamente em JavaScript,
responda o que se pede:**

**a) O que caracteriza uma linguagem de tipagem estática? Como a verificação de tipos ocorre
em linguagens com tipagem estática?**
<mark>- Linguagem de tipagem estática é quando, na hora de declarar um variavel, é preciso declarar o tipo antes dela (ex: int idade = 20;).</mark>
- A Verificação de tipos ocorre por tempo de compilação. O compilador analisa o código-fonte e procura por erros de tipo,
- como tentar somar um número com um texto. Se um erro é encontrado, o programa não é executado.

**b) Quais são os principais benefícios da tipagem estática em termos de performance e
segurança?**
- Em performance, ele é executado mais rápido porque o programa não precisa gastar tempo verificando os tipos durante a execução,
- já que essa verificação foi feita antes.
- Em segurança pelo mesmo motivo, é mais fácil para o desenvolvedor verificar os erros antes da execução, e não o usuário final,
- isso torna o código mais confiável.
  
**c) Como funciona a tipagem dinâmica em relação à verificação de tipos em tempo de
execução? Quais são os principais desafios de performance enfrentados por linguagens de
tipagem dinâmica?**
- Na tipagem dinâmica, a verificação de tipos é feita em tempo de execução, ou seja,
- enquanto o programa está rodando. O principal desafio é a sobrecarga, pois o interpretador
- precisa gastar mais tempo verificando os tipos de dados toda vez que a operação é realizada, o que torna a execução mais lenta.
  
**d) Quais são as diferenças entre linguagens com tipagem forte e fraca?**
- Na tipagem forte a linguagem é rigorosa e não permite misturar tipos de dados diferentes em operações. Ela força o programador
- a fazer conversões de tipos e dá erro se vc tentar somar um número com um texto.
- Na tipagem fraca a linguagem é mais tranquila em relação a isso, ela tenta adivinhar o que vc quer fazer de acordo com o que vc colocou
- ela faz conversões automáticas (chamadas de coerção).

**e) Como linguagens híbridas conseguem combinar características de tipagem estática e
dinâmica? Qual o papel da inferência de tipos em linguagens de tipagem estática?**
- Colocando uma camada de tipagem estática opcional em cima de uma linguagem dinâmica (TypeScript). Isso deixa o programador escolher onde
- ele quer a segurança da tipagem estática e onde ele quer a flexibilidade dinâmica. A inferência de tipos serve para deixar a tipagem estática
- mais fácil de escrever. O compilador deduz o tipo de variável olhando o valor que você colocou.

**f) Como a linguagem JavaScript lida com a tipagem de dados?**
- De duas formas, ele tem a tipagem dinâmica. Isso significa que você não declara o tipo de variável (usa let ou const), e o tipo de variável pode mudar
- durante a execução do programa. Ele também tem tipagem fraca, significa que ele tenta adivinhar o que você quer fazer e faz conversões automáticas (coerção), o que pode levar
- a reultados estranhos como 10 + "5" virar "105", mas 10 * "5" virar "50".
