import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/anuncios/${id}`)
      .then(res => res.json())
      .then(data => setCar(data));
  }, [id]);

  if (!car) return <p>Carregando...</p>;

  return (
    <div className="details-page">
      <Link to="/">← Voltar</Link>
      <img src={car.imageUrl} alt={car.model} style={{width: '400px'}} />
      <h1>{car.model} - {car.brand}</h1>
      <p>{car.description}</p>
      <ul>
        <li><strong>Ano:</strong> {car.year}</li>
        <li><strong>Preço:</strong> R$ {car.price}</li>
        <li><strong>Contato:</strong> {car.contact}</li>
      </ul>
    </div>
  );
};

export default Details;