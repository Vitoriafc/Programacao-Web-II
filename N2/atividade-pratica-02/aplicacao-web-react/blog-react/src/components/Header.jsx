import { Link } from 'react-router-dom';
import fotoPerfil from '../assets/perfil.png';

export default function Header() {
  return (
    <header style={{ backgroundColor: '#2d5284', color: 'white', padding: '60px 0' }}>
      <nav style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Link to="/" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Blog</Link>
        <Link to="/sobre" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Sobre</Link>
        <Link to="#" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Descrição</Link>
      </nav>

      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        maxWidth: '900px', 
        margin: '0 auto',
        gap: '40px',
        padding: '0 20px'
      }}>
        <img 
          src={fotoPerfil} 
          alt="Perfil" 
          style={{ 
            borderRadius: '50%', 
            width: '180px', 
            height: '180px', 
            objectFit: 'cover'
          }} 
        />

        <div style={{ textAlign: 'left' }}>
          <h1 style={{ fontSize: '4rem', margin: '0 0 10px 0' }}>Vitória</h1>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.4', margin: '0', maxWidth: '500px' }}>
            Tenho 20 anos, curso Análise e Desenvolvimento de Sistemas no IFCE Tauá. 
            Atualmente cursando a cadeira de Web 2 e aprendendo sobre frameworks.
          </p>
        </div>
      </div>
    </header>
  );
}