import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PokemonList from './components/PokemonList';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=24');
      const { results } = await data.json();
      setPokemons(results);
    };
    fetchPokemon();
  }, []);

  console.log(pokemons);
  return (
    <div id="root">
      <Header />
      <Routes>
        <Route path="/" exact element={<PokemonList pokemons={pokemons} />} />
      </Routes>
    </div>
  );
};

export default App;
