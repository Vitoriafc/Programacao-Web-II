import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import './App.css';

const Home = ({ cars, handleSearch }) => (
  <div className="home-container">
    <h1>Anúncios Recentes</h1>
    <div className="search-wrapper">
      <SearchBar handleSearch={handleSearch} />
    </div>
    <div className='cards'>
      {cars && cars.map((car) => (
        <Link key={car.id} to={`/anuncio/${car.id}`} className="card-link">
          <Card car={car} />
        </Link>
      ))}
    </div>
  </div>
);

const CreateAd = ({ onAdCreated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    model: "", brand: "", category: "", year: "", 
    price: "", km: "", description: "", contact: "", imageUrl: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(formData).some(x => x === "")) return alert("Preencha todos os campos!");

    await fetch('http://localhost:3000/anuncios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    await onAdCreated();
    navigate("/");
  };

  return (
    <div className="form-page">
      <h2>Cadastrar Veículo</h2>
      <form onSubmit={handleSubmit} className="ad-form">
        <input type="text" placeholder="Modelo" onChange={e => setFormData({...formData, model: e.target.value})} />
        <input type="text" placeholder="Marca" onChange={e => setFormData({...formData, brand: e.target.value})} />
        <input type="text" placeholder="Categoria" onChange={e => setFormData({...formData, category: e.target.value})} />
        <input type="text" placeholder="Ano" onChange={e => setFormData({...formData, year: e.target.value})} />
        <input type="number" placeholder="Preço" onChange={e => setFormData({...formData, price: e.target.value})} />
        <input type="text" placeholder="KM" onChange={e => setFormData({...formData, km: e.target.value})} />
        <textarea placeholder="Descrição detalhada" onChange={e => setFormData({...formData, description: e.target.value})} />
        <input type="text" placeholder="Contato do Vendedor" onChange={e => setFormData({...formData, contact: e.target.value})} />
        <input type="text" placeholder="URL da Imagem (Link público)" onChange={e => setFormData({...formData, imageUrl: e.target.value})} />
        <button type="submit">Publicar Anúncio</button>
      </form>
    </div>
  );
};

const Details = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/anuncios/${id}`)
      .then(res => res.json())
      .then(data => setCar(data));
  }, [id]);

  if (!car) return <p>Carregando detalhes...</p>;

  return (
    <div className="details-container">
      <Link to="/" className="back-link">← Voltar para listagem</Link>
      <div className="details-content">
        <img src={car.imageUrl} alt={car.model} className="details-img" />
        <h1>{car.model} ({car.year})</h1>
        <p className="details-price">R$ {car.price}</p>
        <div className="details-info">
          <p><strong>Marca:</strong> {car.brand}</p>
          <p><strong>Categoria:</strong> {car.category}</p>
          <p><strong>Quilometragem:</strong> {car.km} km</p>
          <p><strong>Descrição:</strong> {car.description}</p>
          <p><strong>Contato:</strong> {car.contact}</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [cars, setCars] = useState([]);
  const [allCars, setAllCars] = useState([]);

  const loadCars = async () => {
    const res = await fetch('http://localhost:3000/anuncios');
    const data = await res.json();
    setCars(data);
    setAllCars(data);
  };

  useEffect(() => {
    loadCars();
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setCars(allCars);
      return;
    }
    setCars(allCars.filter(car => car.model.toLowerCase().includes(query.toLowerCase())));
  };

  return (
    <div className="App">
      <nav className="navbar">
        <Link to="/">Início</Link>
        <Link to="/novo">Cadastrar Anúncio</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home cars={cars} handleSearch={handleSearch} />} />
        <Route path="/novo" element={<CreateAd onAdCreated={loadCars} />} />
        <Route path="/anuncio/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;