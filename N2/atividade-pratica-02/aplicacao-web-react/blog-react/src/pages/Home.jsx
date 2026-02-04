import Header from '../components/Header';
import PostCard from '../components/PostCard';

export default function Home() {
  return (
    <div>
      <Header />
      <main style={{ maxWidth: '800px', margin: '50px auto', padding: '0 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '30px', textAlign: 'left' }}>Últimas do blog</h2>
        
        <div style={{ textAlign: 'left' }}>
          <PostCard 
            titulo="5 dicas para sua carreira profissional" 
            resumo="Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end" 
          />
          <PostCard 
            titulo="5 dicas para sua carreira profissional" 
            resumo="Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end" 
          />
          <PostCard 
            titulo="5 dicas para sua carreira profissional" 
            resumo="Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end" 
          />
        </div>

        <a href="#" style={{ color: '#2d5284', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block', marginTop: '20px' }}>
          Ver tudo
        </a>
      </main>
    </div>
  );
}