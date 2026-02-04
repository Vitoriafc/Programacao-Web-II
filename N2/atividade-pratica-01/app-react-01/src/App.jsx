import { useState } from "react";

import './App.css'

import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import { use } from "react";
import { useEffect } from "react";

const listCars = [
 
];

const App = () => {
   const [cars, setCars] = useState(null);

   useEffect(() => {
    async function fetchCars() {
      const res = await fetch('http://localhost:3000/anuncios');
      const data = await res.json();
      setCars(data);
    }

    fetchCars();
   }, []); // array vazio para rodar apenas uma vez 

   const handleSearch = (query) => {
     if (query === '') {
       setCars(listCars);
       return;
     }

	    setCars(listCars.filter(car => car.model.includes(query)));
   }

  return (
    <>
       <h1>Anúncios Recentes</h1>
       <SearchBar handleSearch={handleSearch} />
       <div className='cards'> 
          {cars && cars.map((car) => (
            <Card key={car.id} car={car} />
        ))}
       </div>
    
    </>
  );
}

export default App
