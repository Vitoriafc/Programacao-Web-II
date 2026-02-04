# Atividade Prática 02 

Este projeto consiste no desenvolvimento de uma aplicação web de blog pessoal, implementada em dois frameworks diferentes para fins comparativos.

# Frameworks Utilizados
* **React** (v18+) utilizando Vite.
* **Vue.js** (v3+) utilizando Vite.

# Como rodar a aplicação 

### 1. Clonar o Repositório
```bash
git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/Vitoriafc/Programacao-Web-II/tree/main/N2/atividade-pratica-02.git)
```
### 2. Executar a versão em React 
** Entrar na pasta do código React
cd aplicacao-web-react/blog-react

** Instalar as dependências
```bash
npm install
```
** Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
**Executar a versão em Vue.js
 Voltar para a raiz e entrar na pasta do código Vue
cd ../../aplicacao-web-vue.js/blog-vue

** Instalar as dependências
```bash
npm install
```
** Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
# Principais Dificuldades Encontradas
Gerenciamento de Rotas: A maior dificuldade foi compreender e implementar a diferença entre o react-router-dom, que funciona de forma declarativa via componentes no JSX, e o vue-router, que utiliza um arquivo de configuração centralizado (router/index.js).

Configuração de Assets: Ajustar os caminhos das imagens locais (como o arquivo perfil.png) dentro da estrutura do Vite para garantir que o carregamento ocorresse corretamente após a componentização em ambos os frameworks.

Instalação de Módulos: Resolver erros de importação e ausência de bibliotecas de rotas que precisaram ser instaladas manualmente via terminal após a criação inicial das pastas.

# Semelhanças e Diferenças entre React e Vue.js
**Semelhanças
Virtual DOM: Ambos otimizam a renderização para maior performance.
Componentes: Estrutura baseada em blocos de interface reutilizáveis.
Vite: Uso da mesma ferramenta moderna de build e desenvolvimento.

**Diferenças
Sintaxe: React usa JSX (JS/HTML juntos); Vue usa SFC (Template/Script/Style separados).
CSS: React utiliza estilos inline/objetos; Vue utiliza style scoped para isolamento.
Navegação: React define rotas no fluxo do App; Vue utiliza mapeamento em arquivo externo.
