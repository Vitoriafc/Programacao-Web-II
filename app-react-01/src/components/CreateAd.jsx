import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAd = () => {
  const [formData, setFormData] = useState({
    model: "", brand: "", year: "", price: "", km: "",
    description: "", contact: "", imageUrl: ""
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (Object.values(formData).some(val => val === "")) {
      alert("Preencha todos os campos!");
      return;
    }

    await fetch('http://localhost:3000/anuncios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    navigate("/"); 
  };

  return (
    <div className="form-container">
      <h2>Cadastrar Novo Anúncio</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Modelo" onChange={(e) => setFormData({...formData, model: e.target.value})} />
    
        <button type="submit">Publicar Anúncio</button>
      </form>
    </div>
  );
};

export default CreateAd;