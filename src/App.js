import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { offsetState } from './atoms/offsetAtom';
import { pokemonsState } from './atoms/pokemonsAtom';
import Header from './components/Header';
import CapturedPage from './pages/CapturedPage';
import DetailsPage from './pages/DetailsPage';
import Home from './pages/Home';

const App = () => {
  const [pokemons, setPokemons] = useRecoilState(pokemonsState);
  const offset = useRecoilValue(offsetState);

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`
      );
      const { results } = await data.json();
      setPokemons(results);
    };
    fetchPokemon();
  }, [offset]);

  return (
    <div id="root">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/details" exact element={<DetailsPage />} />
        <Route path="/capturedpokemons" exact element={<CapturedPage />} />
      </Routes>
    </div>
  );
};

export default App;
