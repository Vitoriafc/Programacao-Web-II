import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

function Sobre() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#2d5284' }}>Sobre Mim</h1>
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', lineHeight: '1.6' }}>
        <p>Olá! Meu nome é Vitória, tenho 20 anos.</p>
        <p>Sou estudante de ADS no IFCE campus Tauá.</p>
        <p>Este projeto faz parte do meu aprendizado na disciplina de Web 2, 
           onde estou explorando React.</p>
      </div>
      <br />
      <Link to="/" style={{ color: '#2d5284', fontWeight: 'bold' }}>Voltar</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;