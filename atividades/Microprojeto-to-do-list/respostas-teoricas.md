🚨❓ Questão 01 - O que precisamos fazer para adicionar um script na seção <head>de uma página HTML e definir que ele só deve ser executado ao finalizar o carregamento da página?

- Precisamos adicionar o atributo defer à tag <script>. O código ficaria assim: <script src="index.js" defer></script>. O defer garante que o script só será executado depois que todo o documento HTML for analisado pelo navegador.

🚨❓ Questão 02 - Considere os métodos de seleção de elementos do DOM (Document Object Model) em JavaScript listados abaixo. Relacione cada método à definição correta.

I. document.getElementById()

II. document.querySelector()

III. document.getElementsByTagName()

A. Retorna todos os elementos do DOM que possuem o mesmo nome de tag especificado. III

B. Retorna um único elemento do DOM com base no valor do atributo id. I

C. Retorna o primeiro elemento do DOM que corresponde ao seletor CSS especificado. II

🚨❓ Questão 03 - Qual método foi utilizado para adicionar a classe input-erroao campo de entrada no trecho acima? O que é esse atributo classList? 

 - O add() (ex: campoEntrada.classList.add("input-erro")). O classList é uma propriedade (atributo) de um elemento HTML que permite acessar e manipular sua lista de classes CSS. Ele fornece métodos úteis como add(), remove(), toggle() e contains() para gerenciar as classes facilmente.

🚨❓ Questão 04 - O que o método createElement()faz e que informação ele precisa receber como argumento?

- O método document.createElement() cria um novo elemento HTML no DOM. Ele precisa receber como argumento uma string que representa o nome da tag do elemento que se deseja criar.

🚨❓ Questão 05 - Em JavaScript, ao manipular elementos do DOM, os atributos innerTexte innerHTMLsão frequentemente utilizados. Qual das alternativas abaixo descreve corretamente a diferença entre esses dois atributos?

a — innerTextexibe somente o conteúdo HTML do elemento, enquanto innerHTMLexibe somente o texto visível ao usuário.
<!-- b — innerTextretorna ou define apenas o texto visível ao usuário, enquanto innerHTMLretorna ou define o conteúdo HTML do elemento, incluindo tags. -->
c — innerTexté utilizado apenas para leitura, enquanto innerHTMLpode ser utilizado tanto para leitura quanto para modificação do conteúdo do elemento.
d — Ambos os atributos são sinônimos e podem ser usados ​​de forma intercambiável para manipular texto e HTML.

🚨❓ Questão 06 - O evento de clique foi definido de que forma para os elementos spane btnExcluir(qual atributo foi usado e o que precisamos passar para esse atributo)?

- O evento foi definido usando o atributo onclick de cada elemento. Precisamos passar (atribuir) uma função (neste caso, uma arrow function) para esse atributo. Essa função é o código que será executado quando o evento de clique ocorrer.

🚨❓ Questão 07 - Os manipuladores dos eventos de clique no botão de adição e pressionamento da tecla enter foram definidos de forma diferente agora, usando o método addEventListener(). Explique o funcionamento desse método e o que ele precisa receber como parâmetro.

 - método addEventListener() "escuta" por eventos em um elemento. Ele permite adicionar múltiplos "ouvintes" para o mesmo evento sem sobrescrever os anteriores. Ele precisa receber(pelo menos) dois parâmetros: O nome do evento que se quer "ouvir" (uma string, como "submit" ou "click").
A função (callback) que deve ser executada quando o evento ocorrer.