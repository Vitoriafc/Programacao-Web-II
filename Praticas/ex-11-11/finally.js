const produtos = [
  { nome: "Camiseta", preco: 49.90, quantidade: 30, categoria: "Vestuário" },
  { nome: "Calça Jeans", preco: 119.90, quantidade: 20, categoria: "Vestuário" },
  { nome: "Tênis Casual", preco: 219.90, quantidade: 15, categoria: "Calçados" },
  { nome: "Relógio Digital", preco: 89.90, quantidade: 12, categoria: "Acessórios" },
  { nome: "Boné", preco: 29.90, quantidade: 25, categoria: "Acessórios" },
  { nome: "Fone de Ouvido", preco: 59.90, quantidade: 40, categoria: "Eletrônicos" },
  { nome: "Carregador USB", preco: 39.90, quantidade: 50, categoria: "Eletrônicos" },
  { nome: "Caderno", preco: 12.50, quantidade: 100, categoria: "Papelaria" },
  { nome: "Mochila", preco: 89.50, quantidade: 10, categoria: "Acessórios" },
  { nome: "Garrafa Térmica", preco: 69.90, quantidade: 18, categoria: "Utilidades" }
];

const nums =[1,2,3,4,5,6,7,8,9,10];

const somatoria = (nums) => nums.reduce((acc, num) => acc + n);

// Padrão de composição de funções PIPE
// A saída de uma função serve como entrada de outra
// Usamos para criar um pipeline de execuções
const pipe = (...fns) => (dados) => fns.reduce((acc, fn) => fn(acc), dados);

const execution = pipe(
    somatoria,
    console.log
);

execution(nums);