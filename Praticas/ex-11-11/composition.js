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

const valorTotal = produtos.filter(p => p.categoria === "Eletrônicos")
                        .map(p =>{
                            const newP = {...p};
                            newP.preco = newP.preco * (1 - 0.1);
                            return newP;
                        })
                        .reduce((acc, p) => acc + (p.preco * p.quantidade), 0);

console.log(valorTotal);