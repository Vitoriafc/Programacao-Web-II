### 1. Clonar o Repositório
```bash
git clone -b pratica-react-02 https://github.com/Vitoriafc/Programacao-Web-II.git
cd Programacao-Web-II
```

### Configurar e Rodar o Backend
```bash
cd backend-anuncios
npm install
npx json-server --watch db/db.json --port 3000
 ```

### Configurar e Rodar o Frontend
Em outro terminal, entre na pasta do app e inicie o projeto:
```bash
cd app-react-01
npm install
npm run dev
 ```
