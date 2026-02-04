export default function PostCard({ titulo, resumo }) {
  return (
    <div style={{ marginBottom: '40px' }}>
      <h3 style={{ color: '#2d5284', fontSize: '1.4rem', margin: '0 0 8px 0', fontWeight: 'bold' }}>
        {titulo}
      </h3>
      <p style={{ color: '#555', fontSize: '1rem', margin: '0', lineHeight: '1.5' }}>
        {resumo}
      </p>
    </div>
  );
}